
import React, { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Filter, Grid, List, Heart, ChevronDown } from 'lucide-react';

const ProductListing = () => {
  const { category } = useParams();
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    size: [],
    color: [],
    brand: []
  });
  const [showFilters, setShowFilters] = useState(false);

  const products = [
    {
      id: 1,
      name: "Silk Midi Dress",
      price: 420,
      originalPrice: 520,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "women",
      brand: "Elite",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Black", "Navy", "Cream"],
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "Cashmere Blazer",
      price: 680,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "women",
      brand: "Elite",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Charcoal", "Camel", "Navy"],
      isNew: false,
      isSale: false
    },
    {
      id: 3,
      name: "Leather Handbag",
      price: 320,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "accessories",
      brand: "Elite",
      sizes: ["One Size"],
      colors: ["Black", "Brown", "Tan"],
      isNew: true,
      isSale: false
    },
    {
      id: 4,
      name: "Tailored Trousers",
      price: 280,
      image: "https://images.unsplash.com/photo-1506629905607-7e9a9dd83013?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "women",
      brand: "Elite",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "Navy", "Gray"],
      isNew: false,
      isSale: false
    },
    {
      id: 5,
      name: "Cotton Henley",
      price: 120,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "men",
      brand: "Elite",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["White", "Gray", "Navy"],
      isNew: false,
      isSale: false
    },
    {
      id: 6,
      name: "Wool Overcoat",
      price: 850,
      image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "men",
      brand: "Elite",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Charcoal", "Navy", "Camel"],
      isNew: true,
      isSale: false
    },
    {
      id: 7,
      name: "Vintage Sunglasses",
      price: 180,
      originalPrice: 220,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "accessories",
      brand: "Elite",
      sizes: ["One Size"],
      colors: ["Black", "Tortoise", "Gold"],
      isNew: false,
      isSale: true
    },
    {
      id: 8,
      name: "Denim Jacket",
      price: 220,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "women",
      brand: "Elite",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Light Blue", "Dark Blue", "Black"],
      isNew: true,
      isSale: false
    }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = products;
    
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }
    
    // Apply price filter
    filtered = filtered.filter(product => 
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );
    
    // Apply size filter
    if (filters.size.length > 0) {
      filtered = filtered.filter(product =>
        product.sizes.some(size => filters.size.includes(size))
      );
    }
    
    // Apply color filter
    if (filters.color.length > 0) {
      filtered = filtered.filter(product =>
        product.colors.some(color => filters.color.includes(color))
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Featured/default order
        break;
    }
    
    return filtered;
  }, [category, filters, sortBy, products]);

  const toggleFilter = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }));
  };

  const getPageTitle = () => {
    if (!category) return 'All Products';
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            {getPageTitle()}
          </h1>
          <p className="text-xl text-gray-600">
            {filteredProducts.length} items
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors"
          >
            <Filter className="h-5 w-5" />
            <span>Filters</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>

          <div className="flex items-center space-x-4">
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:border-transparent outline-none"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>

            {/* View Mode */}
            <div className="flex border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-50'} transition-colors`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-50'} transition-colors`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="bg-gray-50 p-6 rounded-lg mb-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Price Range */}
              <div>
                <h3 className="font-semibold text-black mb-3">Price Range</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${filters.priceRange[0]}</span>
                    <span>${filters.priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={filters.priceRange[1]}
                    onChange={(e) => setFilters(prev => ({
                      ...prev,
                      priceRange: [prev.priceRange[0], parseInt(e.target.value)]
                    }))}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Size */}
              <div>
                <h3 className="font-semibold text-black mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    <button
                      key={size}
                      onClick={() => toggleFilter('size', size)}
                      className={`px-3 py-1 border rounded-md text-sm transition-colors ${
                        filters.size.includes(size)
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-gray-200 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div>
                <h3 className="font-semibold text-black mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {['Black', 'White', 'Navy', 'Gray', 'Brown', 'Cream'].map(color => (
                    <button
                      key={color}
                      onClick={() => toggleFilter('color', color)}
                      className={`px-3 py-1 border rounded-md text-sm transition-colors ${
                        filters.color.includes(color)
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-gray-200 hover:border-black'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <div className="flex items-end">
                <button
                  onClick={() => setFilters({
                    priceRange: [0, 1000],
                    size: [],
                    color: [],
                    brand: []
                  })}
                  className="text-sm text-gray-600 hover:text-black transition-colors underline"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Link to={`/product/${product.id}`} className={`block ${viewMode === 'list' ? 'flex' : ''}`}>
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-1/3' : 'aspect-[3/4]'}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-black text-white px-3 py-1 text-sm font-medium">
                        NEW
                      </span>
                    )}
                    {product.isSale && (
                      <span className="bg-black text-white px-3 py-1 text-sm font-medium">
                        SALE
                      </span>
                    )}
                  </div>

                  {/* Wishlist */}
                  <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>

                <div className={`p-6 ${viewMode === 'list' ? 'w-2/3 flex flex-col justify-center' : ''}`}>
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gray-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{product.brand}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-black">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  {viewMode === 'list' && (
                    <p className="text-gray-600 mt-2">
                      Available in {product.colors.length} colors and {product.sizes.length} sizes
                    </p>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-black mb-4">No products found</h3>
            <p className="text-gray-600 mb-8">Try adjusting your filters or search criteria</p>
            <button
              onClick={() => setFilters({
                priceRange: [0, 1000],
                size: [],
                color: [],
                brand: []
              })}
              className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
