import React from 'react';
import { ShieldCheck, Cpu, Database, BookOpen, Layers, Sparkles, ArrowRight } from 'lucide-react';

interface HeroProps {
  onScrollToApps: () => void;
  onSelectFeatured: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToApps, onSelectFeatured }) => {
  return (
    <section className="relative pt-12 pb-16 overflow-hidden border-b border-slate-900/60">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[360px] bg-gradient-to-b from-teal-500/10 via-sky-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Initiative Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs font-medium mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-teal-400" />
          <span>AIMed Biomedical Informatics Initiative</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400">Dr. Raouf Roshdy</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-none">
          Unified Medical AI & Clinical Research{' '}
          <span className="gradient-text block mt-2 sm:inline">Umbrella Suite</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed">
          A single production portal consolidating all specialized biomedical web applications — from deterministic PICO evidence retrieval, critical appraisal, and systematic reviews to clinical decision support and guideline calculators.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onScrollToApps}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-slate-950 font-semibold text-sm shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all flex items-center gap-2"
          >
            <span>Explore All 11 Applications</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onSelectFeatured('aipico')}
            className="px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-850 text-slate-200 hover:text-white font-medium text-sm border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-2"
          >
            <span>Launch Flagship: AIPICO v3.1</span>
            <span className="w-2 h-2 rounded-full bg-teal-400"></span>
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-4 text-center border-slate-800/80">
            <div className="flex items-center justify-center text-teal-400 mb-1">
              <Layers className="w-5 h-5 mr-1.5" />
              <span className="text-2xl font-bold text-white">11</span>
            </div>
            <div className="text-xs font-semibold text-slate-300">Biomedical Web Apps</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Live production tools</div>
          </div>

          <div className="glass-card rounded-2xl p-4 text-center border-slate-800/80">
            <div className="flex items-center justify-center text-sky-400 mb-1">
              <Database className="w-5 h-5 mr-1.5" />
              <span className="text-2xl font-bold text-white">15+</span>
            </div>
            <div className="text-xs font-semibold text-slate-300">Medical Specialties</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Calibrated guidelines</div>
          </div>

          <div className="glass-card rounded-2xl p-4 text-center border-slate-800/80">
            <div className="flex items-center justify-center text-emerald-400 mb-1">
              <ShieldCheck className="w-5 h-5 mr-1.5" />
              <span className="text-2xl font-bold text-white">100%</span>
            </div>
            <div className="text-xs font-semibold text-slate-300">Deterministic Parity</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Zero citation hallucination</div>
          </div>

          <div className="glass-card rounded-2xl p-4 text-center border-slate-800/80">
            <div className="flex items-center justify-center text-violet-400 mb-1">
              <BookOpen className="w-5 h-5 mr-1.5" />
              <span className="text-2xl font-bold text-white">ICMJE</span>
            </div>
            <div className="text-xs font-semibold text-slate-300">Vancouver & APA</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Publication-grade DOCX</div>
          </div>
        </div>
      </div>
    </section>
  );
};
