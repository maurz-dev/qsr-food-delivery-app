import React from 'react';
import { STORE_INFO } from '../data/menuData';
import { Star, Clock, MapPin, Bike, ShoppingBag, Store, Users, Calendar, ChevronDown, Bell } from 'lucide-react';

export default function StoreHero({ orderType, onOrderTypeChange, onOpenAddressModal }) {
  return (
    <div className="relative bg-[#131620] pb-2">
      {/* Top Location Bar (como Uber Eats / Rappi) */}
      <div className="px-4 py-2.5 flex items-center justify-between bg-[#0e1015] border-b border-white/5">
        <button
          onClick={onOpenAddressModal}
          className="flex items-center gap-1.5 text-left text-xs text-slate-300 hover:text-white"
        >
          <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
            <MapPin size={13} />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-extrabold text-white text-xs">Av. Las Palmeras 450</span>
              <ChevronDown size={12} className="text-orange-400" />
            </div>
            <span className="text-[10px] text-slate-400">Los Olivos • Lima</span>
          </div>
        </button>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full text-[10px] font-bold border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Plancha ON</span>
          </div>
        </div>
      </div>

      {/* Cover Image con Overlay Degradado */}
      <div className="relative h-36 w-full overflow-hidden">
        <img
          src={STORE_INFO.coverImage}
          alt={STORE_INFO.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131620] via-black/40 to-black/20"></div>

        {/* Floating Discount Pill */}
        <div className="absolute top-3 left-3 bg-red-600/90 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-lg border border-white/20">
          🔥 HASTA 25% OFF EN COMBOS
        </div>
      </div>

      {/* Card Flotante del Restaurante (Estilo McDonald's & Roky's) */}
      <div className="px-4 -mt-10 relative z-10">
        <div className="bg-[#1a1e2c] border border-white/10 rounded-3xl p-3.5 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-3">
            {/* Logo de la marca */}
            <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 border-2 border-amber-400 shadow-md">
              <img
                src={STORE_INFO.logo}
                alt="Logo"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-0 inset-x-0 bg-orange-600 text-[8px] font-black text-center text-white py-0.5">
                PUNTO
              </span>
            </div>

            {/* Info y Datos */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h1 className="text-base font-black text-white truncate">
                  {STORE_INFO.name}
                </h1>
              </div>
              <p className="text-[11px] text-slate-400 truncate mt-0.5">
                {STORE_INFO.tagline} • {STORE_INFO.address}
              </p>

              {/* Badges de Ratings y Delivery */}
              <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                <div className="flex items-center gap-1 bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-lg text-[10px] font-extrabold border border-amber-500/30">
                  <Star size={10} fill="#f59e0b" />
                  <span>{STORE_INFO.rating}</span>
                  <span className="text-white/60 font-normal">({STORE_INFO.reviewsCount})</span>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-lg border border-emerald-500/20">
                  <Bike size={11} />
                  <span>Envío Gratis desde S/ 25</span>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-slate-400">
                  <Clock size={11} className="text-orange-400" />
                  <span>{STORE_INFO.deliveryTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons (Estilo McDonald's Screenshot) */}
          <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/5">
            <button className="flex items-center justify-center gap-1.5 py-1.5 px-2 bg-[#23283b] hover:bg-[#2b3147] rounded-xl text-[11px] font-bold text-slate-200 border border-white/5 transition">
              <Users size={12} className="text-orange-400" />
              <span>Pedido Grupal</span>
              <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded font-black">
                15% OFF
              </span>
            </button>
            <button className="flex items-center justify-center gap-1.5 py-1.5 px-2 bg-[#23283b] hover:bg-[#2b3147] rounded-xl text-[11px] font-bold text-slate-200 border border-white/5 transition">
              <Calendar size={12} className="text-amber-400" />
              <span>Programar Entrega</span>
            </button>
          </div>
        </div>

        {/* Selector de Modo de Entrega Integrado */}
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#161925] rounded-2xl border border-white/5 mt-3 shadow-inner">
          <button
            onClick={() => onOrderTypeChange('delivery')}
            className={`py-2 px-1 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition ${
              orderType === 'delivery'
                ? 'bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bike size={14} />
            <span>Delivery</span>
          </button>

          <button
            onClick={() => onOrderTypeChange('pickup')}
            className={`py-2 px-1 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition ${
              orderType === 'pickup'
                ? 'bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShoppingBag size={14} />
            <span>Al Paso</span>
          </button>

          <button
            onClick={() => onOrderTypeChange('dine_in')}
            className={`py-2 px-1 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition ${
              orderType === 'dine_in'
                ? 'bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Store size={14} />
            <span>En Mesa</span>
          </button>
        </div>
      </div>
    </div>
  );
}
