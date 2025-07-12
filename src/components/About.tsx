
import React from 'react';
import { Leaf, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Exchange",
      description: "We ensure all clothing items meet quality standards before they enter our exchange platform."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Our platform reduces textile waste by giving unused clothing a second life through community exchange."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a community of conscious consumers who value sustainable fashion and responsible consumption."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating worldwide impact by reducing fashion waste and promoting circular economy principles."
    }
  ];

  const team = [
    {
      name: "Prabhjot Singh Assi",
      role: "Platform Developer",
      image: "/Prabhjot.png",
      bio: "Prabhjot leads the technical development of our platform, ensuring seamless user experience for clothing exchanges."
    },
    {
      name: "Swastik Bansal",
      role: "Backend Engineer",
      image: "/Swastik.png",
      bio: "Swastik develops the robust backend systems that power our point-based redemption and exchange mechanisms."
    },
    {
      name: "Yatharth Patankar",
      role: "UI/UX Designer",
      image: "/Yatharth.png",
      bio: "Yatharth designs intuitive interfaces that make clothing exchange simple and enjoyable for our community."
    },
    {
      name: "Ujjwal Seth",
      role: "Product Manager",
      image: "/Ujjwal.png",
      bio: "Ujjwal oversees product strategy and ensures our platform meets the needs of sustainable fashion enthusiasts."
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
            Promoting sustainable fashion through clothing exchange and reuse
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              The ReWear Story
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
              <p className="text-xl mb-8">
                ReWear is a web-based platform that enables users to exchange unused clothing through direct swaps or a point-based redemption system.
              </p>
              <p className="text-lg mb-8">
                The goal is to promote sustainable fashion and reduce textile waste by encouraging users to reuse wearable garments instead of discarding them.
              </p>
              <p className="text-lg">
                Our platform connects conscious consumers who want to give their unused clothing a second life while discovering new pieces for their wardrobe. Through innovative exchange mechanisms, we're building a community that values sustainability and responsible consumption.
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
              The creative minds behind ReWear
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">{member.name}</h3>
                <p className="text-md text-gray-600 mb-4">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">{member.bio}</p>
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
                Our Platform Promise
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg">
                  At ReWear, we believe in making sustainable fashion accessible to everyone. Our platform connects users who want to give their unused clothing a second life while discovering new pieces for their wardrobe.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <p><strong>Direct Swaps:</strong> Exchange clothing directly with other users in your community.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <p><strong>Point System:</strong> Earn points for items you contribute and redeem them for new pieces.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <p><strong>Quality Assurance:</strong> All items are reviewed to ensure they meet our quality standards.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <p><strong>Waste Reduction:</strong> Helping reduce textile waste by keeping wearable garments in circulation.</p>
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
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Be part of a sustainable fashion revolution. Start exchanging unused clothing and discover new pieces while reducing textile waste. Join the ReWear community today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Start Exchanging
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
