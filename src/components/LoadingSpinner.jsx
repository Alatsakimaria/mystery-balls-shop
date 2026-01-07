import { useLanguage } from "../context/LanguageContext";

const LoadingSpinner = ({ size = "medium", text = "" }) => {
  const { darkMode } = useLanguage();
  
  const sizeClasses = {
    small: "w-6 h-6 border-2",
    medium: "w-12 h-12 border-3",
    large: "w-16 h-16 border-4"
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className={`${sizeClasses[size]} border-secondary border-t-transparent rounded-full animate-spin`} />
      {text && (
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;
