import React from 'react';
import { Plus } from 'lucide-react';

export default function ProductCard({ product, onSelect }) {
  return (
    <div
      onClick={() => onSelect(product)}
      className="bg-white hover:bg-gray-50/80 border-b border-gray-100 py-4 px-4 flex items-center justify-between gap-4 cursor-pointer transition active:bg-gray-100"
    >
      {/* Información del Plato (Izquierda) */}
      <div className="flex-1 min-w-0 pr-1">
        {product.tag && (
          <span className="text-[10px] font-bold text-[#ff441f] bg-[#fff2ef] px-2 py-0.5 rounded-md inline-block mb-1">
            {product.tag}
          </span>
        )}

        <h4 className="text-sm font-bold text-gray-900 leading-snug">
          {product.name}
        </h4>

        <p className="text-xs text-gray-500 line-clamp-2 mt-1 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-sm font-black text-gray-900">
            S/ {product.price.toFixed(2)}
          </span>
          {product.oldPrice && (
            <span className="text-xs text-gray-400 line-through">
              S/ {product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>

      {/* Imagen y Botón Agregar (Derecha, estilo Rappi) */}
      <div className="relative shrink-0 w-24 h-24 rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Botón flotante '+ Agregar' */}
        <button
          type="button"
          className="absolute bottom-1.5 right-1.5 bg-white text-gray-800 hover:text-[#ff441f] w-7 h-7 rounded-full flex items-center justify-center shadow-md border border-gray-200 transition active:scale-90"
        >
          <Plus size={15} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
