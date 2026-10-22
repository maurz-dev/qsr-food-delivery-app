import React, { useState } from 'react';
import { ADDONS_LIST } from '../data/menuData';
import SauceSelector from './SauceSelector';
import { X, Plus, Minus, Flame, Clock, Star, ShoppingBag } from 'lucide-react';

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
    <div className="absolute inset-0 bg-black/80 backdrop-blur-md z-50 flex flex-col justify-end">
      {/* Backdrop click */}
      <div className="flex-1" onClick={onClose}></div>

      {/* Sheet Container */}
      <div className="bg-[#171922] border-t border-slate-700/60 rounded-t-[32px] max-h-[85vh] flex flex-col modal-animate-up shadow-2xl overflow-hidden">
        {/* Header Drag Handle */}
        <div className="pt-3 pb-1 flex justify-center">
          <div className="w-12 h-1.5 rounded-full bg-slate-700"></div>
        </div>

        {/* Product Image Header with Close Button */}
        <div className="relative h-44 w-full shrink-0 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171922] via-transparent to-black/40"></div>
          
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-sm border border-white/20 active:scale-95 transition"
          >
            <X size={18} />
          </button>

          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-orange-600/90 text-white shadow-md">
              {product.badge}
            </span>
            <div className="flex items-center gap-1 bg-black/70 px-2 py-0.5 rounded-lg text-xs font-bold text-amber-400 border border-white/10">
              <Star size={12} fill="#f59e0b" />
              <span>{product.rating}</span>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 overflow-y-auto space-y-4 no-scrollbar">
          {/* Title & Price */}
          <div>
            <div className="flex justify-between items-start gap-2">
              <h3 className="text-lg font-extrabold text-white leading-tight">
                {product.name}
              </h3>
              <span className="text-lg font-black text-amber-400 shrink-0">
                S/ {product.price.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              {product.description}
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-2">
              <Clock size={12} className="text-orange-400" />
              <span>Tiempo de cocción: {product.prepTime}</span>
            </div>
          </div>

          {/* Selector de Cremas */}
          <div className="bg-[#202430] p-3.5 rounded-2xl border border-slate-700/50">
            <SauceSelector
              selectedSauces={selectedSauces}
              onChange={setSelectedSauces}
              sauceDeliveryMode={sauceMode}
              onModeChange={setSauceMode}
            />
          </div>

          {/* Adicionales de Plancha */}
          <div className="bg-[#202430] p-3.5 rounded-2xl border border-slate-700/50 space-y-2.5">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                <Flame size={15} className="text-orange-500" />
                Adicionales a la Plancha
              </h4>
              <span className="text-[11px] text-slate-400">Opcional</span>
            </div>

            <div className="space-y-1.5">
              {ADDONS_LIST.map((addon) => {
                const isSelected = selectedAddons.some((a) => a.id === addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs border transition ${
                      isSelected
                        ? 'bg-amber-500/20 border-amber-500 text-white font-medium'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="text-left">{addon.name}</span>
                    <span className="font-bold text-amber-400 ml-2 shrink-0">
                      + S/ {addon.price.toFixed(2)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Indicaciones especiales */}
          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">
              Indicaciones al Sanguchero:
            </label>
            <input
              type="text"
              placeholder="Ej: Papas bien doraditas, sin ensalada..."
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              className="w-full bg-[#202430] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>

        {/* Footer con Cantidad y Botón de Agregar */}
        <div className="p-3.5 bg-[#12141c] border-t border-slate-800 flex items-center gap-3 shrink-0">
          {/* Contador de unidades */}
          <div className="flex items-center bg-[#202430] rounded-xl border border-slate-700 p-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-7 h-7 flex items-center justify-center text-slate-300 active:scale-90"
            >
              <Minus size={14} />
            </button>
            <span className="w-7 text-center font-bold text-xs text-white">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-slate-300 active:scale-90"
            >
              <Plus size={14} />
            </button>
          </div>

          {/* Botón CTA con precio total dinámico */}
          <button
            onClick={handleAdd}
            className="flex-1 bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold py-2.5 px-4 rounded-xl flex items-center justify-between shadow-lg shadow-orange-600/30 active:scale-[0.98] transition"
          >
            <div className="flex items-center gap-1.5 text-xs">
              <ShoppingBag size={16} />
              <span>Agregar al Pedido</span>
            </div>
            <span className="text-sm font-black">
              S/ {totalPrice.toFixed(2)}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
