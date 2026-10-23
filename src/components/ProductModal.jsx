import React, { useState } from 'react';
import { ADDONS_LIST } from '../data/menuData';
import SauceSelector from './SauceSelector';
import { X, Plus, Minus, Check } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedSauces, setSelectedSauces] = useState(['mayo', 'aji_pollero', 'tartara']);
  const [sauceMode, setSauceMode] = useState('on_top');
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [specialInstructions, setSpecialInstructions] = useState('');

  const toggleAddon = (addon) => {
    if (selectedAddons.some((a) => a.id === addon.id)) {
      setSelectedAddons(selectedAddons.filter((a) => a.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
  const unitPrice = product.price + addonsTotal;
  const totalPrice = unitPrice * quantity;

  const handleAdd = () => {
    onAddToCart({
      product,
      quantity,
      selectedSauces,
      sauceMode,
      selectedAddons,
      specialInstructions,
      unitPrice,
      totalPrice
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex flex-col justify-end max-w-[500px] mx-auto">
      {/* Backdrop */}
      <div className="h-12 shrink-0 cursor-pointer" onClick={onClose}></div>

      {/* Sheet Container estilo Rappi */}
      <div className="bg-white rounded-t-3xl flex-1 max-h-[88vh] flex flex-col modal-animate-up shadow-2xl overflow-hidden">
        {/* Header Drag Handle */}
        <div className="pt-2.5 pb-1 flex justify-center shrink-0">
          <div className="w-10 h-1 rounded-full bg-gray-300"></div>
        </div>

        {/* Product Image Header with Close Button */}
        <div className="relative h-44 w-full shrink-0 bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-gray-800 flex items-center justify-center shadow-md active:scale-95 transition"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 space-y-5">
          {/* Title & Price */}
          <div className="border-b border-gray-100 pb-3">
            <h3 className="text-lg font-bold text-gray-900 leading-tight">
              {product.name}
            </h3>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              {product.description}
            </p>
            <div className="mt-2 text-base font-extrabold text-gray-900">
              S/ {product.price.toFixed(2)}
            </div>
          </div>

          {/* Selector de Cremas */}
          <div className="border-b border-gray-100 pb-4">
            <SauceSelector
              selectedSauces={selectedSauces}
              onChange={setSelectedSauces}
              sauceDeliveryMode={sauceMode}
              onModeChange={setSauceMode}
            />
          </div>

          {/* Adicionales (Upselling) */}
          <div className="border-b border-gray-100 pb-4">
            <h4 className="text-sm font-bold text-gray-900 mb-0.5">
              Adicionales de plancha
            </h4>
            <p className="text-xs text-gray-500 mb-2.5">Opcional</p>

            <div className="space-y-2">
              {ADDONS_LIST.map((addon) => {
                const isSelected = selectedAddons.some((a) => a.id === addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon)}
                    className="w-full flex items-center justify-between p-3 rounded-xl border border-gray-200 hover:bg-gray-50 text-xs transition"
                  >
                    <span className="font-medium text-gray-800 text-left">
                      {addon.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900">
                        + S/ {addon.price.toFixed(2)}
                      </span>
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border transition ${
                          isSelected
                            ? 'bg-[#ff441f] border-[#ff441f] text-white'
                            : 'border-gray-300 bg-white'
                        }`}
                      >
                        {isSelected && <Check size={13} strokeWidth={3} />}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Instrucciones especiales */}
          <div>
            <label className="text-xs font-bold text-gray-900 block mb-1">
              Instrucciones especiales
            </label>
            <input
              type="text"
              placeholder="Ej: Papas bien crujientes, cremas bien frías..."
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#ff441f] transition"
            />
          </div>
        </div>

        {/* Footer con Cantidad y Botón de Agregar (Estilo Rappi) */}
        <div className="p-4 bg-white border-t border-gray-200 flex items-center gap-3 shrink-0">
          {/* Stepper de unidades */}
          <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50 p-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 flex items-center justify-center text-gray-700 active:scale-90 transition hover:bg-white rounded-lg"
            >
              <Minus size={14} />
            </button>
            <span className="w-8 text-center font-bold text-xs text-gray-900">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 flex items-center justify-center text-gray-700 active:scale-90 transition hover:bg-white rounded-lg"
            >
              <Plus size={14} />
            </button>
          </div>

          {/* Botón CTA Full Rappi Coral */}
          <button
            onClick={handleAdd}
            className="flex-1 bg-[#ff441f] hover:bg-[#e03412] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-between shadow-lg shadow-[#ff441f]/20 active:scale-[0.99] transition"
          >
            <span className="text-xs font-bold">Agregar al carrito</span>
            <span className="text-sm font-extrabold">
              S/ {totalPrice.toFixed(2)}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
