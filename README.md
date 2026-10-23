# 🍔 El Punto Sanguchero — Mobile Food Delivery & Ordering App

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

Aplicación móvil de alta gama orientada al sector **Quick Service Restaurant (QSR)**, food trucks y sangucherías urbanas. Desarrollada con un diseño moderno optimizado para dispositivos móviles, inspirada en las mejores prácticas de plataformas líderes de delivery como **Roky's**, **Bembos**, **Enatega** y **McDonald's App**.

---

## 📸 Características Principales

### 1. 🏪 Cabecera de Marca (Store Hero)
- **Selector de Ubicación Dinámico:** Permite alternar la dirección de entrega en tiempo real (*ej. Av. Las Palmeras 450*).
- **Branding & Calificaciones:** Portada con fotografía gastronómica en alta definición, logotipo oficial, estado de atención en tiempo real (*6:00 PM a 4:00 AM*) y calificación de clientes (*⭐ 4.9 con más de 2,400 reseñas*).
- **Modalidades de Pedido Integradas:**
  - 🛵 **Delivery Express** (con tiempo estimado de 20-30 min).
  - 🥡 **Al Paso / Para Llevar** (recojo rápido sin cola en 10-12 min).
  - 🪑 **Consumo en Barra** (servicio directo en local o barra).

### 2. 🎟️ Cuponera Digital Interactiva (Vouchers)
- Carrusel horizontal con cupones canjeables con un toque:
  - `PUNTODELIVERY` — Delivery Gratis en órdenes superiores a S/ 25.00.
  - `CHICHAFREE` — Vaso de chicha morada artesanal de 500ml de regalo.
  - `BIENVENIDO` — S/ 5.00 OFF en la primera compra.
- Notificaciones Toast en pantalla al reclamar y aplicación automática en el checkout.

### 3. 🍟 Catálogo en Cuadrícula de Doble Columna
- Formato vertical de 2 columnas estilo nativo (inspirado en la interfaz de McDonald's).
- Fotografía en alta resolución, conteo de calorías (*kcal*), tiempo estimado de preparación y etiquetas de categoría (*👑 El Rey*, *⚡ Sale al Toque*, *🍗 Top Ventas*).
- Botón circular interactivo `+` con micro-animaciones para personalización inmediata.

### 4. 🥣 Módulo Especializado: Barra de Salsas y Adicionales
- **Selector cromático de cremas peruanas:** Mayonesa casera, Ají pollero cremoso, Tártara de la casa, Crema de aceituna botija, Salsa golf, Rocoto parrillero y Chimichurri.
- **Acciones rápidas en un toque:** `¡Todas las cremas!` | `Sin picante` | `Mayo + Ají + Tártara`.
- **Selector de servicio:** Opción de servir las cremas *bañadas encima* o *en vasitos separados*.
- **Adicionales de plancha (Upselling):** Huevo frito montado, queso Edam fundido, tocino crocante ahumado, plátano frito y papas al hilo con actualización de subtotal en tiempo real.

### 5. 💳 Pasarela de Checkout y Métodos de Pago Locales
- **Efectivo contra entrega con cálculo dinámico de vuelto:** El cliente ingresa con cuánto dinero va a pagar y el sistema calcula automáticamente el cambio exacto que debe llevar el repartidor.
- **Billeteras Digitales (Yape / Plin):** Código QR interactivo y datos de transferencia instantánea.
- **Tarjetas de Débito y Crédito.**
- Animación de confeti al confirmar el pedido y redirección al seguimiento.

### 6. 🛵 Seguimiento del Pedido en Tiempo Real (Live Order Tracker)
- Línea de tiempo dinámica con 4 etapas de preparación:
  1. `Orden Recibida en Comanda 📝`
  2. `En la Plancha y Freidora 🔥`
  3. `Empacando con tus Cremas 🍟`
  4. `En Moto hacia tu dirección / Listo para recoger 🛵`
- Botones de contacto directo para llamada telefónica y chat de WhatsApp con el restaurante.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología |
| :--- | :--- |
| **Framework Base** | [React 18](https://reactjs.org/) + [Vite 6](https://vitejs.dev/) |
| **Estilos & Diseño** | [Tailwind CSS 3.4](https://tailwindcss.com/) + CSS Variables |
| **Iconografía** | [Lucide React](https://lucide.dev/) |
| **Efectos Visuales** | [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) |
| **Tipografía** | Plus Jakarta Sans & Outfit (Google Fonts) |
| **Arquitectura de UI** | Mobile-First / Component-Driven Architecture |

---

## 📂 Estructura del Proyecto

```text
├── src/
│   ├── components/
│   │   ├── BottomNav.jsx          # Barra inferior de navegación móvil
│   │   ├── CheckoutModal.jsx      # Modal de pago, Yape/Plin y cálculo de vuelto
│   │   ├── HeaderNav.jsx          # Buscador en tiempo real y selector de categorías
│   │   ├── HeroSlider.jsx         # Carrusel de promociones y combos
│   │   ├── LiveOrderTracker.jsx   # Seguimiento del estado del pedido en vivo
│   │   ├── ProductCard.jsx        # Tarjeta vertical de producto (cuadrícula 2 columnas)
│   │   ├── ProductModal.jsx       # Modal de personalización de ingredientes y salsas
│   │   ├── ProfileScreen.jsx      # Pantalla de perfil de usuario y direcciones
│   │   ├── SauceSelector.jsx      # Selector cromático de cremas y modo de entrega
│   │   ├── StoreHero.jsx          # Cabecera principal, logo y selector de modalidad
│   │   └── VouchersSection.jsx    # Cuponera digital con cupones canjeables
│   ├── data/
│   │   └── menuData.js            # Catálogo de productos, salsas, cupones y datos del local
│   ├── App.jsx                    # Orquestador principal de estado y vistas
│   ├── index.css                  # Design tokens, animaciones y reset móvil
│   └── main.jsx                   # Punto de entrada de la aplicación
├── index.html                     # Plantilla HTML con viewport móvil
├── package.json                   # Dependencias y scripts
├── tailwind.config.js             # Configuración de Tailwind CSS
└── vite.config.js                 # Configuración de compilador Vite
```

---

## 🚀 Inicio Rápido (Desarrollo Local)

### 1. Clonar el repositorio
```bash
git clone https://github.com/maurz-dev/cobblemania-resourcepack2.git
cd cobblemania-resourcepack2
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```

La aplicación estará disponible de inmediato en:
👉 **`http://localhost:5180/`**

### 4. Compilación para producción
```bash
npm run build
```

---

## 📱 Visualización Recomendada

Para una experiencia óptima de desarrollo idéntica a un dispositivo móvil:
1. Abre **[Responsively App](https://responsively.app/)** o las herramientas de desarrollador de tu navegador (`F12` ➔ `Ctrl + Shift + M`).
2. Selecciona el perfil de **iPhone 12/13/14 Pro** o **Samsung Galaxy**.
3. Ingresa la URL local `http://localhost:5180/`.

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más información.
