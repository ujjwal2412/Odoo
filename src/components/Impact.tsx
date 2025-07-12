import * as React from 'react';
import { useEffect } from 'react';
import { Recycle, Globe, DollarSign, Users, Droplets, Heart } from 'lucide-react';

interface ImpactPoint {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ImpactStat {
  number: string;
  label: string;
  icon: React.ReactNode;
}

const Impact: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const impactPoints: ImpactPoint[] = [
    {
      icon: <Recycle className="h-12 w-12" aria-hidden="true" />,
      title: "♻ Rethink Fashion, Reduce Waste",
      description: "Every swap is a fashion statement with a purpose. One less item wasted, one more smile created."
    },
    {
      icon: <Globe className="h-12 w-12" aria-hidden="true" />,
      title: "🌍 Real People, Real Change", 
      description: "This isn't some corporate greenwashing talk — it's real folks like you choosing smarter, cooler, more sustainable options."
    },
    {
      icon: <DollarSign className="h-12 w-12" aria-hidden="true" />,
      title: "💰 Save Money, Stay Stylish",
      description: "Keep your wardrobe fresh and your wallet happy. Quality fashion doesn't have to break the bank."
    },
    {
      icon: <Users className="h-12 w-12" aria-hidden="true" />,
      title: "🤝 Build a Culture of Sharing",
      description: "Let's make 'reuse' the new 'new.' More sharing, less hoarding. More love, less landfill."
    }
  ];

  const stats: ImpactStat[] = [
    { 
      number: "2,700L", 
      label: "Water saved every time you swap 1 shirt", 
      icon: <Droplets className="h-6 w-6" aria-hidden="true" /> 
    },
    { 
      number: "1,500+", 
      label: "Items rescued from landfills", 
      icon: <Recycle className="h-6 w-6" aria-hidden="true" /> 
    },
    { 
      number: "50+", 
      label: "Happy swappers", 
      icon: <Users className="h-6 w-6" aria-hidden="true" /> 
    },
    { 
      number: "95%", 
      label: "Waste reduction rate", 
      icon: <Globe className="h-6 w-6" aria-hidden="true" /> 
    }
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
              role="figure"
              aria-label={`${stat.number} ${stat.label}`}
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
              role="article"
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
        <div 
          className="bg-black text-white rounded-3xl p-12 text-center animate-fade-in-up"
          role="blockquote"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white text-black rounded-full">
              <Heart className="h-8 w-8" aria-hidden="true" />
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">💥 You = The Real MVP</h3>
            <p className="text-xl text-gray-300">
              You're not just swapping shirts. You're helping the planet, your wallet, and your vibe — all at once.
            </p>
            <p className="text-xl text-gray-300">
              <span className="block">👚 Start Swapping.</span>
              <span className="block">🚀 Start Saving.</span>
              <span className="block">🌎 Start Changing the World.</span>
            </p>
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
              role="button"
            >
              Start Swapping
            </a>
            <a
              href="/add-item"
              className="inline-flex items-center px-8 py-4 border-2 border-black text-black text-lg font-semibold rounded-lg hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
              role="button"
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