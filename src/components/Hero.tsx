import React from 'react';
import { ShieldCheck, Database, BookOpen, Layers, ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';

interface HeroProps {
  onScrollToApps: () => void;
  onSelectFeatured: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToApps, onSelectFeatured }) => {
  return (
    <section className="relative pt-12 pb-16 overflow-hidden border-b border-slate-200/80 bg-white">
      {/* Background ambient daylight lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[340px] bg-gradient-to-b from-teal-50/70 via-sky-50/40 to-transparent blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Initiative Badge (clean, non-repetitive) */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-medium mb-6 shadow-xs">
          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
          <span className="font-semibold text-teal-900">Unified Medical Intelligence Hub</span>
          <span className="text-teal-300">•</span>
          <span className="text-teal-700">11 Clinical AI Web Applications</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight sm:leading-none">
          Unified Medical AI & Clinical Research{' '}
          <span className="gradient-text block mt-2 sm:inline">Umbrella Suite</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
          A single production portal consolidating all specialized biomedical web applications — from deterministic PICO evidence retrieval, critical appraisal, and systematic reviews to clinical decision support and guideline calculators.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onScrollToApps}
            className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm shadow-md shadow-teal-600/20 hover:shadow-teal-600/30 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Explore All 11 Applications</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://aipico-app.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm border border-slate-200 transition-all flex items-center gap-2"
          >
            <span>Launch Flagship: AIPICO v3.1</span>
            <ExternalLink className="w-4 h-4 text-slate-500" />
          </a>
        </div>

        {/* Metrics Grid (Crisp Daylight Cards) */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="daylight-card rounded-2xl p-4 text-center">
            <div className="flex items-center justify-center text-teal-600 mb-1">
              <Layers className="w-5 h-5 mr-1.5" />
              <span className="text-2xl font-bold text-slate-900">11</span>
            </div>
            <div className="text-xs font-semibold text-slate-700">Biomedical Web Apps</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Live production tools</div>
          </div>

          <div className="daylight-card rounded-2xl p-4 text-center">
            <div className="flex items-center justify-center text-sky-600 mb-1">
              <Database className="w-5 h-5 mr-1.5" />
              <span className="text-2xl font-bold text-slate-900">15+</span>
            </div>
            <div className="text-xs font-semibold text-slate-700">Medical Specialties</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Calibrated guidelines</div>
          </div>

          <div className="daylight-card rounded-2xl p-4 text-center">
            <div className="flex items-center justify-center text-emerald-600 mb-1">
              <ShieldCheck className="w-5 h-5 mr-1.5" />
              <span className="text-2xl font-bold text-slate-900">100%</span>
            </div>
            <div className="text-xs font-semibold text-slate-700">Deterministic Parity</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Zero citation hallucination</div>
          </div>

          <div className="daylight-card rounded-2xl p-4 text-center">
            <div className="flex items-center justify-center text-indigo-600 mb-1">
              <BookOpen className="w-5 h-5 mr-1.5" />
              <span className="text-2xl font-bold text-slate-900">ICMJE</span>
            </div>
            <div className="text-xs font-semibold text-slate-700">Vancouver & APA</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Publication-grade DOCX</div>
          </div>
        </div>
      </div>
    </section>
  );
};
