import React from 'react';
import { Activity, ShieldAlert, CheckCircle2, ChevronRight, Stethoscope, Sparkles } from 'lucide-react';
import { APPS_DATA } from '../data/apps';

interface FooterProps {
  onSelectApp: (id: string) => void;
  onNavigateHome: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectApp, onNavigateHome }) => {
  return (
    <footer className="border-t border-slate-200 bg-slate-100 text-slate-600 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Vision */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3 cursor-pointer select-none" onClick={onNavigateHome}>
              <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center shadow-xs">
                <Activity className="w-4 h-4" />
              </div>
              <span className="font-bold text-base text-slate-900">AIMed Suite</span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed max-w-md mb-4">
              An evidence-grounded umbrella suite consolidating 12 medical AI web applications and research pipelines. Built with zero-hallucination deterministic integrity, Vancouver ICMJE referencing, and publication-ready formatting.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://dr-raouf.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer block rounded-full focus:outline-none transition-transform active:scale-95"
                title="Dr. Raouf Roshdy"
              >
                <img
                  src="/dr-raouf.jpg"
                  alt="Dr. Raouf Roshdy"
                  className="w-10 h-10 rounded-full object-cover border-2 border-teal-600/40 shrink-0 shadow-xs hover:border-teal-600 transition-colors"
                />
              </a>
              <div>
                <a
                  href="https://dr-raouf.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-slate-900 hover:text-teal-700 transition-colors cursor-pointer flex items-center gap-1.5"
                  title="Dr. Raouf Roshdy"
                >
                  <span>Dr. Raouf Roshdy</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                </a>
                <div className="text-[11px] text-teal-700 font-semibold">Lead Investigator & Creator</div>
              </div>
            </div>
          </div>

          {/* Applications Column 1 */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Stethoscope className="w-3.5 h-3.5 text-teal-600" />
              <span>Clinical & Synthesis Apps</span>
            </h4>
            <ul className="space-y-2">
              {APPS_DATA.slice(0, 6).map((app) => (
                <li key={app.id}>
                  <button
                    onClick={() => onSelectApp(app.id)}
                    className="hover:text-teal-700 transition-colors text-left flex items-center gap-1.5 cursor-pointer group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all" />
                    <span className="font-medium text-slate-700 group-hover:text-slate-900">{app.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications Column 2 */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Specialized Research Tools</span>
            </h4>
            <ul className="space-y-2">
              {APPS_DATA.slice(6).map((app) => (
                <li key={app.id}>
                  <button
                    onClick={() => onSelectApp(app.id)}
                    className="hover:text-teal-700 transition-colors text-left flex items-center gap-1.5 cursor-pointer group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all" />
                    <span className="font-medium text-slate-700 group-hover:text-slate-900">{app.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Regulatory & Clinical Disclaimer */}
        <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3 mb-8">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-[11px] text-amber-900 leading-relaxed">
            <strong className="text-amber-950 font-bold">Clinical Decision Support & Research Disclaimer:</strong> The AIMed Suite is designed for medical research, literature synthesis, and healthcare professional decision support. It does not replace individualized clinical judgment, patient diagnosis, or direct medical consultation. Never input Protected Health Information (PHI/PII).
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} AIMed Biomedical Informatics • Dr. Raouf Roshdy. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Powered by React & TypeScript</span>
            <span>•</span>
            <span>Deployed on Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
