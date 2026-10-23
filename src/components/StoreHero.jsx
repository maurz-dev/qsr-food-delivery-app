import React from 'react';
import { STORE_INFO } from '../data/menuData';
import { Star, Clock, Bike, ArrowLeft, Heart, Share2, Search, MapPin, ChevronDown, ShieldCheck } from 'lucide-react';

export default function StoreHero({ orderType, onOrderTypeChange, onSearchClick }) {
  return (
    <div className="bg-white border-b border-gray-200">
      {/* Top Bar de Navegación de Restaurante (Estilo Rappi / Uber Eats) */}
      <div className="px-4 py-2.5 flex items-center justify-between bg-white border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
            <MapPin size={16} className="text-[#ff441f]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
              Entregar en
            </span>
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold text-gray-900 truncate max-w-[200px]">
                Av. Las Palmeras 450, Los Olivos
              </span>
              <ChevronDown size={14} className="text-gray-500" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onSearchClick}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition"
          >
            <Search size={16} />
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition">
            <Heart size={16} />
          </button>
        </div>
      </div>

      {/* Cover Image */}
      <div className="relative h-36 w-full bg-gray-100">
        <img
          src={STORE_INFO.coverImage}
          alt={STORE_INFO.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        <div className="absolute bottom-3 left-4">
          <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
            {STORE_INFO.openingHours}
          </span>
        </div>
      </div>

      {/* Restaurant Header Information Sheet */}
      <div className="px-4 py-3.5 space-y-2.5">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">
              {STORE_INFO.name}
            </h1>
            <p className="text-xs text-gray-500 mt-0.5 font-medium">
              {STORE_INFO.category} • {STORE_INFO.address}
            </p>
          </div>

          <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-1 rounded-xl text-xs font-bold border border-amber-200">
            <Star size={12} fill="#d97706" />
            <span>{STORE_INFO.rating}</span>
            <span className="text-gray-400 font-normal">({STORE_INFO.reviewsCount})</span>
          </div>
        </div>

        {/* Métricas de entrega estilo Rappi */}
        <div className="flex items-center gap-3 text-xs text-gray-600 pt-1 font-medium border-t border-gray-100">
          <div className="flex items-center gap-1">
            <Clock size={13} className="text-gray-400" />
            <span>{STORE_INFO.deliveryTime}</span>
          </div>
          <span className="text-gray-300">•</span>
          <div className="flex items-center gap-1">
            <Bike size={13} className="text-[#ff441f]" />
            <span>S/ {STORE_INFO.deliveryFee.toFixed(2)} envío</span>
          </div>
          <span className="text-gray-300">•</span>
          <span>{STORE_INFO.distance}</span>
        </div>

        {/* Banner de Envío Gratis / Promoción Rappi */}
        <div className="bg-[#fff2ef] border border-[#ff441f]/20 rounded-xl px-3 py-2 flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#ff441f] text-white flex items-center justify-center shrink-0">
            <ShieldCheck size={12} />
          </div>
          <p className="text-[11px] text-[#ff441f] font-semibold">
            Envío gratis disponible en órdenes superiores a S/ 25.00
          </p>
        </div>

        {/* Selector de Entrega vs Para Llevar */}
        <div className="flex p-1 bg-gray-100 rounded-xl mt-1">
          <button
            onClick={() => onOrderTypeChange('delivery')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition ${
              orderType === 'delivery'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Entrega a Domicilio
          </button>
          <button
            onClick={() => onOrderTypeChange('pickup')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition ${
              orderType === 'pickup'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Para Llevar (Sin cola)
          </button>
        </div>
      </div>
    </div>
  );
}
