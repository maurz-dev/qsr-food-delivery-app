import React from 'react';
import { MENU_CATEGORIES } from '../data/menuData';

export default function HeaderNav({ activeCategory, onSelectCategory }) {
  return (
    <div className="sticky top-0 bg-white border-b border-gray-200 z-30 shadow-sm">
      <div className="flex gap-2 px-4 py-2.5 overflow-x-auto no-scrollbar">
        {MENU_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`text-xs font-bold px-3.5 py-1.5 rounded-full whitespace-nowrap transition ${
                isActive
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
