export const STORE_INFO = {
  name: 'El Punto Sanguchero',
  category: 'Sánguches • Salchipapas • Broaster',
  address: 'Av. Antúnez de Mayolo 420, Los Olivos',
  rating: 4.8,
  reviewsCount: '1.4k',
  deliveryTime: '25-35 min',
  deliveryFee: 4.50,
  distance: '1.2 km',
  minOrder: 15.00,
  coverImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80',
  logo: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&q=80',
  isOpen: true,
  openingHours: 'Abierto hasta las 4:00 AM'
};

export const PROMO_BANNERS = [
  {
    id: 'promo-1',
    title: '20% de descuento en Salchipapas',
    subtitle: 'Aplica en Monstruosa y Especial',
    badge: 'Oferta del día',
    bg: 'bg-gradient-to-r from-orange-500 to-red-500'
  },
  {
    id: 'promo-2',
    title: 'Envío Gratis pagando con Yape',
    subtitle: 'En compras mayores a S/ 25.00',
    badge: 'Yape / Plin',
    bg: 'bg-gradient-to-r from-purple-600 to-indigo-600'
  }
];

export const MENU_CATEGORIES = [
  { id: 'all', name: 'Populares' },
  { id: 'salchipapas', name: 'Salchipapas' },
  { id: 'broaster', name: 'Broaster & Alitas' },
  { id: 'sandwiches', name: 'Sánguches' },
  { id: 'bebidas', name: 'Bebidas' }
];

export const SAUCES_LIST = [
  { id: 'mayo', name: 'Mayonesa Casera', spicy: false, hex: '#FACC15' },
  { id: 'aji_pollero', name: 'Ají Pollero Artesanal', spicy: true, hex: '#EAB308' },
  { id: 'tartara', name: 'Tártara de la Casa', spicy: false, hex: '#F1F5F9' },
  { id: 'aceituna', name: 'Crema de Aceituna Botija', spicy: false, hex: '#9333EA' },
  { id: 'golf', name: 'Salsa Golf Criolla', spicy: false, hex: '#FB923C' },
  { id: 'rocoto', name: 'Rocoto Parrillero', spicy: true, hex: '#DC2626' },
  { id: 'chimichurri', name: 'Chimichurri Tradicional', spicy: false, hex: '#16A34A' },
  { id: 'ketchup', name: 'Kétchup', spicy: false, hex: '#EF4444' },
  { id: 'mostaza', name: 'Mostaza Clásica', spicy: false, hex: '#CA8A04' }
];

export const ADDONS_LIST = [
  { id: 'huevo_montado', name: 'Huevo frito montado a la plancha', price: 2.50 },
  { id: 'queso_edam', name: 'Queso Edam fundido (doble loncha)', price: 3.00 },
  { id: 'tocino_crispy', name: 'Tocino ahumado crujiente', price: 3.50 },
  { id: 'extra_papas_hilo', name: 'Porción extra de papas al hilo', price: 2.00 },
  { id: 'platano_frito', name: 'Plátano frito dulce (2 cortes)', price: 2.50 }
];

export const MENU_PRODUCTS = [
  {
    id: 'salchipapa-monstruosa',
    category: 'salchipapas',
    name: 'Salchipapa Monstruosa',
    description: 'Papas amarillas fritas, salchicha Frankfurt, chorizo parrillero, huevo frito montado y queso Edam fundido con cremas a elección.',
    price: 24.50,
    oldPrice: 28.00,
    popular: true,
    tag: 'Más vendido',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=600&q=80'
  },
  {
    id: 'salchipapa-clasica',
    category: 'salchipapas',
    name: 'Salchipapa Clásica',
    description: 'Generosa porción de papas fritas doradas, rodajas de salchicha Frankfurt y selección completa de salsas artesanales.',
    price: 15.00,
    oldPrice: null,
    popular: true,
    tag: 'Recomendado',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80'
  },
  {
    id: 'cuarto-pollo-broaster',
    category: 'broaster',
    name: '1/4 Pollo Broaster Crujiente',
    description: 'Pierna o pechuga con apanado crocante sazonado con especias criollas, acompañado de papas fritas y ensalada fresca.',
    price: 18.00,
    oldPrice: 21.00,
    popular: true,
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&q=80'
  },
  {
    id: 'alitas-broaster-bbq',
    category: 'broaster',
    name: 'Alitas Broaster BBQ (6 piezas)',
    description: 'Seis piezas de alitas doradas y crujientes con salsa BBQ ahumada o acevichada, acompañadas de papas fritas.',
    price: 19.50,
    oldPrice: null,
    popular: false,
    tag: null,
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&q=80'
  },
  {
    id: 'sandwich-pollo-deshilachado',
    category: 'sandwiches',
    name: 'Sánguche de Pollo Deshilachado',
    description: 'Pan artesanal crujiente, pechuga de pollo deshilachada a la plancha, lechuga fresca y papas al hilo.',
    price: 13.50,
    oldPrice: 15.00,
    popular: true,
    tag: 'Favorito',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80'
  },
  {
    id: 'burger-artesanal-royal',
    category: 'sandwiches',
    name: 'Hamburguesa Royal a la Plancha',
    description: '150 gramos de carne artesanal en pan brioche, queso Edam derretido, huevo montado, lechuga y tomate.',
    price: 16.50,
    oldPrice: null,
    popular: true,
    tag: null,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80'
  },
  {
    id: 'chicha-morada-casera',
    category: 'bebidas',
    name: 'Chicha Morada Casera (1 Litro)',
    description: 'Preparada con maiz morado, manzana, piña, canela, clavo de olor y limon recien exprimido.',
    price: 9.00,
    oldPrice: null,
    popular: false,
    tag: 'Bebida de la casa',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80'
  },
  {
    id: 'papas-amarillas-extra',
    category: 'salchipapas',
    name: 'Porción Extra de Papas Amarillas',
    description: 'Papas nativas amarillas fritas al momento con sal marina y salsas a eleccion.',
    price: 8.00,
    oldPrice: null,
    popular: false,
    tag: null,
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=600&q=80'
  }
];
