import React, { useState, useEffect } from 'react';
import { ChefHat, Bike, CheckCircle2, Phone, MessageSquare, Clock, MapPin, Sparkles } from 'lucide-react';

export default function LiveOrderTracker({ order, onNewOrder }) {
  const [currentStep, setCurrentStep] = useState(1); // 0 to 3

  const steps = [
    {
      title: 'Orden Recibida en Comanda',
      desc: 'El carrito ya imprimió tu pedido y lo pasó al maestro sanguchero.',
      icon: Clock,
      time: 'Hace 2 min'
    },
    {
      title: 'En la Plancha y Broastera 🔥',
      desc: 'Dorado de papas amarillas al instante y sellado de carnes al fuego.',
      icon: ChefHat,
      time: 'En proceso'
    },
    {
      title: 'Empacando con tus Cremas 🍟',
      desc: 'Sirviendo las porciones y preparando los potes de salsas seleccionadas.',
      icon: Sparkles,
      time: 'Pronto'
    },
    {
      title: order.orderType === 'delivery' ? 'En Moto hacia tu dirección 🛵' : '¡Listo para recoger en el carrito! 🥡',
      desc: order.orderType === 'delivery' ? 'El motorizado está en camino a toda velocidad.' : 'Acércate al mostrador sin hacer cola con tu código.',
      icon: Bike,
      time: '10 min estimados'
    }
  ];

  // Auto-advance for realistic demonstration
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 12000);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="flex-1 flex flex-col bg-[#0e1015] overflow-y-auto no-scrollbar p-4 space-y-4">
      {/* Header con Estado */}
      <div className="bg-gradient-to-r from-orange-600/30 to-amber-600/20 border border-orange-500/40 rounded-2xl p-4 text-center">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-orange-400 bg-orange-500/20 px-2.5 py-0.5 rounded-full inline-block mb-1.5 border border-orange-500/30">
          En Vivo • Estado del Pedido
        </span>
        <h2 className="text-xl font-black text-white">{order.orderId}</h2>
        <p className="text-xs text-slate-300 mt-1">
          {order.orderType === 'delivery' ? '🛵 Delivery Nocturno' : '🥡 Para Recoger al Paso'}
        </p>
      </div>

      {/* Selector interactivo para probar los estados (Demo Controls) */}
      <div className="bg-[#171922] p-2 rounded-xl border border-slate-800 flex items-center justify-between">
        <span className="text-[10px] text-slate-400 font-bold px-1">Avanzar estado:</span>
        <div className="flex gap-1">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentStep(idx)}
              className={`w-6 h-6 rounded-lg text-[10px] font-black transition ${
                currentStep === idx
                  ? 'bg-orange-500 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline de Seguimiento */}
      <div className="bg-[#171922] border border-slate-800 rounded-2xl p-4 space-y-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isDone = index < currentStep;
          const isCurrent = index === currentStep;
          const isPending = index > currentStep;

          return (
            <div key={index} className="flex items-start gap-3 relative">
              {/* Línea conectora */}
              {index < steps.length - 1 && (
                <div
                  className={`absolute left-4 top-8 w-0.5 h-10 transition-colors ${
                    isDone ? 'bg-orange-500' : 'bg-slate-800'
                  }`}
                ></div>
              )}

              {/* Icono de estado */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 transition-all ${
                  isCurrent
                    ? 'bg-gradient-to-tr from-orange-600 to-amber-500 text-white ring-4 ring-orange-500/30 scale-110'
                    : isDone
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-800 text-slate-500'
                }`}
              >
                {isDone ? <CheckCircle2 size={16} /> : <Icon size={16} />}
              </div>

              {/* Texto de estado */}
              <div className="flex-1 pb-1">
                <div className="flex justify-between items-baseline">
                  <h4
                    className={`text-xs font-bold ${
                      isCurrent ? 'text-amber-400' : isDone ? 'text-white' : 'text-slate-500'
                    }`}
                  >
                    {step.title}
                  </h4>
                  <span className="text-[10px] text-slate-500">{step.time}</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Resumen del Pedido */}
      <div className="bg-[#171922] border border-slate-800 rounded-2xl p-3.5 space-y-2">
        <h4 className="text-xs font-bold text-slate-300">Resumen de tu bajón:</h4>
        <div className="space-y-1.5 text-xs text-slate-400">
          {order.items.map((it, i) => (
            <div key={i} className="flex justify-between">
              <span>{it.quantity}x {it.product.name}</span>
              <span className="text-white font-bold">S/ {it.totalPrice.toFixed(2)}</span>
            </div>
          ))}
          <div className="pt-2 border-t border-slate-800 flex justify-between font-bold text-white">
            <span>Total Pagado</span>
            <span className="text-amber-400">S/ {order.grandTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Acciones directas de soporte */}
      <div className="grid grid-cols-2 gap-2">
        <a
          href="tel:+51987654321"
          className="bg-slate-800 hover:bg-slate-700 text-slate-200 py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition"
        >
          <Phone size={14} className="text-orange-400" />
          Llamar al Carrito
        </a>
        <a
          href="https://wa.me/51987654321?text=Hola,%20consulto%20por%20mi%20pedido"
          target="_blank"
          rel="noreferrer"
          className="bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition"
        >
          <MessageSquare size={14} className="text-emerald-400" />
          WhatsApp Soporte
        </a>
      </div>

      {/* Botón para nuevo pedido */}
      <button
        onClick={onNewOrder}
        className="w-full py-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-bold rounded-xl transition"
      >
        Hacer Otro Pedido
      </button>
    </div>
  );
}
