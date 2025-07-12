
import React from 'react';
import { Recycle, Globe, DollarSign, Users, Droplets, Heart } from 'lucide-react';

const Impact = () => {
  const impactPoints = [
    {
      icon: <Recycle className="h-12 w-12" />,
      title: "♻️ Rethink Fashion, Reduce Waste",
      description: "Every swap on ReWear keeps wearable clothes out of landfills. That's one less item burned, dumped, or wasted."
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "🌍 Real People, Real Change", 
      description: "ReWear empowers individuals to build a community of conscious consumers, where style meets sustainability—without sacrificing affordability."
    },
    {
      icon: <DollarSign className="h-12 w-12" />,
      title: "💰 Save Money, Stay Stylish",
      description: "Why buy new when you can swap for free? Refresh your wardrobe as often as you like without breaking the bank."
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "🤝 Build a Culture of Sharing",
      description: "Every item shared is a step toward a circular economy—where fashion is not disposable but redistributed, reimagined, and reworn."
    }
  ];

  const stats = [
    { number: "2,700L", label: "Water saved per shirt", icon: <Droplets className="h-6 w-6" /> },
    { number: "15,000+", label: "Items rescued from landfills", icon: <Recycle className="h-6 w-6" /> },
    { number: "8,500+", label: "Happy swappers", icon: <Users className="h-6 w-6" /> },
    { number: "95%", label: "Waste reduction rate", icon: <Globe className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Our Impact
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Together, we're building a more sustainable future, one swap at a time. See how ReWear is making a difference.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 animate-stagger-in">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group hover:scale-105 transition-all duration-300 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-black text-white rounded-full group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-black">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Impact Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 animate-stagger-in">
          {impactPoints.map((point, index) => (
            <div
              key={point.title}
              className="group p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-black text-white rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-3">{point.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="bg-black text-white rounded-3xl p-12 text-center animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white text-black rounded-full">
              <Heart className="h-8 w-8" />
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">✨ One shirt saved = 2,700 liters of water preserved.</h3>
            <p className="text-xl text-gray-300 italic">💬 Every swap is a story waiting to be worn again.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of conscious consumers and start making a difference today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="/signup"
              className="inline-flex items-center px-8 py-4 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Swapping
            </a>
            <a
              href="/add-item"
              className="inline-flex items-center px-8 py-4 border-2 border-black text-black text-lg font-semibold rounded-lg hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
            >
              List Your First Item
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
