import React from 'react';
import { MENU_CATEGORIES } from '../data/menuData';
import { Search, Flame, ShoppingBag, MapPin, Sparkles } from 'lucide-react';

export default function HeaderNav({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  cartCount,
  onOpenCart,
  orderType
}) {
  return (
    <div className="shrink-0 bg-[#0e1015]/95 backdrop-blur-md border-b border-slate-800/80 px-4 pt-1 pb-3 space-y-3 z-30">
      {/* Brand Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-base font-black text-white tracking-tight flex items-center gap-1">
              EL BAJÓN <span className="text-orange-500 font-extrabold">SANGUCHERO</span>
            </span>
            <span className="bg-orange-500/20 text-orange-400 text-[9px] font-bold px-1.5 py-0.5 rounded-md border border-orange-500/30">
              AL PASO
            </span>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-semibold mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Abierto • 6:00 PM a 4:00 AM (Plancha caliente 🔥)</span>
          </div>
        </div>

        {/* Cart Button */}
        <button
          onClick={onOpenCart}
          className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 text-white flex items-center justify-center shadow-lg shadow-orange-600/30 active:scale-95 transition"
        >
          <ShoppingBag size={18} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-600 text-white text-[11px] font-black flex items-center justify-center border-2 border-[#0e1015] animate-bounce">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Buscador Rápido */}
      <div className="relative">
        <Search
          size={14}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          placeholder="Buscar salchipapa, pollo deshilachado, broaster..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-[#171922] border border-slate-800 focus:border-orange-500 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none transition"
        />
      </div>

      {/* Pills de Categorías Scrolleables */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-0.5">
        {MENU_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap transition-all flex items-center gap-1 shrink-0 ${
                isActive
                  ? 'bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-md shadow-orange-500/25 scale-[1.02]'
                  : 'bg-[#171922] text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
