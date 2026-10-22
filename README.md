# 🍟 El Bajón Sanguchero - App Móvil con Emulador Integrado

Aplicación móvil de alta gama orientada a comida rápida nocturna y "carrito sanguchero" (salchipapas, sánguche de pollo deshilachado, broaster crocante y barra de cremas artesanales).

Diseñada para ejecutarse con **Hot Reload instantáneo** directamente dentro de **Antigravity IDE**, sin requerir Android Studio ni emuladores AVD pesados.

---

## 🚀 Cómo Visualizar el Emulador en Antigravity IDE

El servidor de desarrollo ya está corriendo en segundo plano en:
👉 **`http://localhost:5173/`**

### Modo 1: Ventana interna en Antigravity IDE
1. Presiona `Ctrl + Shift + P` en Antigravity IDE.
2. Escribe y selecciona: `Simple Browser: Show`.
3. Ingresa la URL: `http://localhost:5173/`
4. Arrastra la pestaña generada hacia la izquierda o derecha para tener pantalla dividida con tu código.

### Modo 2: Ventana flotante al lado de tu código (como en los videos)
1. Abre tu navegador (Chrome/Edge) en `http://localhost:5173/`.
2. Presiona `Tecla Windows + Flecha Izquierda` para fijar el teléfono a la izquierda.
3. Presiona `Tecla Windows + Flecha Derecha` para fijar Antigravity IDE a la derecha.

---

## ✨ Funcionalidades Clave Implementadas

1. **📱 Emulador de Smartphone Dinámico:**
   * Alterna entre **iPhone 16 Pro Max**, **Google Pixel 9 Pro** y **Samsung Galaxy S24**.
   * Dynamic Island con cámara frontal y sensor, reloj en vivo, nivel de batería y señal 5G.
   * Modo con carcasa realista o modo pantalla completa.

2. **🔥 Barra de Cremas del Carrito (Filtro Insignia):**
   * Multi-selector de cremas: Mayonesa Casera, Ají Pollero Cremoso, Tártara, Aceituna, Golf, Rocoto Parrillero, Mostaza, Kétchup y Chimichurri.
   * Presets rápidos en un toque: *¡Todas las cremas!*, *Sin picante*, *Mayo + Ají + Tártara*.
   * Selector de modo de entrega de salsas: *Bañadas encima* vs *Aparte en vasitos*.

3. **🍳 Adicionales de Plancha:**
   * Huevo frito montado, queso Edam derretido, tocino crocante, papas al hilo extra y plátano frito con cálculo dinámico de precio en tiempo real.

4. **🛵 Modalidades de Pedido:**
   * Al Paso / Para llevar (Curbside Pick-up sin cola física).
   * Delivery Express nocturno.
   * Comer en la barra / banquito al aire libre.

5. **💳 Métodos de Pago Locales:**
   * Yape / Plin con código QR interactivo.
   * Efectivo contra entrega con selector dinámico de vuelto.
   * Tarjeta de débito/crédito.

6. **⚡ Live Order Tracker (Seguimiento en Vivo):**
   * Progresión dinámica: Orden recibida 📝 ➔ En la plancha 🔥 ➔ Empacando con cremas 🍟 ➔ En camino en moto 🛵 ➔ Entregado 🎉.
   * Botones de contacto directo a WhatsApp y llamada telefónica con el carrito.
