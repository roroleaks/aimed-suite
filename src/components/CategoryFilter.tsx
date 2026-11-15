import React from 'react';
import { AppCategory } from '../types';
import { CATEGORIES } from '../data/apps';
import { 
  Grid, 
  Stethoscope, 
  GitMerge, 
  ShieldCheck, 
  Presentation, 
  BookOpenCheck, 
  Bot 
} from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: AppCategory;
  onSelectCategory: (cat: AppCategory) => void;
  appCounts: Record<AppCategory, number>;
}

const CATEGORY_ICONS: Record<AppCategory, React.ComponentType<{ className?: string }>> = {
  All: Grid,
  'Clinical CDSS': Stethoscope,
  'Evidence Synthesis': GitMerge,
  'Critical Appraisal': ShieldCheck,
  'Literature & Presentation': Presentation,
  'Practice Guidelines': BookOpenCheck,
  'Medical AI & Search': Bot,
};

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  appCounts
}) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none py-1">
      {CATEGORIES.map((category) => {
        const isSelected = selectedCategory === category;
        const count = appCounts[category as AppCategory] || 0;
        const IconComponent = CATEGORY_ICONS[category as AppCategory] || Grid;

        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`whitespace-nowrap px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-2xs active:scale-[0.98] ${
              isSelected
                ? 'bg-teal-600 text-white font-semibold shadow-xs shadow-teal-600/30'
                : 'bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200/90 hover:border-slate-300'
            }`}
          >
            <IconComponent className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
            <span>{category}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold transition-colors ${
                isSelected
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-100 text-slate-500'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
