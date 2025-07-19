import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const TechStack: React.FC = () => {
  const { powerMode } = useTheme();

  const technologies = [
    { name: 'HTML5', icon: '🌐', level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', icon: '🎨', level: 90, color: 'from-blue-500 to-purple-500' },
    { name: 'JavaScript', icon: '⚡', level: 88, color: 'from-yellow-500 to-orange-500' },
    { name: 'React', icon: '⚛️', level: 85, color: 'from-cyan-500 to-blue-500' },
    { name: 'Node.js', icon: '🟢', level: 80, color: 'from-green-500 to-emerald-500' },
    { name: 'TypeScript', icon: '📘', level: 75, color: 'from-blue-600 to-indigo-600' },
    { name: 'Python', icon: '🐍', level: 70, color: 'from-green-400 to-blue-500' },
    { name: 'Git', icon: '📦', level: 85, color: 'from-gray-600 to-gray-800' },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-black comic-text mb-4 ${
            powerMode ? 'text-yellow-300' : 'text-white'
          }`}>
            Tech Stack Cards
          </h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full"></div>
          <p className={`mt-4 text-xl ${powerMode ? 'text-pink-300' : 'text-gray-300'}`}>
            My coding arsenal & power levels!
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`group relative bg-gradient-to-br ${tech.color} p-6 rounded-2xl border-2 border-white/20 hover:scale-110 hover:rotate-3 transition-all duration-500 cursor-pointer ${
                powerMode ? 'shadow-xl shadow-white/20' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Holographic Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
              
              {/* Card Content */}
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-3 group-hover:animate-bounce">
                  {tech.icon}
                </div>
                
                <h3 className="text-white font-bold comic-text text-lg mb-2">
                  {tech.name}
                </h3>
                
                {/* Power Level Bar */}
                <div className="w-full bg-black/30 rounded-full h-2 mb-2">
                  <div 
                    className="bg-white h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
                
                <div className="text-white/80 text-sm font-semibold">
                  Level {tech.level}
                </div>
              </div>

              {/* Collectible Rarity Badge */}
              <div className="absolute -top-2 -right-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  tech.level >= 90 ? 'bg-yellow-400 text-black' :
                  tech.level >= 80 ? 'bg-purple-500 text-white' :
                  'bg-blue-500 text-white'
                }`}>
                  {tech.level >= 90 ? 'S' : tech.level >= 80 ? 'A' : 'B'}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-2 left-2 text-lg animate-ping">✨</div>
                <div className="absolute bottom-2 right-2 text-lg animate-ping delay-200">⭐</div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Achievement Card */}
        <div className="mt-12 text-center">
          <div className={`inline-block bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 p-6 rounded-2xl border-2 border-pink-400 relative ${
            powerMode ? 'animate-pulse shadow-lg shadow-pink-400/50' : ''
          }`}>
            <div className="text-3xl mb-2">🏆</div>
            <h3 className="text-xl font-bold comic-text text-white mb-1">
              Full Stack Achievement Unlocked!
            </h3>
            <p className="text-pink-200">
              Master of Frontend & Backend Development
            </p>
            
            {/* Floating Icons */}
            <div className="absolute -top-2 -left-2 animate-bounce">
              <div className="text-xl">🚀</div>
            </div>
            <div className="absolute -top-2 -right-2 animate-bounce delay-500">
              <div className="text-xl">💎</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;