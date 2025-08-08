import React, { useState } from 'react';
import { Star, Calendar, TrendingUp, ExternalLink, X } from 'lucide-react';

const LatestReleases = () => {
  const [modalContent, setModalContent] = useState('');
  const showModal = (content) => { setModalContent(content); };
  const hideModal = () => { setModalContent(''); };
  const featuredCampaign = {
    title: "Merry Christmas", genre: "Thriller/Mystery", director: "Sriram Raghavan", releaseDate: "January 2024",
    poster: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop", rating: 7.2, boxOffice: "₹45.2 Cr", platforms: ["Theaters", "Netflix"],
    campaign: { reach: "12.8M", engagement: "18.4%", roi: "280%" },
    description: "Katrina Kaif and Vijay Sethupathi starrer that we promoted through strategic thriller-focused campaigns and regional market targeting.", status: "Current Campaign", isLatest: true
  };
  const releases = [
    featuredCampaign,
    { title: "Aquaman and the Lost Kingdom", genre: "Action/Adventure", director: "James Wan", releaseDate: "December 2023", poster: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop", rating: 5.7, boxOffice: "₹3,615 Cr", platforms: ["Theaters", "HBO Max"], campaign: { reach: "25.2M", engagement: "8.4%", roi: "180%" }, description: "DC's underwater adventure that we helped promote through targeted superhero fan campaigns and social media engagement.", status: "Featured Campaign" },
    { title: "Spider-Man: Across the Spider-Verse", genre: "Animation/Action", director: "Joaquim Dos Santos", releaseDate: "June 2023", poster: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop", rating: 8.7, boxOffice: "₹5,754 Cr", platforms: ["Netflix", "Sony Pictures"], campaign: { reach: "45.1M", engagement: "22.8%", roi: "420%" }, description: "Animated masterpiece that achieved viral status through our innovative animation-focused marketing and fan community engagement.", status: "Viral Success" },
    { title: "Oppenheimer", genre: "Biography/Drama", director: "Christopher Nolan", releaseDate: "July 2023", poster: "https://images.pexels.com/photos/7991580/pexels-photo-7991580.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop", rating: 8.3, boxOffice: "₹7,934 Cr", platforms: ["Theaters", "Peacock"], campaign: { reach: "38.7M", engagement: "16.5%", roi: "380%" }, description: "Historical drama that we promoted through educational content marketing and strategic partnerships with history enthusiasts.", status: "Critical Success" },
    { title: "Barbie", genre: "Comedy/Fantasy", director: "Greta Gerwig", releaseDate: "July 2023", poster: "https://images.pexels.com/photos/7991226/pexels-photo-7991226.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop", rating: 6.8, boxOffice: "₹12,050 Cr", platforms: ["HBO Max", "Amazon Prime"], campaign: { reach: "89.8M", engagement: "28.1%", roi: "650%" }, description: "Cultural phenomenon that we helped amplify through viral pink marketing campaigns and influencer collaborations.", status: "Audience Favorite" },
    { title: "Fast X", genre: "Action/Crime", director: "Louis Leterrier", releaseDate: "May 2023", poster: "https://images.pexels.com/photos/7991227/pexels-photo-7991227.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop", rating: 5.8, boxOffice: "₹5,955 Cr", platforms: ["Peacock", "Amazon Prime"], campaign: { reach: "32.4M", engagement: "12.7%", roi: "220%" }, description: "High-octane franchise continuation that we promoted through action-focused campaigns and international market targeting.", status: "Box Office Hit" },
    { title: "Scream VI", genre: "Horror/Mystery", director: "Matt Bettinelli-Olpin", releaseDate: "March 2023", poster: "https://images.pexels.com/photos/7991228/pexels-photo-7991228.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop", rating: 6.5, boxOffice: "₹1,408 Cr", platforms: ["Paramount+", "Starz"], campaign: { reach: "18.2M", engagement: "19.3%", roi: "290%" }, description: "Horror franchise revival that we promoted through targeted horror community engagement and suspenseful teaser campaigns.", status: "Cult Classic" }
  ];
  const handleViewPortfolio = () => { showModal('Our complete portfolio showcases 500+ successful movie campaigns. Contact us to see detailed case studies and campaign results for your genre.'); };
  const getStatusColor = (status) => {
    switch (status) {
      case "Current Campaign": return "bg-green-500 animate-pulse";
      case "Featured Campaign": return "bg-yellow-500";
      case "Critical Success": return "bg-purple-500";
      case "Viral Success": return "bg-orange-500";
      case "Audience Favorite": return "bg-pink-500";
      case "Box Office Hit": return "bg-blue-500";
      case "Cult Classic": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };
  return (
    <section id="latest-releases" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Latest Releases We've Promoted</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Discover the latest movies achieving remarkable success through our strategic promotion campaigns. From Bollywood hits to international blockbusters.</p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {releases.map((movie, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="relative">
                <img src={movie.poster} alt={movie.title} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className={`${getStatusColor(movie.status)} text-white text-xs px-3 py-1 rounded-full font-semibold`}>{movie.status}</span>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" /><span className="text-white text-sm font-semibold">{movie.rating}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">{movie.title}</h3>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                </div>
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <span>{movie.genre}</span><span className="mx-2">•</span><Calendar className="h-4 w-4 mr-1" /><span>{movie.releaseDate}</span>
                </div>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{movie.description}</p>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center"><span className="text-gray-400 text-sm">Box Office</span><span className="text-green-400 font-semibold">{movie.boxOffice}</span></div>
                  <div className="flex justify-between items-center"><span className="text-gray-400 text-sm">Director</span><span className="text-white text-sm">{movie.director}</span></div>
                </div>
                <div className="mb-4">
                  <div className="text-gray-400 text-sm mb-2">Available on:</div>
                  <div className="flex flex-wrap gap-2">
                    {movie.platforms.map((platform, platformIndex) => (<span key={platformIndex} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-md">{platform}</span>))}
                  </div>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <div className="text-gray-400 text-sm mb-2">Campaign Results:</div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div><div className="text-blue-400 font-semibold text-sm">{movie.campaign.reach}</div><div className="text-gray-500 text-xs">Reach</div></div>
                    <div><div className="text-green-400 font-semibold text-sm">{movie.campaign.engagement}</div><div className="text-gray-500 text-xs">Engagement</div></div>
                    <div><div className="text-yellow-400 font-semibold text-sm">{movie.campaign.roi}</div><div className="text-gray-500 text-xs">ROI</div></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button onClick={handleViewPortfolio} className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105">
            View Full Portfolio
          </button>
        </div>
      </div>
      {modalContent && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-8 shadow-2xl max-w-md w-full relative">
            <button onClick={hideModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><X size={24} /></button>
            <p className="text-gray-800 text-lg text-center">{modalContent}</p>
            <div className="mt-6 flex justify-center">
              <button onClick={hideModal} className="bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LatestReleases;
