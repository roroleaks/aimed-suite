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
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none py-1">
      {CATEGORIES.map((category) => {
        const isSelected = selectedCategory === category;
        const count = appCounts[category as AppCategory] || 0;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            className={`btn-press whitespace-nowrap px-3.5 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-1 focus-visible:outline-none transition-colors duration-150 ${
              isSelected
                ? 'bg-teal-600 text-white font-semibold shadow-xs'
                : 'bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200/90'
            }`}
          >
            <span>{category}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold tabular-nums ${
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
