import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { darkMode, t } = useLanguage();

  return (
    <section className={`text-center py-20 sm:py-32 md:py-40 px-4 sm:px-6 relative overflow-hidden ${darkMode ? 'bg-gray-800' : ''}`}>
      
      {/* animated gradient blobs */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-r from-primary via-secondary to-primary opacity-30 blur-3xl rounded-full animate-float" />
      <div className="absolute -bottom-32 right-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-gradient-to-l from-secondary to-primary opacity-20 blur-3xl rounded-full animate-gentle-pulse" />
      <div className="absolute top-1/3 -left-32 w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] bg-gradient-to-r from-secondary to-primary opacity-15 blur-3xl rounded-full animate-slow-rotate" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <span className={`inline-block px-4 py-2 rounded-lg text-xs font-bold mb-6 ${darkMode ? 'bg-gray-800 text-secondary' : 'bg-secondary/10 text-secondary'} uppercase tracking-wide`}>
          Luxury Collection
        </span>

        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight animate-fade-in-scale">
          {t.hero.title1}<br />
          <span className="text-secondary animate-gradient">{t.hero.title2}</span>
        </h2>

        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto mb-12 text-base sm:text-lg md:text-xl leading-relaxed animate-slide-in-left font-light`}>
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto bg-primary text-white px-8 sm:px-12 py-4 rounded-lg text-base sm:text-lg font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition animate-bounce-in hover:opacity-90">
            {t.hero.button}
          </button>
          <button className={`w-full sm:w-auto px-6 sm:px-8 py-4 rounded-lg text-base sm:text-lg font-semibold border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition animate-bounce-in`}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
