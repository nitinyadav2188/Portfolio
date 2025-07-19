import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
}

const Projects: React.FC = () => {
  const { powerMode } = useTheme();
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/nitinyadav2188/repos?sort=updated&per_page=6');
        const data = await response.json();
        setRepos(data.filter((repo: Repository) => !repo.name.includes('nitinyadav3')));
      } catch (error) {
        console.error('Error fetching repositories:', error);
        // Fallback data
        setRepos([
          {
            id: 1,
            name: 'Mind Palace',
            description: 'Mind Palace is an immersive quiz adventure designed to make learning fun, challenging, and memorable. You journey through 20 unique "rooms," each containing a puzzle or question from subjects like math, science, history, and more — and unlock new chambers by solving them!',
            html_url: 'https://github.com/nitinyadav2188/MindPalace.git',
            homepage: 'https://mind-palace-alpha.vercel.app/',
            stargazers_count: 15,
            forks_count: 3,
            language: 'TypeScript',
            topics: ['react', 'typescript', 'tailwind']
          },
          {
            id: 2,
            name: 'TimeKeeper',
            description: 'Timekeeper is an interactive web app that visualizes your life in weeks using a dynamic doughnut chart. Inspired by WaitButWhy’s Life Calendar.',
            html_url: 'https://github.com/nitinyadav2188/Timekeeper.git',
            homepage: 'https://nitinyadav2188.github.io/Timekeeper/',
            stargazers_count: 8,
            forks_count: 2,
            language: 'JavaScript',
            topics: ['website', 'anime', 'design']
          },
          {
            id: 3,
            name: 'Desert Racer',
            description: 'Timekeeper is an interactive web app that visualizes your life in weeks using a dynamic doughnut chart. Inspired by WaitButWhy’s Life Calendar.',
            html_url: 'https://github.com/nitinyadav2188/desert-racer.github.io.git',
            homepage: 'https://nitinyadav2188.github.io/desert-racer.github.io/',
            stargazers_count: 8,
            forks_count: 2,
            language: 'JavaScript',
            topics: ['website', 'anime', 'design']
          },
          {
            id: 4,
            name: 'Space Exploration',
            description: 'Space Exploration🚀 is a web-based interactive quiz game where players explore the solar system, unlocking each planet by answering three space-related questions. Starting from Mercury and ending at Neptune, the game offers an educational and engaging journey through our planetary neighbors.',
            html_url: 'https://github.com/nitinyadav2188/Space-Exploration-Game.git',
            homepage: 'https://spacexpogame.netlify.app/',
            stargazers_count: 8,
            forks_count: 2,
            language: 'JavaScript',
            topics: ['website', 'anime', 'design']
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const getPowerLevel = (stars: number) => {
    if (stars >= 10) return '★★★★★';
    if (stars >= 5) return '★★★★☆';
    if (stars >= 2) return '★★★☆☆';
    return '★★☆☆☆';
  };

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: 'bg-yellow-500',
      TypeScript: 'bg-blue-500',
      Python: 'bg-green-500',
      React: 'bg-cyan-500',
      HTML: 'bg-orange-500',
      CSS: 'bg-purple-500',
    };
    return colors[language] || 'bg-gray-500';
  };

  if (loading) {
    return (
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className={`text-4xl ${powerMode ? 'text-yellow-300' : 'text-white'} animate-pulse`}>
            Loading Projects... ⚡
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-black comic-text mb-4 ${
            powerMode ? 'text-yellow-300' : 'text-white'
          }`}>
            Projects Gallery
          </h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full"></div>
          <p className={`mt-4 text-xl ${powerMode ? 'text-pink-300' : 'text-gray-300'}`}>
            Check out my latest coding adventures!
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo, index) => (
            <div
              key={repo.id}
              className={`group relative bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-md border-2 border-purple-400 rounded-2xl p-6 hover:scale-105 transition-all duration-500 ${
                powerMode ? 'shadow-lg shadow-purple-400/30' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Power Level Badge */}
              <div className="absolute -top-3 -right-3">
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                  powerMode ? 'bg-yellow-400 text-black' : 'bg-pink-500 text-white'
                }`}>
                  {getPowerLevel(repo.stargazers_count)}
                </div>
              </div>

              {/* Language Badge */}
              {repo.language && (
                <div className={`inline-block px-2 py-1 rounded-full text-xs font-bold text-white mb-4 ${getLanguageColor(repo.language)}`}>
                  {repo.language}
                </div>
              )}

              <h3 className={`text-xl font-bold comic-text mb-3 ${
                powerMode ? 'text-yellow-300' : 'text-white'
              }`}>
                {repo.name}
              </h3>

              <p className="text-gray-300 mb-4 line-clamp-3">
                {repo.description || 'An awesome project that showcases my coding skills!'}
              </p>

              {/* Stats */}
              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4" />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <GitFork className="w-4 h-4" />
                  <span>{repo.forks_count}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full border-2 text-sm font-bold transition-all duration-300 ${
                    powerMode
                      ? 'border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black'
                      : 'border-pink-400 text-pink-300 hover:bg-pink-400 hover:text-white'
                  }`}
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
                
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-full border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white text-sm font-bold transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live</span>
                  </a>
                )}
              </div>

              {/* Comic Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute top-4 right-4 text-2xl animate-bounce">💥</div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/nitinyadav2188"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center space-x-2 px-8 py-4 rounded-full border-2 text-lg font-bold transition-all duration-300 ${
              powerMode
                ? 'bg-yellow-400 text-black border-yellow-400 hover:bg-yellow-300'
                : 'bg-pink-600 text-white border-pink-400 hover:bg-pink-500'
            }`}
          >
            <Github className="w-5 h-5" />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;