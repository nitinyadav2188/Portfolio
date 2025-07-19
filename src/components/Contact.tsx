import React, { useState } from 'react';
import { Mail, Send, User, MessageSquare, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact: React.FC = () => {
  const { powerMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent! I\'ll get back to you soon! 🚀');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/nitinyadav2188', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/nitin-yadav-681850299', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/nitinyadav2188', color: 'hover:text-blue-300' },
    // { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/nitinyadav3', color: 'hover:text-pink-400' },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-black comic-text mb-4 ${
            powerMode ? 'text-yellow-300' : 'text-white'
          }`}>
            Contact Panel
          </h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className={`relative transition-all duration-1000 ${powerMode ? 'scale-105' : ''}`}>
            {/* Speech Bubble for Form */}
            <div className="bg-white/10 backdrop-blur-md border-4 border-pink-400 rounded-3xl p-8 relative">
              <div className="absolute -right-4 top-12 w-0 h-0 border-l-8 border-t-8 border-b-8 border-transparent border-l-pink-400"></div>
              
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-4xl">📬</div>
                <h3 className={`text-2xl font-bold comic-text ${
                  powerMode ? 'text-yellow-300' : 'text-pink-300'
                }`}>
                  Send me a message!
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <User className={`absolute left-3 top-3 w-5 h-5 ${
                    powerMode ? 'text-yellow-400' : 'text-pink-400'
                  }`} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Hero Name"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-black/30 border-2 border-purple-400 rounded-xl text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div className="relative">
                  <Mail className={`absolute left-3 top-3 w-5 h-5 ${
                    powerMode ? 'text-yellow-400' : 'text-pink-400'
                  }`} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@adventure.com"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-black/30 border-2 border-purple-400 rounded-xl text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div className="relative">
                  <MessageSquare className={`absolute left-3 top-3 w-5 h-5 ${
                    powerMode ? 'text-yellow-400' : 'text-pink-400'
                  }`} />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your next epic project..."
                    required
                    rows={5}
                    className="w-full pl-12 pr-4 py-3 bg-black/30 border-2 border-purple-400 rounded-xl text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full flex items-center justify-center space-x-2 py-4 rounded-xl border-2 font-bold comic-text transition-all duration-300 transform hover:scale-105 ${
                    powerMode
                      ? 'bg-yellow-400 text-black border-yellow-400 hover:bg-yellow-300'
                      : 'bg-pink-600 text-white border-pink-400 hover:bg-pink-500'
                  }`}
                >
                  <Send className="w-5 h-5" />
                  <span>Launch Message! 🚀</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Anime Delivery Character */}
            <div className="text-center">
              <div className="text-8xl mb-4">🕊️</div>
              <div className={`text-xl font-bold comic-text ${
                powerMode ? 'text-yellow-300' : 'text-pink-300'
              }`}>
                Digital Delivery Service Active!
              </div>
              <p className="text-gray-300 mt-2">
                Messages delivered faster than a ninja! ⚡
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className={`bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-2xl border-2 border-purple-400 ${
                powerMode ? 'shadow-lg shadow-purple-400/50' : ''
              }`}>
                <div className="flex items-center space-x-4">
                  <Mail className={`w-8 h-8 ${powerMode ? 'text-yellow-300' : 'text-pink-300'}`} />
                  <div>
                    <h3 className="text-xl font-bold comic-text">Email Quest</h3>
                    <p className="text-gray-200">yadavnitin2188@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className={`bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl border-2 border-blue-400 ${
                powerMode ? 'shadow-lg shadow-blue-400/50' : ''
              }`}>
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <h3 className="text-xl font-bold comic-text">Response Time</h3>
                    <p className="text-gray-200">Lightning fast replies in 24hrs!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className={`text-2xl font-bold comic-text mb-6 text-center ${
                powerMode ? 'text-yellow-300' : 'text-white'
              }`}>
                Connect on Social Platforms!
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center space-x-3 p-4 bg-black/30 border-2 border-gray-600 rounded-xl transition-all duration-300 hover:scale-105 hover:border-pink-400 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="font-semibold">{social.name}</span>
                    <div className="ml-auto group-hover:animate-bounce">🚀</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
