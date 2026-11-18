import React, { useState } from 'react';
import { Activity, Compass, X, QrCode, Search } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { APPS_DATA } from '../data/apps';

interface HeaderProps {
  currentAppId?: string;
  onNavigateHome: () => void;
  onSelectApp: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenQrModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentAppId,
  onNavigateHome,
  onSelectApp,
  searchQuery,
  setSearchQuery,
  onOpenQrModal
}) => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3 sm:gap-4">
        {/* Brand / Logo */}
        <div 
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onNavigateHome(); }}
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-xl p-1 -ml-1 shrink-0" 
          onClick={onNavigateHome}
          aria-label="AIMed Suite homepage"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 via-emerald-600 to-cyan-600 p-[1.5px] shadow-sm shadow-teal-600/20 group-hover:shadow-teal-600/30 transition-shadow duration-200 overflow-hidden shrink-0">
            <img 
              src="/icons/ai4med.png?v=2" 
              alt="AIMed Suite Logo" 
              className="w-full h-full object-cover rounded-[8.5px] img-hairline"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors duration-150">
                AIMed Suite
              </span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200 uppercase tracking-wider">
                Hub
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block">
              Clinical AI & Biomedical Informatics Ecosystem
            </p>
          </div>
        </div>

        {/* Desktop Global Search Bar */}
        {!currentAppId && (
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <label htmlFor="global-app-search" className="sr-only">
                Search medical applications, features, and guidelines
              </label>
              <input
                id="global-app-search"
                type="search"
                placeholder="Search across all 12 medical web apps, features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-9 bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 rounded-xl px-4 pl-9 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-colors duration-150"
              />
              <Compass className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" aria-hidden="true" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-2.5 top-2 text-xs text-slate-400 hover:text-slate-600 p-0.5 rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Right Action Tools */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile search toggle button */}
          {!currentAppId && (
            <button
              type="button"
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              aria-label="Toggle mobile search"
              className="md:hidden btn-press p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
            >
              <Search className="w-4 h-4" />
            </button>
          )}

          {/* QR Code Action Button (Right Side Above) */}
          {onOpenQrModal && (
            <button
              type="button"
              onClick={onOpenQrModal}
              aria-label="Scan QR Code to open on mobile"
              className="btn-press flex items-center gap-1.5 h-9 px-2.5 sm:px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 text-xs font-semibold focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:outline-none cursor-pointer"
              title="Scan QR Code for mobile"
            >
              <QrCode className="w-4 h-4 text-teal-600" />
              <span className="hidden sm:inline">Mobile QR</span>
            </button>
          )}

          {/* Quick Repo Dropdown (Desktop) */}
          <div className="relative hidden lg:block">
            <label htmlFor="header-jump-select" className="sr-only">Jump to application</label>
            <select
              id="header-jump-select"
              value={currentAppId || ''}
              onChange={(e) => {
                if (e.target.value) {
                  onSelectApp(e.target.value);
                } else {
                  onNavigateHome();
                }
              }}
              className="h-9 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs text-slate-700 rounded-xl px-3 pr-8 focus:outline-none focus:border-teal-500 focus-visible:ring-2 focus-visible:ring-teal-600 cursor-pointer transition-colors duration-150 appearance-none font-medium"
            >
              <option value="">Jump to application...</option>
              {APPS_DATA.map((app) => (
                <option key={app.id} value={app.id}>
                  {app.name} ({app.category})
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500" aria-hidden="true">
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>

          {/* GitHub Profile */}
          <a
            href="https://github.com/roroleaks"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Dr. Raouf Roshdy on GitHub (opens in a new tab)"
            className="btn-press flex items-center gap-1.5 h-9 px-2.5 sm:px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 text-xs font-semibold focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:outline-none"
            title="Dr. Raouf Roshdy on GitHub"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">roroleaks</span>
          </a>

          {/* Lead Investigator Badge with Photo */}
          <div className="flex items-center gap-2 pl-1.5 sm:pl-2 border-l border-slate-200">
            <a
              href="https://dr-raouf.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Dr. Raouf Roshdy's academic portfolio (opens in a new tab)"
              className="relative cursor-pointer block rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 transition-transform duration-150 active:scale-95 shrink-0"
              title="Dr. Raouf Roshdy"
            >
              <img
                src="/dr-raouf.jpg"
                alt="Dr. Raouf Roshdy"
                className="w-8 h-8 rounded-full object-cover border border-teal-500/40 shadow-xs hover:border-teal-500 transition-colors duration-150 img-hairline"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" aria-hidden="true"></span>
            </a>
            <div className="hidden sm:block text-left">
              <a
                href="https://dr-raouf.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-slate-800 leading-tight hover:text-teal-700 transition-colors duration-150 cursor-pointer block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-600 rounded"
                title="Dr. Raouf Roshdy"
              >
                Dr. Raouf Roshdy
              </a>
              <div className="text-[10px] text-teal-600 font-semibold">Lead Investigator</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Dropdown Bar */}
      {!currentAppId && mobileSearchOpen && (
        <div className="md:hidden px-4 pb-3 pt-1 border-t border-slate-100 bg-white">
          <div className="relative w-full">
            <input
              type="search"
              placeholder="Search 12 medical apps, features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              className="w-full h-10 bg-slate-50 border border-slate-200 rounded-xl px-3 pl-9 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
            />
            <Compass className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" aria-hidden="true" />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search query"
                className="absolute right-2.5 top-2.5 text-xs text-slate-400 hover:text-slate-600 p-0.5"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
