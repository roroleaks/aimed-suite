# AIMed Suite — Unified Medical AI & Clinical Research Umbrella Portal

> **Unified Biomedical Informatics & Clinical Decision Support Ecosystem**  
> Engineered by **Dr. Raouf Roshdy** (`@roroleaks`)

A production-grade umbrella web portal consolidating **12 specialized biomedical web applications** under a unified branding design system, cohesive clinical navigation, and dedicated in-portal interactive workspaces (`/app/:id`) deployed on Vercel.

---

## 🏥 Consolidated Applications in the Umbrella Suite

| # | Application | Category | Live URL / Endpoint | GitHub Repository | Primary Capabilities |
|---|---|---|---|---|---|
| 1 | **AIPICO v3.1** | Clinical CDSS | `https://aipico-app.vercel.app` | [`roroleaks/AIPICO-app`](https://github.com/roroleaks/AIPICO-app) | Deterministic PICO evidence retrieval (OBGYN), claim filtering, Vancouver superscripts, Word & PDF exports. |
| 2 | **Aimed** | Evidence Synthesis | In-Portal Workspace | [`roroleaks/AIMED`](https://github.com/roroleaks/AIMED) | Universal multi-specialty clinical intelligence across 15 core medical disciplines (ACOG, AHA, NCCN, AAP, KDIGO). |
| 3 | **AppraisAI** | Critical Appraisal | `https://apprais-ai.vercel.app` | [`roroleaks/AppraisAI`](https://github.com/roroleaks/AppraisAI) | Automated paper critical appraisal adhering to EQUATOR checklists, Cochrane RoB 2.0, AMSTAR-2, and GRADE. |
| 4 | **Preppt** | Literature & Presentation | `https://preppt-ebon.vercel.app` | [`roroleaks/Preppt`](https://github.com/roroleaks/Preppt) | Europe PMC & Semantic Scholar dual retrieval, multi-factor ranking, and publication-grade Word slide card export. |
| 5 | **SciDraft AI** | Academic Writing | `https://scidraft-ai.vercel.app` | [`roroleaks/scidraft-ai`](https://github.com/roroleaks/scidraft-ai) | Systematic literature harvesting, Oxford CEBM Evidence Hierarchy (Levels 1–5), and synchronized Vancouver/APA citations. |
| 6 | **SysrevAI** | Evidence Synthesis | `https://sysrevai.vercel.app` | [`roroleaks/Sysrevai`](https://github.com/roroleaks/Sysrevai) | PRISMA 2020 systematic review screening, automated deduplication, and structured PICO extraction. |
| 7 | **AIVF** | Clinical CDSS | `https://aivf-precision.vercel.app` | [`roroleaks/AIVF`](https://github.com/roroleaks/AIVF) | AI-IVF Clinical Decision Support System: ESHRE 2025 individualized controlled ovarian stimulation (COS), CONSORT nomogram, and POSEIDON stratification. |
| 8 | **EHC OBGYN Guidelines** | Practice Guidelines | `https://ehc-obgyn-gl.vercel.app` | [`roroleaks/ehc-obgyn-guidelines`](https://github.com/roroleaks/ehc-obgyn-guidelines) | Interactive bedside reference manual for obstetric emergencies, high-risk labor management, and pharmacotherapy. |
| 9 | **AMS Medical Search** | Medical AI & Search | `https://ams-eg.lovable.app` | [`roroleaks/ams-eg`](https://github.com/roroleaks/ams-eg) | High-precision semantic search engine ranking exact excerpts and paragraphs across clinical pharmaceutical documentation. |
| 10 | **RoroGPT** | Medical AI & Search | `https://rorogpt.vercel.app` | [`roroleaks/rorogpt`](https://github.com/roroleaks/rorogpt) | Intelligent clinical reasoning assistant calibrated for biomedical inquiry, differential diagnosis, and medical education. |
| 11 | **Free AI Tracker** | Medical AI & Search | `https://free-ai-tracker.vercel.app` | [`roroleaks/free-ai-tracker`](https://github.com/roroleaks/free-ai-tracker) | Real-time tracker for free-tier frontier AI models (Gemini, Groq, Mistral, OpenAI), context limits, and API quotas. |
| 12 | **Kashef (كاشف)** | Critical Appraisal | `https://kashef-psi.vercel.app` | [`roroleaks/kashef`](https://github.com/roroleaks/kashef) | Probabilistic AI text estimation & evidence breakdown across biomedical papers and manuscripts via multi-signal stylometry and zero-retention LLM forensics. |

---

## 🌟 Key Architecture & Features

1. **Unified Umbrella Branding**:
   - Distinctive clinical teal & dark slate aesthetic matching the AIMed Biomedical Informatics design language.
   - Live metrics summary: 12 Web Apps, 15+ Medical Specialties, 100% Deterministic Evidence Parity, ICMJE Vancouver & APA formatting.
   - Real-time search and filterable category pills (`All`, `Clinical CDSS`, `Evidence Synthesis`, `Critical Appraisal`, `Literature & Presentation`, `Practice Guidelines`, `Medical AI & Search`).

2. **Dedicated Route for Every Application (`/app/:id`)**:
   - Every repo has its own dedicated page on the same Vercel URL (e.g. `/app/aipico`, `/app/aimed`, `/app/apprais-ai`, `/app/preppt`, `/app/scidraft-ai`, etc.).
   - Interactive Live Web App Runner: Users can use the actual live web application directly inside the portal without navigating away.
   - Control Toolbar: Quick app switcher dropdown, full-screen toggle, reload frame, and external tab launcher.
   - Slide-out Clinical Specifications Drawer: Details the clinical workflow, deterministic integrity rules, supported citation formats, and author notes.

3. **Production Deployment on Vercel**:
   - Single-page application architecture configured with `vercel.json` rewrites for clean URL resolution.
   - Zero cold start, high-performance static delivery on Vercel's global edge network.

---

## 🛠️ Local Development

```bash
# Clone or navigate to the project directory
cd roshdy-med-suite

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the portal.

---

## 🚀 Deploying to Vercel

### Method A: Via GitHub (Recommended)
1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: initial release of AIMed umbrella suite"
   gh repo create roroleaks/aimed-suite --public --source=. --remote=origin --push
   ```
2. In your [Vercel Dashboard](https://vercel.com/new), click **"Add New Project"** and select `aimed-suite`.
3. Vercel will auto-detect Vite and deploy it to a fresh URL (e.g. `https://aimed-suite.vercel.app`)!

### Method B: Via Vercel CLI
```bash
npx vercel --prod
```

---

## 👨‍⚕️ Author & Clinical Attribution

- **Lead Investigator & Creator:** Dr. Raouf Roshdy ([@roroleaks](https://github.com/roroleaks))
- **Initiative:** AIMed Biomedical Informatics & Clinical AI Ecosystem
- **Focus:** Deterministic Evidence Synthesis, Critical Appraisal, and Clinical Decision Support
