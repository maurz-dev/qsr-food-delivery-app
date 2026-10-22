import React, { useState } from 'react';
import { ADDONS_LIST } from '../data/menuData';
import SauceSelector from './SauceSelector';
import { X, Plus, Minus, Flame, Clock, Star, ShoppingBag, Sparkles } from 'lucide-react';

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
    <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex flex-col justify-end max-w-[500px] mx-auto">
      {/* Backdrop */}
      <div className="flex-1" onClick={onClose}></div>

      {/* Sheet Container */}
      <div className="bg-[#131620] border-t border-white/10 rounded-t-[36px] max-h-[88vh] flex flex-col modal-animate-up shadow-2xl overflow-hidden">
        {/* Header Drag Handle */}
        <div className="pt-3 pb-1 flex justify-center">
          <div className="w-12 h-1.5 rounded-full bg-slate-700"></div>
        </div>

        {/* Product Image Header with Close Button */}
        <div className="relative h-48 w-full shrink-0 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131620] via-black/30 to-black/40"></div>

          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center backdrop-blur-md border border-white/20 active:scale-95 transition"
          >
            <X size={16} />
          </button>

          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
            <span
              className={`text-xs font-black px-3 py-1 rounded-full text-white shadow-lg ${product.badgeColor}`}
            >
              {product.badge}
            </span>
            <div className="flex items-center gap-1 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-xl text-xs font-black text-amber-400 border border-white/10">
              <Star size={12} fill="#f59e0b" />
              <span>{product.rating}</span>
              <span className="text-white/60 font-normal">({product.reviewsCount})</span>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 overflow-y-auto space-y-4 no-scrollbar">
          {/* Title, Calories & Price */}
          <div>
            <div className="flex justify-between items-start gap-2">
              <div>
                <h3 className="text-lg font-black text-white leading-tight">
                  {product.name}
                </h3>
                <p className="text-xs text-amber-400 font-bold mt-0.5">
                  {product.subtitle}
                </p>
              </div>
              <span className="text-lg font-black text-amber-400 shrink-0">
                S/ {product.price.toFixed(2)}
              </span>
            </div>

            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-400 mt-2.5">
              <span className="flex items-center gap-1 text-orange-400 font-bold">
                <Flame size={13} />
                {product.calories}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock size={13} />
                {product.prepTime}
              </span>
            </div>
          </div>

          {/* Selector de Cremas */}
          <div className="bg-[#1a1e2c] p-4 rounded-3xl border border-white/10 shadow-md">
            <SauceSelector
              selectedSauces={selectedSauces}
              onChange={setSelectedSauces}
              sauceDeliveryMode={sauceMode}
              onModeChange={setSauceMode}
            />
          </div>

          {/* Adicionales de Plancha */}
          <div className="bg-[#1a1e2c] p-4 rounded-3xl border border-white/10 space-y-2.5 shadow-md">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-black text-white flex items-center gap-1.5">
                <Flame size={15} className="text-orange-500" />
                Adicionales a la Plancha
              </h4>
              <span className="text-[10px] text-slate-400 font-bold">Opcional</span>
            </div>

            <div className="space-y-1.5">
              {ADDONS_LIST.map((addon) => {
                const isSelected = selectedAddons.some((a) => a.id === addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-2xl text-xs border transition ${
                      isSelected
                        ? 'bg-amber-500/20 border-amber-500 text-white font-bold'
                        : 'bg-[#12141e] border-white/5 text-slate-300 hover:border-white/15'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{addon.icon}</span>
                      <span>{addon.name}</span>
                    </span>
                    <span className="font-black text-amber-400 ml-2 shrink-0">
                      + S/ {addon.price.toFixed(2)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Indicaciones especiales */}
          <div>
            <label className="text-xs font-black text-slate-300 block mb-1">
              Indicaciones especiales al cocinero:
            </label>
            <input
              type="text"
              placeholder="Ej: Papas bien doraditas, cremas bien frías..."
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              className="w-full bg-[#1a1e2c] border border-white/10 rounded-2xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 transition"
            />
          </div>
        </div>

        {/* Footer con Cantidad y Botón de Agregar */}
        <div className="p-4 bg-[#0e1015] border-t border-white/10 flex items-center gap-3 shrink-0">
          {/* Contador de unidades */}
          <div className="flex items-center bg-[#1a1e2c] rounded-2xl border border-white/10 p-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 flex items-center justify-center text-slate-300 active:scale-90 transition hover:text-white"
            >
              <Minus size={14} />
            </button>
            <span className="w-8 text-center font-black text-xs text-white">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 flex items-center justify-center text-slate-300 active:scale-90 transition hover:text-white"
            >
              <Plus size={14} />
            </button>
          </div>

          {/* Botón CTA con precio total dinámico */}
          <button
            onClick={handleAdd}
            className="flex-1 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 text-white font-black py-3 px-4 rounded-2xl flex items-center justify-between shadow-xl shadow-orange-600/30 active:scale-[0.98] transition"
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
