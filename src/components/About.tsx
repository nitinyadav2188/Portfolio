import React from 'react';
import { GraduationCap, Coffee, Heart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { powerMode } = useTheme();

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-black comic-text mb-4 ${
            powerMode ? 'text-yellow-300' : 'text-white'
          }`}>
            About Me Panel
          </h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Speech Bubble */}
          <div className={`relative transition-all duration-1000 ${powerMode ? 'scale-105' : ''}`}>
            <div className="bg-white/10 backdrop-blur-md border-4 border-pink-400 rounded-3xl p-8 relative">
              <div className="absolute -right-4 top-8 w-0 h-0 border-l-8 border-t-8 border-b-8 border-transparent border-l-pink-400"></div>
              
              <div className={`text-2xl md:text-3xl font-bold comic-text mb-6 ${
                powerMode ? 'text-yellow-300' : 'text-pink-300'
              }`}>
                "Currently fighting bugs and acing code as a student at the University of Lucknow!"
              </div>
              
              <div className="space-y-4 text-lg">
                <p className="text-gray-200">
                  Welcome to my digital universe! I'm a passionate web developer who believes in crafting 
                  experiences that are not just functional, but truly magical. ✨
                </p>
                
                <p className="text-gray-200">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                  or probably watching anime for "inspiration" (it's research, I swear! 😄).
                </p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="space-y-6">
            <div className={`group bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-2xl border-2 border-purple-400 hover:scale-105 transition-all duration-300 ${
              powerMode ? 'shadow-lg shadow-purple-400/50' : ''
            }`}>
              <div className="flex items-center space-x-4">
                <GraduationCap className={`w-8 h-8 ${powerMode ? 'text-yellow-300' : 'text-pink-300'} group-hover:animate-bounce`} />
                <div>
                  <h3 className="text-xl font-bold comic-text">University Student</h3>
                  <p className="text-gray-200">University of Lucknow</p>
                </div>
              </div>
            </div>

            <div className={`group bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl border-2 border-blue-400 hover:scale-105 transition-all duration-300 ${
              powerMode ? 'shadow-lg shadow-blue-400/50' : ''
            }`}>
              <div className="flex items-center space-x-4">
                <Coffee className={`w-8 h-8 ${powerMode ? 'text-yellow-300' : 'text-blue-300'} group-hover:animate-bounce`} />
                <div>
                  <h3 className="text-xl font-bold comic-text">Code Enthusiast</h3>
                  <p className="text-gray-200">Powered by caffeine & creativity</p>
                </div>
              </div>
            </div>

            <div className={`group bg-gradient-to-r from-pink-600 to-red-600 p-6 rounded-2xl border-2 border-pink-400 hover:scale-105 transition-all duration-300 ${
              powerMode ? 'shadow-lg shadow-pink-400/50' : ''
            }`}>
              <div className="flex items-center space-x-4">
                <Heart className={`w-8 h-8 ${powerMode ? 'text-yellow-300' : 'text-pink-300'} group-hover:animate-pulse`} />
                <div>
                  <h3 className="text-xl font-bold comic-text">Problem Solver</h3>
                  <p className="text-gray-200">Turning ideas into reality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;