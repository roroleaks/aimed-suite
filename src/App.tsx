import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { AppCard } from './components/AppCard';
import { AppRunner } from './components/AppRunner';
import { Footer } from './components/Footer';
import { APPS_DATA } from './data/apps';
import { AppCategory } from './types';
import { Compass } from 'lucide-react';

export function App() {
  const [currentAppId, setCurrentAppId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<AppCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Path synchronization with window.location
  useEffect(() => {
    const parsePath = () => {
      const path = window.location.pathname;
      const match = path.match(/^\/app\/([a-zA-Z0-9-_]+)/);
      if (match && match[1]) {
        const found = APPS_DATA.find((a) => a.id.toLowerCase() === match[1].toLowerCase());
        if (found) {
          setCurrentAppId(found.id);
          return;
        }
      }
      // Also check hash fallback: #/app/aipico
      const hash = window.location.hash;
      const hashMatch = hash.match(/^#\/app\/([a-zA-Z0-9-_]+)/);
      if (hashMatch && hashMatch[1]) {
        const found = APPS_DATA.find((a) => a.id.toLowerCase() === hashMatch[1].toLowerCase());
        if (found) {
          setCurrentAppId(found.id);
          return;
        }
      }
      setCurrentAppId(null);
    };

    parsePath();
    window.addEventListener('popstate', parsePath);
    return () => window.removeEventListener('popstate', parsePath);
  }, []);

  const handleNavigateHome = () => {
    setCurrentAppId(null);
    window.history.pushState({}, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectApp = (id: string) => {
    setCurrentAppId(id);
    window.history.pushState({}, '', `/app/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentApp = useMemo(() => {
    if (!currentAppId) return null;
    return APPS_DATA.find((a) => a.id === currentAppId) || null;
  }, [currentAppId]);

  // Category counts
  const appCounts = useMemo(() => {
    const counts: Record<AppCategory, number> = {
      All: APPS_DATA.length,
      'Clinical CDSS': 0,
      'Evidence Synthesis': 0,
      'Critical Appraisal': 0,
      'Literature & Presentation': 0,
      'Practice Guidelines': 0,
      'Medical AI & Search': 0
    };

    APPS_DATA.forEach((app) => {
      if (counts[app.category] !== undefined) {
        counts[app.category]++;
      }
    });

    return counts;
  }, []);

  // Filtered applications
  const filteredApps = useMemo(() => {
    return APPS_DATA.filter((app) => {
      // Category check
      if (selectedCategory !== 'All' && app.category !== selectedCategory) {
        return false;
      }
      // Search check
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = app.name.toLowerCase().includes(q);
        const matchesTagline = app.tagline.toLowerCase().includes(q);
        const matchesDesc = app.description.toLowerCase().includes(q);
        const matchesBadges = app.badges.some((b) => b.toLowerCase().includes(q));
        const matchesHighlights = app.clinicalHighlights.some((h) => h.toLowerCase().includes(q));
        return matchesName || matchesTagline || matchesDesc || matchesBadges || matchesHighlights;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 daylight-grid-bg">
      {/* Sticky Top Header */}
      <Header
        currentAppId={currentAppId || undefined}
        onNavigateHome={handleNavigateHome}
        onSelectApp={handleSelectApp}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content View */}
      {currentApp ? (
        // Dedicated In-Portal Page for Selected Repo
        <main className="flex-1 flex flex-col">
          <AppRunner
            app={currentApp}
            onBack={handleNavigateHome}
            onSelectApp={handleSelectApp}
          />
        </main>
      ) : (
        // Umbrella First Page / Showcase (Daylight)
        <main className="flex-1 flex flex-col">
          <Hero />

          {/* Applications Showcase Section */}
          <section id="apps-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
            {/* Filter and Headline Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Biomedical Applications & Tools
                  </h2>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
                    {filteredApps.length} Available
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  Launch any application directly in the umbrella workspace or open standalone.
                </p>
              </div>

              {/* Category Pills */}
              <CategoryFilter
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                appCounts={appCounts}
              />
            </div>

            {/* Apps Grid */}
            {filteredApps.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredApps.map((app) => (
                  <AppCard
                    key={app.id}
                    app={app}
                    onOpenApp={handleSelectApp}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <Compass className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800">No applications match your query</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Try adjusting your search terms or selecting 'All' from the category filter.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="mt-4 px-4 py-2 rounded-xl bg-teal-50 text-teal-700 border border-teal-200 text-xs font-semibold hover:bg-teal-600 hover:text-white transition-colors cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </section>
        </main>
      )}

      {/* Global Footer */}
      <Footer
        onSelectApp={handleSelectApp}
        onNavigateHome={handleNavigateHome}
      />
    </div>
  );
}
export default App;
