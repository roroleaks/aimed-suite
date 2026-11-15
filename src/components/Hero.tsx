import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  ExternalLink 
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-10 pb-10 overflow-hidden border-b border-slate-200/80 bg-white">
      {/* Background ambient daylight lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[260px] bg-gradient-to-b from-teal-50/70 via-sky-50/30 to-transparent blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold mb-4 shadow-2xs">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          <Sparkles className="w-3.5 h-3.5 text-teal-600" />
          <span>Biomedical Informatics Ecosystem · 12 Production Web Applications</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight">
          Unified Medical AI & Clinical Research{' '}
          <span className="gradient-text block sm:inline">Umbrella Suite</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
          A single production portal consolidating all specialized biomedical web applications — from deterministic PICO evidence retrieval, critical appraisal, and systematic reviews to clinical decision support and guideline calculators.
        </p>

        {/* Highlight Feature Badges with Icons */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-medium shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span>Zero Hallucination Pipeline</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-medium shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Deterministic PICO Integrity</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-medium shadow-2xs">
            <FileText className="w-3.5 h-3.5 text-sky-600 shrink-0" />
            <span>Vancouver & APA Citations</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-medium shadow-2xs">
            <ExternalLink className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
            <span>Direct New-Tab Launch</span>
          </div>
        </div>
      </div>
    </section>
  );
};
