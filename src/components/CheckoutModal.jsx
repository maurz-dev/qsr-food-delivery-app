import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Trash2, ArrowRight, ShieldCheck, QrCode, Banknote, CreditCard, CheckCircle } from 'lucide-react';

export default function CheckoutModal({
  cart,
  orderType,
  onClose,
  onClearCart,
  onOrderSuccess
}) {
  const [customerName, setCustomerName] = useState('Carlos Mendoza');
  const [customerPhone, setCustomerPhone] = useState('987 654 321');
  const [address, setAddress] = useState('Av. Las Palmeras 450 - Dpto 201');
  const [paymentMethod, setPaymentMethod] = useState('yape'); // 'yape' | 'cash' | 'card'
  const [cashAmount, setCashAmount] = useState('50');

  const subtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const deliveryFee = orderType === 'delivery' ? 5.00 : 0.00;
  const discount = subtotal > 30 ? 3.00 : 0.00;
  const grandTotal = subtotal + deliveryFee - discount;

  const payingNumber = parseFloat(cashAmount) || 0;
  const changeNeeded = payingNumber > grandTotal ? (payingNumber - grandTotal).toFixed(2) : '0.00';

  const handleConfirmOrder = () => {
    // Disparar confeti de celebración
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {}

    const orderData = {
      orderId: 'BAJ-' + Math.floor(1000 + Math.random() * 9000),
      items: cart,
      orderType,
      customerName,
      customerPhone,
      address: orderType === 'delivery' ? address : 'Punto del Carrito (Al paso)',
      paymentMethod,
      grandTotal,
      changeNeeded: paymentMethod === 'cash' ? changeNeeded : null,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    onOrderSuccess(orderData);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex flex-col justify-end max-w-[500px] mx-auto">
      <div className="h-12 shrink-0 cursor-pointer" onClick={onClose}></div>

      <div className="bg-[#131620] border-t border-white/10 rounded-t-[36px] flex-1 max-h-[90vh] flex flex-col modal-animate-up shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-white/5 flex items-center justify-between shrink-0">
          <div>
            <h3 className="text-base font-extrabold text-white">Tu Pedido Bajonero</h3>
            <p className="text-xs text-slate-400">
              {cart.length} producto(s) listo(s) para marchar
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center hover:bg-slate-700"
          >
            <X size={18} />
          </button>
        </div>

        {/* Contenido scrolleable garantizado */}
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 space-y-4 pb-6">
          {/* Lista de productos en carrito */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-300">Detalle de platos:</h4>
            {cart.map((item, index) => (
              <div
                key={index}
                className="bg-[#202430] p-3 rounded-xl border border-slate-800 flex items-start justify-between gap-2"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-md bg-orange-500/20 text-orange-400 font-extrabold text-xs flex items-center justify-center">
                      {item.quantity}x
                    </span>
                    <span className="text-xs font-bold text-white">
                      {item.product.name}
                    </span>
                  </div>

                  {/* Salsas elegidas */}
                  {item.selectedSauces?.length > 0 && (
                    <p className="text-[10px] text-amber-300/80 mt-1">
                      Cremas ({item.sauceMode === 'separated' ? 'en vasito' : 'encima'}): {item.selectedSauces.join(', ')}
                    </p>
                  )}

                  {/* Adicionales */}
                  {item.selectedAddons?.length > 0 && (
                    <p className="text-[10px] text-emerald-400 mt-0.5">
                      + {item.selectedAddons.map((a) => a.name).join(' + ')}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <span className="text-xs font-extrabold text-amber-400">
                    S/ {item.totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Datos del Cliente */}
          <div className="bg-[#202430] p-3.5 rounded-xl border border-slate-800 space-y-2.5">
            <h4 className="text-xs font-bold text-slate-300">Datos para la entrega</h4>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[10px] text-slate-400 block mb-0.5">Nombre</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-[#12141c] border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-[10px] text-slate-400 block mb-0.5">Teléfono / WhatsApp</label>
                <input
                  type="text"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-[#12141c] border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
              </div>
            </div>

            {orderType === 'delivery' && (
              <div>
                <label className="text-[10px] text-slate-400 block mb-0.5">Dirección de Entrega</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-[#12141c] border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
              </div>
            )}
          </div>

          {/* Método de Pago */}
          <div className="bg-[#202430] p-3.5 rounded-xl border border-slate-800 space-y-2.5">
            <h4 className="text-xs font-bold text-slate-300">Método de Pago</h4>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setPaymentMethod('yape')}
                className={`py-2 px-1 rounded-xl text-xs font-bold border flex flex-col items-center gap-1 transition ${
                  paymentMethod === 'yape'
                    ? 'bg-purple-600/20 border-purple-500 text-purple-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400'
                }`}
              >
                <QrCode size={16} />
                <span>Yape / Plin</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('cash')}
                className={`py-2 px-1 rounded-xl text-xs font-bold border flex flex-col items-center gap-1 transition ${
                  paymentMethod === 'cash'
                    ? 'bg-emerald-600/20 border-emerald-500 text-emerald-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400'
                }`}
              >
                <Banknote size={16} />
                <span>Efectivo</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`py-2 px-1 rounded-xl text-xs font-bold border flex flex-col items-center gap-1 transition ${
                  paymentMethod === 'card'
                    ? 'bg-blue-600/20 border-blue-500 text-blue-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400'
                }`}
              >
                <CreditCard size={16} />
                <span>Tarjeta</span>
              </button>
            </div>

            {/* Input interactivo si es efectivo (para calcular vuelto) */}
            {paymentMethod === 'cash' && (
              <div className="bg-[#12141c] p-2.5 rounded-xl border border-emerald-500/30 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-300 block font-medium">¿Con cuánto vas a pagar?</span>
                  <span className="text-[10px] text-emerald-400 font-bold">
                    Vuelto necesario: S/ {changeNeeded}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-white font-bold">S/</span>
                  <input
                    type="number"
                    value={cashAmount}
                    onChange={(e) => setCashAmount(e.target.value)}
                    className="w-16 bg-[#202430] border border-slate-700 rounded-lg px-2 py-1 text-xs text-white text-right font-bold"
                  />
                </div>
              </div>
            )}

            {/* QR simulado si es Yape */}
            {paymentMethod === 'yape' && (
              <div className="bg-purple-950/30 border border-purple-500/30 p-2.5 rounded-xl flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center shrink-0">
                  <QrCode size={36} className="text-purple-900" />
                </div>
                <div>
                  <span className="text-xs font-bold text-purple-200 block">Yapea al 987-654-321</span>
                  <span className="text-[10px] text-slate-400">Titular: El Punto Sanguchero S.A.C.</span>
                </div>
              </div>
            )}
          </div>

          {/* Desglose de totales */}
          <div className="space-y-1.5 text-xs text-slate-300 pt-1">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold text-white">S/ {subtotal.toFixed(2)}</span>
            </div>
            {orderType === 'delivery' && (
              <div className="flex justify-between">
                <span>Costo de Delivery</span>
                <span className="font-bold text-white">S/ {deliveryFee.toFixed(2)}</span>
              </div>
            )}
            {discount > 0 && (
              <div className="flex justify-between text-emerald-400 font-bold">
                <span>Cupón de Descuento Especial</span>
                <span>- S/ {discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between text-sm font-extrabold text-white pt-2 border-t border-slate-800">
              <span>Total a Pagar</span>
              <span className="text-amber-400 text-base">S/ {grandTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Botón de Enviar Pedido */}
        <div className="p-4 bg-[#12141c] border-t border-slate-800">
          <button
            onClick={handleConfirmOrder}
            className="w-full bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-extrabold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-orange-600/30 active:scale-[0.98] transition"
          >
            <span>Confirmar Pedido a Cocina</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
