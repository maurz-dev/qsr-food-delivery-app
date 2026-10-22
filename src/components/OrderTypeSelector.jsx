import React from 'react';
import { Bike, ShoppingBag, Store } from 'lucide-react';

export default function OrderTypeSelector({ currentType, onChange }) {
  const options = [
    {
      id: 'pickup',
      title: 'Al Paso (Para llevar)',
      badge: '⚡ Sin cola: 10-12 min',
      icon: ShoppingBag,
      subtitle: 'Recoges en el carrito'
    },
    {
      id: 'delivery',
      title: 'Delivery Express',
      badge: '🛵 25-35 min',
      icon: Bike,
      subtitle: 'A tu domicilio o trabajo'
    },
    {
      id: 'dine_in',
      title: 'Comer en la Barra',
      badge: '🪑 Banquito al aire libre',
      icon: Store,
      subtitle: 'Servido al instante'
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#12141c] rounded-2xl border border-slate-800">
      {options.map((opt) => {
        const Icon = opt.icon;
        const isActive = currentType === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={`py-2 px-1.5 rounded-xl flex flex-col items-center text-center transition-all ${
              isActive
                ? 'bg-gradient-to-b from-orange-500/20 to-amber-500/10 border border-orange-500/60 shadow-sm'
                : 'hover:bg-slate-800/40 border border-transparent'
            }`}
          >
            <div
              className={`w-7 h-7 rounded-lg flex items-center justify-center mb-1 ${
                isActive ? 'bg-orange-500 text-white' : 'text-slate-400 bg-slate-800'
              }`}
            >
              <Icon size={14} />
            </div>
            <span
              className={`text-[11px] font-bold leading-tight ${
                isActive ? 'text-white' : 'text-slate-400'
              }`}
            >
              {opt.title}
            </span>
            <span
              className={`text-[9px] font-medium mt-0.5 ${
                isActive ? 'text-amber-400' : 'text-slate-500'
              }`}
            >
              {opt.badge}
            </span>
          </button>
        );
      })}
    </div>
  );
}
