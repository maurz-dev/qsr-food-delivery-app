import React, { useState, useEffect } from 'react';
import { ChefHat, Bike, CheckCircle2, Phone, MessageSquare, Clock, MapPin } from 'lucide-react';

export default function LiveOrderTracker({ order, onNewOrder }) {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      title: 'Pedido recibido',
      desc: 'El restaurante aceptó tu orden y ya está en comanda.',
      time: 'Hace 3 min'
    },
    {
      title: 'En cocina',
      desc: 'Preparando tus platos a la plancha con cremas seleccionadas.',
      time: 'En preparación'
    },
    {
      title: 'Repartidor en camino',
      desc: 'El motorizado va en ruta hacia tu dirección de entrega.',
      time: '15 min restantes'
    },
    {
      title: 'Pedido entregado',
      desc: '¡Buen provecho! Gracias por pedir en El Punto Sanguchero.',
      time: 'Finalizado'
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#f6f7f9] overflow-y-auto no-scrollbar p-4 space-y-4">
      {/* Banner de Estado Principal estilo Rappi */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#ff441f]">
            {steps[currentStep].time}
          </span>
          <span className="text-xs font-mono font-bold text-gray-400">
            {order.orderId}
          </span>
        </div>
        <h2 className="text-lg font-extrabold text-gray-900 mt-1">
          {steps[currentStep].title}
        </h2>
        <p className="text-xs text-gray-500 mt-0.5">
          {steps[currentStep].desc}
        </p>

        {/* Barra de progreso verde / naranja */}
        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-3">
          <div
            className="bg-[#ff441f] h-full transition-all duration-500 rounded-full"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Tarjeta del Repartidor / Motorizado (Estilo Rappi) */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-bold text-sm border border-gray-200">
            <Bike size={22} className="text-[#ff441f]" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-900">Miguel Ángel V.</h4>
            <span className="text-[11px] text-gray-500 block">Motorizado oficial • Honda CB125</span>
            <span className="text-[10px] text-emerald-600 font-bold">★ 4.9 (420 entregas)</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="tel:+51987654321"
            className="w-9 h-9 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200 transition"
          >
            <Phone size={16} />
          </a>
          <a
            href="https://wa.me/51987654321?text=Hola,%20consulto%20por%20mi%20pedido"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200 hover:bg-emerald-100 transition"
          >
            <MessageSquare size={16} />
          </a>
        </div>
      </div>

      {/* Timeline de Etapas */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 space-y-4">
        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
          Estado del pedido
        </h4>

        {steps.map((st, i) => {
          const isDone = i <= currentStep;
          return (
            <div key={i} className="flex items-start gap-3 relative">
              {i < steps.length - 1 && (
                <div
                  className={`absolute left-2.5 top-6 w-0.5 h-8 ${
                    i < currentStep ? 'bg-[#ff441f]' : 'bg-gray-200'
                  }`}
                ></div>
              )}

              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 z-10 text-[10px] font-bold ${
                  isDone
                    ? 'bg-[#ff441f] text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {i + 1}
              </div>

              <div>
                <span
                  className={`text-xs font-bold block ${
                    isDone ? 'text-gray-900' : 'text-gray-400'
                  }`}
                >
                  {st.title}
                </span>
                <span className="text-[11px] text-gray-500 block leading-tight">
                  {st.desc}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Control interactivo para demo */}
      <div className="flex justify-between items-center bg-white p-3 rounded-2xl border border-gray-200 text-xs">
        <span className="text-gray-500 font-medium">Avanzar etapa (Demo):</span>
        <div className="flex gap-1.5">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentStep(idx)}
              className={`w-7 h-7 rounded-lg text-xs font-bold transition ${
                currentStep === idx
                  ? 'bg-[#ff441f] text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onNewOrder}
        className="w-full py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 text-xs font-bold rounded-xl transition shadow-sm"
      >
        Hacer otro pedido
      </button>
    </div>
  );
}
