export const STORE_INFO = {
  name: 'El Punto Sanguchero',
  tagline: 'Sánguches, Salchipapas & Broaster Artesanal',
  address: 'Av. Antúnez de Mayolo 420 - Los Olivos',
  rating: 4.9,
  reviewsCount: '2.4k',
  deliveryTime: '20-30 min',
  minOrder: 'S/ 12.00',
  coverImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80',
  logo: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&q=80',
  isOpen: true,
  openingHours: '6:00 PM - 4:00 AM'
};

export const VOUCHERS = [
  {
    id: 'envio-gratis',
    code: 'PUNTODELIVERY',
    title: 'Delivery Gratis',
    desc: 'En pedidos mayores a S/ 25',
    claimed: true,
    tag: 'x2'
  },
  {
    id: 'chicha-gratis',
    code: 'CHICHAFREE',
    title: 'Vaso Chicha 500ml Free',
    desc: 'Por la compra de cualquier Combo',
    claimed: false,
    tag: 'x1'
  },
  {
    id: 'descuento-10',
    code: 'BIENVENIDO',
    title: 'S/ 5.00 OFF',
    desc: 'Válido para tu primera orden',
    claimed: false,
    tag: 'Nuevo'
  }
];

export const MENU_CATEGORIES = [
  { id: 'all', name: '🔥 Para Ti', icon: 'Sparkles' },
  { id: 'salchipapas', name: '🍟 Salchipapas', icon: 'Utensils' },
  { id: 'broaster', name: '🍗 Broaster & Alitas', icon: 'Drumstick' },
  { id: 'sandwiches', name: '🥪 Sánguches', icon: 'Sandwich' },
  { id: 'bebidas', name: '🥤 Bebidas', icon: 'CupSoda' }
];

export const SAUCES_LIST = [
  { id: 'mayo', name: 'Mayonesa Casera', spicy: false, hex: '#FEF08A' },
  { id: 'aji_pollero', name: 'Ají Pollero Cremoso 🔥', spicy: true, hex: '#FACC15' },
  { id: 'tartara', name: 'Tártara de la Casa', spicy: false, hex: '#FFFFFF' },
  { id: 'aceituna', name: 'Crema de Aceituna Botija', spicy: false, hex: '#A855F7' },
  { id: 'golf', name: 'Salsa Golf Criolla', spicy: false, hex: '#FB923C' },
  { id: 'rocoto', name: 'Rocoto Parrillero 🌶️🌶️', spicy: true, hex: '#EF4444' },
  { id: 'chimichurri', name: 'Chimichurri Parrillero', spicy: false, hex: '#22C55E' },
  { id: 'ketchup', name: 'Kétchup Tradicional', spicy: false, hex: '#DC2626' },
  { id: 'mostaza', name: 'Mostaza Clásica', spicy: false, hex: '#EAB308' }
];

export const ADDONS_LIST = [
  { id: 'huevo_montado', name: 'Huevo frito montado a la inglesa', price: 2.50, icon: '🍳' },
  { id: 'queso_edam', name: 'Doble queso Edam fundido', price: 3.00, icon: '🧀' },
  { id: 'tocino_crispy', name: 'Tocino ahumado crocante', price: 3.50, icon: '🥓' },
  { id: 'extra_papas_hilo', name: 'Porción extra papas al hilo', price: 2.00, icon: '🍟' },
  { id: 'platano_frito', name: 'Plátano frito dulce (2 cortes)', price: 2.50, icon: '🍌' }
];

export const MENU_PRODUCTS = [
  {
    id: 'salchipapa-monstruosa',
    category: 'salchipapas',
    name: 'Salchipapa Monstruosa',
    subtitle: 'Con todo el power',
    badge: '👑 El Rey',
    badgeColor: 'bg-amber-500',
    description: 'Papas amarillas crocantes, doble salchicha Frankfurt en láminas, chorizo parrillero ahumado, huevo montado y queso Edam fundido.',
    price: 24.50,
    calories: '890 kcal',
    prepTime: '12-15 min',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=800&q=80',
    popular: true,
    rating: 4.9,
    reviewsCount: 384
  },
  {
    id: 'salchipapa-clasica',
    category: 'salchipapas',
    name: 'Salchipapa Clásica',
    subtitle: 'La de siempre',
    badge: '⚡ Sale al Toque',
    badgeColor: 'bg-orange-600',
    description: 'Montaña de papas fritas doradas y crujientes con salchicha Frankfurt en rodajas y todas las cremas que quieras.',
    price: 15.00,
    calories: '650 kcal',
    prepTime: '8-10 min',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80',
    popular: true,
    rating: 4.8,
    reviewsCount: 240
  },
  {
    id: 'cuarto-pollo-broaster',
    category: 'broaster',
    name: '1/4 Pollo Broaster',
    subtitle: 'Crocante & Jugoso',
    badge: '🍗 Top Ventas',
    badgeColor: 'bg-red-600',
    description: 'Pierna o pechuga marinada con receta secreta de la casa, apanado ultra crujiente dorado, servido con papas fritas y ensalada.',
    price: 18.00,
    calories: '780 kcal',
    prepTime: '12-14 min',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80',
    popular: true,
    rating: 4.9,
    reviewsCount: 420
  },
  {
    id: 'alitas-broaster-bbq',
    category: 'broaster',
    name: 'Alitas Broaster x6',
    subtitle: 'BBQ o Acevichadas',
    badge: '🔥 Para Picar',
    badgeColor: 'bg-amber-600',
    description: '6 alitas doradas y crujientes bañadas en salsa BBQ artesanal ahumada o acevichada, acompañadas de papas fritas.',
    price: 19.50,
    calories: '720 kcal',
    prepTime: '12-15 min',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&q=80',
    popular: false,
    rating: 4.7,
    reviewsCount: 110
  },
  {
    id: 'sandwich-pollo-deshilachado',
    category: 'sandwiches',
    name: 'Sánguche de Pollo',
    subtitle: 'Con papas al hilo',
    badge: '⭐ El Favorito',
    badgeColor: 'bg-emerald-600',
    description: 'Pan artesanal crujiente, pechuga de pollo deshilachada y sazonada a la plancha, lechuga fresca y cerro de papas al hilo.',
    price: 13.50,
    calories: '520 kcal',
    prepTime: '6-8 min',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&q=80',
    popular: true,
    rating: 4.9,
    reviewsCount: 512
  },
  {
    id: 'burger-artesanal-royal',
    category: 'sandwiches',
    name: 'Hamburguesa Royal',
    subtitle: '150g carne casera',
    badge: '🔥 A la Plancha',
    badgeColor: 'bg-orange-500',
    description: 'Carne artesanal a la parrilla en pan brioche suave, queso Edam fundido, huevo montado, lechuga y tomate.',
    price: 16.50,
    calories: '740 kcal',
    prepTime: '10-12 min',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
    popular: true,
    rating: 4.8,
    reviewsCount: 198
  },
  {
    id: 'chicha-morada-casera',
    category: 'bebidas',
    name: 'Chicha Morada 1L',
    subtitle: 'De maíz morado',
    badge: '❄️ Heladita',
    badgeColor: 'bg-purple-600',
    description: 'Receta tradicional hervida con piña, manzana, canela, clavo de olor y toque refrescante de limón recién exprimido.',
    price: 9.00,
    calories: '180 kcal',
    prepTime: '2 min',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80',
    popular: true,
    rating: 4.9,
    reviewsCount: 310
  },
  {
    id: 'papas-amarillas-extra',
    category: 'salchipapas',
    name: 'Papas Amarillas Extra',
    subtitle: 'Porción personal',
    badge: '🍟 Crocantes',
    badgeColor: 'bg-yellow-500',
    description: 'Papas nativas amarillas fritas al momento, crocantes por fuera y suaves por dentro.',
    price: 8.00,
    calories: '380 kcal',
    prepTime: '5 min',
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=800&q=80',
    popular: false,
    rating: 4.8,
    reviewsCount: 95
  }
];
