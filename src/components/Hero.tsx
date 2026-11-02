import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-10 pb-10 overflow-hidden border-b border-slate-200/80 bg-white">
      {/* Background ambient daylight lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[240px] bg-gradient-to-b from-teal-50/70 via-sky-50/30 to-transparent blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Initiative Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-medium mb-5 shadow-xs">
          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
          <span className="font-semibold text-teal-900">Unified Medical Intelligence Hub</span>
          <span className="text-teal-300">•</span>
          <span className="text-teal-700">11 Clinical AI Web Applications</span>
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
      </div>
    </section>
  );
};
