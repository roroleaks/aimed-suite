import React from 'react';
import { 
  ExternalLink, 
  ArrowUpRight, 
  CheckCircle2, 
  FileText, 
  Play, 
  Stethoscope, 
  Presentation, 
  PenTool, 
  GitCompare, 
  Activity, 
  BookOpen, 
  Search, 
  Bot, 
  Gauge, 
  Zap,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { AppItem } from '../types';

interface AppCardProps {
  app: AppItem;
  onOpenApp: (id: string) => void;
}

const getAppIcon = (id: string) => {
  switch (id) {
    case 'aipico':
      return <Stethoscope className="w-5 h-5 text-teal-400" />;
    case 'aimed':
      return <Activity className="w-5 h-5 text-sky-400" />;
    case 'apprais-ai':
      return <CheckCircle2 className="w-5 h-5 text-violet-400" />;
    case 'preppt':
      return <Presentation className="w-5 h-5 text-amber-400" />;
    case 'scidraft-ai':
      return <PenTool className="w-5 h-5 text-emerald-400" />;
    case 'sysrevai':
      return <GitCompare className="w-5 h-5 text-cyan-400" />;
    case 'aifv':
      return <Zap className="w-5 h-5 text-pink-400" />;
    case 'ehc-obgyn-guidelines':
      return <BookOpen className="w-5 h-5 text-rose-400" />;
    case 'ams-eg':
      return <Search className="w-5 h-5 text-blue-400" />;
    case 'rorogpt':
      return <Bot className="w-5 h-5 text-indigo-400" />;
    case 'free-ai-tracker':
      return <Gauge className="w-5 h-5 text-teal-400" />;
    default:
      return <Sparkles className="w-5 h-5 text-teal-400" />;
  }
};

export const AppCard: React.FC<AppCardProps> = ({ app, onOpenApp }) => {
  return (
    <div className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between border-slate-800/80 group relative overflow-hidden">
      {/* Top ambient color strip */}
      <div 
        className="absolute top-0 left-0 right-0 h-[2px] opacity-70 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: app.color.accent }}
      />

      <div>
        {/* Header: Icon, Category & Actions */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div 
              className="w-11 h-11 rounded-xl flex items-center justify-center border shadow-sm"
              style={{ 
                backgroundColor: app.color.bg, 
                borderColor: app.color.border 
              }}
            >
              {getAppIcon(app.id)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-teal-400">
                  {app.category}
                </span>
                {app.featured && (
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                    Flagship
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                {app.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href={app.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800/60 transition-colors"
              title="View Source on GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={app.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-500 hover:text-teal-400 hover:bg-slate-800/60 transition-colors"
              title="Open Direct Vercel App in New Tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-xs font-medium text-slate-300 mb-2.5 line-clamp-1">
          {app.tagline}
        </div>

        {/* Description */}
        <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
          {app.description}
        </p>

        {/* Clinical Badges / Chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {app.badges.slice(0, 3).map((badge, idx) => (
            <span
              key={idx}
              className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
            >
              {badge}
            </span>
          ))}
          {app.badges.length > 3 && (
            <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-slate-900/60 text-slate-500 border border-slate-850">
              +{app.badges.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-3 border-t border-slate-850 flex items-center justify-between gap-2 mt-auto">
        <button
          onClick={() => onOpenApp(app.id)}
          className="flex-1 py-2 px-3 rounded-xl bg-teal-500/10 hover:bg-teal-500 text-teal-400 hover:text-slate-950 border border-teal-500/30 hover:border-teal-500 text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 group/btn"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Launch Web App</span>
        </button>

        <a
          href={app.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors text-xs font-medium flex items-center gap-1"
          title="Direct URL"
        >
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
