import React, { useState } from 'react';
import { Megaphone, Users, Camera, Globe, Zap, X } from 'lucide-react';

const Services = () => {
  const [modalContent, setModalContent] = useState('');
  const showModal = (content) => { setModalContent(content); };
  const hideModal = () => { setModalContent(''); };
  const handleServiceClick = (serviceName) => { showModal(`Thank you for your interest in ${serviceName}! Our team will contact you within 24 hours to discuss your project requirements and provide a customized quote.`); };
  const services = [
    { icon: <Megaphone className="h-12 w-12" />, title: "Digital Marketing", description: "Comprehensive social media campaigns, influencer partnerships, and targeted advertising across all major platforms.", features: ["Social Media Management", "Influencer Outreach", "Paid Advertising", "Content Creation"]},
    { icon: <Users className="h-12 w-12" />, title: "PR & Media Relations", description: "Build buzz with press releases, media interviews, and strategic public relations campaigns.", features: ["Press Releases", "Media Interviews", "Film Festival Submissions", "Industry Networking"]},
    { icon: <Camera className="h-12 w-12" />, title: "Trailer Production", description: "Create compelling trailers and promotional videos that capture your film's essence and drive audience interest.", features: ["Trailer Editing", "Teaser Creation", "Behind-the-Scenes", "Video Marketing"]},
    { icon: <Globe className="h-12 w-12" />, title: "Distribution Strategy", description: "Strategic planning for theatrical, streaming, and digital distribution to maximize your film's reach.", features: ["Release Planning", "Platform Negotiations", "International Sales", "Revenue Optimization"]}
  ];
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Movie Promotion Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">From pre-production buzz to post-release marketing, we provide end-to-end promotional services that ensure your movie reaches its target audience and achieves commercial success.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-blue-800 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <Zap className="h-4 w-4 text-yellow-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button onClick={() => handleServiceClick(service.title)} className="mt-6 w-full bg-blue-800 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-900 transition-colors">
                Get Quote for {service.title}
              </button>
            </div>
          ))}
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

export default Services;
