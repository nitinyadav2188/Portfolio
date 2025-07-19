import React from 'react';
import { Zap, Menu } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { powerMode, togglePowerMode } = useTheme();

  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b-2 border-pink-500">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-pink-400 comic-text">
          &lt;Nitin /&gt;
        </div>
        
        <nav className="hidden md:flex space-x-6">
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-pink-400 transition-colors duration-300 font-semibold comic-text"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          onClick={togglePowerMode}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full border-2 transition-all duration-500 ${
            powerMode
              ? 'bg-yellow-400 text-black border-yellow-400 shadow-lg shadow-yellow-400/50'
              : 'bg-purple-600 text-white border-purple-400 hover:bg-purple-500'
          }`}
        >
          <Zap className={`w-4 h-4 ${powerMode ? 'animate-pulse' : ''}`} />
          <span className="font-bold comic-text">
            {powerMode ? 'POWER!' : 'Power Up'}
          </span>
        </button>

        <button className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;