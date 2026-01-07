import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import ProductModal from '../components/ProductModal';

const ProductsPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { darkMode, t } = useLanguage();
  const { addToCart } = useCart();
  const [ballQuantity, setBallQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categoryProducts = products[category] || [];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  const getCategoryName = () => {
    const names = {
      beauty: 'Beauty',
      kids: 'Kids Stuff',
      stationery: 'Stationery',
      premium: 'Premium',
      mixed: 'Mixed Surprise',
    };
    return names[category] || 'Products';
  };

  const getCategoryPrice = () => {
    const prices = {
      beauty: 1,
      kids: 1,
      stationery: 1,
      premium: 4,
      mixed: 2,
    };
    return prices[category] || 1;
  };

  const handleAddToCart = () => {
    const ballPrice = getCategoryPrice();
    addToCart({
      id: `${category}-balls`,
      name: `${getCategoryName()} Mystery Balls`,
      price: ballPrice,
      quantity: ballQuantity,
      category,
      type: 'ball',
    }, ballQuantity);

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const totalPrice = getCategoryPrice() * ballQuantity;

  return (
    <div className={`min-h-screen pt-20 sm:pt-24 px-4 sm:px-6 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <button
            onClick={() => navigate('/')}
            className={`mb-6 px-4 py-2 rounded-lg font-semibold transition ${
              darkMode
                ? 'bg-gray-800 text-secondary hover:bg-gray-700'
                : 'bg-gray-100 text-dark hover:bg-gray-200'
            }`}
          >
            ← Back
          </button>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {getCategoryName()} <span className="text-secondary">Mystery Balls</span>
          </h1>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-base sm:text-lg font-light mb-2`}>
            Choose how many mystery balls you want. Each ball contains a random product from this collection!
          </p>
          <p className={`${darkMode ? 'text-gray-500' : 'text-gray-500'} text-sm`}>
            Price per ball: <span className="font-bold text-secondary">€{getCategoryPrice()}</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Ball Selector */}
          <div className={`md:col-span-1 rounded-xl p-8 shadow-lg ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-dark'}`}>
              Select Balls
            </h2>

            <div className={`rounded-lg p-8 mb-6 text-center ${
              darkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <div className="text-6xl font-bold text-secondary mb-2">
                {ballQuantity}
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                Mystery Balls
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={() => setBallQuantity(Math.max(1, ballQuantity - 1))}
                className={`w-12 h-12 rounded-lg font-bold text-xl transition ${
                  darkMode
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-gray-200 text-dark hover:bg-gray-300'
                }`}
              >
                −
              </button>
              <input
                type="number"
                min="1"
                value={ballQuantity}
                onChange={(e) => setBallQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className={`w-20 text-center text-2xl font-bold py-2 rounded-lg ${
                  darkMode
                    ? 'bg-gray-700 text-white border border-gray-600'
                    : 'bg-gray-100 text-dark border border-gray-300'
                }`}
              />
              <button
                onClick={() => setBallQuantity(ballQuantity + 1)}
                className={`w-12 h-12 rounded-lg font-bold text-xl transition ${
                  darkMode
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-gray-200 text-dark hover:bg-gray-300'
                }`}
              >
                +
              </button>
            </div>

            <div className={`rounded-lg p-4 mb-8 ${
              darkMode ? 'bg-gray-700' : 'bg-secondary/10'
            }`}>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>
                Total Price
              </p>
              <p className="text-3xl font-bold text-secondary">
                €{totalPrice}
              </p>
            </div>

            <button
              onClick={handleAddToCart}
              className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 transform ${
                added
                  ? `${darkMode ? 'bg-green-700 text-white' : 'bg-green-600 text-white'} scale-105 animate-success-check`
                  : `bg-secondary text-white hover:opacity-90 hover:scale-105`
              }`}
            >
              {added ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  Added to Cart
                </span>
              ) : (
                'Add to Cart'
              )}
            </button>
          </div>

          {/* Products Reference */}
          <div className={`md:col-span-2 rounded-xl p-8 shadow-lg ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-dark'}`}>
              Possible Prizes
            </h2>
            <p className={`text-sm mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              These are the possible products you might win in your mystery balls:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {categoryProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                  className={`rounded-lg p-4 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    darkMode ? 'bg-gray-700 border border-gray-600 hover:border-secondary' : 'bg-gray-50 border border-gray-200 hover:border-secondary hover:bg-white'
                  }`}
                >
                  <div className={`w-full h-16 rounded-lg mb-3 flex items-center justify-center text-2xl font-bold transition-all ${
                    darkMode ? 'bg-gray-600 group-hover:bg-secondary' : 'bg-white border border-gray-300'
                  }`}>
                    {product.name.split(' ')[0][0]}
                  </div>
                  <h3 className={`font-semibold mb-2 line-clamp-2 ${darkMode ? 'text-white' : 'text-dark'}`}>
                    {product.name}
                  </h3>
                  <p className="text-secondary font-bold mb-2">
                    €{product.price}
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Click to view details
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default ProductsPage;
