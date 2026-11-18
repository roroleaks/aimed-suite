import React from 'react';
import { 
  ExternalLink, 
  Play,
  Info
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { AppItem } from '../types';

interface AppCardProps {
  app: AppItem;
  onOpenApp: (id: string) => void;
}

// Professional category tint badges
const CATEGORY_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  'Clinical CDSS': { bg: 'bg-teal-50', text: 'text-teal-800', border: 'border-teal-200/70' },
  'Evidence Synthesis': { bg: 'bg-sky-50', text: 'text-sky-800', border: 'border-sky-200/70' },
  'Critical Appraisal': { bg: 'bg-indigo-50', text: 'text-indigo-800', border: 'border-indigo-200/70' },
  'Literature & Presentation': { bg: 'bg-emerald-50', text: 'text-emerald-800', border: 'border-emerald-200/70' },
  'Practice Guidelines': { bg: 'bg-amber-50', text: 'text-amber-800', border: 'border-amber-200/70' },
  'Medical AI & Search': { bg: 'bg-blue-50', text: 'text-blue-800', border: 'border-blue-200/70' },
};

export const AppCard: React.FC<AppCardProps> = ({ app, onOpenApp }) => {
  const categoryStyle = CATEGORY_STYLES[app.category] || { 
    bg: 'bg-slate-100', 
    text: 'text-slate-800', 
    border: 'border-slate-200' 
  };

  return (
    <div className="daylight-card daylight-card-hover rounded-2xl p-6 flex flex-col justify-between h-full bg-white relative overflow-hidden group">
      {/* Top ambient color strip */}
      <div 
        className="absolute top-0 left-0 right-0 h-[3px] opacity-85 group-hover:opacity-100 transition-opacity duration-200"
        style={{ backgroundColor: app.color.primary }}
        aria-hidden="true"
      />

      <div className="flex flex-col flex-1">
        {/* Header: Icon, Category & Actions (Unified Min-Height) */}
        <div className="flex items-start justify-between gap-3 mb-3.5 min-h-[48px]">
          <div className="flex items-center gap-3 min-w-0">
            {/* Concentric radii: wrapper 12px, padding 6px -> inner image 6px */}
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-xs p-1.5 overflow-hidden shrink-0 bg-slate-50"
              style={{ borderColor: '#e2e8f0' }}
            >
              <img 
                src={app.iconUrl} 
                alt={`${app.name} icon`} 
                className="w-full h-full object-contain rounded-[6px] img-hairline"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${categoryStyle.bg} ${categoryStyle.text} ${categoryStyle.border}`}>
                  {app.category}
                </span>
                {app.featured && (
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80">
                    Flagship
                  </span>
                )}
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 group-hover:text-teal-700 transition-colors duration-150 truncate leading-snug">
                {app.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <a
              href={app.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${app.name} source code on GitHub`}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:outline-none cursor-pointer"
              title="View source on GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Tagline: unified 20px height with line-clamp */}
        <div className="h-5 mb-2 flex items-center">
          <p className="text-xs font-semibold text-slate-800 line-clamp-1 truncate" title={app.tagline}>
            {app.tagline}
          </p>
        </div>

        {/* Description: unified 60px height (3 lines) across all cards */}
        <div className="h-[3.75rem] mb-4 overflow-hidden">
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
            {app.description}
          </p>
        </div>

        {/* Clinical Badges / Chips: unified 28px height */}
        <div className="h-7 mb-4 flex items-center gap-1.5 overflow-hidden">
          {app.badges.slice(0, 3).map((badge, idx) => (
            <span
              key={idx}
              className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100/90 text-slate-700 border border-slate-200/80 whitespace-nowrap"
            >
              {badge}
            </span>
          ))}
          {app.badges.length > 3 && (
            <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-slate-100/70 text-slate-500 border border-slate-200/50 tabular-nums whitespace-nowrap">
              +{app.badges.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Card Action Footer: Asymmetric padding + tactile press + 40px hit area */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
        <a
          href={app.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-press flex-1 h-10 px-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow-md cursor-pointer focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-1 focus-visible:outline-none"
        >
          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
          <span>Launch web app</span>
          <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
        </a>

        <button
          type="button"
          onClick={() => onOpenApp(app.id)}
          className="btn-press h-10 px-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 text-xs font-medium flex items-center gap-1 cursor-pointer focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-1 focus-visible:outline-none"
          title="View specs & workflow"
        >
          <Info className="w-3.5 h-3.5 text-slate-500" />
          <span>View specs</span>
        </button>
      </div>
    </div>
  );
};
