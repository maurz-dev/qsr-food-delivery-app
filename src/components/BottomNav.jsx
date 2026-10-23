import React from 'react';
import { Store, Search, Bike, User } from 'lucide-react';

export default function BottomNav({ activeTab, onTabChange, hasActiveOrder }) {
  const tabs = [
    { id: 'menu', label: 'Restaurante', icon: Store },
    { id: 'search', label: 'Buscar', icon: Search },
    {
      id: 'tracking',
      label: 'Mis Pedidos',
      icon: Bike,
      badge: hasActiveOrder ? '1' : null
    },
    { id: 'profile', label: 'Mi Cuenta', icon: User }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-[500px] mx-auto bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-2 flex justify-around items-center z-40">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative flex flex-col items-center justify-center py-1 px-3 transition ${
              isActive ? 'text-[#ff441f] font-bold' : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <div className="relative">
              <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
              {tab.badge && (
                <span className="absolute -top-1 -right-2 w-4 h-4 bg-[#ff441f] text-white rounded-full text-[9px] font-black flex items-center justify-center">
                  {tab.badge}
                </span>
              )}
            </div>
            <span className="text-[10px] mt-1 tracking-tight">
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
