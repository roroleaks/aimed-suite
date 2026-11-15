import React from 'react';
import { 
  ExternalLink, 
  Play,
  FileText,
  Award,
  CheckCircle2,
  Code2,
  Stethoscope, 
  GitMerge, 
  ShieldCheck, 
  Presentation, 
  BookOpenCheck, 
  Bot,
  Grid
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { AppItem, AppCategory } from '../types';

interface AppCardProps {
  app: AppItem;
  onOpenApp: (id: string) => void;
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

export const AppCard: React.FC<AppCardProps> = ({ app, onOpenApp }) => {
  const CategoryIcon = CATEGORY_ICONS[app.category] || Grid;

  return (
    <div className="daylight-card daylight-card-hover rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden bg-white border border-slate-200/90 shadow-xs hover:border-teal-500/60 hover:shadow-lg hover:shadow-teal-900/5 transition-all duration-300">
      {/* Top ambient color strip */}
      <div 
        className="absolute top-0 left-0 right-0 h-[3px] opacity-80 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: app.color.accent }}
      />

      <div>
        {/* Header: Icon, Category & Actions */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div 
              className="w-13 h-13 rounded-2xl flex items-center justify-center border shadow-2xs p-1.5 overflow-hidden shrink-0 bg-slate-50 group-hover:scale-105 transition-transform duration-300"
              style={{ 
                borderColor: '#e2e8f0'
              }}
            >
              <img 
                src={app.iconUrl} 
                alt={`${app.name} icon`} 
                className="w-full h-full object-contain rounded-xl"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50/80 px-2 py-0.5 rounded-md border border-teal-200/60">
                  <CategoryIcon className="w-3 h-3 text-teal-600 shrink-0" />
                  <span>{app.category}</span>
                </span>
                {app.featured && (
                  <span className="inline-flex items-center gap-1 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                    <Award className="w-2.5 h-2.5 text-amber-600" />
                    <span>Flagship</span>
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors mt-0.5 flex items-center gap-1.5">
                <span>{app.name}</span>
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <a
              href={app.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-all cursor-pointer"
              title="View Source on GitHub"
            >
              <GithubIcon className="w-4 h-4" />
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
              className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-50 text-slate-700 border border-slate-200/80 shadow-2xs"
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

      {/* Card Metadata Strip */}
      <div className="pt-2.5 pb-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 mb-1">
        <div className="flex items-center gap-1 text-emerald-600 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Production</span>
        </div>
        <div className="flex items-center gap-1 text-slate-400 font-mono text-[10px]">
          <Code2 className="w-3 h-3 text-slate-400" />
          <span>{app.primaryLanguage}</span>
        </div>
      </div>

      {/* Card Action Footer: Direct launch in clean new page */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
        <a
          href={app.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-3 rounded-xl bg-teal-600 hover:bg-teal-700 active:scale-[0.98] text-white text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 shadow-xs hover:shadow-md hover:shadow-teal-600/20 cursor-pointer"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Launch Web App</span>
          <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
        </a>

        <button
          onClick={() => onOpenApp(app.id)}
          className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-[0.98] text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors text-xs font-medium flex items-center gap-1.5 cursor-pointer shadow-2xs"
          title="View Specs & Workflow"
        >
          <FileText className="w-3.5 h-3.5 text-slate-500" />
          <span>Specs</span>
        </button>
      </div>
    </div>
  );
};
