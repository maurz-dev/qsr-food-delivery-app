import React, { useState } from 'react';
import { MENU_PRODUCTS, VOUCHERS, STORE_INFO } from './data/menuData';
import StoreHero from './components/StoreHero';
import VouchersSection from './components/VouchersSection';
import HeaderNav from './components/HeaderNav';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CheckoutModal from './components/CheckoutModal';
import LiveOrderTracker from './components/LiveOrderTracker';
import ProfileScreen from './components/ProfileScreen';
import BottomNav from './components/BottomNav';
import { Flame, Sparkles, ArrowRight, ShoppingBag, Heart, Bike, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('menu');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [orderType, setOrderType] = useState('delivery'); // 'delivery' | 'pickup' | 'dine_in'
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeOrder, setActiveOrder] = useState(null);
  const [vouchers, setVouchers] = useState(VOUCHERS);
  const [favorites, setFavorites] = useState(['salchipapa-monstruosa', 'cuarto-pollo-broaster']);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const toggleFavorite = (productId) => {
    setFavorites((prev) => {
      const isFav = prev.includes(productId);
      const updated = isFav ? prev.filter((id) => id !== productId) : [...prev, productId];
      showToast(isFav ? 'Eliminado de favoritos' : '❤️ ¡Guardado en tus favoritos!');
      return updated;
    });
  };

  const handleClaimVoucher = (voucherId) => {
    setVouchers((prev) =>
      prev.map((v) => (v.id === voucherId ? { ...v, claimed: true } : v))
    );
    showToast('🎟️ ¡Cupón activado para tu próximo pedido!');
  };

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
    showToast(`🍟 ¡${item.product.name} agregado al carrito!`);
  };

  const handleOrderSuccess = (orderData) => {
    setActiveOrder(orderData);
    setActiveTab('tracking');
    showToast('🔥 ¡Pedido enviado a la plancha con éxito!');
  };

  // Filtrado de productos para la pestaña Menú
  const filteredProducts = MENU_PRODUCTS.filter((prod) => {
    const matchesCategory =
      activeCategory === 'all' || prod.category === activeCategory;
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Platos favoritos
  const favoriteProducts = MENU_PRODUCTS.filter((prod) =>
    favorites.includes(prod.id)
  );

  const cartTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="w-full h-full max-w-[500px] mx-auto bg-[#0b0d12] text-white flex flex-col font-sans select-none relative shadow-2xl overflow-hidden">
      {/* Toast Flotante Superior */}
      {toastMessage && (
        <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 bg-[#1a1e2c]/95 border border-amber-500/40 text-amber-300 text-xs font-black px-4 py-2 rounded-2xl shadow-2xl backdrop-blur-xl flex items-center gap-2 animate-bounce">
          <Sparkles size={14} className="text-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Contenido Principal con Scroll Fluido Garantizado */}
      <main className="flex-1 min-h-0 overflow-y-auto overscroll-contain pb-36">
        {activeTab === 'menu' && (
          <div className="space-y-4">
            {/* Cabecera de la Marca y Ubicación */}
            <StoreHero
              orderType={orderType}
              onOrderTypeChange={setOrderType}
              onOpenAddressModal={() => showToast('📍 Dirección fijada: Av. Las Palmeras 450')}
            />

            <div className="px-4 space-y-4">
              {/* Sección de Cupones Reclamables */}
              <VouchersSection
                vouchers={vouchers}
                onClaimVoucher={handleClaimVoucher}
              />
            </div>

            {/* Sticky Header con Búsqueda y Categorías */}
            <HeaderNav
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              cartCount={cartCount}
              onOpenCart={() => setIsCheckoutOpen(true)}
            />

            {/* Catálogo de Platos en Cuadrícula 2 Columnas (Estilo McDonald's & Roky's) */}
            <div className="px-4 space-y-3">
              <div className="flex justify-between items-center px-1">
                <div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-white flex items-center gap-1.5">
                    <Flame size={16} className="text-orange-500" />
                    Para Ti • Plancha Caliente
                  </h3>
                  <p className="text-[10px] text-slate-400">
                    {filteredProducts.length} platos listos para salir
                  </p>
                </div>
                <span className="text-[10px] text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded-lg border border-amber-500/20">
                  🔥 Cremas ilimitadas
                </span>
              </div>

              {/* Grid de 2 Columnas Verticales */}
              <div className="grid grid-cols-2 gap-3">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelect={setSelectedProduct}
                    isFavorite={favorites.includes(product.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="py-12 text-center text-slate-400 text-xs">
                  No encontramos resultados para "{searchQuery}". Intenta con salchipapa o broaster.
                </div>
              )}
            </div>
          </div>
        )}

        {/* Pestaña de Combos */}
        {activeTab === 'combos' && (
          <div className="p-4 space-y-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-md border border-orange-500/30 inline-block mb-1">
                Ahorra hasta 30%
              </span>
              <h2 className="text-lg font-black text-white">Combos & Promociones 🍟</h2>
              <p className="text-xs text-slate-400">Nuestras combinaciones más pedidas con bebidas y salsas de la casa</p>
            </div>

            <VouchersSection
              vouchers={vouchers}
              onClaimVoucher={handleClaimVoucher}
            />

            <div className="grid grid-cols-2 gap-3 pt-2">
              {MENU_PRODUCTS.filter((p) => p.popular).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={setSelectedProduct}
                  isFavorite={favorites.includes(product.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          </div>
        )}

        {/* Pestaña de Seguimiento / Tracking de Pedido */}
        {activeTab === 'tracking' && (
          <div className="h-full flex flex-col">
            {activeOrder ? (
              <LiveOrderTracker
                order={activeOrder}
                onNewOrder={() => {
                  setActiveOrder(null);
                  setActiveTab('menu');
                }}
              />
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center py-24 space-y-3">
                <div className="w-16 h-16 rounded-3xl bg-[#1a1e2c] text-orange-400 flex items-center justify-center border border-white/10 shadow-xl mb-1">
                  <Bike size={32} />
                </div>
                <h3 className="text-base font-black text-white">
                  No tienes pedidos en curso
                </h3>
                <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                  ¿Hambre nocturna? Explora el menú y pide tu salchipapa con todas las cremas en vasito o encima.
                </p>
                <button
                  onClick={() => setActiveTab('menu')}
                  className="bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-black text-xs px-6 py-3 rounded-2xl shadow-xl shadow-orange-600/30 transition mt-2 active:scale-95"
                >
                  Ver Menú Callejero
                </button>
              </div>
            )}
          </div>
        )}

        {/* Pestaña de Favoritos */}
        {activeTab === 'favorites' && (
          <div className="p-4 space-y-4">
            <div>
              <h2 className="text-lg font-black text-white">Tus Antojos Favoritos ❤️</h2>
              <p className="text-xs text-slate-400">Tus platos preferidos para pedir con un solo toque</p>
            </div>

            {favoriteProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-3">
                {favoriteProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelect={setSelectedProduct}
                    isFavorite={true}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            ) : (
              <div className="py-24 text-center space-y-2">
                <Heart size={40} className="text-slate-600 mx-auto" />
                <p className="text-xs text-slate-400 font-bold">
                  Aún no has guardado platos favoritos.
                </p>
                <button
                  onClick={() => setActiveTab('menu')}
                  className="text-xs text-orange-400 font-black underline mt-1"
                >
                  Explorar la plancha
                </button>
              </div>
            )}
          </div>
        )}

        {/* Pestaña de Perfil */}
        {activeTab === 'profile' && <ProfileScreen />}
      </main>

      {/* Barra Flotante de Carrito (Sticky sobre la barra de navegación) */}
      {cartCount > 0 && (
        <div className="fixed bottom-16 left-0 right-0 max-w-[500px] mx-auto px-4 py-1.5 z-30">
          <button
            onClick={() => setIsCheckoutOpen(true)}
            className="w-full bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 text-white font-black py-3.5 px-4 rounded-2xl flex items-center justify-between shadow-2xl shadow-orange-600/50 active:scale-[0.99] transition border border-amber-400/30"
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-black/30 text-white text-xs flex items-center justify-center font-black">
                {cartCount}
              </span>
              <span className="text-xs tracking-wide">Ver Pedido / Pagar</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-black">S/ {cartTotal.toFixed(2)}</span>
              <ArrowRight size={16} />
            </div>
          </button>
        </div>
      )}

      {/* Barra de Navegación Inferior Móvil */}
      <BottomNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
        cartCount={cartCount}
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

      {/* Modal de Checkout / Pago */}
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
