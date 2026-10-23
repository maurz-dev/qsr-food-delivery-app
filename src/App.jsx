import React, { useState } from 'react';
import { MENU_PRODUCTS, MENU_CATEGORIES, STORE_INFO } from './data/menuData';
import StoreHero from './components/StoreHero';
import VouchersSection from './components/VouchersSection';
import HeaderNav from './components/HeaderNav';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CheckoutModal from './components/CheckoutModal';
import LiveOrderTracker from './components/LiveOrderTracker';
import ProfileScreen from './components/ProfileScreen';
import BottomNav from './components/BottomNav';
import { ShoppingBag, ArrowRight, Search } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('menu');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [orderType, setOrderType] = useState('delivery'); // 'delivery' | 'pickup'
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeOrder, setActiveOrder] = useState(null);

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const handleOrderSuccess = (orderData) => {
    setActiveOrder(orderData);
    setActiveTab('tracking');
  };

  // Filtrado de productos
  const filteredProducts = MENU_PRODUCTS.filter((prod) => {
    const matchesCategory =
      activeCategory === 'all' || prod.category === activeCategory;
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const cartTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="w-full h-full max-w-[500px] mx-auto bg-white text-gray-900 flex flex-col font-sans select-none relative shadow-xl overflow-hidden">
      {/* Contenido Principal con Scroll Fluido */}
      <main className="flex-1 min-h-0 overflow-y-auto overscroll-contain pb-28">
        {activeTab === 'menu' && (
          <div className="bg-[#f6f7f9] space-y-2">
            {/* Cabecera de Restaurante (Estilo Rappi) */}
            <StoreHero
              orderType={orderType}
              onOrderTypeChange={setOrderType}
              onSearchClick={() => setActiveTab('search')}
            />

            {/* Banners Promocionales */}
            <VouchersSection />

            {/* Sticky Category Bar */}
            <HeaderNav
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />

            {/* Lista de Platos en Formato Horizontal Estándar de Rappi */}
            <div className="bg-white">
              <div className="px-4 pt-3 pb-1 border-b border-gray-100 flex items-center justify-between">
                <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-wider">
                  {activeCategory === 'all' ? 'Platos Destacados' : activeCategory}
                </h3>
                <span className="text-xs text-gray-400">
                  {filteredProducts.length} opciones
                </span>
              </div>

              <div className="divide-y divide-gray-100">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelect={setSelectedProduct}
                  />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="py-16 text-center text-gray-400 text-xs">
                  No se encontraron platos en esta categoría.
                </div>
              )}
            </div>
          </div>
        )}

        {/* Pestaña de Búsqueda */}
        {activeTab === 'search' && (
          <div className="p-4 space-y-4 bg-white min-h-full">
            <div className="relative">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                autoFocus
                placeholder="Buscar en El Punto Sanguchero..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-100 border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-gray-900 focus:outline-none focus:border-[#ff441f]"
              />
            </div>

            <div className="divide-y divide-gray-100">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={setSelectedProduct}
                />
              ))}
            </div>
          </div>
        )}

        {/* Pestaña de Seguimiento de Pedidos */}
        {activeTab === 'tracking' && (
          <div className="h-full flex flex-col bg-[#f6f7f9]">
            {activeOrder ? (
              <LiveOrderTracker
                order={activeOrder}
                onNewOrder={() => {
                  setActiveOrder(null);
                  setActiveTab('menu');
                }}
              />
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center py-28 space-y-3 bg-white">
                <div className="w-16 h-16 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mb-1">
                  <ShoppingBag size={28} />
                </div>
                <h3 className="text-base font-bold text-gray-900">
                  No tienes pedidos activos
                </h3>
                <p className="text-xs text-gray-500 max-w-xs">
                  Explora nuestra carta y pide los mejores sánguches y salchipapas a domicilio.
                </p>
                <button
                  onClick={() => setActiveTab('menu')}
                  className="bg-[#ff441f] text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-md transition active:scale-95"
                >
                  Ver el menú
                </button>
              </div>
            )}
          </div>
        )}

        {/* Pestaña de Cuenta */}
        {activeTab === 'profile' && <ProfileScreen />}
      </main>

      {/* Canasta Flotante Estilo Rappi (Aparece sobre el bottom nav) */}
      {cartCount > 0 && (
        <div className="fixed bottom-14 left-0 right-0 max-w-[500px] mx-auto px-4 py-2 z-30">
          <button
            onClick={() => setIsCheckoutOpen(true)}
            className="w-full bg-[#ff441f] hover:bg-[#e03412] text-white font-bold py-3.5 px-4 rounded-2xl flex items-center justify-between shadow-xl shadow-[#ff441f]/25 active:scale-[0.99] transition"
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-black/20 text-white text-xs flex items-center justify-center font-extrabold">
                {cartCount}
              </span>
              <span className="text-xs font-bold">Ver canasta</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-black">S/ {cartTotal.toFixed(2)}</span>
              <ArrowRight size={16} />
            </div>
          </button>
        </div>
      )}

      {/* Barra de Navegación Inferior (Tabs oficiales) */}
      <BottomNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
        hasActiveOrder={!!activeOrder}
      />

      {/* Modal de Personalización de Producto */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Modal de Checkout / Canasta */}
      {isCheckoutOpen && (
        <CheckoutModal
          cart={cart}
          orderType={orderType}
          onClose={() => setIsCheckoutOpen(false)}
          onClearCart={() => setCart([])}
          onOrderSuccess={handleOrderSuccess}
        />
      )}
    </div>
  );
}
