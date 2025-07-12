import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronLeft, ChevronRight, Heart, Sparkles, TrendingUp, Award, Shirt, ShoppingBag } from 'lucide-react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentFeatured, setCurrentFeatured] = useState(0);
  const [currentClothingCategory, setCurrentClothingCategory] = useState(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Summer Collection 2024",
      subtitle: "Effortless elegance meets contemporary design",
      cta: "Shop Now"
    },
    {
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Timeless Classics",
      subtitle: "Curated pieces for the modern wardrobe",
      cta: "Explore"
    },
    {
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Luxury Redefined",  
      subtitle: "Premium craftsmanship, uncompromising quality",
      cta: "Discover"
    }
  ];

  const categories = [
    {
      name: "Women",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      href: "/products/women"
    },
    {
      name: "Men",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      href: "/products/men"
    },
    {
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      href: "/products/accessories"
    }
  ];

  const newArrivals = [
    {
      id: 1,
      name: "Silk Midi Dress",
      price: 2500,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      isNew: true
    },
    {
      id: 2,
      name: "Cashmere Blazer",
      price: 4200,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      isNew: true
    },
    {
      id: 3,
      name: "Leather Handbag",
      price: 1800,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      isNew: true
    },
    {
      id: 4,
      name: "Tailored Trousers",
      price: 1600,
      image: "https://images.unsplash.com/photo-1506629905607-7e9a9dd83013?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      isNew: true
    },
    {
      id: 5,
      name: "Cotton Kurta",
      price: 1200,
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      isNew: true
    },
    {
      id: 6,
      name: "Sports Sneakers",
      price: 3200,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      isNew: true
    }
  ];

  const featuredItems = [
    {
      id: 1,
      name: "Silk Midi Dress",
      price: 2500,
      originalPrice: 3200,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "women",
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "Cashmere Blazer",
      price: 4200,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "women",
      isNew: false,
      isSale: false
    },
    {
      id: 3,
      name: "Leather Handbag",
      price: 1800,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "accessories",
      isNew: true,
      isSale: false
    },
    {
      id: 4,
      name: "Cotton Kurta",
      price: 1200,
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "men",
      isNew: false,
      isSale: false
    },
    {
      id: 5,
      name: "Sports Sneakers",
      price: 3200,
      originalPrice: 4000,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "footwear",
      isNew: true,
      isSale: true
    }
  ];

  // Clothing categories for carousel
  const clothingCategories = [
    {
      id: 1,
      name: "Traditional Wear",
      description: "Authentic Indian ethnic clothing",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      items: ["Sarees", "Kurtas", "Lehengas", "Sherwanis"],
      count: "50+ Items",
      color: "from-orange-500 to-pink-500"
    },
    {
      id: 2,
      name: "Western Formals",
      description: "Professional and business attire",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      items: ["Blazers", "Shirts", "Trousers", "Dresses"],
      count: "80+ Items",
      color: "from-blue-500 to-purple-500"
    },
    {
      id: 3,
      name: "Casual Wear",
      description: "Comfortable everyday clothing",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      items: ["T-shirts", "Jeans", "Hoodies", "Sneakers"],
      count: "120+ Items",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      name: "Party & Events",
      description: "Special occasion outfits",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      items: ["Gowns", "Suits", "Cocktail Dresses", "Formal Shoes"],
      count: "40+ Items",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 5,
      name: "Accessories",
      description: "Complete your look",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      items: ["Bags", "Jewelry", "Watches", "Scarves"],
      count: "60+ Items",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 6,
      name: "Sports & Activewear",
      description: "Athletic and fitness clothing",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      items: ["Sports Bras", "Leggings", "Running Shoes", "Tracksuits"],
      count: "35+ Items",
      color: "from-red-500 to-orange-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextFeatured = () => {
    setCurrentFeatured((prev) => (prev + 1) % featuredItems.length);
  };

  const prevFeatured = () => {
    setCurrentFeatured((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentFeatured + i) % featuredItems.length;
      items.push(featuredItems[index]);
    }
    return items;
  };

  // Clothing category carousel functions
  const nextClothingCategory = () => {
    setCurrentClothingCategory((prev) => (prev + 1) % clothingCategories.length);
  };

  const prevClothingCategory = () => {
    setCurrentClothingCategory((prev) => (prev - 1 + clothingCategories.length) % clothingCategories.length);
  };

  const getVisibleClothingCategories = () => {
    const visibleCount = 3;
    const categories = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentClothingCategory + i) % clothingCategories.length;
      categories.push(clothingCategories[index]);
    }
    return categories;
  };

  return (
    <div className="overflow-hidden">
      {/* Enhanced Hero Section with Advanced Animations */}
      <section className="relative h-screen overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-floating-text" />
          <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-white/5 rotate-45 animate-rotate-slow" />
          <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-white/8 rounded-full animate-pulse" />
          
          {/* Moving gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-slide-infinite" />
        </div>

        {/* Background Slides */}
        <div className="absolute inset-0 mix-blend-overlay">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 transform ${
                index === currentSlide 
                  ? 'opacity-60 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-6xl mx-auto">
            {/* Premium Badge */}
            <div className="animate-fade-in-up mb-8" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-glow">
                <Sparkles className="h-5 w-5 mr-2 animate-pulse text-yellow-400" />
                <span className="text-sm font-medium tracking-widest uppercase">Premium Fashion Exchange Platform</span>
                <Award className="h-5 w-5 ml-2 text-yellow-400" />
              </div>
            </div>
            
            {/* Main Title with Letter Animation */}
            <h1 className="text-7xl md:text-9xl font-bold mb-8 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <span className="inline-block transform hover:scale-110 transition-all duration-500 animate-floating-text">
                {heroSlides[currentSlide].title.split(' ')[0]}
              </span>
              <br />
              <span className="inline-block transform hover:scale-110 transition-all duration-500 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white animate-gradient">
                {heroSlides[currentSlide].title.split(' ').slice(1).join(' ')}
              </span>
            </h1>
            
            {/* Subtitle with Animation */}
            <p className="text-2xl md:text-3xl mb-10 font-light max-w-4xl mx-auto animate-fade-in-up leading-relaxed text-gray-300" style={{ animationDelay: '0.6s' }}>
              {heroSlides[currentSlide].subtitle}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Link
                to="/products"
                className="group inline-flex items-center bg-white text-black px-10 py-5 text-xl font-semibold hover:bg-gray-100 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <ShoppingBag className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                {heroSlides[currentSlide].cta}
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
              
              <Link
                to="/how-it-works"
                className="group inline-flex items-center border-2 border-white/60 text-white px-10 py-5 text-xl font-semibold hover:bg-white hover:text-black transition-all duration-500 transform hover:scale-110 backdrop-blur-sm"
              >
                <Shirt className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                How It Works
                <TrendingUp className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>

            {/* Stats Counter */}
            <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">2000+</div>
                <div className="text-gray-300">Items Swapped</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300">Cities</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-6">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative overflow-hidden transition-all duration-700 transform hover:scale-150 ${
                index === currentSlide 
                  ? 'w-16 h-4 bg-white rounded-full' 
                  : 'w-4 h-4 bg-white/40 rounded-full hover:bg-white/70'
              }`}
            >
              {index === currentSlide && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-slide-infinite" />
              )}
            </button>
          ))}
        </div>

        {/* Side Navigation */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-500 group border border-white/20"
        >
          <ChevronLeft className="h-8 w-8 text-white group-hover:scale-125 transition-transform duration-300" />
        </button>
        
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-500 group border border-white/20"
        >
          <ChevronRight className="h-8 w-8 text-white group-hover:scale-125 transition-transform duration-300" />
        </button>
      </section>

      {/* Scrolling Brand Strip */}
      <section className="bg-black py-4 overflow-hidden border-t border-white/10">
        <div className="flex animate-parallax whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center space-x-12 mx-12">
              <span className="text-white/60 text-lg font-semibold tracking-wider">SUSTAINABLE FASHION</span>
              <span className="text-white/40">•</span>
              <span className="text-white/60 text-lg font-semibold tracking-wider">PREMIUM EXCHANGE</span>
              <span className="text-white/40">•</span>
              <span className="text-white/60 text-lg font-semibold tracking-wider">ECO-FRIENDLY</span>
              <span className="text-white/40">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Categories Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-black mr-3" />
              <span className="text-sm font-medium tracking-widest uppercase text-gray-600">Premium Collections</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated collections designed for the modern lifestyle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to={category.href}
                className="group relative overflow-hidden aspect-[4/5] bg-gray-100 animate-fade-in-up transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/80 transition-all duration-500" />
                
                {/* Floating decoration */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-8 left-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-bold text-white mb-2 transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500">
                    {category.name}
                  </h3>
                  <div className="flex items-center text-white/90 group-hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100">
                    <span className="mr-2">Explore Collection</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Items Carousel */}
      <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/10 rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 mr-2 text-yellow-400 animate-pulse" />
              <span className="text-sm font-medium tracking-widest uppercase text-gray-400">Trending Now</span>
              <Sparkles className="h-6 w-6 ml-2 text-yellow-400 animate-pulse" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Featured Items
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Handpicked pieces from our community of fashion enthusiasts
            </p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {getVisibleItems().map((product, index) => (
                  <div
                    key={`${product.id}-${currentFeatured}`}
                    className="group bg-white text-black overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in transform hover:scale-[1.03] hover:-translate-y-2"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Animated border on hover */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-black/20 transition-all duration-300" />
                      
                      {/* Badges with animation */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {product.isNew && (
                          <span className="bg-black text-white px-3 py-1 text-sm font-medium transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                            NEW
                          </span>
                        )}
                        {product.isSale && (
                          <span className="bg-red-500 text-white px-3 py-1 text-sm font-medium transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                            SALE
                          </span>
                        )}
                      </div>

                      {/* Floating wishlist */}
                      <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-all duration-300 transform translate-x-full group-hover:translate-x-0 hover:scale-110">
                        <Heart className="h-4 w-4" />
                      </button>

                      {/* Enhanced Action Buttons */}
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <Link
                          to={`/product/${product.id}`}
                          className="flex-1 bg-black text-white py-3 px-4 text-sm font-medium hover:bg-gray-800 transition-all duration-300 text-center transform hover:scale-105"
                        >
                          Request Swap
                        </Link>
                        <button className="bg-white text-black p-3 hover:bg-gray-100 transition-all duration-300 transform hover:scale-110">
                          <Heart className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-b from-white to-gray-50 group-hover:from-gray-50 group-hover:to-white transition-all duration-300">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-600 transition-colors transform group-hover:translate-x-1">
                        {product.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-black">₹{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Enhanced Navigation Buttons */}
            <button
              onClick={prevFeatured}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 shadow-xl group hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={nextFeatured}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 shadow-xl group hover:scale-110"
            >
              <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Link
              to="/products"
              className="inline-flex items-center bg-white text-black px-10 py-4 text-lg font-medium hover:bg-gray-100 transition-all duration-300 group transform hover:scale-105 hover:shadow-xl"
            >
              Browse All Items
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              New Arrivals
            </h2>
            <p className="text-xl text-gray-600">
              Fresh styles for the season ahead
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product, index) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group bg-white overflow-hidden hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.isNew && (
                    <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-sm font-medium">
                      NEW
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gray-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xl font-bold text-black">₹{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/products/new"
              className="inline-flex items-center bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors group"
            >
              View All New Arrivals
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
              <p className="text-gray-600">
                Carefully selected materials and expert craftsmanship in every piece
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Fast Delivery</h3>
              <p className="text-gray-600">
                Free worldwide shipping on orders over ₹5000, delivered in 2-5 days
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Easy Returns</h3>
              <p className="text-gray-600">
                30-day hassle-free returns and exchanges for your peace of mind
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clothing Categories Carousel */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <Shirt className="h-8 w-8 text-black mr-3" />
              <span className="text-sm font-medium tracking-widest uppercase text-gray-600">Clothing Categories</span>
              <Shirt className="h-8 w-8 text-black ml-3" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Find Your Style
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our diverse collection of clothing categories, from traditional ethnic wear to modern western styles
            </p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {getVisibleClothingCategories().map((category, index) => (
                  <div
                    key={`${category.id}-${currentClothingCategory}`}
                    className="group relative overflow-hidden aspect-[4/5] bg-gray-100 animate-scale-up transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500`} />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-black px-3 py-1 text-sm font-semibold rounded-full">
                        {category.count}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-bold text-white mb-2 transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500">
                        {category.name}
                      </h3>
                      <p className="text-white/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {category.description}
                      </p>
                      
                      {/* Items List */}
                      <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        {category.items.map((item, itemIndex) => (
                          <span 
                            key={itemIndex}
                            className="text-xs bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      
                      {/* CTA Button */}
                      <Link
                        to="/products"
                        className="inline-flex items-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 hover:text-yellow-400"
                      >
                        <span className="mr-2 font-semibold">Shop Now</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevClothingCategory}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-black p-4 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl border border-gray-200"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextClothingCategory}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-black p-4 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl border border-gray-200"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          {/* Category Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {clothingCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentClothingCategory(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentClothingCategory 
                    ? 'bg-black w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-all duration-300 group transform hover:scale-105 hover:shadow-xl"
            >
              View All Categories
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
