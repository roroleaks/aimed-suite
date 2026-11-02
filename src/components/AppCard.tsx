import React from 'react';
import { 
  ExternalLink, 
  ArrowUpRight, 
  Play
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { AppItem } from '../types';

interface AppCardProps {
  app: AppItem;
  onOpenApp: (id: string) => void;
}

export const AppCard: React.FC<AppCardProps> = ({ app, onOpenApp }) => {
  return (
    <div className="daylight-card daylight-card-hover rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden bg-white">
      {/* Top ambient color strip */}
      <div 
        className="absolute top-0 left-0 right-0 h-[2.5px] opacity-80 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: app.color.accent }}
      />

      <div>
        {/* Header: Icon, Category & Actions */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-xs p-1.5 overflow-hidden shrink-0 bg-slate-50"
              style={{ 
                borderColor: '#e2e8f0'
              }}
            >
              <img 
                src={app.iconUrl} 
                alt={`${app.name} icon`} 
                className="w-full h-full object-contain rounded-lg"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700">
                  {app.category}
                </span>
                {app.featured && (
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                    Flagship
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                {app.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <a
              href={app.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              title="View Source on GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={app.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-teal-600 hover:bg-slate-100 transition-colors"
              title="Open Direct Vercel App in New Tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-xs font-semibold text-slate-700 mb-2 line-clamp-1">
          {app.tagline}
        </div>

        {/* Description */}
        <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-3">
          {app.description}
        </p>

        {/* Clinical Badges / Chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {app.badges.slice(0, 3).map((badge, idx) => (
            <span
              key={idx}
              className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80"
            >
              {badge}
            </span>
          ))}
          {app.badges.length > 3 && (
            <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-slate-100/70 text-slate-500 border border-slate-200/50">
              +{app.badges.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
        <button
          onClick={() => onOpenApp(app.id)}
          className="flex-1 py-2 px-3 rounded-xl bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white border border-teal-200 hover:border-teal-600 text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 group/btn cursor-pointer"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Launch Web App</span>
        </button>

        <a
          href={app.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors text-xs font-medium flex items-center gap-1"
          title="Direct URL"
        >
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
