import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppContent() {
  const { darkMode } = useLanguage();

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-dark'} min-h-screen transition-colors duration-300`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
