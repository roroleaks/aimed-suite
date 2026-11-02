import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  RefreshCw, 
  Maximize2, 
  Minimize2, 
  Info, 
  ShieldCheck, 
  Layers, 
  BookOpen, 
  FileCheck2, 
  Check, 
  Sparkles,
  ChevronRight,
  AlertCircle
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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);
  const [activeTab, setActiveTab] = useState<'workflow' | 'rules' | 'exports'>('workflow');

  // Reset loading state on app change or reload
  useEffect(() => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  }, [app.id]);

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className={`flex flex-col bg-slate-950 text-slate-100 ${isFullscreen ? 'fixed inset-0 z-50' : 'min-h-[calc(100vh-4rem)]'}`}>
      {/* Top Application Control Toolbar */}
      <div className="glass-card border-b border-slate-800 bg-slate-950/95 px-4 py-2.5 flex items-center justify-between gap-3 flex-wrap">
        {/* Left: Back & Identity */}
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5 text-xs font-medium"
            title="Return to Hub"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Hub</span>
          </button>

          <div className="h-5 w-[1px] bg-slate-800 hidden sm:block" />

          <div className="flex items-center gap-2.5">
            <img 
              src={app.iconUrl} 
              alt={app.name} 
              className="w-7 h-7 rounded-lg object-contain bg-slate-900 border border-slate-800 p-0.5" 
            />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-sm sm:text-base text-white flex items-center gap-2">
                  {app.name}
                </h2>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  {app.category}
                </span>
                <span className="hidden md:inline-flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Live Web App
                </span>
              </div>
              <p className="text-[11px] text-slate-400 truncate max-w-xs sm:max-w-md hidden sm:block">
                {app.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Center: Quick App Switcher */}
        <div className="flex items-center gap-1.5">
          <label htmlFor="runner-app-select" className="sr-only">Switch Application</label>
          <select
            id="runner-app-select"
            value={app.id}
            onChange={(e) => onSelectApp(e.target.value)}
            className="bg-slate-900 border border-slate-800 text-xs text-slate-300 rounded-lg px-2.5 py-1.5 pr-7 focus:outline-none focus:border-teal-500 cursor-pointer hover:bg-slate-850 transition-colors appearance-none"
          >
            {APPS_DATA.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* Right: Controls & Actions */}
        <div className="flex items-center gap-2">
          {/* Documentation Drawer Toggle */}
          <button
            onClick={() => setShowDrawer(!showDrawer)}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors flex items-center gap-1.5 ${
              showDrawer
                ? 'bg-teal-500 text-slate-950 border-teal-400'
                : 'bg-slate-900 hover:bg-slate-850 text-slate-300 border-slate-800'
            }`}
            title="App Intelligence & Clinical Documentation"
          >
            <Info className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Clinical Specs</span>
          </button>

          {/* Refresh Frame */}
          <button
            onClick={handleRefresh}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            title="Reload Application Frame"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-teal-400' : ''}`} />
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors hidden sm:block"
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>

          {/* External Tab */}
          <a
            href={app.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-teal-400 border border-slate-800 transition-colors"
            title="Open in Native New Tab"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* GitHub Source */}
          <a
            href={app.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            title="View Code on GitHub"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Workspace: Frame + Drawer */}
      <div className="relative flex-1 flex overflow-hidden">
        {/* The Live Interactive Web App Frame */}
        <div className="relative flex-1 bg-slate-950 flex flex-col">
          {isLoading && (
            <div className="absolute inset-0 z-20 bg-slate-950/90 backdrop-blur-sm flex flex-col items-center justify-center gap-3">
              <div className="w-10 h-10 border-2 border-teal-500/20 border-t-teal-400 rounded-full animate-spin" />
              <div className="text-xs font-medium text-slate-400">
                Loading {app.name}...
              </div>
            </div>
          )}

          <iframe
            key={iframeKey}
            src={app.liveUrl}
            title={app.name}
            className="w-full flex-1 border-0"
            allow="clipboard-write; clipboard-read; camera; microphone; geolocation"
            sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"
            onLoad={() => setIsLoading(false)}
          />

          {/* Bottom Bar Indicator */}
          <div className="bg-slate-950 border-t border-slate-850 px-4 py-1.5 text-[11px] text-slate-500 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Endpoint:</span>
              <span className="font-mono text-teal-400/90 text-[10px]">{app.liveUrl}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline">Engineered by Dr. Raouf Roshdy</span>
              <a 
                href={app.liveUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-teal-300 underline"
              >
                Launch standalone ↗
              </a>
            </div>
          </div>
        </div>

        {/* Slide-out Intelligence / Documentation Drawer */}
        {showDrawer && (
          <aside className="w-full sm:w-96 glass-card border-l border-slate-800 bg-slate-950/95 p-5 overflow-y-auto flex flex-col z-30 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-teal-400" />
                <h3 className="font-bold text-sm text-white">App Specifications</h3>
              </div>
              <button
                onClick={() => setShowDrawer(false)}
                className="text-slate-500 hover:text-slate-300 text-xs p-1"
              >
                ✕ Close
              </button>
            </div>

            {/* Drawer Tabs */}
            <div className="flex items-center gap-1 mt-4 p-1 rounded-lg bg-slate-900 border border-slate-800 text-xs">
              <button
                onClick={() => setActiveTab('workflow')}
                className={`flex-1 py-1 rounded-md transition-colors ${
                  activeTab === 'workflow' ? 'bg-teal-500/20 text-teal-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Workflow
              </button>
              <button
                onClick={() => setActiveTab('rules')}
                className={`flex-1 py-1 rounded-md transition-colors ${
                  activeTab === 'rules' ? 'bg-teal-500/20 text-teal-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Rules & Gates
              </button>
              <button
                onClick={() => setActiveTab('exports')}
                className={`flex-1 py-1 rounded-md transition-colors ${
                  activeTab === 'exports' ? 'bg-teal-500/20 text-teal-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Exports
              </button>
            </div>

            {/* Tab 1: Workflow */}
            {activeTab === 'workflow' && (
              <div className="mt-4 space-y-3">
                <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Clinical Execution Pipeline
                </h4>
                <div className="space-y-2.5">
                  {app.workflowSteps.map((step) => (
                    <div key={step.step} className="p-3 rounded-xl bg-slate-900/60 border border-slate-850">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-5 h-5 rounded-full bg-teal-500/10 text-teal-400 text-[10px] font-bold flex items-center justify-center border border-teal-500/30">
                          {step.step}
                        </span>
                        <span className="text-xs font-semibold text-white">{step.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 pl-7 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Rules & Invariants */}
            {activeTab === 'rules' && (
              <div className="mt-4 space-y-3">
                <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Deterministic Integrity Guarantees
                </h4>
                <div className="space-y-2">
                  {app.clinicalHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/40 border border-slate-850">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-teal-950/30 border border-teal-500/20 mt-4">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-300 mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Zero Hallucination Philosophy</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Any narrative assertion that lacks direct verifiable support from the retrieved canonical evidence set is rejected or converted into explicit uncertainty disclosures.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 3: Exports & Standards */}
            {activeTab === 'exports' && (
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Supported Citation Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {app.supportedStandards.map((std, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-slate-900 text-teal-300 border border-slate-800">
                        {std}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Compilation & Export Pipelines
                  </h4>
                  <div className="space-y-1.5">
                    {app.exportFormats.map((fmt, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-850 text-xs text-slate-300">
                        <FileCheck2 className="w-3.5 h-3.5 text-teal-400" />
                        <span>{fmt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Author Attribution */}
            <div className="mt-auto pt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="/dr-raouf.jpg"
                  alt="Dr. Raouf Roshdy"
                  className="w-9 h-9 rounded-full object-cover border border-teal-500/40 shrink-0"
                />
                <div>
                  <div className="text-xs font-bold text-white">Dr. Raouf Roshdy</div>
                  <div className="text-[10px] text-teal-400">Lead Investigator & Creator</div>
                </div>
                <a
                  href="https://github.com/roroleaks"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto text-teal-400 hover:underline text-[11px] flex items-center gap-1"
                >
                  <GithubIcon className="w-3 h-3" /> roroleaks
                </a>
              </div>
              {app.authorNotes && (
                <p className="text-[11px] text-slate-400 italic mt-2 leading-relaxed bg-slate-900/60 p-2.5 rounded-lg border border-slate-850">
                  "{app.authorNotes}"
                </p>
              )}
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};
