import React from 'react';
import { Star, Clock, Plus, Heart, Flame } from 'lucide-react';

export default function ProductCard({
  product,
  onSelect,
  isFavorite,
  onToggleFavorite
}) {
  return (
    <div
      onClick={() => onSelect(product)}
      className="bg-[#1a1e2c] hover:bg-[#202538] border border-white/10 hover:border-orange-500/50 rounded-3xl p-3 flex flex-col justify-between transition-all duration-200 cursor-pointer shadow-lg hover:shadow-2xl group relative active:scale-[0.98]"
    >
      {/* Botón de Favorito Flotante */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(product.id);
        }}
        className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-slate-300 hover:text-red-500 z-10 transition border border-white/15"
      >
        <Heart
          size={13}
          className={isFavorite ? 'text-red-500 fill-red-500' : 'text-slate-400'}
        />
      </button>

      {/* Badge de Categoría / Status */}
      <div className="absolute top-2.5 left-2.5 z-10">
        <span
          className={`text-[9px] font-black px-2 py-0.5 rounded-full text-white backdrop-blur-md shadow-md ${product.badgeColor}`}
        >
          {product.badge}
        </span>
      </div>

      {/* Imagen Principal de Comida (Estilo McDonald's & Roky's) */}
      <div className="relative w-full h-32 rounded-2xl overflow-hidden mb-2.5 bg-slate-900 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Información del Plato */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h4 className="text-xs font-black text-white group-hover:text-amber-400 transition-colors leading-snug line-clamp-1">
            {product.name}
          </h4>
          <p className="text-[10px] text-slate-400 truncate mt-0.5">
            {product.subtitle}
          </p>

          {/* Calorías & Tiempo (Como en McDonald's) */}
          <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-1.5 font-medium">
            <span className="flex items-center gap-0.5 text-orange-400 font-bold">
              <Flame size={10} />
              {product.calories}
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-0.5">
              <Clock size={10} />
              {product.prepTime}
            </span>
          </div>
        </div>

        {/* Footer: Precio Grande y Botón Flotante */}
        <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">
              Precio
            </span>
            <span className="text-sm font-black text-amber-400">
              S/ {product.price.toFixed(2)}
            </span>
          </div>

          <button
            type="button"
            className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-600 to-amber-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-110 active:scale-95 transition"
          >
            <Plus size={16} strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
}
