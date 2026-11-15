import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-10 overflow-hidden border-b border-slate-200/80 bg-white">
      {/* Background ambient daylight lighting with pointer-events: none */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[240px] bg-gradient-to-b from-teal-50/70 via-sky-50/30 to-transparent blur-2xl pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Title with text-wrap: balance */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight" style={{ textWrap: 'balance' }}>
          Unified Medical AI & Clinical Research{' '}
          <span className="gradient-text block sm:inline">Umbrella Suite</span>
        </h1>

        {/* Subtitle with text-wrap: pretty */}
        <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed" style={{ textWrap: 'pretty' }}>
          A single production portal consolidating all specialized biomedical web applications — from deterministic PICO evidence retrieval, critical appraisal, and systematic reviews to clinical decision support and guideline calculators.
        </p>
      </div>
    </section>
  );
};
