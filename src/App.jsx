import React, { useState, useEffect } from 'react';
import { MENU_PRODUCTS } from './data/menuData';
import HeaderNav from './components/HeaderNav';
import OrderTypeSelector from './components/OrderTypeSelector';
import HeroSlider from './components/HeroSlider';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CheckoutModal from './components/CheckoutModal';
import LiveOrderTracker from './components/LiveOrderTracker';
import ProfileScreen from './components/ProfileScreen';
import BottomNav from './components/BottomNav';
import { Flame, Sparkles, ArrowRight, ShoppingBag, Heart, Bike } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('menu');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [orderType, setOrderType] = useState('pickup');
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeOrder, setActiveOrder] = useState(null);
  const [favorites, setFavorites] = useState(['salchipapa-monstruosa', 'sandwich-pollo-deshilachado']);

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleSelectPromo = (productId) => {
    const prod = MENU_PRODUCTS.find((p) => p.id === productId);
    if (prod) setSelectedProduct(prod);
  };

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const handleOrderSuccess = (orderData) => {
    setActiveOrder(orderData);
    setActiveTab('tracking');
  };

  // Filtrado de productos para la pestaña Menú
  const filteredProducts = MENU_PRODUCTS.filter((prod) => {
    const matchesCategory =
      activeCategory === 'all' || prod.category === activeCategory;
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Platos favoritos
  const favoriteProducts = MENU_PRODUCTS.filter((prod) =>
    favorites.includes(prod.id)
  );

  const cartTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="w-full min-h-screen max-w-[500px] mx-auto bg-[#0e1015] text-white flex flex-col font-sans select-none relative shadow-2xl">
      {/* Header Superior Móvil (solo en pestaña menú y combos) */}
      {(activeTab === 'menu' || activeTab === 'combos') && (
        <HeaderNav
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          cartCount={cartCount}
          onOpenCart={() => setIsCheckoutOpen(true)}
          orderType={orderType}
        />
      )}

      {/* Contenido Principal según Pestaña Activa */}
      <main className="flex-1 overflow-y-auto no-scrollbar pb-28">
        {activeTab === 'menu' && (
          <div className="p-4 space-y-4">
            {/* Modalidad de Pedido */}
            <OrderTypeSelector
              currentType={orderType}
              onChange={setOrderType}
            />

            {/* Slider de Promociones Nocturnas */}
            <HeroSlider onSelectPromo={handleSelectPromo} />

            {/* Catálogo de Platos */}
            <div className="space-y-3">
              <div className="flex justify-between items-center px-1">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Flame size={14} className="text-orange-500" />
                  La Plancha Caliente ({filteredProducts.length})
                </h3>
                <span className="text-[10px] text-slate-500">Toca para salsas</span>
              </div>

              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={setSelectedProduct}
                  isFavorite={favorites.includes(product.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}

              {filteredProducts.length === 0 && (
                <div className="py-12 text-center text-slate-500 text-xs">
                  No encontramos resultados para "{searchQuery}".
                </div>
              )}
            </div>
          </div>
        )}

        {/* Pestaña de Combos */}
        {activeTab === 'combos' && (
          <div className="p-4 space-y-4">
            <div>
              <h2 className="text-base font-black text-white">Combos Bajoneros 🍟</h2>
              <p className="text-xs text-slate-400">Promociones para compartir o bajonear solo</p>
            </div>

            <HeroSlider onSelectPromo={handleSelectPromo} />

            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-black uppercase tracking-wider text-amber-400">
                Los Más Pedidos de la Madrugada
              </h3>
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
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center py-20 space-y-3">
                <div className="w-16 h-16 rounded-3xl bg-slate-800 text-orange-400 flex items-center justify-center mb-1">
                  <Bike size={32} />
                </div>
                <h3 className="text-base font-black text-white">
                  No tienes pedidos en curso
                </h3>
                <p className="text-xs text-slate-400 max-w-xs">
                  ¿Hambre de medianoche? Explora el menú y pide tu salchipapa con todas las cremas.
                </p>
                <button
                  onClick={() => setActiveTab('menu')}
                  className="bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-lg shadow-orange-600/30 transition mt-2"
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
              <h2 className="text-base font-black text-white">Tus Antojos Favoritos ❤️</h2>
              <p className="text-xs text-slate-400">Tus platos guardados para pedir en un toque</p>
            </div>

            {favoriteProducts.length > 0 ? (
              <div className="space-y-3">
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
              <div className="py-20 text-center space-y-2">
                <Heart size={36} className="text-slate-600 mx-auto" />
                <p className="text-xs text-slate-400">
                  Aún no tienes favoritos guardados.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Pestaña de Perfil */}
        {activeTab === 'profile' && <ProfileScreen />}
      </main>

      {/* Barra Flotante de Carrito (Sticky sobre la barra inferior si hay items) */}
      {cartCount > 0 && (
        <div className="fixed bottom-16 left-0 right-0 max-w-[500px] mx-auto px-3 py-1.5 z-30">
          <button
            onClick={() => setIsCheckoutOpen(true)}
            className="w-full bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 text-white font-extrabold py-3 px-4 rounded-2xl flex items-center justify-between shadow-2xl shadow-orange-600/50 active:scale-[0.99] transition border border-orange-400/30 animate-pulse"
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-black/30 text-white text-xs flex items-center justify-center font-black">
                {cartCount}
              </span>
              <span className="text-xs font-black">Ver Pedido / Pagar</span>
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
