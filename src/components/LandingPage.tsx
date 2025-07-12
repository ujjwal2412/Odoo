
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Recycle, Users, Shirt, TrendingUp, Star, Heart, Package } from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "Direct Swaps",
      description: "Exchange clothes directly with other users. Find that perfect piece you've been looking for."
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Point System",
      description: "Earn points for every item you list. Redeem points for items you love without direct swaps."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Sustainable Impact",
      description: "Reduce textile waste and promote circular fashion. Every swap makes a difference."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Trusted Community",
      description: "Join a community of fashion-conscious individuals committed to sustainable choices."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Items Swapped", icon: <Shirt className="h-6 w-6" /> },
    { number: "5,000+", label: "Active Users", icon: <Users className="h-6 w-6" /> },
    { number: "50,000+", label: "CO2 Saved (kg)", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "98%", label: "User Satisfaction", icon: <Star className="h-6 w-6" /> }
  ];

  const featuredItems = [
    {
      id: 1,
      title: "Vintage Leather Jacket",
      condition: "Excellent",
      size: "M",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      points: 120
    },
    {
      id: 2,
      title: "Designer Silk Dress",
      condition: "Like New",
      size: "S",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      points: 200
    },
    {
      id: 3,
      title: "Classic Denim Jeans",
      condition: "Good",
      size: "32",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      points: 80
    },
    {
      id: 4,
      title: "Cozy Wool Sweater",
      condition: "Excellent",
      size: "L",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      points: 100
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-8 animate-bounce-in">
              <Recycle className="mr-2 h-4 w-4" />
              Sustainable Fashion Revolution
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
              Give Your Clothes a{' '}
              <span className="relative">
                Second Life
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-black opacity-20 animate-scale-in"></div>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A web-based platform that enables users to exchange unused clothing through direct swaps or a point-based redemption system. Promote sustainable fashion and reduce textile waste.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <Link
                to="/signup"
                className="group inline-flex items-center px-8 py-4 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Swapping
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/items"
                className="group inline-flex items-center px-8 py-4 border-2 border-black text-black text-lg font-semibold rounded-lg hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
              >
                Browse Items
                <Package className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <Link
              to="/add-item"
              className="inline-flex items-center text-gray-600 hover:text-black transition-colors duration-300 group"
            >
              <span className="mr-2">Ready to list your first item?</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-black opacity-5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gray-300 opacity-10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-5 w-12 h-12 bg-gray-400 opacity-5 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-stagger-in">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white text-black rounded-full group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              How ReWear Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, sustainable, and rewarding. Join the circular fashion movement with our innovative platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-stagger-in">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-black text-white rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Featured Items
            </h2>
            <p className="text-xl text-gray-600">
              Discover amazing pieces from our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-stagger-in">
            {featuredItems.map((item, index) => (
              <Link
                key={item.id}
                to={`/item/${item.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gray-600 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <span className="bg-gray-100 px-2 py-1 rounded-full">{item.condition}</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-full">Size {item.size}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-black">{item.points} pts</span>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/items"
              className="inline-flex items-center px-8 py-4 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              View All Items
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Wardrobe?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already making a positive impact through sustainable fashion choices.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/signup"
                className="group inline-flex items-center px-8 py-4 bg-white text-black text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/add-item"
                className="group inline-flex items-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
              >
                List Your First Item
                <Package className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
