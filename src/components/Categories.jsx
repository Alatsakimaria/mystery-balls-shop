import { categories } from "../data/categories";
import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";

const categoryIcons = {
  beauty: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  kids: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  stationery: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
  ),
  premium: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  mixed: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
};

const Categories = () => {
  const { darkMode, t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className={`px-6 py-32 max-w-6xl mx-auto ${darkMode ? 'bg-gray-900' : ''}`}>
      <div className="text-center mb-20">
        <span className={`inline-block px-4 py-2 rounded-lg text-xs font-bold mb-4 ${darkMode ? 'bg-gray-800 text-secondary' : 'bg-secondary/10 text-secondary'} uppercase tracking-wide`}>
          Collections
        </span>
        <h3 className="text-4xl md:text-5xl font-bold mb-6">
          {t.categories.title1}<span className="text-secondary"> {t.categories.title2}</span>
        </h3>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-lg max-w-2xl mx-auto font-light`}>{t.categories.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {categories.map((cat, idx) => (
          <div
            key={cat.id}
            className={`
              relative rounded-xl p-8 cursor-pointer group
              hover:shadow-2xl hover:border-secondary transition-all duration-300
              transform hover:-translate-y-2
              border-2
              ${cat.id === "premium" 
                ? `${darkMode ? 'border-secondary bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'border-secondary bg-gradient-to-br from-white to-gray-50'} shadow-lg` 
                : `${darkMode ? 'bg-gray-800 border-gray-700 hover:border-secondary' : 'bg-white border-gray-200 hover:border-secondary'} shadow-md hover:shadow-xl`
              }
              animate-fade-in-scale stagger-item-${idx + 1}
            `}
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className={`w-20 h-20 rounded-2xl mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                  cat.id === "premium" 
                    ? 'bg-gradient-to-br from-secondary to-yellow-600 text-white shadow-lg'
                    : `${darkMode ? 'bg-gray-700' : 'bg-secondary/10'} text-secondary`
                }`}>
                  {categoryIcons[cat.id]}
                </div>

                <h4 className="text-2xl font-bold mb-2">
                  {cat.name}
                </h4>

                <p className={`text-sm font-medium mb-4 ${cat.id === "premium" ? "text-secondary" : darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  €{cat.price} per ball
                </p>

                <p className={`text-xs leading-relaxed ${cat.id === "premium" ? "text-gray-400" : darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  {cat.id === "beauty" && "Curated luxury beauty essentials"}
                  {cat.id === "kids" && "Premium collectibles & toys"}
                  {cat.id === "stationery" && "Fine writing instruments"}
                  {cat.id === "premium" && "Exclusive luxury selection"}
                  {cat.id === "mixed" && "Handpicked assorted items"}
                </p>
              </div>

              {cat.id === "premium" && (
                <span className={`absolute top-4 right-4 text-xs bg-secondary text-white px-4 py-1.5 rounded-lg font-semibold shadow-md animate-glow-pulse`}>
                  {t.categories.premium}
                </span>
              )}

              <button 
                onClick={() => navigate(`/products/${cat.id}`)}
                className={`mt-6 w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                cat.id === "premium"
                  ? 'bg-secondary text-white hover:shadow-lg hover:opacity-90 hover:scale-105'
                  : `${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-dark hover:bg-gray-200'} hover:scale-105`
              }`}>
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
