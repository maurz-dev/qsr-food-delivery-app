import React from 'react';
import { User, MapPin, CreditCard, Phone, MessageSquare, Clock, ShieldCheck, ChevronRight, Award } from 'lucide-react';

export default function ProfileScreen() {
  return (
    <div className="flex-1 p-4 space-y-4 overflow-y-auto no-scrollbar pb-24">
      {/* Tarjeta de Usuario */}
      <div className="bg-gradient-to-r from-[#171922] to-[#202430] border border-slate-800 rounded-3xl p-4 flex items-center gap-3 shadow-lg">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white text-xl font-black shadow-md shadow-orange-500/20">
          CM
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-1.5">
            <h3 className="text-sm font-black text-white">Carlos Mendoza</h3>
            <span className="bg-amber-500/20 text-amber-400 text-[10px] font-black px-1.5 py-0.5 rounded-full border border-amber-500/30 flex items-center gap-0.5">
              <Award size={10} /> Oro
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">+51 987 654 321</p>
          <span className="text-[10px] text-emerald-400 font-semibold">
            Cliente Frecuente • 12 bajones completados
          </span>
        </div>
      </div>

      {/* Direcciones Guardadas */}
      <div className="bg-[#171922] border border-slate-800 rounded-3xl p-4 space-y-3">
        <h4 className="text-xs font-black uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
          <MapPin size={14} className="text-orange-500" />
          Direcciones Frecuentes
        </h4>

        <div className="space-y-2">
          <div className="bg-[#202430] p-3 rounded-2xl flex items-center justify-between border border-slate-800">
            <div>
              <span className="text-xs font-bold text-white block">🏠 Casa</span>
              <span className="text-[11px] text-slate-400">Av. Las Palmeras 450 - Dpto 201</span>
            </div>
            <span className="text-[10px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full font-bold">
              Principal
            </span>
          </div>

          <div className="bg-[#202430] p-3 rounded-2xl flex items-center justify-between border border-slate-800">
            <div>
              <span className="text-xs font-bold text-white block">💼 Trabajo</span>
              <span className="text-[11px] text-slate-400">Av. Javier Prado Este 1220 - Piso 5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Métodos de Pago Guardados */}
      <div className="bg-[#171922] border border-slate-800 rounded-3xl p-4 space-y-3">
        <h4 className="text-xs font-black uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
          <CreditCard size={14} className="text-amber-500" />
          Billeteras y Pagos
        </h4>

        <div className="space-y-2">
          <div className="bg-[#202430] p-3 rounded-2xl flex items-center justify-between border border-purple-500/30">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-purple-900/60 text-purple-300 font-black text-xs flex items-center justify-center">
                Y
              </span>
              <div>
                <span className="text-xs font-bold text-white block">Yape Vinculado</span>
                <span className="text-[10px] text-slate-400">Número terminado en ***321</span>
              </div>
            </div>
            <span className="text-emerald-400 text-xs font-bold">Activo</span>
          </div>
        </div>
      </div>

      {/* Centro de Ayuda y Carrito */}
      <div className="bg-[#171922] border border-slate-800 rounded-3xl p-4 space-y-2">
        <h4 className="text-xs font-black uppercase tracking-wider text-slate-300">
          Atención al Cliente
        </h4>

        <div className="space-y-1">
          <a
            href="https://wa.me/51987654321?text=Hola,%20tengo%20una%20consulta"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-2.5 rounded-xl text-xs text-slate-300 hover:bg-slate-800 transition"
          >
            <div className="flex items-center gap-2">
              <MessageSquare size={16} className="text-emerald-400" />
              <span>Chatear por WhatsApp con el Carrito</span>
            </div>
            <ChevronRight size={14} className="text-slate-500" />
          </a>

          <div className="flex items-center justify-between p-2.5 rounded-xl text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-orange-400" />
              <span>Horario de Atención</span>
            </div>
            <span className="text-[11px] text-amber-400 font-bold">6:00 PM a 4:00 AM</span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-blue-400" />
              <span>Garantía de Plancha Caliente</span>
            </div>
            <span className="text-[11px] text-slate-400">100% Fresco</span>
          </div>
        </div>
      </div>
    </div>
  );
}
