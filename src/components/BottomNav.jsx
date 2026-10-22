import React from 'react';
import { UtensilsCrossed, Flame, Bike, User, Heart } from 'lucide-react';

export default function BottomNav({ activeTab, onTabChange, cartCount, hasActiveOrder }) {
  const tabs = [
    { id: 'menu', label: 'Menú', icon: UtensilsCrossed },
    { id: 'combos', label: 'Combos 🔥', icon: Flame },
    {
      id: 'tracking',
      label: 'Mi Pedido',
      icon: Bike,
      badge: hasActiveOrder ? '1' : null
    },
    { id: 'favorites', label: 'Favoritos', icon: Heart },
    { id: 'profile', label: 'Perfil', icon: User }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-[500px] mx-auto bg-[#12141c]/95 backdrop-blur-xl border-t border-slate-800/80 px-2 py-2 flex justify-around items-center z-40">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all duration-200 ${
              isActive
                ? 'text-orange-500 font-bold scale-105'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="relative">
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              {tab.badge && (
                <span className="absolute -top-1 -right-2 w-4 h-4 bg-orange-600 text-white rounded-full text-[9px] font-black flex items-center justify-center animate-ping"></span>
              )}
              {tab.badge && (
                <span className="absolute -top-1 -right-2 w-4 h-4 bg-orange-500 text-white rounded-full text-[9px] font-black flex items-center justify-center">
                  {tab.badge}
                </span>
              )}
            </div>
            <span className="text-[10px] mt-1 tracking-tight">
              {tab.label}
            </span>
            {isActive && (
              <span className="w-1 h-1 rounded-full bg-orange-500 mt-0.5"></span>
            )}
          </button>
        );
      })}
    </nav>
  );
}
