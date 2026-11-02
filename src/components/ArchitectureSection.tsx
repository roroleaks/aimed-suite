import React from 'react';
import { ShieldAlert, Database, FileText, CheckCircle, Search, Cpu, ArrowRight } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  return (
    <section className="py-16 border-t border-slate-900/80 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 uppercase tracking-wider">
            Deterministic Medical Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 tracking-tight">
            How The Umbrella Suite Enforces Clinical Evidence Parity
          </h2>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
            Unlike generic LLM wrappers that hallucinate non-existent citations or misattribute clinical trials, every application in this suite operates under a strict, multi-stage deterministic integrity pipeline.
          </p>
        </div>

        {/* 4 Pipeline Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="glass-card rounded-2xl p-5 border-slate-800/80 relative">
            <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-3">
              <Search className="w-4 h-4" />
            </div>
            <div className="text-xs font-semibold text-teal-400 mb-1">Stage 1</div>
            <h3 className="text-sm font-bold text-white mb-2">Canonical Identity</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              One immutable record per publication. Normalized DOI is primary key; PubMed PMID, Crossref, and Europe PMC serve as verified fallbacks.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-5 border-slate-800/80 relative">
            <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-3">
              <Database className="w-4 h-4" />
            </div>
            <div className="text-xs font-semibold text-sky-400 mb-1">Stage 2</div>
            <h3 className="text-sm font-bold text-white mb-2">Deterministic Claim Filter</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Harvested studies survive only if they carry verified identifiers, pass confidence thresholds, and deterministically match PICO criteria.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-5 border-slate-800/80 relative">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div className="text-xs font-semibold text-emerald-400 mb-1">Stage 3</div>
            <h3 className="text-sm font-bold text-white mb-2">Claim Finalization</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every narrative sentence is audited. Any unsupported assertive statement is rewritten into explicit clinical uncertainty disclosures.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-5 border-slate-800/80 relative">
            <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-3">
              <FileText className="w-4 h-4" />
            </div>
            <div className="text-xs font-semibold text-violet-400 mb-1">Stage 4</div>
            <h3 className="text-sm font-bold text-white mb-2">Deliverable Parity Gate</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Refuses Word (.docx) or PDF exports if the cited bibliography disagrees with retained evidence or carries orphan numeric references.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
