import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  ShieldCheck, 
  FileCheck2, 
  Sparkles,
  Play,
  Layers,
  ArrowRight,
  CheckCircle2,
  Download,
  Award,
  Sliders,
  FileText,
  Grid,
  Stethoscope,
  GitMerge,
  Presentation,
  BookOpenCheck,
  Bot
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { AppItem, AppCategory } from '../types';
import { APPS_DATA } from '../data/apps';

interface AppRunnerProps {
  app: AppItem;
  onBack: () => void;
  onSelectApp: (id: string) => void;
}

const CATEGORY_ICONS: Record<AppCategory, React.ComponentType<{ className?: string }>> = {
  All: Grid,
  'Clinical CDSS': Stethoscope,
  'Evidence Synthesis': GitMerge,
  'Critical Appraisal': ShieldCheck,
  'Literature & Presentation': Presentation,
  'Practice Guidelines': BookOpenCheck,
  'Medical AI & Search': Bot,
};

const STEP_ICONS = [FileText, Sliders, Sparkles, Download];

export const AppRunner: React.FC<AppRunnerProps> = ({ app, onBack, onSelectApp }) => {
  const [activeTab, setActiveTab] = useState<'workflow' | 'rules' | 'exports'>('workflow');
  const CategoryIcon = CATEGORY_ICONS[app.category] || Grid;

  return (
    <div className="flex flex-col bg-slate-50 text-slate-900 min-h-[calc(100vh-4rem)]">
      {/* Top Application Control Toolbar */}
      <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between gap-3 flex-wrap shadow-2xs">
        {/* Left: Back & Identity */}
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-1.5 px-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer shadow-2xs active:scale-95"
            title="Return to Hub"
          >
            <ArrowLeft className="w-4 h-4 text-slate-500" />
            <span className="hidden sm:inline">Back to Hub</span>
          </button>

          <div className="h-5 w-[1px] bg-slate-200 hidden sm:block" />

          <div className="flex items-center gap-2.5">
            <img 
              src={app.iconUrl} 
              alt={app.name} 
              className="w-9 h-9 rounded-xl object-contain bg-slate-50 border border-slate-200 p-1 shadow-2xs" 
            />
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="font-bold text-sm sm:text-base text-slate-900">
                  {app.name}
                </h2>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-teal-50 text-teal-700 border border-teal-200">
                  <CategoryIcon className="w-3 h-3 text-teal-600" />
                  <span>{app.category}</span>
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
          <div className="relative hidden sm:block">
            <select
              id="runner-app-select"
              value={app.id}
              onChange={(e) => onSelectApp(e.target.value)}
              className="bg-slate-50 border border-slate-200 text-xs text-slate-700 rounded-xl px-3 py-2 pr-8 focus:outline-none focus:border-teal-500 cursor-pointer hover:bg-slate-100 transition-colors appearance-none font-medium shadow-2xs"
            >
              {APPS_DATA.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} ({item.category})
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>

          {/* Primary CTA: Launch full application in clean new page */}
          <a
            href={app.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 active:scale-[0.98] text-white font-semibold text-xs shadow-sm hover:shadow-md hover:shadow-teal-600/20 transition-all flex items-center gap-1.5 cursor-pointer"
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
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-8 relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{ backgroundColor: app.color.accent }}
          />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center border border-slate-200 shadow-2xs p-2 bg-slate-50 shrink-0">
                <img 
                  src={app.iconUrl} 
                  alt={app.name} 
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200/60">
                    <CategoryIcon className="w-3 h-3 text-teal-600" />
                    <span>{app.category}</span>
                  </span>
                  {app.featured && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      <Award className="w-2.5 h-2.5 text-amber-600" />
                      <span>Flagship Tool</span>
                    </span>
                  )}
                </div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  {app.name}
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
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
                className="py-3 px-5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-md shadow-teal-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer text-center active:scale-[0.98]"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Open Full Web App</span>
                <ExternalLink className="w-4 h-4 ml-0.5" />
              </a>

              <a
                href={app.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 font-semibold text-xs border border-slate-200 transition-colors flex items-center justify-center gap-2 shadow-2xs"
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
            <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-slate-400" />
              <span>Standards & Tags:</span>
            </span>
            {app.badges.map((badge, idx) => (
              <span
                key={idx}
                className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-200/90 shadow-2xs"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Tab Navigation for Detailed Specs */}
        <div className="flex items-center gap-2 mb-6 border-b border-slate-200 pb-2 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('workflow')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap active:scale-95 ${
              activeTab === 'workflow'
                ? 'bg-teal-600 text-white shadow-xs shadow-teal-600/30'
                : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 shadow-2xs'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Clinical Workflow Pipeline</span>
          </button>

          <button
            onClick={() => setActiveTab('rules')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap active:scale-95 ${
              activeTab === 'rules'
                ? 'bg-teal-600 text-white shadow-xs shadow-teal-600/30'
                : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 shadow-2xs'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Integrity Guarantees & Scope</span>
          </button>

          <button
            onClick={() => setActiveTab('exports')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap active:scale-95 ${
              activeTab === 'exports'
                ? 'bg-teal-600 text-white shadow-xs shadow-teal-600/30'
                : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 shadow-2xs'
            }`}
          >
            <FileCheck2 className="w-4 h-4" />
            <span>Citation & Export Deliverables</span>
          </button>
        </div>

        {/* Tab 1: Workflow Pipeline */}
        {activeTab === 'workflow' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {app.workflowSteps.map((step, idx) => {
              const StepIcon = STEP_ICONS[idx % STEP_ICONS.length];
              return (
                <div key={step.step} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between hover:border-teal-400/50 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-xl bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold flex items-center justify-center">
                        {step.step}
                      </div>
                      <div className="w-7 h-7 rounded-lg bg-slate-50 text-teal-600 flex items-center justify-center border border-slate-100">
                        <StepIcon className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Deterministic Integrity Guarantees */}
        {activeTab === 'rules' && (
          <div className="space-y-4 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {app.clinicalHighlights.map((highlight, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-start gap-3 hover:border-teal-400/50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <span>Invariant Rule #{idx + 1}</span>
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
                  <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 font-medium">
                    <Download className="w-3.5 h-3.5 text-teal-600 shrink-0" />
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
                  <span key={idx} className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-sky-50 text-sky-800 border border-sky-200 font-medium">
                    <Award className="w-3 h-3 text-sky-600" />
                    <span>{std}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Lead Investigator Attribution Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://dr-raouf.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer block rounded-full focus:outline-none transition-transform active:scale-95"
              title="Dr. Raouf Roshdy"
            >
              <img
                src="/dr-raouf.jpg"
                alt="Dr. Raouf Roshdy"
                className="w-12 h-12 rounded-full object-cover border-2 border-teal-500/40 shadow-xs hover:border-teal-500 transition-colors"
              />
            </a>
            <div>
              <a
                href="https://dr-raouf.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-slate-900 hover:text-teal-700 transition-colors cursor-pointer flex items-center gap-1.5"
                title="Dr. Raouf Roshdy"
              >
                <span>Dr. Raouf Roshdy</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              </a>
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
            className="py-2.5 px-5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs shadow-md shadow-teal-600/20 transition-all flex items-center gap-2 cursor-pointer shrink-0 active:scale-95"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Launch Web App</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      </div>
    </div>
  );
};
