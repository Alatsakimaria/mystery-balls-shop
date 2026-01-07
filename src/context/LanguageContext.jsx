import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    navbar: {
      cart: 'Cart',
    },
    hero: {
      title1: 'Buy Mystery',
      title2: 'Balls',
      subtitle: 'Choose a category, pick your balls, and receive surprise products made for viral unboxings.',
      button: 'Choose Your Balls',
    },
    categories: {
      title1: 'Choose Your',
      title2: 'Category',
      subtitle: 'Pick from our curated selection',
      premium: 'Premium',
    },
    howItWorks: {
      title1: 'How It',
      title2: 'Works',
      subtitle: 'Simple steps to get your mystery balls',
      step1: { title: 'Choose Category', text: 'Beauty, Kids, Stationery or Premium' },
      step2: { title: 'Pick Balls', text: 'Choose how many balls you want' },
      step3: { title: 'Unbox & Enjoy', text: 'Perfect for TikTok & Instagram' },
    },
    footer: {
      tagline: 'Unbox the surprise. Perfect for viral unboxings.',
      shop: 'Shop',
      about: 'About',
      follow: 'Follow Us',
      categories: 'Categories',
      newArrivals: 'New Arrivals',
      bestSellers: 'Best Sellers',
      aboutUs: 'About Us',
      blog: 'Blog',
      contact: 'Contact',
      instagram: 'Instagram',
      tiktok: 'TikTok',
      youtube: 'YouTube',
      copyright: 'Built for unboxing enthusiasts',
    },
  },
  el: {
    navbar: {
      cart: 'Καλάθι',
    },
    hero: {
      title1: 'Αγοράστε Μυστήριο',
      title2: 'Μπάλες',
      subtitle: 'Επιλέξτε μια κατηγορία, διαλέξτε τις μπάλες σας και λάβετε εκπληκτικά προϊόντα που φτιάχτηκαν για ιικές αποσφραγίσεις.',
      button: 'Διαλέξτε τις Μπάλες σας',
    },
    categories: {
      title1: 'Διαλέξτε την',
      title2: 'Κατηγορία σας',
      subtitle: 'Διαλέξτε από την επιμελημένη συλλογή μας',
      premium: 'Premium',
    },
    howItWorks: {
      title1: 'Πώς',
      title2: 'Λειτουργεί',
      subtitle: 'Απλά βήματα για να πάρετε τις μυστήριες μπάλες σας',
      step1: { title: 'Επιλέξτε Κατηγορία', text: 'Ομορφιά, Παιδικά, Χαρτικά ή Premium' },
      step2: { title: 'Διαλέξτε Μπάλες', text: 'Επιλέξτε πόσες μπάλες θέλετε' },
      step3: { title: 'Αποσφραγίστε & Απολαύστε', text: 'Τέλειο για TikTok & Instagram' },
    },
    footer: {
      tagline: 'Αποσφραγίστε την έκπληξη. Τέλειο για ιικές αποσφραγίσεις.',
      shop: 'Κατάστημα',
      about: 'Σχετικά',
      follow: 'Ακολουθήστε μας',
      categories: 'Κατηγορίες',
      newArrivals: 'Νέες Αφίξεις',
      bestSellers: 'Καλύτερα Προϊόντα',
      aboutUs: 'Σχετικά με Εμάς',
      blog: 'Blog',
      contact: 'Επικοινωνία',
      instagram: 'Instagram',
      tiktok: 'TikTok',
      youtube: 'YouTube',
      copyright: 'Κατασκευάστηκε για λάτρεις των αποσφραγίσεων',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [darkMode, setDarkMode] = useState(false);

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, darkMode, toggleDarkMode, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
