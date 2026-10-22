import React from 'react';
import { MENU_CATEGORIES } from '../data/menuData';
import { Search, ShoppingBag, Sparkles, Utensils, Drumstick, Sandwich, CupSoda } from 'lucide-react';

const iconMap = {
  Sparkles,
  Utensils,
  Drumstick,
  Sandwich,
  CupSoda
};

export default function HeaderNav({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  cartCount,
  onOpenCart
}) {
  return (
    <div className="sticky top-0 bg-[#0e1015]/95 backdrop-blur-xl border-b border-white/5 px-4 pt-2.5 pb-2 space-y-2.5 z-30 shadow-md">
      {/* Search Input & Cart Button */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search
            size={14}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="¿Qué se te antoja hoy? (Salchipapa, Broaster...)"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-[#1a1e2c] border border-white/10 focus:border-orange-500 rounded-2xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none transition"
          />
        </div>

        <button
          onClick={onOpenCart}
          className="relative w-9 h-9 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/25 active:scale-95 transition shrink-0"
        >
          <ShoppingBag size={16} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-600 text-white text-[10px] font-black flex items-center justify-center border-2 border-[#0e1015]">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Category Pills Scrolleables con Iconos Dinámicos */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
        {MENU_CATEGORIES.map((cat) => {
          const Icon = iconMap[cat.icon] || Sparkles;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`text-xs font-extrabold px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 shrink-0 ${
                isActive
                  ? 'bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-lg shadow-orange-500/30 scale-[1.03]'
                  : 'bg-[#1a1e2c] text-slate-300 border border-white/5 hover:border-white/20'
              }`}
            >
              <Icon size={12} className={isActive ? 'text-white' : 'text-amber-400'} />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
