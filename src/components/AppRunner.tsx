import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  ShieldCheck, 
  FileCheck2, 
  Sparkles,
  Play,
  Layers,
  ArrowRight
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { AppItem } from '../types';
import { APPS_DATA } from '../data/apps';

interface AppRunnerProps {
  app: AppItem;
  onBack: () => void;
  onSelectApp: (id: string) => void;
}

export const AppRunner: React.FC<AppRunnerProps> = ({ app, onBack, onSelectApp }) => {
  const [activeTab, setActiveTab] = useState<'workflow' | 'rules' | 'exports'>('workflow');

  return (
    <div className="flex flex-col bg-slate-50 text-slate-900 min-h-[calc(100vh-4rem)]">
      {/* Top Application Control Toolbar */}
      <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between gap-3 flex-wrap shadow-xs">
        {/* Left: Back & Identity */}
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
            title="Return to Hub"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Hub</span>
          </button>

          <div className="h-5 w-[1px] bg-slate-200 hidden sm:block" />

          <div className="flex items-center gap-2.5">
            <img 
              src={app.iconUrl} 
              alt={app.name} 
              className="w-8 h-8 rounded-lg object-contain bg-slate-50 border border-slate-200 p-0.5" 
            />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2">
                  {app.name}
                </h2>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                  {app.category}
                </span>
                <span className="hidden md:inline-flex items-center gap-1 text-[10px] text-emerald-600 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Verified Production
                </span>
              </div>
              <p className="text-[11px] text-slate-500 truncate max-w-xs sm:max-w-md hidden sm:block">
                {app.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Center & Right: Quick Switcher & Open Fullscreen Web App */}
        <div className="flex items-center gap-3">
          <label htmlFor="runner-app-select" className="sr-only">Switch Application</label>
          <select
            id="runner-app-select"
            value={app.id}
            onChange={(e) => onSelectApp(e.target.value)}
            className="bg-slate-50 border border-slate-200 text-xs text-slate-700 rounded-lg px-2.5 py-2 pr-7 focus:outline-none focus:border-teal-500 cursor-pointer hover:bg-slate-100 transition-colors appearance-none font-medium hidden sm:block"
          >
            {APPS_DATA.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} ({item.category})
              </option>
            ))}
          </select>

          {/* Primary CTA: Launch full application in clean new page */}
          <a
            href={app.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs shadow-md shadow-teal-600/20 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Launch Web App</span>
            <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
          </a>
        </div>
      </div>

      {/* Main Full-Width Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        {/* Hero Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm mb-8 relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 right-0 h-1" 
            style={{ backgroundColor: app.color.accent }}
          />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-50 border border-slate-200 p-2 shadow-xs shrink-0 flex items-center justify-center">
                <img src={app.iconUrl} alt={app.name} className="w-full h-full object-contain rounded-xl" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                    {app.category}
                  </span>
                  {app.featured && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      Flagship Tool
                    </span>
                  )}
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {app.name}
                </h1>
                <p className="text-sm font-semibold text-slate-700 mt-1">
                  {app.tagline}
                </p>
                <p className="text-xs text-slate-500 mt-2 max-w-2xl leading-relaxed">
                  {app.description}
                </p>
              </div>
            </div>

            {/* Launchpad Action Box */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0 min-w-[220px]">
              <a
                href={app.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-md shadow-teal-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Open Full Web App</span>
                <ExternalLink className="w-4 h-4 ml-0.5" />
              </a>

              <a
                href={app.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 font-semibold text-xs border border-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source Code</span>
              </a>

              <div className="text-[11px] text-slate-400 text-center font-mono truncate">
                {app.liveUrl}
              </div>
            </div>
          </div>

          {/* Badges strip */}
          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 mr-1">Standards & Tags:</span>
            {app.badges.map((badge, idx) => (
              <span
                key={idx}
                className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Tab Navigation for Detailed Specs */}
        <div className="flex items-center gap-2 mb-6 border-b border-slate-200 pb-2">
          <button
            onClick={() => setActiveTab('workflow')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'workflow'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Clinical Workflow Pipeline</span>
          </button>

          <button
            onClick={() => setActiveTab('rules')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'rules'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Integrity Guarantees & Scope</span>
          </button>

          <button
            onClick={() => setActiveTab('exports')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'exports'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            <FileCheck2 className="w-4 h-4" />
            <span>Citation & Export Deliverables</span>
          </button>
        </div>

        {/* Tab 1: Workflow Pipeline */}
        {activeTab === 'workflow' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {app.workflowSteps.map((step) => (
              <div key={step.step} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold flex items-center justify-center mb-3">
                    Step {step.step}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Deterministic Integrity Guarantees */}
        {activeTab === 'rules' && (
          <div className="space-y-4 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {app.clinicalHighlights.map((highlight, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                      Invariant Rule #{idx + 1}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{highlight}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-teal-950 mb-0.5">Zero Hallucination Philosophy</h4>
                <p className="text-xs text-teal-800 leading-relaxed">
                  Every citation generated in this tool resolves strictly to verified canonical records (Crossref, PubMed, Europe PMC). Unsupported assertive claims are audited and converted into clinical uncertainty disclosures before any deliverable is exported.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Exports & Citation Standards */}
        {activeTab === 'exports' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-teal-600" />
                <span>Publication-Grade Exports</span>
              </h4>
              <div className="space-y-2">
                {app.exportFormats.map((fmt, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 font-medium">
                    <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                    <span>{fmt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>Supported Practice Guidelines & Authorities</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {app.supportedStandards.map((std, idx) => (
                  <span key={idx} className="text-xs px-3 py-1.5 rounded-lg bg-sky-50 text-sky-800 border border-sky-200 font-medium">
                    {std}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Lead Investigator Attribution Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src="/dr-raouf.jpg"
              alt="Dr. Raouf Roshdy"
              className="w-12 h-12 rounded-full object-cover border-2 border-teal-500/40 shadow-xs"
            />
            <div>
              <div className="text-sm font-bold text-slate-900">Dr. Raouf Roshdy</div>
              <div className="text-xs text-teal-700 font-semibold">Lead Investigator & Creator</div>
              {app.authorNotes && (
                <p className="text-xs text-slate-500 italic mt-1 max-w-xl">
                  "{app.authorNotes}"
                </p>
              )}
            </div>
          </div>

          <a
            href={app.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs shadow-md shadow-teal-600/20 transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <span>Launch Web App</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
