import useTheme from '../src/hook/theme'; // Assure-toi que le hook est dans le bon chemin

const App = () => {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    // Bascule entre 'light' et 'dark'
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-4">Dark and Light Mode with Tailwind</h1>
        <button 
          onClick={toggleTheme} 
          className="bg-blue-500 text-white px-4 py-2 rounded">
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </div>
  );
};

export default App;
