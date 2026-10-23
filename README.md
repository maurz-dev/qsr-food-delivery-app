# El Punto Sanguchero - Mobile Food Delivery & Ordering Application

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

Aplicacion movil para el sector Quick Service Restaurant (QSR), sangucherias y comida rapida urbana. Disenada bajo una arquitectura orientada a componentes, interfaces fluidas con recarga en caliente y flujos de pedidos completos desde catalogo hasta seguimiento en tiempo real.

---

## Caracteristicas del Sistema

### 1. Cabecera Comercial y Geolocalizacion (Store Hero)
- Selector de direccion de entrega en tiempo real con persistencia de zona.
- Perfil del establecimiento con valoraciones verificadas (4.9 / 2.4k resenas), estado de atencion y tiempos estimados.
- Selector de modalidades de servicio:
  - Delivery Express (20 a 30 minutos).
  - Recojo al Paso / Curbside Pickup (10 a 12 minutos sin cola).
  - Atencion en Mesa o Barra.

### 2. Cuponera Digital y Promociones
- Modulo horizontal de cupones canjeables con validacion dinamica:
  - PUNTODELIVERY: Envio sin costo en ordenes superiores al monto base.
  - CHICHAFREE: Bebida artesanal incluida con combos de la carta.
  - BIENVENIDO: Descuento directo en la primera orden del usuario.
- Notificaciones en pantalla y aplicacion automatica en el resumen de compra.

### 3. Catalogo de Productos en Cuadricula Vertical
- Visualizacion en dos columnas con fotografia gastronómica de alta resolucion.
- Metricas por producto: indicador calorico (kcal), tiempo de coccion y etiquetas de demanda.
- Accion rapida para personalizacion y adicion al pedido.

### 4. Modulo Especializado de Salsas y Guarniciones
- Selector cromatico para salsas y cremas criollas (mayonesa casera, aji pollero, tartara, crema de aceituna, salsa golf, rocoto parrillero y chimichurri).
- Filtros de seleccion rapida: Todas las cremas, Sin picante y Seleccion clasica.
- Opciones de despacho: Bañadas sobre el producto o en vasitos individuales separados.
- Guarniciones y adicionales de plancha (huevo montado, queso edam fundido, tocino crujiente, platano frito) con recalculacion de precio en tiempo real.

### 5. Pasarela de Pago y Liquidacion de Efectivo
- Modulo de pago en efectivo con calculadora de cambio (calcula el vuelto exacto que requiere el repartidor).
- Integracion visual de billeteras digitales (Yape / Plin) con codigo QR.
- Soporte para pagos con tarjeta de debito y credito.
- Desglose detallado de subtotales, recargo de delivery y descuentos aplicados.

### 6. Seguimiento de Ordenes en Vivo (Live Order Tracker)
- Timeline interactivo con cuatro etapas de preparacion:
  1. Orden confirmada en comanda.
  2. Preparacion en plancha y freidora.
  3. Empaque y adicion de salsas.
  4. Despacho en ruta con motorizado o listo para recojo en mostrador.
- Canales directos de soporte mediante llamada telefonica y enlace a WhatsApp.

---

## Especificaciones Tecnicas

| Componente | Tecnologia |
| :--- | :--- |
| Entorno y Libreria Base | React 18.3.1 + Vite 6.2.0 |
| Motor de Estilos | Tailwind CSS 3.4.17 + PostCSS |
| Libreria de Iconos | Lucide React |
| Animaciones | Canvas Confetti |
| Tipografia | Plus Jakarta Sans & Outfit |
| Arquitectura de Interfaz | Mobile-First Responsive Shell |

---

## Estructura del Repositorio

```text
├── src/
│   ├── components/
│   │   ├── BottomNav.jsx          # Barra de navegacion inferior con tabs
│   │   ├── CheckoutModal.jsx      # Modal de liquidacion y metodos de pago
│   │   ├── HeaderNav.jsx          # Buscador y filtros de categorias
│   │   ├── HeroSlider.jsx         # Carrusel de promociones destacadas
│   │   ├── LiveOrderTracker.jsx   # Seguimiento del pedido en tiempo real
│   │   ├── ProductCard.jsx        # Tarjeta vertical en cuadricula
│   │   ├── ProductModal.jsx       # Personalizador de salsas y adicionales
│   │   ├── ProfileScreen.jsx      # Perfil de usuario y direcciones guardadas
│   │   ├── SauceSelector.jsx      # Selector de salsas y modo de despacho
│   │   ├── StoreHero.jsx          # Informacion del local y tipo de entrega
│   │   └── VouchersSection.jsx    # Cuponera de descuentos activos
│   ├── data/
│   │   └── menuData.js            # Modelos de datos del menu, precios y cupones
│   ├── App.jsx                    # Contenedor principal y gestion de estado
│   ├── index.css                  # Definicion de variables y estilos base
│   └── main.jsx                   # Punto de entrada de la aplicacion
├── index.html                     # Documento HTML con viewport optimizado
├── package.json                   # Dependencias y scripts de ejecucion
├── tailwind.config.js             # Configuracion de tokens de Tailwind
└── vite.config.js                 # Configuracion del servidor Vite
```

---

## Guia de Instalacion y Ejecucion Local

### 1. Clonar el repositorio
```bash
git clone https://github.com/maurz-dev/qsr-food-delivery-app.git
cd qsr-food-delivery-app
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el entorno de desarrollo
```bash
npm run dev
```

El servidor local estara disponible en:
http://localhost:5180/

### 4. Compilacion para despliegue en produccion
```bash
npm run build
```

---

## Entorno de Visualizacion Recomendado

Para emular la pantalla de un smartphone durante el desarrollo:
1. Utilizar Responsively App o activar las herramientas de desarrollador del navegador (F12, luego Ctrl + Shift + M).
2. Seleccionar resoluciones estandar (como iPhone 12/13/14 Pro a 390x844 px o dispositivos Android similares).
3. Ingresar a la direccion local http://localhost:5180/.

---

## Licencia

Este proyecto se distribuye bajo la Licencia MIT. Consulta el archivo LICENSE para mas detalles.
