import { useLanguage } from "../context/LanguageContext";

const HowItWorks = () => {
  const { darkMode, t } = useLanguage();

  const steps = [
    { ...t.howItWorks.step1 },
    { ...t.howItWorks.step2 },
    { ...t.howItWorks.step3 },
  ];

  return (
    <section className={`px-4 sm:px-6 py-20 sm:py-32 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <span className={`inline-block px-4 py-2 rounded-lg text-xs font-bold mb-4 ${darkMode ? 'bg-gray-700 text-secondary' : 'bg-secondary/10 text-secondary'} uppercase tracking-wide`}>
            Process
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {t.howItWorks.title1}<span className="text-secondary"> {t.howItWorks.title2}</span>
          </h3>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-base sm:text-lg max-w-2xl mx-auto font-light px-4`}>{t.howItWorks.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* connecting line */}
          <div className={`hidden md:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent`} />

          {steps.map((item, idx) => (
            <div key={idx} className={`relative animate-slide-in-left stagger-item-${idx + 1}`}>
              <div className={`${darkMode ? 'bg-gray-700 border border-gray-600 hover:border-secondary' : 'bg-white hover:border-secondary border border-gray-200'} p-8 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-3 transition`}>
                <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg mb-6 ${
                  darkMode ? 'bg-gray-600 text-secondary' : 'bg-secondary/10 text-secondary'
                }`}>
                  {String(idx + 1).padStart(2, '0')}
                </div>

                <span className="inline-block text-secondary font-bold text-xs mb-4 uppercase tracking-wide">
                  Step {idx + 1}
                </span>

                <h4 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-dark'}`}>
                  {item.title}
                </h4>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed font-light`}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
