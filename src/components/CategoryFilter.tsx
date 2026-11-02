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
            onClick={() => onSelectCategory(category)}
            className={`whitespace-nowrap px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
              isSelected
                ? 'bg-teal-600 text-white font-semibold shadow-sm'
                : 'bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200/90'
            }`}
          >
            <span>{category}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
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
