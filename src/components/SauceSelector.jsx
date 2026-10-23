import React from 'react';
import { SAUCES_LIST } from '../data/menuData';
import { Check } from 'lucide-react';

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
      if (selectedSauces.length < 5) {
        onChange([...selectedSauces, sauceId]);
      }
    }
  };

  return (
    <div className="space-y-5">
      {/* Sección 1: Selección de cremas */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div>
            <h4 className="text-sm font-bold text-gray-900">
              Elige tus cremas artesanales
            </h4>
            <p className="text-xs text-gray-500">
              Elige hasta 5 opciones • Sin costo
            </p>
          </div>
          <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
            {selectedSauces.length}/5
          </span>
        </div>

        <div className="space-y-1 divide-y divide-gray-100">
          {SAUCES_LIST.map((sauce) => {
            const isSelected = selectedSauces.includes(sauce.id);
            return (
              <button
                key={sauce.id}
                type="button"
                onClick={() => toggleSauce(sauce.id)}
                className="w-full flex items-center justify-between py-2.5 text-left text-xs transition hover:bg-gray-50 px-1 rounded-lg"
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-3 h-3 rounded-full border border-gray-300 shrink-0"
                    style={{ backgroundColor: sauce.hex }}
                  ></span>
                  <span className={`font-medium ${isSelected ? 'text-gray-900 font-bold' : 'text-gray-700'}`}>
                    {sauce.name}
                  </span>
                </div>

                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center border transition ${
                    isSelected
                      ? 'bg-[#ff441f] border-[#ff441f] text-white'
                      : 'border-gray-300 bg-white'
                  }`}
                >
                  {isSelected && <Check size={13} strokeWidth={3} />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sección 2: Modo de servicio de las cremas */}
      <div className="pt-3 border-t border-gray-200">
        <h4 className="text-sm font-bold text-gray-900 mb-0.5">
          ¿Cómo deseas tus cremas?
        </h4>
        <p className="text-xs text-gray-500 mb-2.5">
          Selecciona una opción
        </p>

        <div className="space-y-2">
          <label
            onClick={() => onModeChange('on_top')}
            className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition ${
              sauceDeliveryMode === 'on_top'
                ? 'border-[#ff441f] bg-[#fff2ef]'
                : 'border-gray-200 bg-white hover:bg-gray-50'
            }`}
          >
            <span className="text-xs font-bold text-gray-800">
              Bañadas encima del plato
            </span>
            <div
              className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                sauceDeliveryMode === 'on_top'
                  ? 'border-[#ff441f]'
                  : 'border-gray-300'
              }`}
            >
              {sauceDeliveryMode === 'on_top' && (
                <div className="w-2 h-2 rounded-full bg-[#ff441f]"></div>
              )}
            </div>
          </label>

          <label
            onClick={() => onModeChange('separated')}
            className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition ${
              sauceDeliveryMode === 'separated'
                ? 'border-[#ff441f] bg-[#fff2ef]'
                : 'border-gray-200 bg-white hover:bg-gray-50'
            }`}
          >
            <span className="text-xs font-bold text-gray-800">
              Aparte en vasitos individuales
            </span>
            <div
              className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                sauceDeliveryMode === 'separated'
                  ? 'border-[#ff441f]'
                  : 'border-gray-300'
              }`}
            >
              {sauceDeliveryMode === 'separated' && (
                <div className="w-2 h-2 rounded-full bg-[#ff441f]"></div>
              )}
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
