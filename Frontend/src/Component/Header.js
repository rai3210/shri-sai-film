import React, { useState } from 'react';
import { Menu, X, Film } from 'lucide-react';
import Register from './Register';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGetStarted = () => {
    alert('Welcome to Shri Sai Film Creative! Our team will contact you within 2 hours to discuss your movie promotion needs and provide a free consultation.');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Film className="h-8 w-8 text-blue-800" />
            <span className="text-xl font-bold text-gray-900">Shri Sai Film Creative</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-800 transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-800 transition-colors">Services</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-800 transition-colors">Pricing</a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-blue-800 transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-800 transition-colors">Contact</a>
          </nav>

          <button 
            onClick={handleGetStarted}
            className="hidden md:block bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-colors"
          >
            Get Started
          </button>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="px-4 py-4 space-y-2">
              <a href="#home" className="block py-2 text-gray-700 hover:text-blue-800">Home</a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-blue-800">Services</a>
              <a href="#pricing" className="block py-2 text-gray-700 hover:text-blue-800">Pricing</a>
              <a 
                href="#about" 
                className="block py-2 text-gray-700 hover:text-blue-800 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                About
              </a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-800">Contact</a>
              <button 
                onClick={"./Register"}
                className="w-full mt-4 bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 transition-colors"
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;