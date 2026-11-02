import React from 'react';
import { ShieldAlert, Database, FileText, Search } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  return (
    <section className="py-16 border-t border-slate-200 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200 uppercase tracking-wider">
            Deterministic Medical Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
            How The Umbrella Suite Enforces Clinical Evidence Parity
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            Unlike generic LLM wrappers that hallucinate non-existent citations or misattribute clinical trials, every application in this suite operates under a strict, multi-stage deterministic integrity pipeline.
          </p>
        </div>

        {/* 4 Pipeline Pillars (Crisp Daylight Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="daylight-card rounded-2xl p-5 relative bg-white">
            <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 mb-3 font-bold">
              <Search className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-teal-700 mb-1">Stage 1</div>
            <h3 className="text-sm font-bold text-slate-900 mb-2">Canonical Identity</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              One immutable record per publication. Normalized DOI is primary key; PubMed PMID, Crossref, and Europe PMC serve as verified fallbacks.
            </p>
          </div>

          <div className="daylight-card rounded-2xl p-5 relative bg-white">
            <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 mb-3 font-bold">
              <Database className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-sky-700 mb-1">Stage 2</div>
            <h3 className="text-sm font-bold text-slate-900 mb-2">Deterministic Claim Filter</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Harvested studies survive only if they carry verified identifiers, pass confidence thresholds, and deterministically match PICO criteria.
            </p>
          </div>

          <div className="daylight-card rounded-2xl p-5 relative bg-white">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-3 font-bold">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-emerald-700 mb-1">Stage 3</div>
            <h3 className="text-sm font-bold text-slate-900 mb-2">Claim Finalization</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every narrative sentence is audited. Any unsupported assertive statement is rewritten into explicit clinical uncertainty disclosures.
            </p>
          </div>

          <div className="daylight-card rounded-2xl p-5 relative bg-white">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 mb-3 font-bold">
              <FileText className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-indigo-700 mb-1">Stage 4</div>
            <h3 className="text-sm font-bold text-slate-900 mb-2">Deliverable Parity Gate</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Refuses Word (.docx) or PDF exports if the cited bibliography disagrees with retained evidence or carries orphan numeric references.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
