import React, { useState } from 'react';
import { Award, Users, Briefcase, TrendingUp, X } from 'lucide-react';

const About = () => {
  const [modalContent, setModalContent] = useState('');

  const showModal = (content) => { setModalContent(content); };
  const hideModal = () => { setModalContent(''); };
  const handleStartCampaign = () => { showModal('Ready to make your movie a success? Our expert team will contact you within 2 hours to discuss your project and create a winning promotion strategy!'); };
  const handleScheduleConsultation = () => { showModal('Free consultation scheduled! Our senior strategist will call you within 24 hours to discuss your movie promotion needs and provide expert recommendations.'); };
  const stats = [
    { icon: <Award className="h-8 w-8" />, number: "500+", label: "Movies Promoted" },
    { icon: <Users className="h-8 w-8" />, number: "50+", label: "Industry Partners" },
    { icon: <Briefcase className="h-8 w-8" />, number: "8", label: "Years Experience" },
    { icon: <TrendingUp className="h-8 w-8" />, number: "300%", label: "Average ROI" }
  ];
  const testimonials = [
    { name: "Sarah Chen", role: "Director, 'Midnight Dreams'", quote: "Shri Sai Film Creative helped us achieve a 300% return on investment. Their strategic approach and industry connections were invaluable.", image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" },
    { name: "Marcus Rodriguez", role: "Producer, 'Urban Stories'", quote: "The team's expertise in digital marketing and festival strategy led to our film being selected for 12 international festivals.", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" },
    { name: "Emma Thompson", role: "Independent Filmmaker", quote: "From concept to theatrical release, Shri Sai Film Creative was with us every step. Their PR campaigns generated incredible buzz.", image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" }
  ];
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Filmmakers Choose Shri Sai Film Creative</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">With deep industry knowledge and proven results, we've helped hundreds of films find their audience and achieve commercial success.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (<div key={index} className="text-center"><div className="bg-blue-800 text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">{stat.icon}</div><div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div><div className="text-gray-600">{stat.label}</div></div>))}
        </div>
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (<div key={index} className="bg-white rounded-xl p-8 shadow-lg"><div className="flex items-center mb-6"><img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover"/><div><div className="font-semibold text-gray-900">{testimonial.name}</div><div className="text-sm text-gray-600">{testimonial.role}</div></div></div><p className="text-gray-700 italic">"{testimonial.quote}"</p></div>))}
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-800 to-purple-800 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Make Your Movie a Success?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Join hundreds of filmmakers who have achieved their dreams with our proven promotion strategies.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleStartCampaign} className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">Start Your Campaign</button>
            <button onClick={handleScheduleConsultation} className="border border-blue-300 text-blue-100 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Schedule Consultation</button>
          </div>
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

export default About;
