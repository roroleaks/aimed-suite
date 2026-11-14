import { AppItem, AppCategory } from '../types';

export const APPS_DATA: AppItem[] = [
  {
    id: 'aipico',
    name: 'AIPICO v3.1',
    tagline: 'Evidence-Grounded Clinical Question Assistant (Obstetrics & Gynecology)',
    description: 'Turns clinical inquiries into structured PICO, queries PubMed E-utilities deterministically, and synthesizes publication-grade evidence commentaries where every cited claim is audited against retained evidence.',
    category: 'Clinical CDSS',
    iconUrl: '/icons/aipico.png',
    liveUrl: 'https://aipico-app.vercel.app',
    githubUrl: 'https://github.com/roroleaks/AIPICO-app',
    primaryLanguage: 'TypeScript',
    featured: true,
    status: 'Production',
    badges: ['PubMed E-utilities', 'Vancouver Superscripts', 'Deterministic Pipeline', 'DOCX & PDF Export'],
    color: {
      primary: '#0d9488', // Teal
      accent: '#14b8a6',
      bg: 'rgba(13, 148, 136, 0.08)',
      border: 'rgba(20, 184, 166, 0.3)'
    },
    clinicalHighlights: [
      'Specialty boundary gate enforcing 54 core Obstetric & Gynecologic root terms',
      'NLM human clinical subject filter NOT (animals[mh] NOT humans[mh])',
      'Vancouver, APA 7th, and Harvard multi-style citation toggling',
      'ICMJE Word (.docx) & Vector PDF generation with running headers and footers'
    ],
    supportedStandards: ['ICMJE / NLM Vancouver', 'APA 7th', 'Harvard', 'PubMed MeSH', 'WCAG 2.1 AA'],
    exportFormats: ['Microsoft Word (.docx)', 'Vector PDF (.pdf)', 'Formatted Clipboard'],
    workflowSteps: [
      { step: '1', title: 'Clinical Intake', desc: 'Enter 4+ clinical keywords or clinical inquiry with automated OBGYN scope validation.' },
      { step: '2', title: 'Gap Mapping', desc: 'Deterministic gap analysis: established facts, controversies, and 4 candidate PICO questions.' },
      { step: '3', title: 'Outcome Definition', desc: 'Select ranked clinical outcomes and specify Vancouver or APA citation style.' },
      { step: '4', title: 'Commentary & Export', desc: 'Generates evidence-audited synthesis with zero unsupported citations and dual exports.' }
    ],
    authorNotes: 'Engineered by Dr. Raouf Roshdy to eliminate LLM citation hallucinations in evidence-based obstetrics.'
  },
  {
    id: 'aimed',
    name: 'Aimed',
    tagline: 'Multi-Specialty Medical Intelligence & Evidence Synthesis Platform',
    description: 'Universal clinical intelligence platform spanning 15 major medical specialties. Features domain-calibrated taxonomies, international practice guideline authorities, and deterministic PICO formulation.',
    category: 'Evidence Synthesis',
    iconUrl: '/icons/aimed.png',
    liveUrl: 'https://aimed-pico.vercel.app',
    githubUrl: 'https://github.com/roroleaks/AIMED',
    primaryLanguage: 'TypeScript',
    featured: true,
    status: 'Production',
    badges: ['15 Specialties', 'ACOG · AHA · NCCN', 'PICO Presets', 'Vancouver ICMJE'],
    color: {
      primary: '#0284c7', // Sky Blue
      accent: '#38bdf8',
      bg: 'rgba(2, 132, 199, 0.08)',
      border: 'rgba(56, 189, 248, 0.3)'
    },
    clinicalHighlights: [
      '15 Core Disciplines: OBGYN, Cardiology, Oncology, Pediatrics, Surgery, Nephrology, etc.',
      'Calibrated against ACOG, RCOG, FIGO, AHA, ACC, ESC, NCCN, ASCO, AAP, and KDIGO',
      'Zero-hallucination deterministic claim-to-reference parity check',
      'Dual PDF exports: Full Commentary Manuscript and Audited Vancouver Reference Trail'
    ],
    supportedStandards: ['EQUATOR', 'ICMJE / Vancouver', '15 Authority Guidelines', 'DOI/PMID Identity'],
    exportFormats: ['Full Commentary PDF', 'Reference Audit PDF', 'Structured PICO JSON'],
    workflowSteps: [
      { step: '1', title: 'Specialty Selection', desc: 'Choose from 15 core specialties with calibrated clinical guidelines.' },
      { step: '2', title: 'Evidence Mapping', desc: 'Formulates PICO questions with population phrasing ("In patients with...").' },
      { step: '3', title: 'Guideline Alignment', desc: 'Matches interventions and outcomes to recognized practice authority guidelines.' },
      { step: '4', title: 'Synthesis & Parity', desc: 'Generates Vancouver-cited manuscript with 100% claim-to-source backing.' }
    ],
    authorNotes: 'Expanded from AIPICO into universal medicine across all 15 clinical domains.'
  },
  {
    id: 'apprais-ai',
    name: 'AppraisAI',
    tagline: 'Automated Scientific Paper Critical Appraisal & Bias Auditing Platform',
    description: 'Dual-mode ingestion for biomedical PDFs and DOIs. Executes 4-pass governing critical appraisal adhering to EQUATOR Network, Cochrane RoB 2.0, AMSTAR-2, and Oxford CEBM Levels of Evidence.',
    category: 'Critical Appraisal',
    iconUrl: '/icons/apprais-ai.png',
    liveUrl: 'https://apprais-ai.vercel.app',
    githubUrl: 'https://github.com/roroleaks/AppraisAI',
    primaryLanguage: 'TypeScript',
    featured: true,
    status: 'Production',
    badges: ['RoB 2.0', 'AMSTAR-2', 'EQUATOR Checklists', 'GRADE Certainty', 'Spin Detection'],
    color: {
      primary: '#8b5cf6', // Violet
      accent: '#a78bfa',
      bg: 'rgba(139, 92, 246, 0.08)',
      border: 'rgba(167, 139, 250, 0.3)'
    },
    clinicalHighlights: [
      'Dual ingestion: Coordinate-aware PDF parsing (unpdf) & Europe PMC / Crossref JATS XML',
      'Automated spin detection auditing abstract claims against raw statistical findings',
      'Color-coded RevMan Cochrane Risk of Bias traffic-light summary strip',
      'Compiles 8-section publication-ready Word (.docx) with running headers and author ORCID'
    ],
    supportedStandards: ['CONSORT 2010', 'PRISMA 2020', 'STROBE', 'STARD 2015', 'RoB 2.0', 'GRADE'],
    exportFormats: ['Publication-Grade DOCX', 'Interactive Appraisal Dashboard', 'JSON Summary'],
    workflowSteps: [
      { step: '1', title: 'Ingestion', desc: 'Upload PDF or provide DOI/PMID with source depth watermarking (Full Text vs Abstract).' },
      { step: '2', title: 'Study Classification', desc: 'Identifies design (RCT, Cohort, SysRev) and deconstructs PICO/PECO elements.' },
      { step: '3', title: 'Bias & Spin Audit', desc: 'Evaluates Cochrane RoB 2.0 / AMSTAR-2 domains and audits statistical rigor.' },
      { step: '4', title: 'GRADE & DOCX Export', desc: 'Computes GRADE certainty and compiles formatted Word appraisal report.' }
    ],
    authorNotes: 'Designed for academic reviewers, clinical researchers, and journal editors.'
  },
  {
    id: 'preppt',
    name: 'Preppt',
    tagline: 'Scientific Literature to Presentation Specification Generator',
    description: 'Dual retrieval powered by Europe PMC and Semantic Scholar. Multi-factor relevance ranking transforms biomedical papers into high-impact slide presentations and publication-grade Word documents.',
    category: 'Literature & Presentation',
    iconUrl: '/icons/preppt.png',
    liveUrl: 'https://preppt-ai.vercel.app',
    githubUrl: 'https://github.com/roroleaks/Preppt',
    primaryLanguage: 'JavaScript',
    featured: true,
    status: 'Production',
    badges: ['Europe PMC', 'Semantic Scholar', 'Slide Deck Generator', 'Publication DOCX'],
    color: {
      primary: '#f59e0b', // Amber
      accent: '#fbbf24',
      bg: 'rgba(245, 158, 11, 0.08)',
      border: 'rgba(251, 191, 36, 0.3)'
    },
    clinicalHighlights: [
      'Dual-database retrieval bridging Europe PMC REST and Semantic Scholar Academic Graph',
      'Multi-factor relevance algorithm scoring title, abstract, recency, and study type',
      'Interactive presentation specification builder with slide cards and speaker notes',
      'Native DOCX compilation with custom branded slide layouts and bibliography'
    ],
    supportedStandards: ['Europe PMC REST API', 'Semantic Scholar API', 'ICMJE Referencing'],
    exportFormats: ['Presentation Word (.docx)', 'Slide Card Specs', 'HTML Preview'],
    workflowSteps: [
      { step: '1', title: 'Biomedical Search', desc: 'Dual-query Europe PMC & Semantic Scholar across clinical topics.' },
      { step: '2', title: 'Relevance Scoring', desc: 'Rank harvested studies using multi-factor clinical weighting.' },
      { step: '3', title: 'Deck Structuring', desc: 'Auto-generates structured slides: Background, Clinical Trials, Findings, Practice Points.' },
      { step: '4', title: 'DOCX Compilation', desc: 'Exports publication-grade slide specification Word document with citations.' }
    ]
  },
  {
    id: 'scidraft-ai',
    name: 'SciDraft AI',
    tagline: 'AI Scientific Manuscript Drafting & Academic Writing Assistant',
    description: 'Comprehensive academic writing engine. Performs systematic biomedical literature harvesting, CEBM evidence hierarchy classification (Levels 1–5), and multi-style citation generation.',
    category: 'Evidence Synthesis',
    iconUrl: '/icons/scidraft-ai.png',
    liveUrl: 'https://scidraftai.vercel.app',
    githubUrl: 'https://github.com/roroleaks/scidraft-ai',
    primaryLanguage: 'HTML / JS',
    featured: false,
    status: 'Production',
    badges: ['IMRaD Structure', 'CEBM Levels 1-5', 'Vancouver / APA / Harvard', 'Zero-Install SPA'],
    color: {
      primary: '#10b981', // Emerald
      accent: '#34d399',
      bg: 'rgba(16, 185, 129, 0.08)',
      border: 'rgba(52, 211, 153, 0.3)'
    },
    clinicalHighlights: [
      'Oxford CEBM evidence hierarchy classification (Levels 1 to 5) for all retrieved papers',
      'Pure uppercase superscript Vancouver citations outside punctuation without brackets',
      'Anchor synchronization linking in-text numbers directly to bibliography entries',
      'Standardized IMRaD (Introduction, Methods, Results, Discussion) layout generator'
    ],
    supportedStandards: ['Oxford CEBM', 'ICMJE / Vancouver', 'APA 7th', 'Harvard', 'Europe PMC'],
    exportFormats: ['Microsoft Word (.docx)', 'Review Draft PDF', 'References Audit PDF'],
    workflowSteps: [
      { step: '1', title: 'Topic Exploration', desc: 'Harvest papers from Europe PMC, Crossref, and Semantic Scholar.' },
      { step: '2', title: 'Curation & Filtering', desc: 'Toggle inclusion/exclusion and view CEBM level distribution.' },
      { step: '3', title: 'Manuscript Drafting', desc: 'Synthesize IMRaD sections with synchronized in-text superscript citations.' },
      { step: '4', title: 'Dual Export', desc: 'Export styled Word (.docx) and Vector PDF with reference audit trails.' }
    ]
  },
  {
    id: 'sysrevai',
    name: 'SysrevAI',
    tagline: 'Systematic Review Protocol, Screening & Evidence Synthesis Platform',
    description: 'Streamlines systematic literature reviews according to PRISMA 2020 guidelines. Facilitates automated title and abstract screening, deduplication, and structured data extraction.',
    category: 'Evidence Synthesis',
    iconUrl: '/icons/sysrevai.png',
    liveUrl: 'https://sysrevai.vercel.app',
    githubUrl: 'https://github.com/roroleaks/Sysrevai',
    primaryLanguage: 'HTML / JS',
    featured: false,
    status: 'Production',
    badges: ['PRISMA 2020', 'Title/Abstract Screening', 'Duplicate Detection', 'Data Extraction'],
    color: {
      primary: '#06b6d4', // Cyan
      accent: '#22d3ee',
      bg: 'rgba(6, 182, 212, 0.08)',
      border: 'rgba(34, 211, 238, 0.3)'
    },
    clinicalHighlights: [
      'PRISMA 2020 flow diagram automated tracking from identification to inclusion',
      'High-throughput title & abstract screening interface with reason tracking',
      'Automated DOI and normalized title deduplication engine',
      'Structured PICO extraction forms for quantitative meta-analysis readiness'
    ],
    supportedStandards: ['PRISMA 2020', 'Cochrane Handbook', 'EQUATOR Network'],
    exportFormats: ['PRISMA Flow Data', 'Screening Matrix CSV', 'Included Studies DOCX'],
    workflowSteps: [
      { step: '1', title: 'Import Citations', desc: 'Import RIS, BibTeX, or direct search results across biomedical databases.' },
      { step: '2', title: 'Screening', desc: 'Rapidly screen titles and abstracts with inclusion/exclusion logging.' },
      { step: '3', title: 'Full-Text Review', desc: 'Assess full manuscripts with standardized exclusion rationale.' },
      { step: '4', title: 'Export PRISMA', desc: 'Generate complete PRISMA flow chart and evidence extraction tables.' }
    ]
  },
  {
    id: 'aivf',
    name: 'AIVF',
    tagline: 'AI-IVF Clinical Decision Support System (CDSS)',
    description: 'Evidence-based clinical decision support platform for individualized controlled ovarian stimulation (COS) in IVF & ICSI, synchronizing ESHRE 2025 guidelines, CONSORT nomogram, and POSEIDON stratification.',
    category: 'Clinical CDSS',
    iconUrl: '/icons/aivf.png',
    liveUrl: 'https://aivf-precision.vercel.app',
    githubUrl: 'https://github.com/roroleaks/AIVF',
    primaryLanguage: 'TypeScript',
    featured: false,
    status: 'Production',
    badges: ['ESHRE 2025', 'IVF / ICSI CDSS', 'CONSORT Nomogram', 'POSEIDON Stratification'],
    color: {
      primary: '#1E3A8A', // Deep Navy
      accent: '#3b82f6',
      bg: 'rgba(30, 58, 138, 0.08)',
      border: 'rgba(59, 130, 246, 0.3)'
    },
    clinicalHighlights: [
      'Official ESHRE 2025 Guideline Update on Ovarian Stimulation for IVF/ICSI',
      'Active CONSORT Individualized Starting-Dose Nomogram with 300 IU safety ceiling',
      'Deterministic POSEIDON Groups 1–4 and ESHRE Bologna Poor Responder stratification',
      'Section 9 OHSS safety firewall with dual-trigger selection and freeze-all segmentation'
    ],
    supportedStandards: ['ESHRE 2025 Guidelines', 'CONSORT Nomogram', 'POSEIDON Criteria', 'ASRM Standards'],
    exportFormats: ['Clinical Intelligence Dossier (PDF)', 'EHR HL7/JSON Export', 'Audit Trail CSV'],
    workflowSteps: [
      { step: '1', title: 'Clinical Intake', desc: 'Patient demographics, ovarian reserve biomarkers (AMH, AFC), and cycle history.' },
      { step: '2', title: 'POSEIDON Stratification', desc: 'Automated stratification into POSEIDON Groups 1–4 and Bologna POR verdict.' },
      { step: '3', title: 'Protocol & Starting Dose', desc: 'Evidence-based protocol recommendation and CONSORT starting dose calculation.' },
      { step: '4', title: 'Cycle Completion & Dossier', desc: 'Follicular monitoring, OHSS firewall verification, and signed intelligence dossier.' }
    ]
  },
  {
    id: 'ehc-obgyn-guidelines',
    name: 'EHC OBGYN Guidelines',
    tagline: 'Interactive Clinical Practice Guidelines & Emergency Protocols',
    description: 'Instant, search-driven digital reference manual for evidence-based obstetrics and gynecology guidelines, high-risk labor management protocols, and emergency algorithms.',
    category: 'Practice Guidelines',
    iconUrl: '/icons/ehc-obgyn-guidelines.png',
    liveUrl: 'https://ehc-obgyn-gl.vercel.app',
    githubUrl: 'https://github.com/roroleaks/ehc-obgyn-guidelines',
    primaryLanguage: 'JavaScript',
    featured: false,
    status: 'Production',
    badges: ['OBGYN Guidelines', 'Emergency Protocols', 'Medication Dosages', 'Fast Search'],
    color: {
      primary: '#e11d48', // Rose
      accent: '#fb7185',
      bg: 'rgba(225, 29, 72, 0.08)',
      border: 'rgba(251, 113, 133, 0.3)'
    },
    clinicalHighlights: [
      'Immediate access to obstetric emergency protocols (PPH, Severe Preeclampsia, Eclampsia)',
      'Weight-adjusted maternal pharmacotherapy dosages and infusion protocols',
      'Evidence-grounded guideline comparisons across ACOG, RCOG, and FIGO standards',
      'Mobile-optimized bedside interface for rapid point-of-care clinical review'
    ],
    supportedStandards: ['ACOG', 'RCOG', 'FIGO', 'WHO Maternal Guidelines'],
    exportFormats: ['Quick Protocol Card', 'Checklist PDF'],
    workflowSteps: [
      { step: '1', title: 'Search Protocol', desc: 'Instant search across emergency and elective OBGYN conditions.' },
      { step: '2', title: 'Protocol Review', desc: 'Step-by-step algorithms, medication timings, and contraindications.' },
      { step: '3', title: 'Clinical Checklists', desc: 'Interactive step-off checklist for delivery room and triage procedures.' }
    ]
  },
  {
    id: 'humanizer',
    name: 'Humanizer',
    tagline: 'Academic Writing Intelligence & Scientific Manuscript Refinement',
    description: 'Deterministic, chunk-based academic manuscript refinement platform with multi-provider AI failover, numerical invariant guards, protected clinical inventory preservation, and real-time integrity auditing.',
    category: 'Literature & Presentation',
    iconUrl: '/icons/humanizer.png',
    liveUrl: 'https://humanizer-orcin.vercel.app',
    githubUrl: 'https://github.com/roroleaks/Humanizer',
    primaryLanguage: 'TypeScript',
    featured: true,
    status: 'Production',
    badges: ['Semantic Chunking', 'Number Guard', 'Multi-Provider Failover', 'Protected Inventory', 'Integrity Auditing'],
    color: {
      primary: '#0b2545', // Deep Navy
      accent: '#13818b',  // Teal Accent
      bg: 'rgba(11, 37, 69, 0.08)',
      border: 'rgba(19, 129, 139, 0.3)'
    },
    clinicalHighlights: [
      'Two-pass deterministic semantic chunking with adjacent context summarization',
      'Strict numerical invariant guard preventing alteration of dosages, p-values, sample sizes, and statistics',
      'Protected inventory pre-ambles preserving specialized clinical terminology and proper nouns',
      'Multi-provider AI orchestrator with real-time failover across OpenAI, Gemini, and Anthropic'
    ],
    supportedStandards: ['ICMJE Guidelines', 'Academic Writing Integrity', 'Zero Numerical Alteration', 'Privacy Consent Enforced'],
    exportFormats: ['Refined Manuscript Text', 'Integrity Flag Report', 'Formatted Clipboard'],
    workflowSteps: [
      { step: '1', title: 'Manuscript Intake', desc: 'Paste manuscript or upload document with informed privacy consent verification.' },
      { step: '2', title: 'Refinement Config', desc: 'Configure academic style, intensity level, and primary/fallback AI provider engines.' },
      { step: '3', title: 'Semantic Chunking', desc: 'Applies two-pass semantic segmentation with strict numerical and entity protection.' },
      { step: '4', title: 'Streaming Refinement', desc: 'Streams refined academic prose in real time with automated integrity and flag auditing.' }
    ],
    authorNotes: 'Engineered by Dr. Raouf Roshdy to deliver deterministic, high-integrity scientific manuscript refinement while strictly preserving quantitative evidence.'
  },
  {
    id: 'rorogpt',
    name: 'RoroGPT',
    tagline: 'Intelligent Clinical Reasoning & Biomedical Dialogue Assistant',
    description: 'Conversational clinical intelligence system calibrated for biomedical inquiry, differential diagnosis reasoning, and medical education guidance.',
    category: 'Medical AI & Search',
    iconUrl: '/icons/rorogpt.png',
    liveUrl: 'https://rorogpt.uk',
    githubUrl: 'https://github.com/roroleaks/rorogpt',
    primaryLanguage: 'JavaScript',
    featured: false,
    status: 'Production',
    badges: ['Clinical AI Dialogue', 'Diagnostic Reasoning', 'Multi-Turn Chat', 'Medical Lexicon'],
    color: {
      primary: '#6366f1', // Indigo
      accent: '#818cf8',
      bg: 'rgba(99, 102, 241, 0.08)',
      border: 'rgba(129, 140, 248, 0.3)'
    },
    clinicalHighlights: [
      'Multi-turn clinical dialogue tailored for healthcare practitioners and researchers',
      'Explicit disclosure of clinical uncertainty and diagnostic differential trees',
      'Support for laboratory value interpretation and pharmacological mechanisms',
      'Keyboard shortcuts, copyable code/citation blocks, and session persistence'
    ],
    supportedStandards: ['Clinical NLP', 'Medical Dialogue Architecture'],
    exportFormats: ['Chat Transcript Markdown', 'Clinical Note Summary'],
    workflowSteps: [
      { step: '1', title: 'Clinical Case Prompt', desc: 'Present patient scenario, symptom constellation, or research question.' },
      { step: '2', title: 'Reasoning Breakdown', desc: 'Assistant breaks down pathophysiology, differentials, and workup options.' },
      { step: '3', title: 'Refinement', desc: 'Probe deeper into evidence basis, contraindications, and clinical nuances.' }
    ]
  },
  {
    id: 'free-ai-tracker',
    name: 'Free AI Tracker',
    tagline: 'Real-Time Frontier AI Free-Tier & Quota Intelligence Dashboard',
    description: 'Monitors the latest state-of-the-art free AI tiers, context limits, request rate limits, and API specs across major providers for developers and researchers.',
    category: 'Medical AI & Search',
    iconUrl: '/icons/free-ai-tracker.png',
    liveUrl: 'https://free-ai-tracker.vercel.app',
    githubUrl: 'https://github.com/roroleaks/free-ai-tracker',
    primaryLanguage: 'JavaScript',
    featured: false,
    status: 'Production',
    badges: ['AI Benchmarks', 'Rate Limits', 'API Tiers', 'Live Monitor'],
    color: {
      primary: '#14b8a6', // Teal
      accent: '#2dd4bf',
      bg: 'rgba(20, 184, 166, 0.08)',
      border: 'rgba(45, 212, 191, 0.3)'
    },
    clinicalHighlights: [
      'Tracks free API quotas for Gemini, Groq, Mistral, OpenAI, and Anthropic',
      'Context window sizes, RPM/TPM restrictions, and latency metrics compared side-by-side',
      'Filterable by modality: Text, Vision, Code, and Tool Use',
      'Direct copy buttons for base URLs and SDK initiation snippets'
    ],
    supportedStandards: ['OpenAI Compatibility', 'Anthropic API', 'Google Gemini API'],
    exportFormats: ['API Specifications JSON', 'Comparison Table'],
    workflowSteps: [
      { step: '1', title: 'Filter Models', desc: 'Filter by provider, context size (128k, 1M+), and rate limits.' },
      { step: '2', title: 'Compare Limits', desc: 'Review RPM, RPD, and TPM quotas to architect zero-cost AI pipelines.' },
      { step: '3', title: 'Deploy Free', desc: 'Copy verified model slugs and SDK endpoints directly into your codebase.' }
    ]
  },
  {
    id: 'kashef',
    name: 'Kashef (كاشف)',
    tagline: 'Probabilistic AI Text Estimation & Evidence Breakdown',
    description: 'Evidence-grounded probabilistic evaluation estimating AI text authorship likelihood across biomedical papers, manuscripts, and clinical trials via multi-signal stylometry and zero-retention language model analysis.',
    category: 'Critical Appraisal',
    iconUrl: '/icons/kashef.png',
    liveUrl: 'https://kashef-psi.vercel.app',
    githubUrl: 'https://github.com/roroleaks/kashef',
    primaryLanguage: 'TypeScript',
    featured: true,
    status: 'Production',
    badges: ['Burstiness Variance', 'MATTR Richness', 'Hapax Rate', 'Zero-Data Retention', 'SSRF Guard'],
    color: {
      primary: '#1a5c8a', // Kashef Classic Slate-Navy
      accent: '#4da8da',
      bg: 'rgba(26, 92, 138, 0.08)',
      border: 'rgba(77, 168, 218, 0.3)'
    },
    clinicalHighlights: [
      'Multi-signal statistical stylometry (Burstiness variance, Moving-Average TTR, Hapax legomena rate, N-gram repetition, Function-word density)',
      'Server-side zero-data-retention Engine B evaluation with automatic graceful fallback to Engine A',
      'Full in-memory document parsing (.docx, .pdf up to 10 MB) and SSRF-hardened URL ingestion (3-hop cap)',
      'Granular per-paragraph heat-maps and transparent probabilistic ranges [low, high] with zero binary assertions'
    ],
    supportedStandards: ['ICMJE Guidelines', 'Unicode Tokenization', 'WCAG AA Accessible', 'SSRF RFC 1918/IPv6 Block'],
    exportFormats: ['Structured Evidence JSON', 'Interactive Heat-Map', 'Formatted Clipboard'],
    workflowSteps: [
      { step: '1', title: 'Input Ingestion', desc: 'Paste text (>= 250 words), upload .docx / .pdf (up to 10 MB), or fetch an article URL with SSRF protection.' },
      { step: '2', title: 'Multi-Signal Stylometry', desc: 'Engine A calculates burstiness, MATTR lexical diversity, hapax rate, and function-word density in volatile memory.' },
      { step: '3', title: 'LLM Forensics', desc: 'Optional server-side Engine B evaluates semantic predictability, formulaic transitions, and authorial voice.' },
      { step: '4', title: 'Consensus & Breakdown', desc: 'Consensus combiner outputs calibrated probability ranges, per-paragraph heat-map, and JSON export.' }
    ],
    authorNotes: 'Engineered by Dr. Raouf Roshdy to provide transparent, probabilistic AI text estimation for scientific integrity without unscientific binary claims.'
  }
];

export const CATEGORIES: AppCategory[] = [
  'All',
  'Clinical CDSS',
  'Evidence Synthesis',
  'Critical Appraisal',
  'Literature & Presentation',
  'Practice Guidelines',
  'Medical AI & Search'
];
