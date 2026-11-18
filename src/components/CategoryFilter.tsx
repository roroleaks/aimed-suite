import React from 'react';
import { AppCategory } from '../types';
import { CATEGORIES } from '../data/apps';

interface CategoryFilterProps {
  selectedCategory: AppCategory;
  onSelectCategory: (cat: AppCategory) => void;
  appCounts: Record<AppCategory, number>;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  appCounts
}) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-none py-1 -mx-4 px-4 sm:mx-0 sm:px-0">
      {CATEGORIES.map((category) => {
        const isSelected = selectedCategory === category;
        const count = appCounts[category as AppCategory] || 0;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            className={`h-9 btn-press whitespace-nowrap px-3.5 rounded-xl text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-1 focus-visible:outline-none transition-colors duration-150 shrink-0 ${
              isSelected
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200/90'
            }`}
          >
            <span>{category}</span>
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold tabular-nums ${
                isSelected
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-100 text-slate-600'
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
