import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Flame, Clock } from 'lucide-react';

export default function HeroSlider({ onSelectPromo }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promos = [
    {
      id: 'salchipapa-monstruosa',
      tag: '🔥 COMBO ESTRELLA',
      title: 'Salchipapa Monstruosa + Chicha 1L',
      desc: 'Salchicha ahumada, chorizo, huevo montado, queso y chicha morada helada.',
      price: 'S/ 29.90',
      oldPrice: 'S/ 33.50',
      bgGradient: 'from-orange-600 via-red-600 to-amber-700'
    },
    {
      id: 'cuarto-pollo-broaster',
      tag: '🍗 CRUJIENTE NOCTURNO',
      title: '1/4 Pollo Broaster + Papas Amarillas',
      desc: 'Crujiente por fuera y jugoso por dentro con todas las cremas en vasito.',
      price: 'S/ 18.00',
      oldPrice: 'S/ 21.00',
      bgGradient: 'from-amber-600 via-orange-600 to-yellow-600'
    },
    {
      id: 'sandwich-pollo-deshilachado',
      tag: '🌙 EL CLÁSICO DEL BAJÓN',
      title: 'Sánguche de Pollo + Papas al Hilo',
      desc: 'Abundante pechuga a la plancha, lechuga y cerro de papas crujientes.',
      price: 'S/ 13.50',
      oldPrice: 'S/ 15.00',
      bgGradient: 'from-red-600 via-rose-700 to-orange-700'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [promos.length]);

  const activePromo = promos[currentSlide];

  return (
    <div className="relative overflow-hidden rounded-3xl shadow-xl shadow-orange-600/15">
      <div
        className={`bg-gradient-to-r ${activePromo.bgGradient} p-4 text-white transition-all duration-500`}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <span className="text-[9px] font-black uppercase tracking-wider bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full inline-flex items-center gap-1 border border-white/10">
              <Sparkles size={10} className="text-amber-300" />
              {activePromo.tag}
            </span>

            <h3 className="text-sm font-black mt-1.5 leading-snug">
              {activePromo.title}
            </h3>

            <p className="text-[11px] text-white/85 line-clamp-1 mt-0.5">
              {activePromo.desc}
            </p>

            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-base font-black text-amber-300">
                {activePromo.price}
              </span>
              <span className="text-xs text-white/60 line-through">
                {activePromo.oldPrice}
              </span>
            </div>
          </div>

          <button
            onClick={() => onSelectPromo(activePromo.id)}
            className="self-end bg-white text-orange-600 font-black text-xs px-3.5 py-2 rounded-2xl shadow-lg active:scale-95 transition flex items-center gap-1 shrink-0"
          >
            <span>Pedir</span>
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Indicadores de slides (dots) */}
        <div className="flex items-center gap-1.5 mt-3">
          {promos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all ${
                currentSlide === i ? 'w-5 bg-white' : 'w-1.5 bg-white/40'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
