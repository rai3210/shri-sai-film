import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Indie Launch",
      price: "₹2,09,999",
      period: "per campaign",
      description: "Perfect for independent filmmakers and small productions",
      features: [
        "Social media campaign (4 weeks)",
        "Basic press release",
        "Trailer optimization",
        "Email marketing setup",
        "Basic performance tracking",
        "2 revision rounds"
      ],
      popular: false
    },
    {
      name: "Studio Standard",
      price: "₹6,69,999",
      period: "per campaign",
      description: "Comprehensive promotion for mid-budget films",
      features: [
        "Everything in Indie Launch",
        "Influencer partnerships",
        "Media interviews arrangement",
        "Festival submission strategy",
        "Behind-the-scenes content",
        "Enhanced performance tracking",
        "Dedicated account manager",
        "5 revision rounds"
      ],
      popular: true
    },
    {
      name: "Blockbuster Pro",
      price: "₹20,99,999",
      period: "per campaign",
      description: "Premium promotion for major releases and award campaigns",
      features: [
        "Everything in Studio Standard",
        "Celebrity endorsements",
        "International PR campaign",
        "Premium festival strategy",
        "Red carpet event planning",
        "Crisis management support",
        "24/7 priority support",
        "Unlimited revisions"
      ],
      popular: false
    }
  ];

  const handlePlanSelect = (planName: string, price: string) => {
    alert(`You've selected the ${planName} package (${price}). Our team will contact you within 2 hours to discuss your project details and finalize the proposal. Thank you for choosing Shri Sai Film Creative!`);
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing for Every Budget
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect promotion package for your film. All plans include our guarantee 
            of measurable results and dedicated support throughout your campaign.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular 
                  ? 'bg-gradient-to-b from-blue-50 to-white border-2 border-blue-500 shadow-xl' 
                  : 'bg-white border border-gray-200 shadow-lg'
              } hover:shadow-xl transition-shadow duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-blue-800 text-white hover:bg-blue-900'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
                onClick={() => handlePlanSelect(plan.name, plan.price)}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We offer tailored packages for unique requirements.
          </p>
          <button 
            className="text-blue-800 font-semibold hover:underline"
            onClick={() => alert('Our custom solutions team will contact you within 24 hours to understand your specific requirements and provide a tailored quote.')}
          >
            Contact us for custom pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;