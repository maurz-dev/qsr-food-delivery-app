import React from 'react';
import { SAUCES_LIST } from '../data/menuData';
import { Check, Flame, ShieldAlert, Sparkles } from 'lucide-react';

export default function SauceSelector({
  selectedSauces,
  onChange,
  sauceDeliveryMode,
  onModeChange
}) {
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
          <h4 className="text-sm font-black text-white flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block animate-pulse"></span>
            Barra de Cremas Artesanales
          </h4>
          <p className="text-[11px] text-slate-400">
            Escoge todas las que desees (¡Sin costo adicional!)
          </p>
        </div>
        <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">
          {selectedSauces.length} de {SAUCES_LIST.length}
        </span>
      </div>

      {/* Botones de Presets Rápidos */}
      <div className="flex flex-wrap gap-1.5">
        <button
          type="button"
          onClick={selectAll}
          className="text-[10px] font-black px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-400/40 hover:bg-amber-500/30 transition flex items-center gap-1"
        >
          <Sparkles size={11} /> ¡Todas las cremas!
        </button>
        <button
          type="button"
          onClick={selectClassicThree}
          className="text-[10px] font-black px-2.5 py-1 rounded-full bg-slate-800 text-orange-300 border border-orange-500/30 hover:bg-orange-500/20 transition flex items-center gap-1"
        >
          Mayo + Ají + Tártara
        </button>
        <button
          type="button"
          onClick={selectNoSpicy}
          className="text-[10px] font-black px-2.5 py-1 rounded-full bg-slate-800 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 transition flex items-center gap-1"
        >
          <ShieldAlert size={11} /> Sin picante
        </button>
        {selectedSauces.length > 0 && (
          <button
            type="button"
            onClick={clearAll}
            className="text-[10px] font-bold px-2 py-1 rounded-full bg-slate-800 text-slate-400 hover:text-red-400 transition"
          >
            Limpiar
          </button>
        )}
      </div>

      {/* Grid de Salsas con Muestrario de Color Real */}
      <div className="grid grid-cols-2 gap-2 max-h-44 overflow-y-auto pr-1 no-scrollbar">
        {SAUCES_LIST.map((sauce) => {
          const isSelected = selectedSauces.includes(sauce.id);
          return (
            <button
              key={sauce.id}
              type="button"
              onClick={() => toggleSauce(sauce.id)}
              className={`flex items-center justify-between p-2.5 rounded-2xl text-left text-xs font-bold border transition-all ${
                isSelected
                  ? 'bg-orange-500/20 border-orange-500 text-white shadow-md shadow-orange-500/20 scale-[1.01]'
                  : 'bg-[#12141e] border-white/5 text-slate-300 hover:border-white/20'
              }`}
            >
              <div className="flex items-center gap-2 truncate pr-1">
                <span
                  className="w-3 h-3 rounded-full border border-black/40 shadow-sm shrink-0"
                  style={{ backgroundColor: sauce.hex }}
                ></span>
                <span className="truncate">{sauce.name}</span>
              </div>

              <div
                className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 transition ${
                  isSelected ? 'bg-orange-500 text-white' : 'border border-slate-700'
                }`}
              >
                {isSelected && <Check size={11} strokeWidth={3.5} />}
              </div>
            </button>
          );
        })}
      </div>

      {/* Modo de Servir las Salsas */}
      <div className="pt-2 border-t border-white/5">
        <label className="text-xs font-bold text-slate-400 block mb-1.5">
          ¿Cómo deseas que te sirvan las cremas?
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onModeChange('on_top')}
            className={`py-2 px-2 rounded-xl text-xs font-extrabold border transition ${
              sauceDeliveryMode === 'on_top'
                ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-sm'
                : 'bg-[#12141e] border-white/5 text-slate-400'
            }`}
          >
            🔥 Bañadas encima
          </button>
          <button
            type="button"
            onClick={() => onModeChange('separated')}
            className={`py-2 px-2 rounded-xl text-xs font-extrabold border transition ${
              sauceDeliveryMode === 'separated'
                ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-sm'
                : 'bg-[#12141e] border-white/5 text-slate-400'
            }`}
          >
            🥣 Aparte en vasitos
          </button>
        </div>
      </div>
    </div>
  );
}
