import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { darkMode, t } = useLanguage();

  return (
    <footer className={`py-16 px-6 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gradient-to-b from-bg to-gray-100 border-gray-200/50'} border-t`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="animate-fade-in-scale">
            <h4 className="font-bold text-lg mb-4">
              Mystery<span className="text-primary">Balls</span>
            </h4>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm leading-relaxed`}>
              {t.footer.tagline}
            </p>
          </div>
          
          <div className="animate-fade-in-scale stagger-item-2">
            <h5 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-dark'}`}>{t.footer.shop}</h5>
            <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <li><a href="#" className="hover:text-primary transition">{t.footer.categories}</a></li>
              <li><a href="#" className="hover:text-primary transition">{t.footer.newArrivals}</a></li>
              <li><a href="#" className="hover:text-primary transition">{t.footer.bestSellers}</a></li>
            </ul>
          </div>

          <div className="animate-fade-in-scale stagger-item-2">
            <h5 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-dark'}`}>{t.footer.about}</h5>
            <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <li><a href="#" className="hover:text-primary transition">{t.footer.aboutUs}</a></li>
              <li><a href="#" className="hover:text-primary transition">{t.footer.blog}</a></li>
              <li><a href="#" className="hover:text-primary transition">{t.footer.contact}</a></li>
            </ul>
          </div>

          <div className="animate-fade-in-scale stagger-item-3">
            <h5 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-dark'}`}>{t.footer.follow}</h5>
            <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <li><a href="#" className="hover:text-primary transition">{t.footer.instagram}</a></li>
              <li><a href="#" className="hover:text-primary transition">{t.footer.tiktok}</a></li>
              <li><a href="#" className="hover:text-primary transition">{t.footer.youtube}</a></li>
            </ul>
          </div>
        </div>

        <div className={`${darkMode ? 'border-gray-800' : 'border-gray-200'} border-t pt-8 text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <p>© {new Date().getFullYear()} MysteryBalls · {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
