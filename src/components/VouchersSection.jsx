import React from 'react';
import { Ticket, Sparkles, Check } from 'lucide-react';

export default function VouchersSection({ vouchers, onClaimVoucher }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between px-1">
        <h3 className="text-xs font-black uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
          <Ticket size={13} className="text-amber-400" />
          Cupones & Promos Activas
        </h3>
        <span className="text-[10px] text-orange-400 font-bold">Ver todos (3)</span>
      </div>

      {/* Horizontal Carousel of Vouchers (Estilo McDonald's Screenshot) */}
      <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-1">
        {vouchers.map((v) => (
          <div
            key={v.id}
            className="shrink-0 w-64 bg-[#1a1e2c] border border-white/10 rounded-2xl p-3 flex items-center justify-between gap-2 shadow-lg relative overflow-hidden"
          >
            {/* Tag badge */}
            <span className="absolute -top-1 -right-1 bg-amber-500 text-black text-[9px] font-black px-2 py-0.5 rounded-bl-xl shadow">
              {v.tag}
            </span>

            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                <Sparkles size={18} />
              </div>
              <div>
                <h4 className="text-xs font-black text-white">{v.title}</h4>
                <p className="text-[10px] text-slate-400">{v.desc}</p>
                <span className="text-[9px] font-mono font-bold text-amber-300 bg-black/40 px-1.5 py-0.2 rounded inline-block mt-0.5">
                  CÓD: {v.code}
                </span>
              </div>
            </div>

            <button
              onClick={() => onClaimVoucher(v.id)}
              disabled={v.claimed}
              className={`text-[10px] font-black px-2.5 py-1.5 rounded-xl transition shrink-0 flex items-center gap-1 ${
                v.claimed
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-md active:scale-95'
              }`}
            >
              {v.claimed ? (
                <>
                  <Check size={11} strokeWidth={3} />
                  <span>Aplicado</span>
                </>
              ) : (
                <span>Reclamar</span>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
