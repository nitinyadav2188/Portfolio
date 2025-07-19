import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { powerMode } = useTheme();

  return (
    <footer className={`py-12 border-t-2 ${powerMode ? 'border-yellow-400' : 'border-pink-400'} bg-black/20`}>
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="text-center space-y-6">
          {/* Quote */}
          <div className={`text-xl md:text-2xl font-bold comic-text ${
            powerMode ? 'text-yellow-300' : 'text-pink-300'
          }`}>
            "Built with 💖 by Nitin Yadav-2025."
          </div>

          {/* Tech Stack Icons */}
          <div className="flex justify-center items-center space-x-6 text-4xl">
            <div className="hover:animate-bounce cursor-pointer" title="Built with Love">💖</div>
            <div className="hover:animate-bounce cursor-pointer" title="Powered by Coffee">☕</div>
            <div className="hover:animate-bounce cursor-pointer" title="JavaScript Magic">⚡</div>
            <div className="hover:animate-bounce cursor-pointer" title="React Power">⚛️</div>
            <div className="hover:animate-bounce cursor-pointer" title="Anime Inspired">🇮🇳</div>
          </div>

          {/* Creator Info */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-gray-300">
            <div className="flex items-center space-x-2">
              <Code className={`w-5 h-5 ${powerMode ? 'text-yellow-400' : 'text-pink-400'}`} />
              <span>Crafted by Nitin Yadav</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Coffee className={`w-5 h-5 ${powerMode ? 'text-yellow-400' : 'text-pink-400'}`} />
              <span>Fueled by endless creativity</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Heart className={`w-5 h-5 ${powerMode ? 'text-yellow-400' : 'text-pink-400'} animate-pulse`} />
              <span>Made with passion</span>
            </div>
          </div>

          {/* Fun Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
            <div className={`bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl border-2 border-purple-400 ${
              powerMode ? 'shadow-lg shadow-purple-400/30' : ''
            }`}>
              <div className="text-2xl font-bold comic-text">50+</div>
              <div className="text-sm">Cups of Coffee</div>
            </div>
            
            <div className={`bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl border-2 border-blue-400 ${
              powerMode ? 'shadow-lg shadow-blue-400/30' : ''
            }`}>
              <div className="text-2xl font-bold comic-text">100+</div>
              <div className="text-sm">Lines of Code</div>
            </div>
            
            <div className={`bg-gradient-to-r from-pink-600 to-red-600 p-4 rounded-xl border-2 border-pink-400 ${
              powerMode ? 'shadow-lg shadow-pink-400/30' : ''
            }`}>
              <div className="text-2xl font-bold comic-text">∞</div>
              <div className="text-sm">Creative Ideas</div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-600 pt-6 mt-8">
            <p className="text-gray-400 text-sm">
              © 2025 Nitin Yadav. All rights reserved. | 
              <span className={`ml-1 ${powerMode ? 'text-yellow-400' : 'text-pink-400'}`}>
                "Code, Create, Conquer!" 🚀
              </span>
            </p>
          </div>

          {/* Easter Egg */}
          <div className="mt-4">
            <button
              onClick={() => alert('🎉 You found the easter egg! Thanks for exploring! 🎌')}
              className="text-xs text-gray-500 hover:text-pink-400 transition-colors duration-300"
            >
              Click me for a surprise! 🥚
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
