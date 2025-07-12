
import React from 'react';
import { Leaf, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "We source only the finest materials and work with skilled artisans to create pieces that stand the test of time."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Our commitment to sustainable fashion drives every decision, from material selection to ethical manufacturing."
    },
    {
      icon: Users,
      title: "Craftsmanship",
      description: "Every piece is carefully crafted by experienced artisans who take pride in their attention to detail."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We believe fashion should make a positive impact on communities and the environment worldwide."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b830?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "With over 15 years in luxury fashion, Sarah brings her vision of timeless elegance to every collection."
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Marcus combines traditional craftsmanship with modern innovation to create pieces that are both beautiful and functional."
    },
    {
      name: "Emma Thompson",
      role: "Sustainability Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Emma leads our sustainability initiatives, ensuring our fashion choices contribute to a better world."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Crafting timeless elegance through sustainable luxury fashion since 2015
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              The ÉLITE Story
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
              <p className="text-xl mb-8">
                Founded in 2015 by a group of passionate designers and sustainability advocates, ÉLITE was born from the belief that luxury fashion should be both beautiful and responsible.
              </p>
              <p className="text-lg mb-8">
                Our journey began in a small atelier in Milan, where we partnered with local artisans who shared our vision of creating exceptional pieces without compromising on ethical values. Today, we continue to honor that commitment while expanding our reach globally.
              </p>
              <p className="text-lg">
                Every piece in our collection tells a story—of skilled hands that crafted it, of sustainable materials carefully sourced, and of timeless design that transcends fleeting trends. We believe that true luxury lies not just in the final product, but in the conscious choices made throughout the entire creation process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The creative minds behind ÉLITE
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-64 h-64 mx-auto mb-6 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-black mb-2">{member.name}</h3>
                <p className="text-lg text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
                Our Sustainability Promise
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg">
                  At ÉLITE, we believe that luxury and sustainability are not mutually exclusive. Our commitment to the environment and ethical practices is woven into every aspect of our business.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <p><strong>Eco-friendly Materials:</strong> We source organic, recycled, and sustainably produced fabrics.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <p><strong>Ethical Manufacturing:</strong> Fair wages and safe working conditions for all our partners.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <p><strong>Circular Fashion:</strong> Repair, recycle, and upcycle programs for our customers.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <p><strong>Carbon Neutral:</strong> Offsetting our carbon footprint through renewable energy and reforestation.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Sustainable fashion"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Join Our Journey
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Be part of a fashion revolution that values craftsmanship, sustainability, and timeless style. Discover our latest collection and join the ÉLITE community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Shop Collection
            </a>
            <a
              href="/contact"
              className="border border-black text-black px-8 py-4 text-lg font-medium hover:bg-black hover:text-white transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
