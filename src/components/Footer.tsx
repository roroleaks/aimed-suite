import React from 'react';
import { Activity, ShieldAlert, Heart, ExternalLink } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { APPS_DATA } from '../data/apps';

interface FooterProps {
  onSelectApp: (id: string) => void;
  onNavigateHome: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectApp, onNavigateHome }) => {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Vision */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3 cursor-pointer" onClick={onNavigateHome}>
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
                <Activity className="w-4 h-4" />
              </div>
              <span className="font-bold text-base text-white">AIMed Suite</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md mb-4">
              An evidence-grounded umbrella suite consolidating 11 medical AI web applications and research pipelines. Built with zero-hallucination deterministic integrity, Vancouver ICMJE referencing, and publication-ready formatting.
            </p>
            <div className="flex items-center gap-3">
              <img
                src="/dr-raouf.jpg"
                alt="Dr. Raouf Roshdy"
                className="w-10 h-10 rounded-full object-cover border-2 border-teal-500/40 shrink-0"
              />
              <div>
                <div className="text-xs font-bold text-white">Dr. Raouf Roshdy</div>
                <div className="text-[11px] text-teal-400">Lead Investigator & Creator</div>
              </div>
              <a
                href="https://github.com/roroleaks"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub @roroleaks</span>
              </a>
            </div>
          </div>

          {/* Applications Column 1 */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Clinical & Synthesis Apps
            </h4>
            <ul className="space-y-2">
              {APPS_DATA.slice(0, 6).map((app) => (
                <li key={app.id}>
                  <button
                    onClick={() => onSelectApp(app.id)}
                    className="hover:text-teal-400 transition-colors text-left flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-teal-500/60"></span>
                    <span>{app.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications Column 2 */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Specialized Tools
            </h4>
            <ul className="space-y-2">
              {APPS_DATA.slice(6).map((app) => (
                <li key={app.id}>
                  <button
                    onClick={() => onSelectApp(app.id)}
                    className="hover:text-teal-400 transition-colors text-left flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-sky-500/60"></span>
                    <span>{app.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Regulatory & Clinical Disclaimer */}
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-850 flex items-start gap-3 mb-8">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-[11px] text-slate-400 leading-relaxed">
            <strong className="text-slate-300">Clinical Decision Support & Research Disclaimer:</strong> The AIMed Suite is designed for medical research, literature synthesis, and healthcare professional decision support. It does not replace individualized clinical judgment, patient diagnosis, or direct medical consultation. Never input Protected Health Information (PHI/PII).
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} AIMed Biomedical Informatics • Dr. Raouf Roshdy. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Powered by Next.js & React</span>
            <span>•</span>
            <span>Optimized for Vercel Edge</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
