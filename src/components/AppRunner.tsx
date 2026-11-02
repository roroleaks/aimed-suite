import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  RefreshCw, 
  Maximize2, 
  Minimize2, 
  Info, 
  ShieldCheck, 
  FileCheck2, 
  Sparkles,
  Play,
  Monitor
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
  const [viewMode, setViewMode] = useState<'frame' | 'launchpad'>('frame');

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
    <div className={`flex flex-col bg-slate-50 text-slate-900 ${isFullscreen ? 'fixed inset-0 z-50' : 'min-h-[calc(100vh-4rem)]'}`}>
      {/* Top Application Control Toolbar (Clean Daylight) */}
      <div className="bg-white border-b border-slate-200 px-4 py-2.5 flex items-center justify-between gap-3 flex-wrap shadow-xs">
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
              className="w-7 h-7 rounded-lg object-contain bg-slate-50 border border-slate-200 p-0.5" 
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
                  Live Web App
                </span>
              </div>
              <p className="text-[11px] text-slate-500 truncate max-w-xs sm:max-w-md hidden sm:block">
                {app.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Center: Quick App Switcher & View Mode Toggle */}
        <div className="flex items-center gap-2">
          {/* View mode toggle */}
          <div className="inline-flex rounded-lg bg-slate-100 p-0.5 border border-slate-200 text-xs">
            <button
              onClick={() => setViewMode('frame')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                viewMode === 'frame'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Embedded Interactive Frame"
            >
              <Monitor className="w-3 h-3" />
              <span>Workspace</span>
            </button>
            <button
              onClick={() => setViewMode('launchpad')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                viewMode === 'launchpad'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Launchpad Mode"
            >
              <Play className="w-3 h-3" />
              <span>Launchpad</span>
            </button>
          </div>

          <label htmlFor="runner-app-select" className="sr-only">Switch Application</label>
          <select
            id="runner-app-select"
            value={app.id}
            onChange={(e) => onSelectApp(e.target.value)}
            className="bg-slate-50 border border-slate-200 text-xs text-slate-700 rounded-lg px-2.5 py-1.5 pr-7 focus:outline-none focus:border-teal-500 cursor-pointer hover:bg-slate-100 transition-colors appearance-none font-medium"
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
            className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors flex items-center gap-1.5 cursor-pointer ${
              showDrawer
                ? 'bg-teal-600 text-white border-teal-600 shadow-xs'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
            }`}
            title="App Intelligence & Clinical Documentation"
          >
            <Info className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Clinical Specs</span>
          </button>

          {/* Refresh Frame */}
          <button
            onClick={handleRefresh}
            className="p-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors cursor-pointer"
            title="Reload Application Frame"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-teal-600' : ''}`} />
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors hidden sm:block cursor-pointer"
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>

          {/* External Tab */}
          <a
            href={app.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-teal-600 border border-slate-200 transition-colors"
            title="Open in Native New Tab"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* GitHub Source */}
          <a
            href={app.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors"
            title="View Code on GitHub"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Workspace: Frame / Launchpad + Drawer */}
      <div className="relative flex-1 flex overflow-hidden">
        {/* Workspace Canvas */}
        <div className="relative flex-1 bg-slate-100 flex flex-col">
          {viewMode === 'frame' ? (
            <>
              {isLoading && (
                <div className="absolute inset-0 z-20 bg-white/85 backdrop-blur-xs flex flex-col items-center justify-center gap-3">
                  <div className="w-9 h-9 border-3 border-teal-600/20 border-t-teal-600 rounded-full animate-spin" />
                  <div className="text-xs font-semibold text-slate-600">
                    Connecting to {app.name}...
                  </div>
                </div>
              )}

              <iframe
                key={iframeKey}
                src={app.liveUrl}
                title={app.name}
                className="w-full flex-1 border-0 bg-white"
                allow="clipboard-write; clipboard-read; camera; microphone; geolocation"
                sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"
                onLoad={() => setIsLoading(false)}
              />
            </>
          ) : (
            /* Dedicated Launchpad Mode */
            <div className="flex-1 flex items-center justify-center p-6 bg-slate-50">
              <div className="max-w-md w-full bg-white rounded-2xl p-8 border border-slate-200 shadow-sm text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-50 border border-slate-200 p-2 shadow-xs flex items-center justify-center">
                  <img src={app.iconUrl} alt={app.name} className="w-full h-full object-contain rounded-xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{app.name}</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">{app.tagline}</p>

                <div className="space-y-3 mb-6 text-left bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Live Endpoint:</span>
                    <span className="font-mono text-teal-700 font-semibold text-[11px] truncate max-w-[200px]">{app.liveUrl}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Deployment Status:</span>
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Verified Production
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Specialty Domain:</span>
                    <span className="text-slate-800 font-medium">{app.category}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={app.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs shadow-md shadow-teal-600/20 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Open Application In New Window</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setViewMode('frame')}
                    className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Return to Frame
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Bar Indicator */}
          <div className="bg-white border-t border-slate-200 px-4 py-2 text-[11px] text-slate-500 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Endpoint:</span>
              <a 
                href={app.liveUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="font-mono text-teal-700 hover:underline font-medium text-[10px]"
              >
                {app.liveUrl}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setViewMode(viewMode === 'frame' ? 'launchpad' : 'frame')}
                className="text-slate-600 hover:text-teal-700 font-medium cursor-pointer"
              >
                {viewMode === 'frame' ? 'Switch to Launchpad' : 'Switch to Frame'}
              </button>
              <span>•</span>
              <a 
                href={app.liveUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-teal-700 font-medium underline"
              >
                Direct Launch ↗
              </a>
            </div>
          </div>
        </div>

        {/* Slide-out Intelligence / Documentation Drawer (Daylight) */}
        {showDrawer && (
          <aside className="w-full sm:w-96 bg-white border-l border-slate-200 p-5 overflow-y-auto flex flex-col z-30 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-teal-600" />
                <h3 className="font-bold text-sm text-slate-900">App Specifications</h3>
              </div>
              <button
                onClick={() => setShowDrawer(false)}
                className="text-slate-400 hover:text-slate-600 text-xs p-1 cursor-pointer font-medium"
              >
                ✕ Close
              </button>
            </div>

            {/* Drawer Tabs */}
            <div className="flex items-center gap-1 mt-4 p-1 rounded-lg bg-slate-100 text-xs">
              <button
                onClick={() => setActiveTab('workflow')}
                className={`flex-1 py-1 rounded-md transition-colors cursor-pointer ${
                  activeTab === 'workflow' ? 'bg-white text-teal-800 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Workflow
              </button>
              <button
                onClick={() => setActiveTab('rules')}
                className={`flex-1 py-1 rounded-md transition-colors cursor-pointer ${
                  activeTab === 'rules' ? 'bg-white text-teal-800 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Rules & Gates
              </button>
              <button
                onClick={() => setActiveTab('exports')}
                className={`flex-1 py-1 rounded-md transition-colors cursor-pointer ${
                  activeTab === 'exports' ? 'bg-white text-teal-800 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Exports
              </button>
            </div>

            {/* Tab 1: Workflow */}
            {activeTab === 'workflow' && (
              <div className="mt-4 space-y-3">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Clinical Execution Pipeline
                </h4>
                <div className="space-y-2.5">
                  {app.workflowSteps.map((step) => (
                    <div key={step.step} className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 text-[10px] font-bold flex items-center justify-center">
                          {step.step}
                        </span>
                        <span className="text-xs font-bold text-slate-800">{step.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 pl-7 leading-relaxed">
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
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Deterministic Integrity Guarantees
                </h4>
                <div className="space-y-2">
                  {app.clinicalHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-teal-50 border border-teal-100 mt-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-teal-900 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                    <span>Zero Hallucination Philosophy</span>
                  </div>
                  <p className="text-[11px] text-teal-800 leading-relaxed">
                    Any narrative assertion lacking direct verifiable support from canonical literature is converted into explicit uncertainty disclosures.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 3: Exports & Standards */}
            {activeTab === 'exports' && (
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Supported Citation Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {app.supportedStandards.map((std, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                        {std}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Compilation & Export Pipelines
                  </h4>
                  <div className="space-y-1.5">
                    {app.exportFormats.map((fmt, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700">
                        <FileCheck2 className="w-3.5 h-3.5 text-teal-600" />
                        <span>{fmt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Author Attribution */}
            <div className="mt-auto pt-6 border-t border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="/dr-raouf.jpg"
                  alt="Dr. Raouf Roshdy"
                  className="w-9 h-9 rounded-full object-cover border border-teal-500/40 shrink-0"
                />
                <div>
                  <div className="text-xs font-bold text-slate-900">Dr. Raouf Roshdy</div>
                  <div className="text-[10px] text-teal-700 font-semibold">Lead Investigator & Creator</div>
                </div>
                <a
                  href="https://github.com/roroleaks"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto text-teal-700 hover:underline text-[11px] flex items-center gap-1 font-medium"
                >
                  <GithubIcon className="w-3 h-3" /> roroleaks
                </a>
              </div>
              {app.authorNotes && (
                <p className="text-[11px] text-slate-600 italic mt-2 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100">
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
