import { useLanguage } from "../context/LanguageContext";
import { useEffect } from "react";

const ProductModal = ({ product, isOpen, onClose }) => {
  const { darkMode } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-60 z-50 animate-fade-in backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div 
          className={`relative max-w-2xl w-full rounded-2xl shadow-2xl pointer-events-auto animate-fade-in-scale ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              darkMode
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-dark'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="p-8 sm:p-12">
            {/* Product Icon/Image Placeholder */}
            <div className={`w-32 h-32 mx-auto mb-8 rounded-2xl flex items-center justify-center ${
              darkMode ? 'bg-gray-700' : 'bg-secondary/10'
            }`}>
              <div className="text-6xl text-secondary font-bold">
                {product.name.charAt(0)}
              </div>
            </div>

            {/* Product Details */}
            <div className="text-center mb-8">
              <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-dark'}`}>
                {product.name}
              </h2>
              
              <div className={`inline-block px-4 py-2 rounded-lg mb-6 ${
                darkMode ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <span className="text-2xl font-bold text-secondary">€{product.price}</span>
              </div>

              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-base sm:text-lg leading-relaxed mb-6`}>
                This exclusive item is part of our <span className="font-semibold text-secondary">{product.category}</span> mystery ball collection. 
                When you purchase mystery balls from this category, you have a chance to receive this amazing product!
              </p>

              {/* Product Features */}
              <div className={`rounded-xl p-6 mb-6 ${
                darkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-dark'}`}>
                  About This Item
                </h3>
                <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} text-left`}>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Premium quality guaranteed
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Carefully curated selection
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Part of mystery ball collection
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Surprise element included
                  </li>
                </ul>
              </div>

              {/* Call to Action */}
              <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'} italic`}>
                Purchase mystery balls from the {product.category} category for a chance to win this item!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
