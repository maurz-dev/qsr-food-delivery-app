import React from 'react';
import { Star, Clock, Plus, Heart } from 'lucide-react';

export default function ProductCard({ product, onSelect, isFavorite, onToggleFavorite }) {
  return (
    <div
      onClick={() => onSelect(product)}
      className="bg-[#171922] hover:bg-[#1c1f2b] border border-slate-800/80 hover:border-orange-500/50 rounded-2xl p-3 flex gap-3 transition-all cursor-pointer shadow-sm hover:shadow-lg group relative overflow-hidden active:scale-[0.99]"
    >
      {/* Botón de Favorito Flotante */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(product.id);
        }}
        className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-slate-300 hover:text-red-500 z-10 transition border border-white/10"
      >
        <Heart
          size={14}
          className={isFavorite ? 'text-red-500 fill-red-500' : 'text-slate-400'}
        />
      </button>

      {/* Thumbnail de Comida */}
      <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 bg-slate-900">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-1 left-1">
          <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-md bg-orange-600/90 text-white backdrop-blur-sm">
            {product.badge}
          </span>
        </div>
      </div>

      {/* Info del Producto */}
      <div className="flex-1 flex flex-col justify-between min-w-0 pr-6">
        <div>
          <div className="flex items-center justify-between gap-1">
            <h4 className="text-xs font-extrabold text-white truncate group-hover:text-amber-400 transition-colors">
              {product.name}
            </h4>
          </div>

          <div className="flex items-center gap-1 text-[10px] font-bold text-amber-400 mt-0.5">
            <Star size={10} fill="#f59e0b" />
            <span>{product.rating}</span>
            <span className="text-slate-500 font-normal">({product.reviewsCount})</span>
          </div>

          <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-snug">
            {product.description}
          </p>
        </div>

        {/* Footer de la Card: Tiempo de cocción y Precio */}
        <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-slate-800/60">
          <div className="flex items-center gap-1 text-[10px] text-slate-400">
            <Clock size={11} className="text-orange-400" />
            <span>{product.prepTime}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-amber-400">
              S/ {product.price.toFixed(2)}
            </span>
            <button
              type="button"
              className="w-6 h-6 rounded-lg bg-orange-500/20 text-orange-400 group-hover:bg-orange-500 group-hover:text-white flex items-center justify-center transition"
            >
              <Plus size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
