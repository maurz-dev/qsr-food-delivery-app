import React from 'react';
import { PROMO_BANNERS } from '../data/menuData';
import { Tag, ArrowRight } from 'lucide-react';

export default function VouchersSection() {
  return (
    <div className="py-3 px-4 bg-white border-b border-gray-100">
      <div className="flex gap-3 overflow-x-auto no-scrollbar">
        {PROMO_BANNERS.map((promo) => (
          <div
            key={promo.id}
            className={`shrink-0 w-72 rounded-2xl p-3.5 text-white shadow-sm flex items-center justify-between ${promo.bg}`}
          >
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider bg-black/20 px-2 py-0.5 rounded-md inline-block mb-1">
                {promo.badge}
              </span>
              <h4 className="text-xs font-bold leading-tight">{promo.title}</h4>
              <p className="text-[10px] text-white/80 mt-0.5">{promo.subtitle}</p>
            </div>
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <ArrowRight size={14} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
