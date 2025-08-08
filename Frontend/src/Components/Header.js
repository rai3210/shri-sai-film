import React, { useState } from 'react';
import { Menu, X, Film } from 'lucide-react';

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => (e) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
    }
    e.preventDefault();
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" onClick={handleScroll('home')} className="flex items-center space-x-2">
            <Film className="h-8 w-8 text-blue-800" />
            <span className="text-xl font-bold text-gray-900">Shri Sai Film Creative</span>
          </a>

          <nav className="hidden md:flex space-x-8">
            <a href="#" onClick={handleScroll('home')} className="text-gray-700 hover:text-blue-800 transition-colors">Home</a>
            <a href="#" onClick={handleScroll('services')} className="text-gray-700 hover:text-blue-800 transition-colors">Services</a>
            <a href="#" onClick={handleScroll('pricing')} className="text-gray-700 hover:text-blue-800 transition-colors">Pricing</a>
            <a href="#" onClick={handleScroll('latest-releases')} className="text-gray-700 hover:text-blue-800 transition-colors">Portfolio</a>
            <a href="#" onClick={handleScroll('about')} className="text-gray-700 hover:text-blue-800 transition-colors">About</a>
            <a href="#" onClick={handleScroll('contact')} className="text-gray-700 hover:text-blue-800 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => setCurrentPage('signIn')}
              className="px-6 py-2 rounded-lg text-blue-800 border border-blue-800 hover:bg-blue-50 transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => setCurrentPage('signUp')}
              className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-colors"
            >
              Sign Up
            </button>
          </div>

          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="px-4 py-4 space-y-2">
              <a href="#" onClick={handleScroll('home')} className="block py-2 text-gray-700 hover:text-blue-800">Home</a>
              <a href="#" onClick={handleScroll('services')} className="block py-2 text-gray-700 hover:text-blue-800">Services</a>
              <a href="#" onClick={handleScroll('pricing')} className="block py-2 text-gray-700 hover:text-blue-800">Pricing</a>
              <a href="#" onClick={handleScroll('latest-releases')} className="block py-2 text-gray-700 hover:text-blue-800">Portfolio</a>
              <a href="#" onClick={handleScroll('about')} className="block py-2 text-gray-700 hover:text-blue-800">About</a>
              <a href="#" onClick={handleScroll('contact')} className="block py-2 text-gray-700 hover:text-blue-800">Contact</a>
              <div className="mt-4 pt-4 border-t space-y-2">
                <button
                  onClick={() => setCurrentPage('signIn')}
                  className="w-full text-left py-2 text-gray-700 hover:text-blue-800"
                >
                  Sign In
                </button>
                <button
                  onClick={() => setCurrentPage('signUp')}
                  className="w-full text-left bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-900 transition-colors"
                >
                  Sign Up
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
