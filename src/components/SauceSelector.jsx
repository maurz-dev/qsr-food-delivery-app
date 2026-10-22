import React from 'react';
import { SAUCES_LIST } from '../data/menuData';
import { Check, Flame, ShieldAlert, Sparkles } from 'lucide-react';

export default function SauceSelector({ selectedSauces, onChange, sauceDeliveryMode, onModeChange }) {
  const toggleSauce = (sauceId) => {
    if (selectedSauces.includes(sauceId)) {
      onChange(selectedSauces.filter((id) => id !== sauceId));
    } else {
      onChange([...selectedSauces, sauceId]);
    }
  };

  const selectAll = () => {
    onChange(SAUCES_LIST.map((s) => s.id));
  };

  const selectNoSpicy = () => {
    onChange(SAUCES_LIST.filter((s) => !s.spicy).map((s) => s.id));
  };

  const selectClassicThree = () => {
    onChange(['mayo', 'aji_pollero', 'tartara']);
  };

  const clearAll = () => {
    onChange([]);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block animate-ping"></span>
            Barra de Cremas del Carrito
          </h4>
          <p className="text-xs text-slate-400">Selecciona las que desees (¡Sin costo extra!)</p>
        </div>
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">
          {selectedSauces.length} elegida(s)
        </span>
      </div>

      {/* Botones de selección rápida (Presets) */}
      <div className="flex flex-wrap gap-1.5">
        <button
          type="button"
          onClick={selectAll}
          className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-amber-300 border border-amber-400/30 hover:bg-amber-500/20 transition flex items-center gap-1"
        >
          <Sparkles size={12} /> ¡Todas las cremas!
        </button>
        <button
          type="button"
          onClick={selectClassicThree}
          className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-orange-300 border border-orange-500/30 hover:bg-orange-500/20 transition flex items-center gap-1"
        >
          Mayo + Ají + Tártara
        </button>
        <button
          type="button"
          onClick={selectNoSpicy}
          className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 transition flex items-center gap-1"
        >
          <ShieldAlert size={12} /> Sin picante
        </button>
        {selectedSauces.length > 0 && (
          <button
            type="button"
            onClick={clearAll}
            className="text-[11px] font-semibold px-2 py-1 rounded-full bg-slate-800 text-slate-400 hover:text-red-400 transition"
          >
            Limpiar
          </button>
        )}
      </div>

      {/* Grid de salsas con chips táctiles */}
      <div className="grid grid-cols-2 gap-2 max-h-44 overflow-y-auto pr-1 no-scrollbar">
        {SAUCES_LIST.map((sauce) => {
          const isSelected = selectedSauces.includes(sauce.id);
          return (
            <button
              key={sauce.id}
              type="button"
              onClick={() => toggleSauce(sauce.id)}
              className={`flex items-center justify-between p-2 rounded-xl text-left text-xs font-medium border transition-all ${
                isSelected
                  ? 'bg-orange-500/20 border-orange-500 text-white shadow-sm shadow-orange-500/20'
                  : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <span className="truncate pr-1">{sauce.name}</span>
              <div
                className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 transition ${
                  isSelected ? 'bg-orange-500 text-white' : 'border border-slate-700'
                }`}
              >
                {isSelected && <Check size={12} strokeWidth={3} />}
              </div>
            </button>
          );
        })}
      </div>

      {/* Modo de entrega de salsas */}
      <div className="pt-2 border-t border-slate-800">
        <label className="text-xs font-semibold text-slate-400 block mb-1.5">
          ¿Cómo deseas tus cremas?
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onModeChange('on_top')}
            className={`py-1.5 px-2 rounded-lg text-xs font-medium border transition ${
              sauceDeliveryMode === 'on_top'
                ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}
          >
            🔥 Bañadas encima
          </button>
          <button
            type="button"
            onClick={() => onModeChange('separated')}
            className={`py-1.5 px-2 rounded-lg text-xs font-medium border transition ${
              sauceDeliveryMode === 'separated'
                ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}
          >
            🥣 Aparte en vasitos
          </button>
        </div>
      </div>
    </div>
  );
}
