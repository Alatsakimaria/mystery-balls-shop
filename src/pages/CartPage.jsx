import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const navigate = useNavigate();
  const { darkMode, language } = useLanguage();
  const { cart, removeFromCart, getTotalPrice, getTotalItems, clearCart } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    // Here you would process the order
    // For now, we'll just show a success message
    alert(`Order confirmed! ${getTotalItems()} mystery balls for €${getTotalPrice()}`);
    clearCart();
    navigate('/');
  };

  return (
    <div className={`min-h-screen pt-20 sm:pt-24 px-4 sm:px-6 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            Your <span className="text-secondary">Mystery Balls</span>
          </h1>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-base sm:text-lg font-light`}>
            Review your order before checkout
          </p>
        </div>

        {cart.length === 0 ? (
          <div className={`rounded-xl p-8 sm:p-16 text-center shadow-lg ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-dark'}`}>
              Your cart is empty
            </h2>
            <p className={`mb-8 text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Start by selecting mystery balls from any category
            </p>
            <button
              onClick={() => navigate('/')}
              className="w-full sm:w-auto bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Cart Items */}
            <div className={`md:col-span-2 rounded-xl p-6 sm:p-8 shadow-lg ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <h2 className={`text-xl sm:text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-dark'}`}>
                Order Summary
              </h2>

              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between p-4 rounded-lg ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex-1">
                      <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-dark'}`}>
                        {item.name}
                      </h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        €{item.price} each
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Qty: <span className="font-bold text-secondary">{item.quantity}</span>
                        </p>
                        <p className="font-bold text-secondary">
                          €{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className={`p-2 rounded-lg transition ${
                          darkMode
                            ? 'text-gray-400 hover:text-red-400 hover:bg-gray-700'
                            : 'text-gray-400 hover:text-red-500 hover:bg-gray-100'
                        }`}
                        title={language === 'en' ? 'Remove from cart' : 'Αφαίρεση'}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Total */}
            <div className={`rounded-xl p-6 sm:p-8 shadow-lg h-fit ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <h2 className={`text-xl sm:text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-dark'}`}>
                Order Total
              </h2>

              <div className={`rounded-lg p-4 mb-6 ${
                darkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <div className="flex justify-between mb-2">
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Items:
                  </span>
                  <span className="font-bold">{getTotalItems()}</span>
                </div>
                <div className="flex justify-between mb-4 pb-4 border-b border-gray-600">
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Subtotal:
                  </span>
                  <span className="font-bold">€{getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-dark'}`}>
                    Total:
                  </span>
                  <span className="text-2xl font-bold text-secondary">
                    €{getTotalPrice().toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-secondary text-white py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:opacity-90 transition mb-3"
              >
                Proceed to Checkout
              </button>

              <button
                onClick={() => navigate('/')}
                className={`w-full py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition ${
                  darkMode
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-gray-100 text-dark hover:bg-gray-200'
                }`}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
