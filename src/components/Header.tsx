import React from 'react';
import { Activity, Compass } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { APPS_DATA } from '../data/apps';

interface HeaderProps {
  currentAppId?: string;
  onNavigateHome: () => void;
  onSelectApp: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentAppId,
  onNavigateHome,
  onSelectApp,
  searchQuery,
  setSearchQuery
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3 cursor-pointer select-none group" onClick={onNavigateHome}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 via-emerald-600 to-cyan-600 p-[1.5px] shadow-sm shadow-teal-600/20 group-hover:shadow-teal-600/30 transition-all duration-300">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              <Activity className="w-5 h-5 text-teal-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors">
                AIMed Suite
              </span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200 uppercase tracking-wider">
                Umbrella Hub
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">
              Clinical AI & Biomedical Informatics Ecosystem
            </p>
          </div>
        </div>

        {/* Global Search Bar (when on home page) */}
        {!currentAppId && (
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search across all 12 medical web apps, features, guidelines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 rounded-lg px-4 py-1.5 pl-9 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
              />
              <Compass className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        )}

        {/* Right Action Tools */}
        <div className="flex items-center gap-3">
          {/* Quick Repo Dropdown */}
          <div className="relative hidden lg:block">
            <select
              value={currentAppId || ''}
              onChange={(e) => {
                if (e.target.value) {
                  onSelectApp(e.target.value);
                } else {
                  onNavigateHome();
                }
              }}
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs text-slate-700 rounded-lg px-3 py-1.5 pr-8 focus:outline-none focus:border-teal-500 cursor-pointer transition-colors appearance-none font-medium"
            >
              <option value="">Jump to Application...</option>
              {APPS_DATA.map((app) => (
                <option key={app.id} value={app.id}>
                  {app.name} ({app.category})
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
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
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 transition-all text-xs font-medium"
            title="Dr. Raouf Roshdy on GitHub"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">roroleaks</span>
          </a>

          {/* Lead Investigator Badge with Photo */}
          <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
            <div className="relative">
              <img
                src="/dr-raouf.jpg"
                alt="Dr. Raouf Roshdy"
                className="w-8 h-8 rounded-full object-cover border border-teal-500/40 shadow-xs"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white"></span>
            </div>
            <div className="hidden sm:block text-left">
              <div className="text-xs font-bold text-slate-800 leading-tight">Dr. Raouf Roshdy</div>
              <div className="text-[10px] text-teal-600 font-semibold">Lead Investigator</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
