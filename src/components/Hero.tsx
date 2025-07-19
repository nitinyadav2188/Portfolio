import React from 'react';
import { Code, Sparkles, Rocket } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Hero: React.FC = () => {
  const { powerMode } = useTheme();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Speech Bubble */}
        <div className={`relative inline-block mb-8 transition-all duration-1000 ${powerMode ? 'scale-110' : ''}`}>
          <div className="bg-white/10 backdrop-blur-md border-4 border-pink-400 rounded-3xl p-6 relative">
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-pink-400"></div>
            <h1 className={`text-4xl md:text-6xl font-black comic-text mb-2 ${
              powerMode ? 'text-yellow-300 animate-pulse' : 'text-white'
            }`}>
              Hi! I'm Nitin Yadav 👋
            </h1>
            <p className={`text-xl md:text-2xl font-bold ${
              powerMode ? 'text-pink-300' : 'text-pink-400'
            }`}>
              Web Dev by day, Code Hero by night!
            </p>
          </div>
        </div>

        {/* Hero Avatar */}
        <div className={`relative mb-8 transition-all duration-1000 ${powerMode ? 'scale-110 rotate-3' : ''}`}>
          <div className="w-48 h-48 mx-auto relative">
            <div className={`w-full h-full rounded-full border-4 ${
              powerMode ? 'border-yellow-400 shadow-lg shadow-yellow-400/50' : 'border-pink-400'
            } bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center overflow-hidden`}>
              <div className="text-8xl">🦸‍♂️</div>
            </div>
            {powerMode && (
              <div className="absolute -top-2 -right-2 animate-bounce">
                <Sparkles className="w-8 h-8 text-yellow-400" />
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className={`group flex items-center space-x-2 px-8 py-4 rounded-full border-2 transition-all duration-300 ${
            powerMode 
              ? 'bg-yellow-400 text-black border-yellow-400 hover:bg-yellow-300' 
              : 'bg-pink-600 text-white border-pink-400 hover:bg-pink-500'
          }`}>
            <Code className="w-5 h-5 group-hover:animate-spin" />
            <span className="font-bold comic-text">View Projects</span>
          </button>
          
          <button className="group flex items-center space-x-2 px-8 py-4 rounded-full border-2 border-purple-400 text-white hover:bg-purple-600 transition-all duration-300">
            <Rocket className="w-5 h-5 group-hover:animate-bounce" />
            <span className="font-bold comic-text">Let's Connect!</span>
          </button>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="text-6xl opacity-20">💻</div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delayed">
          <div className="text-6xl opacity-20">⚡</div>
        </div>
        <div className="absolute top-1/2 right-20 animate-float">
          <div className="text-4xl opacity-20">🚀</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;