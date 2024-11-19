import { useState, useEffect } from 'react';

const useTheme = () => {
  // Vérifie le mode préféré dans le localStorage ou utilise 'light' par défaut
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // Applique le thème sur le document body
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Enregistre le thème dans le localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
};

export default useTheme;
