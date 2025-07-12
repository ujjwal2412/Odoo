
import React from 'react';
import { Shirt, RefreshCw, Package, Star, Lightbulb } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Shirt className="h-12 w-12" />,
      step: "Step 1: List Your Item",
      title: "👕 List Your Item",
      description: "Have clothes you no longer wear? Snap a few photos, fill in the details (size, condition, category, etc.), and upload it. It takes less than a minute."
    },
    {
      icon: <RefreshCw className="h-12 w-12" />,
      step: "Step 2: Swap or Redeem", 
      title: "🔁 Swap or Redeem",
      description: "Browse the community's listings. Like something? Send a swap request for a direct exchange. Or redeem it using your points earned by contributing items."
    },
    {
      icon: <Package className="h-12 w-12" />,
      step: "Step 3: Connect & Confirm",
      title: "📦 Connect & Confirm", 
      description: "Once a swap is accepted, coordinate delivery or pickup. The platform keeps both parties informed through real-time updates and notifications."
    },
    {
      icon: <Star className="h-12 w-12" />,
      step: "Step 4: Rate the Experience",
      title: "⭐ Rate the Experience",
      description: "After each swap, leave feedback. Help others build trust and keep the platform clean, fair, and friendly."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            How It Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started with ReWear is simple. Follow these four easy steps to transform your wardrobe sustainably.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-20 mb-20">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className={`flex flex-col lg:flex-row items-center gap-12 animate-fade-in-up ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full text-xl font-bold mb-6">
                  {index + 1}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  {step.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              <div className="flex-1 flex justify-center">
                <div className="p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                  <div className="text-black">
                    {step.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bonus Section */}
        <div className="bg-black text-white rounded-3xl p-12 text-center animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white text-black rounded-full">
              <Lightbulb className="h-8 w-8" />
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">💡 Bonus Feature</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            You earn points every time you list an item or complete a swap. Use them to redeem clothing without needing to offer an item in return!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
