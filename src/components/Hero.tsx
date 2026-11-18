import React, { useState } from 'react';
import { QrCode, Copy, Check, Smartphone, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenQrModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQrModal }) => {
  const [copied, setCopied] = useState(false);
  const portalUrl = 'https://roshdy-med-suite.vercel.app';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(portalUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section className="relative pt-10 sm:pt-14 pb-10 sm:pb-12 overflow-hidden border-b border-slate-200/80 bg-white">
      {/* Background ambient daylight lighting with pointer-events: none */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[260px] bg-gradient-to-b from-teal-50/70 via-sky-50/30 to-transparent blur-2xl pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">
          {/* Left Column: Headlines & Editorial Copy */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50/90 border border-teal-200/70 text-teal-800 text-xs font-semibold mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" aria-hidden="true" />
              <span>Production Biomedical Informatics Ecosystem</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Unified Medical AI & Clinical Research{' '}
              <span className="gradient-text block sm:inline">Umbrella Suite</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              A single production portal consolidating all specialized biomedical web applications — from deterministic PICO evidence retrieval, critical appraisal, and systematic reviews to clinical decision support and guideline calculators.
            </p>

            {/* Quick URL Pill with copy and mobile toggle */}
            <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs">
              <span className="text-slate-500 font-medium">Production URL:</span>
              <button
                type="button"
                onClick={handleCopy}
                className="btn-press inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-700 font-mono text-[11px] border border-slate-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                title="Click to copy URL"
              >
                <span>roshdy-med-suite.vercel.app</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                )}
              </button>

              {/* Mobile trigger for QR Code */}
              {onOpenQrModal && (
                <button
                  type="button"
                  onClick={onOpenQrModal}
                  className="sm:hidden btn-press inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-teal-50 text-teal-700 border border-teal-200 text-xs font-semibold hover:bg-teal-100 cursor-pointer"
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>Show Mobile QR</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: QR Code Card at the right side above the grid */}
          <div className="hidden sm:flex flex-col items-center bg-slate-50/80 hover:bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xs hover:shadow-md transition-all duration-200 shrink-0 w-48 text-center group">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-2">
              <Smartphone className="w-3.5 h-3.5 text-teal-600" />
              <span>Mobile QR Code</span>
            </div>

            <button
              type="button"
              onClick={onOpenQrModal}
              className="w-32 h-32 p-2 bg-white rounded-xl border border-slate-200 shadow-xs flex items-center justify-center cursor-pointer group-hover:border-teal-500/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
              title="Click to expand QR Code"
              aria-label="Expand QR code modal"
            >
              <img 
                src="/qr-code.svg" 
                alt="QR Code for roshdy-med-suite.vercel.app" 
                className="w-full h-full object-contain"
              />
            </button>

            <p className="mt-2 text-[10px] text-slate-500 font-medium">
              Scan with phone camera
            </p>
            <button
              type="button"
              onClick={onOpenQrModal}
              className="mt-1 text-[10px] text-teal-700 hover:text-teal-800 font-semibold inline-flex items-center gap-0.5 cursor-pointer underline underline-offset-2"
            >
              <span>Expand & Copy</span>
              <ArrowUpRight className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
