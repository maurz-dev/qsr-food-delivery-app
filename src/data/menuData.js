export const MENU_CATEGORIES = [
  { id: 'all', name: '🔥 Más Pedido', icon: 'Flame' },
  { id: 'salchipapas', name: '🍟 Salchipapas', icon: 'Utensils' },
  { id: 'sandwiches', name: '🥪 Sánguches', icon: 'Sandwich' },
  { id: 'broaster', name: '🍗 Broaster & Alitas', icon: 'Drumstick' },
  { id: 'bebidas', name: '🥤 Bebidas & Extras', icon: 'CupSoda' }
];

export const SAUCES_LIST = [
  { id: 'mayo', name: 'Mayonesa Casera', spicy: false, color: '#fef08a' },
  { id: 'aji_pollero', name: 'Ají Pollero Cremoso 🔥', spicy: true, color: '#facc15' },
  { id: 'tartara', name: 'Tártara de la Casa', spicy: false, color: '#f8fafc' },
  { id: 'aceituna', name: 'Crema de Aceituna', spicy: false, color: '#9333ea' },
  { id: 'golf', name: 'Salsa Golf Criolla', spicy: false, color: '#fb923c' },
  { id: 'rocoto', name: 'Rocoto Parrillero 🌶️🌶️', spicy: true, color: '#ef4444' },
  { id: 'ketchup', name: 'Kétchup Tradicional', spicy: false, color: '#dc2626' },
  { id: 'mostaza', name: 'Mostaza Clásica', spicy: false, color: '#eab308' },
  { id: 'chimichurri', name: 'Chimichurri Parrillero', spicy: false, color: '#15803d' }
];

export const ADDONS_LIST = [
  { id: 'huevo_montado', name: 'Huevo frito montado a la inglesa', price: 2.50 },
  { id: 'queso_edam', name: 'Doble queso Edam derretido', price: 3.00 },
  { id: 'tocino_crispy', name: 'Tocino ahumado crocante', price: 3.50 },
  { id: 'extra_papas_hilo', name: 'Porción extra de papas al hilo', price: 2.00 },
  { id: 'platano_frito', name: 'Plátano frito dulce (2 cortes)', price: 2.50 }
];

export const MENU_PRODUCTS = [
  {
    id: 'salchipapa-monstruosa',
    category: 'salchipapas',
    name: 'Salchipapa Monstruosa Bajonera',
    badge: '👑 El Rey del Carrito',
    description: 'Papas amarillas crocantes, doble salchicha Frankfurt en rodajas, chorizo parrillero ahumado, huevo frito montado y queso Edam derretido.',
    price: 24.50,
    prepTime: '12-15 min',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80',
    popular: true,
    rating: 4.9,
    reviewsCount: 384
  },
  {
    id: 'salchipapa-clasica',
    category: 'salchipapas',
    name: 'Salchipapa Clásica Callejera',
    badge: '⚡ Sale al Toque',
    description: 'La consentida de la noche: montaña de papas fritas doradas y crocantes con generosa salchicha Frankfurt en láminas.',
    price: 15.00,
    prepTime: '8-10 min',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80',
    popular: true,
    rating: 4.8,
    reviewsCount: 240
  },
  {
    id: 'sandwich-pollo-deshilachado',
    category: 'sandwiches',
    name: 'Sánguche de Pollo Deshilachado',
    badge: '⭐ Favorito del Público',
    description: 'Pan artesanal calientito, pechuga de pollo deshilachada jugosa y sazonada a la plancha, lechuga fresca y cerro de papas al hilo.',
    price: 13.50,
    prepTime: '6-8 min',
    image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=600&q=80',
    popular: true,
    rating: 4.9,
    reviewsCount: 512
  },
  {
    id: 'burger-artesanal-royal',
    category: 'sandwiches',
    name: 'Hamburguesa Royal a la Plancha',
    badge: '🔥 100% Casera',
    description: '150g de carne artesanal especiada al carbón en pan brioche, queso Edam fundido, huevo frito montado, lechuga y tomate.',
    price: 16.50,
    prepTime: '10-12 min',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    popular: true,
    rating: 4.8,
    reviewsCount: 198
  },
  {
    id: 'cuarto-pollo-broaster',
    category: 'broaster',
    name: '1/4 Pollo Broaster Ultra Crocante',
    badge: '🍗 Súper Crujiente',
    description: 'Pechuga o pierna marinada con receta secreta criolla, apanado crujiente dorado, servido con papas fritas y ensalada.',
    price: 18.00,
    prepTime: '12-14 min',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80',
    popular: true,
    rating: 4.9,
    reviewsCount: 420
  },
  {
    id: 'alitas-broaster-bbq',
    category: 'broaster',
    name: 'Alitas Broaster / BBQ x6 piezas',
    badge: '🔥 Para Picar',
    description: '6 alitas doradas y crujientes con opción de salsa BBQ ahumada o acevichada, acompañadas de papas fritas.',
    price: 19.50,
    prepTime: '12-15 min',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80',
    popular: false,
    rating: 4.7,
    reviewsCount: 110
  },
  {
    id: 'chicha-morada-casera',
    category: 'bebidas',
    name: 'Chicha Morada de Maíz Morado 1L',
    badge: '❄️ Heladita',
    description: 'Preparada artesanalmente con maíz morado, piña, manzana, canela, clavo de olor y toque justo de limón.',
    price: 9.00,
    prepTime: '2 min',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
    popular: true,
    rating: 4.9,
    reviewsCount: 310
  },
  {
    id: 'inka-kola-500ml',
    category: 'bebidas',
    name: 'Inka Kola Personal 500ml',
    badge: '🥤 La de siempre',
    description: 'Botella personal bien al polo para acompañar tu bajón.',
    price: 4.50,
    prepTime: '1 min',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80',
    popular: false,
    rating: 4.8,
    reviewsCount: 150
  }
];
