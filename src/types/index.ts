export type AppCategory = 
  | 'All'
  | 'Clinical CDSS'
  | 'Evidence Synthesis'
  | 'Critical Appraisal'
  | 'Literature & Presentation'
  | 'Practice Guidelines'
  | 'Medical AI & Search';

export interface AppItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: AppCategory;
  liveUrl: string;
  githubUrl: string;
  primaryLanguage: string;
  featured?: boolean;
  status: 'Operational' | 'Production' | 'Active';
  badges: string[];
  color: {
    primary: string;
    accent: string;
    bg: string;
    border: string;
  };
  clinicalHighlights: string[];
  supportedStandards: string[];
  exportFormats: string[];
  workflowSteps: {
    step: string;
    title: string;
    desc: string;
  }[];
  authorNotes?: string;
}
