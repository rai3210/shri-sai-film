import React from 'react';
import { Star, TrendingUp, Users } from 'lucide-react';

const Hero = () => {
  const handleStartPromotion = () => {
    alert('Welcome to Shri Sai Film Creative! Our promotion specialist will contact you within 2 hours to discuss your project and create a customized marketing strategy.');
  };

  const handleViewPortfolio = () => {
    document.getElementById('latest-releases')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Promote Your Movie to
              <span className="text-yellow-400"> Millions</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Professional movie promotion and creative services that get your film noticed. From concept to box office success, we bring your cinematic vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={handleStartPromotion}
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Start Promotion
              </button>
              <button 
                onClick={handleViewPortfolio}
                className="border border-blue-300 text-blue-100 px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                View Portfolio
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 text-yellow-400 mr-2" />
                  <span className="text-2xl font-bold">500+</span>
                </div>
                <p className="text-blue-200 text-sm">Movies Promoted</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-green-400 mr-2" />
                  <span className="text-2xl font-bold">85%</span>
                </div>
                <p className="text-blue-200 text-sm">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-purple-400 mr-2" />
                  <span className="text-2xl font-bold">10M+</span>
                </div>
                <p className="text-blue-200 text-sm">Audience Reached</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-black rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold mb-4">Featured Campaign</h3>
                <div className="bg-gray-800 rounded-lg h-32 mb-4 flex items-center justify-center">
                  <span className="text-4xl">🎬</span>
                </div>
                <p className="text-sm text-gray-300">
                  "Midnight Dreams" achieved 300% ROI with our premium promotion package
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;