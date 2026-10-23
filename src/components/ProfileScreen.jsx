import React from 'react';
import { User, MapPin, CreditCard, ChevronRight, MessageSquare, Clock, ShieldCheck, Award } from 'lucide-react';

export default function ProfileScreen() {
  return (
    <div className="flex-1 p-4 space-y-4 bg-[#f6f7f9] overflow-y-auto no-scrollbar pb-24">
      {/* Tarjeta de Usuario estilo Rappi */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 text-base font-bold">
            CM
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold text-gray-900">Carlos Mendoza</h3>
              <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-1.5 py-0.2 rounded">
                Prime
              </span>
            </div>
            <p className="text-xs text-gray-500">+51 987 654 321</p>
          </div>
        </div>
        <ChevronRight size={18} className="text-gray-400" />
      </div>

      {/* Direcciones Guardadas */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 shadow-sm">
        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
          Direcciones guardadas
        </h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <div className="flex items-center gap-2.5">
              <MapPin size={16} className="text-gray-400" />
              <div>
                <span className="text-xs font-bold text-gray-800 block">Casa</span>
                <span className="text-[11px] text-gray-500">Av. Las Palmeras 450, Los Olivos</span>
              </div>
            </div>
            <span className="text-[10px] bg-[#fff2ef] text-[#ff441f] font-bold px-2 py-0.5 rounded-full">
              Predeterminada
            </span>
          </div>

          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2.5">
              <MapPin size={16} className="text-gray-400" />
              <div>
                <span className="text-xs font-bold text-gray-800 block">Trabajo</span>
                <span className="text-[11px] text-gray-500">Av. Javier Prado Este 1220, San Isidro</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Métodos de Pago */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 shadow-sm">
        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
          Métodos de pago
        </h4>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2.5">
            <CreditCard size={16} className="text-gray-400" />
            <div>
              <span className="text-xs font-bold text-gray-800 block">Yape Vinculado</span>
              <span className="text-[11px] text-gray-500">987 654 ***</span>
            </div>
          </div>
          <span className="text-xs font-bold text-emerald-600">Activo</span>
        </div>
      </div>

      {/* Soporte */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-2 shadow-sm">
        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
          Centro de ayuda
        </h4>
        <a
          href="https://wa.me/51987654321?text=Hola,%20necesito%20ayuda"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between py-2 text-xs text-gray-700 hover:text-gray-900"
        >
          <div className="flex items-center gap-2">
            <MessageSquare size={16} className="text-emerald-600" />
            <span>Soporte por WhatsApp</span>
          </div>
          <ChevronRight size={16} className="text-gray-400" />
        </a>
      </div>
    </div>
  );
}
