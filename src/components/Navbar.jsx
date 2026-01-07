import { useLanguage } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { language, switchLanguage, darkMode, toggleDarkMode, t } = useLanguage();
  const { getTotalItems } = useCart();
  const navigate = useNavigate();
  const totalItems = getTotalItems();

  return (
    <nav className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} px-4 sm:px-8 py-3 sm:py-4 border-b shadow-sm`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <button onClick={() => navigate('/')} className="text-xl sm:text-2xl font-bold tracking-tight animate-slide-in-left cursor-pointer hover:opacity-80 transition">
          Mystery<span className="text-secondary">Balls</span>
        </button>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Language Switcher */}
          <div className={`flex gap-1 sm:gap-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'} rounded-lg p-1`}>
            <button
              onClick={() => switchLanguage('en')}
              className={`px-2 sm:px-4 py-1.5 rounded-md text-xs font-semibold transition ${
                language === 'en'
                  ? 'bg-primary text-white shadow-md'
                  : `${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-dark'}`
              }`}
              title="English"
            >
              EN
            </button>
            <button
              onClick={() => switchLanguage('el')}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold transition ${
                language === 'el'
                  ? 'bg-primary text-white shadow-md'
                  : `${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-dark'}`
              }`}
              title="Ελληνικά"
            >
              EL
            </button>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-800'
            }`}
            title={darkMode ? "Light Mode" : "Dark Mode"}
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>

          {/* Cart Button */}
          <button onClick={() => navigate('/cart')} className="relative bg-primary text-white px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:shadow-lg hover:opacity-90 transition animate-slide-in-right">
            {t.navbar.cart}
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-secondary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
