import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, ArrowRight, QrCode, Banknote, CreditCard, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';

export default function CheckoutModal({
  cart,
  orderType,
  onClose,
  onClearCart,
  onOrderSuccess
}) {
  const [customerName, setCustomerName] = useState('Carlos Mendoza');
  const [customerPhone, setCustomerPhone] = useState('987 654 321');
  const [address, setAddress] = useState('Av. Las Palmeras 450 - Dpto 201, Los Olivos');
  const [paymentMethod, setPaymentMethod] = useState('yape'); // 'yape' | 'cash' | 'card'
  const [cashAmount, setCashAmount] = useState('50');

  const subtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const deliveryFee = orderType === 'delivery' ? 4.50 : 0.00;
  const discount = subtotal > 25 ? 4.50 : 0.00;
  const grandTotal = subtotal + deliveryFee - discount;

  const payingNumber = parseFloat(cashAmount) || 0;
  const changeNeeded = payingNumber > grandTotal ? (payingNumber - grandTotal).toFixed(2) : '0.00';

  const handleConfirmOrder = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {}

    const orderData = {
      orderId: 'ORD-' + Math.floor(1000 + Math.random() * 9000),
      items: cart,
      orderType,
      customerName,
      customerPhone,
      address: orderType === 'delivery' ? address : 'Recojo en Local (Av. Antúnez de Mayolo 420)',
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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex flex-col justify-end max-w-[500px] mx-auto">
      <div className="h-12 shrink-0 cursor-pointer" onClick={onClose}></div>

      <div className="bg-white rounded-t-3xl flex-1 max-h-[90vh] flex flex-col modal-animate-up shadow-2xl overflow-hidden">
        {/* Header estilo Rappi */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between shrink-0">
          <div>
            <h3 className="text-base font-bold text-gray-900">Tu Canasta</h3>
            <p className="text-xs text-gray-500">
              {cart.length} item(s) • El Punto Sanguchero
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 transition"
          >
            <X size={16} />
          </button>
        </div>

        {/* Contenido scrolleable */}
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 space-y-4">
          {/* Lista de productos en canasta */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Detalle de la orden
            </h4>
            <div className="divide-y divide-gray-100 bg-gray-50 rounded-2xl p-3 border border-gray-100">
              {cart.map((item, index) => (
                <div key={index} className="py-2.5 flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-white border border-gray-200 text-gray-800 font-bold text-xs flex items-center justify-center">
                        {item.quantity}
                      </span>
                      <span className="text-xs font-bold text-gray-900">
                        {item.product.name}
                      </span>
                    </div>

                    {item.selectedSauces?.length > 0 && (
                      <p className="text-[11px] text-gray-500 mt-1 pl-7">
                        Cremas ({item.sauceMode === 'separated' ? 'en vasito' : 'encima'}): {item.selectedSauces.join(', ')}
                      </p>
                    )}

                    {item.selectedAddons?.length > 0 && (
                      <p className="text-[11px] text-gray-500 mt-0.5 pl-7 font-medium">
                        + {item.selectedAddons.map((a) => a.name).join(' + ')}
                      </p>
                    )}
                  </div>

                  <span className="text-xs font-bold text-gray-900 shrink-0">
                    S/ {item.totalPrice.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Dirección de Entrega */}
          <div className="bg-gray-50 rounded-2xl p-3.5 border border-gray-100 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-900">
              <MapPin size={14} className="text-[#ff441f]" />
              <span>Dirección de entrega</span>
            </div>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs text-gray-800 focus:outline-none focus:border-[#ff441f]"
            />
          </div>

          {/* Método de Pago */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Método de pago
            </h4>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setPaymentMethod('yape')}
                className={`py-2.5 px-1 rounded-xl text-xs font-bold border flex flex-col items-center gap-1.5 transition ${
                  paymentMethod === 'yape'
                    ? 'border-[#ff441f] bg-[#fff2ef] text-[#ff441f]'
                    : 'border-gray-200 bg-white text-gray-700'
                }`}
              >
                <QrCode size={18} />
                <span>Yape / Plin</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('cash')}
                className={`py-2.5 px-1 rounded-xl text-xs font-bold border flex flex-col items-center gap-1.5 transition ${
                  paymentMethod === 'cash'
                    ? 'border-[#ff441f] bg-[#fff2ef] text-[#ff441f]'
                    : 'border-gray-200 bg-white text-gray-700'
                }`}
              >
                <Banknote size={18} />
                <span>Efectivo</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`py-2.5 px-1 rounded-xl text-xs font-bold border flex flex-col items-center gap-1.5 transition ${
                  paymentMethod === 'card'
                    ? 'border-[#ff441f] bg-[#fff2ef] text-[#ff441f]'
                    : 'border-gray-200 bg-white text-gray-700'
                }`}
              >
                <CreditCard size={18} />
                <span>Tarjeta</span>
              </button>
            </div>

            {/* Calculador de vuelto si paga en efectivo */}
            {paymentMethod === 'cash' && (
              <div className="bg-gray-50 p-3 rounded-xl border border-gray-200 flex items-center justify-between text-xs">
                <div>
                  <span className="text-gray-800 block font-medium">¿Con cuánto pagas?</span>
                  <span className="text-[11px] text-gray-500 font-bold">
                    Vuelto que llevará el motorizado: S/ {changeNeeded}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-600 font-bold">S/</span>
                  <input
                    type="number"
                    value={cashAmount}
                    onChange={(e) => setCashAmount(e.target.value)}
                    className="w-16 bg-white border border-gray-300 rounded-lg px-2 py-1 text-xs text-gray-900 text-right font-bold"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Desglose de Totales */}
          <div className="space-y-1.5 text-xs text-gray-600 pt-2 border-t border-gray-100">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold text-gray-900">S/ {subtotal.toFixed(2)}</span>
            </div>
            {orderType === 'delivery' && (
              <div className="flex justify-between">
                <span>Costo de envío</span>
                <span className="font-bold text-gray-900">S/ {deliveryFee.toFixed(2)}</span>
              </div>
            )}
            {discount > 0 && (
              <div className="flex justify-between text-emerald-600 font-bold">
                <span>Descuento de envío por orden mayor a S/ 25</span>
                <span>- S/ {discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between text-sm font-extrabold text-gray-900 pt-2 border-t border-gray-200">
              <span>Total a pagar</span>
              <span className="text-base text-gray-900">S/ {grandTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Botón de Confirmar Pedido (Estilo Rappi) */}
        <div className="p-4 bg-white border-t border-gray-200 shrink-0">
          <button
            onClick={handleConfirmOrder}
            className="w-full bg-[#ff441f] hover:bg-[#e03412] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-between shadow-lg shadow-[#ff441f]/20 active:scale-[0.99] transition"
          >
            <span>Hacer pedido</span>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-black">S/ {grandTotal.toFixed(2)}</span>
              <ArrowRight size={16} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
