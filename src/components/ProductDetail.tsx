
import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Heart, Share2, Star, Truck, RotateCcw, Shield, Plus, Minus } from 'lucide-react';
import { useSwap } from '../hooks/useSwapManager';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const { addSwapRequest } = useSwap();

  // Complete product database - same as ProductListing
  const allProducts = useMemo(() => [
    {
      id: 1,
      name: "Silk Midi Dress",
      price: 2500,
      originalPrice: 3200,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "women",
      subcategory: "dresses",
      brand: "ReWear",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Black", "Navy", "Cream"],
      isNew: true,
      isSale: true,
      description: "Crafted from the finest silk, this midi dress combines timeless elegance with contemporary sophistication. The fluid silhouette drapes beautifully, making it perfect for both day and evening occasions.",
      details: ["100% Mulberry Silk", "Midi length", "Side zip closure", "Dry clean only", "Made in Italy"],
      rating: 4.8,
      reviewCount: 127
    },
    {
      id: 2,
      name: "Cashmere Blazer",
      price: 4200,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "women",
      subcategory: "blazers",
      brand: "ReWear",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Charcoal", "Camel", "Navy"],
      isNew: false,
      isSale: false,
      description: "Luxurious cashmere blazer perfect for professional settings. Tailored fit with classic lapels and functional pockets.",
      details: ["100% Cashmere", "Tailored fit", "Two-button closure", "Dry clean only", "Made in Scotland"],
      rating: 4.6,
      reviewCount: 89
    },
    {
      id: 3,
      name: "Leather Handbag",
      price: 1800,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "accessories",
      subcategory: "bags",
      brand: "ReWear",
      sizes: ["One Size"],
      colors: ["Black", "Brown", "Tan"],
      isNew: true,
      isSale: false,
      description: "Premium leather handbag with spacious interior and elegant design. Perfect for daily use or special occasions.",
      details: ["Genuine leather", "Multiple compartments", "Adjustable strap", "Dust bag included", "Made in Italy"],
      rating: 4.7,
      reviewCount: 156
    },
    {
      id: 4,
      name: "Tailored Trousers",
      price: 1600,
      image: "https://images.unsplash.com/photo-1506629905607-7e9a9dd83013?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "women",
      subcategory: "trousers",
      brand: "ReWear",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "Navy", "Gray"],
      isNew: false,
      isSale: false,
      description: "Perfectly tailored trousers with a contemporary cut. Ideal for office wear and formal occasions.",
      details: ["Wool blend", "Straight leg", "Side zip", "Dry clean recommended", "Made in Turkey"],
      rating: 4.5,
      reviewCount: 73
    },
    {
      id: 5,
      name: "Cotton Henley",
      price: 800,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "men",
      subcategory: "t-shirts",
      brand: "ReWear",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["White", "Gray", "Navy"],
      isNew: false,
      isSale: false,
      description: "Comfortable cotton henley with classic button placket. Perfect for casual wear and layering.",
      details: ["100% Cotton", "Button placket", "Regular fit", "Machine washable", "Made in India"],
      rating: 4.4,
      reviewCount: 92
    },
    {
      id: 6,
      name: "Wool Overcoat",
      price: 5200,
      image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "men",
      subcategory: "coats",
      brand: "ReWear",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Charcoal", "Navy", "Camel"],
      isNew: true,
      isSale: false,
      description: "Premium wool overcoat with timeless design. Perfect for winter weather with sophisticated styling.",
      details: ["Wool blend", "Double-breasted", "Inner lining", "Dry clean only", "Made in England"],
      rating: 4.9,
      reviewCount: 45
    },
    {
      id: 7,
      name: "Vintage Sunglasses",
      price: 1200,
      originalPrice: 1600,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "accessories",
      subcategory: "eyewear",
      brand: "ReWear",
      sizes: ["One Size"],
      colors: ["Black", "Tortoise", "Gold"],
      isNew: false,
      isSale: true,
      description: "Classic vintage-inspired sunglasses with UV protection. Timeless style that complements any outfit.",
      details: ["UV400 protection", "Vintage frame", "Polarized lenses", "Case included", "Made in Italy"],
      rating: 4.3,
      reviewCount: 67
    },
    {
      id: 8,
      name: "Denim Jacket",
      price: 1400,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "women",
      subcategory: "jackets",
      brand: "ReWear",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Light Blue", "Dark Blue", "Black"],
      isNew: true,
      isSale: false,
      description: "Classic denim jacket with modern fit. Perfect for layering and casual styling.",
      details: ["100% Cotton denim", "Button closure", "Chest pockets", "Machine washable", "Made in Turkey"],
      rating: 4.6,
      reviewCount: 134
    },
    {
      id: 9,
      name: "Printed Saree",
      price: 2800,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "women",
      subcategory: "ethnic",
      brand: "ReWear",
      sizes: ["One Size"],
      colors: ["Red", "Blue", "Green", "Pink"],
      isNew: true,
      isSale: false,
      description: "Beautiful printed saree with intricate patterns. Perfect for festive occasions and celebrations.",
      details: ["Silk blend", "Hand-printed", "6-yard length", "Dry clean recommended", "Made in India"],
      rating: 4.8,
      reviewCount: 78
    },
    {
      id: 10,
      name: "Cotton Kurta",
      price: 1200,
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "men",
      subcategory: "ethnic",
      brand: "ReWear",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["White", "Cream", "Light Blue"],
      isNew: false,
      isSale: false,
      description: "Comfortable cotton kurta with traditional styling. Perfect for casual and formal occasions.",
      details: ["100% Cotton", "Mandarin collar", "Side slits", "Machine washable", "Made in India"],
      rating: 4.5,
      reviewCount: 98
    },
    {
      id: 11,
      name: "Sports Sneakers",
      price: 3200,
      originalPrice: 4000,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "footwear",
      subcategory: "sneakers",
      brand: "ReWear",
      sizes: ["6", "7", "8", "9", "10", "11"],
      colors: ["White", "Black", "Blue"],
      isNew: true,
      isSale: true,
      description: "High-performance sports sneakers with cushioned sole. Perfect for running and athletic activities.",
      details: ["Mesh upper", "Cushioned sole", "Breathable lining", "Lace-up closure", "Made in Vietnam"],
      rating: 4.7,
      reviewCount: 203
    },
    {
      id: 12,
      name: "Formal Shirt",
      price: 1000,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "men",
      subcategory: "shirts",
      brand: "ReWear",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["White", "Light Blue", "Pink"],
      isNew: false,
      isSale: false,
      description: "Classic formal shirt with crisp collar and clean lines. Essential for professional wardrobe.",
      details: ["Cotton blend", "Button-down collar", "Chest pocket", "Machine washable", "Made in Bangladesh"],
      rating: 4.4,
      reviewCount: 156
    },
    {
      id: 13,
      name: "Floral Dress",
      price: 1800,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "women",
      subcategory: "dresses",
      brand: "ReWear",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Floral Print", "Black", "Navy"],
      isNew: true,
      isSale: false,
      description: "Elegant floral dress with flowing silhouette. Perfect for garden parties and summer events.",
      details: ["Viscose blend", "Floral print", "A-line cut", "Hand wash recommended", "Made in India"],
      rating: 4.6,
      reviewCount: 87
    },
    {
      id: 14,
      name: "Winter Scarf",
      price: 600,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "accessories",
      subcategory: "scarves",
      brand: "ReWear",
      sizes: ["One Size"],
      colors: ["Red", "Blue", "Gray", "Beige"],
      isNew: false,
      isSale: false,
      description: "Warm winter scarf with soft texture. Perfect accessory for cold weather styling.",
      details: ["Wool blend", "Fringe details", "Oversized", "Dry clean recommended", "Made in Nepal"],
      rating: 4.3,
      reviewCount: 42
    },
    {
      id: 15,
      name: "Casual Jeans",
      price: 2200,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "men",
      subcategory: "jeans",
      brand: "ReWear",
      sizes: ["28", "30", "32", "34", "36", "38"],
      colors: ["Dark Blue", "Light Blue", "Black"],
      isNew: false,
      isSale: false,
      description: "Comfortable casual jeans with classic five-pocket styling. Perfect for everyday wear.",
      details: ["100% Cotton denim", "Regular fit", "Five pockets", "Machine washable", "Made in India"],
      rating: 4.5,
      reviewCount: 167
    }
  ], []);

  // Find the specific product by ID
  const product = useMemo(() => {
    const productId = parseInt(id || '1');
    const foundProduct = allProducts.find(p => p.id === productId);
    
    if (!foundProduct) return null;

    // Convert colors to objects with name and code
    const colorMap = {
      'Black': '#000000',
      'Navy': '#1a365d',
      'Cream': '#faf5f5',
      'White': '#ffffff',
      'Gray': '#6b7280',
      'Charcoal': '#374151',
      'Camel': '#d2b48c',
      'Brown': '#8b4513',
      'Tan': '#d2691e',
      'Light Blue': '#87ceeb',
      'Dark Blue': '#00008b',
      'Red': '#dc2626',
      'Blue': '#2563eb',
      'Green': '#16a34a',
      'Pink': '#ec4899',
      'Tortoise': '#8b4513',
      'Gold': '#ffd700',
      'Beige': '#f5f5dc',
      'Floral Print': '#ec4899'
    };

    return {
      ...foundProduct,
      colors: foundProduct.colors.map(color => ({
        name: color,
        code: colorMap[color] || '#6b7280'
      })),
      images: [
        foundProduct.image,
        foundProduct.image.replace('w=600', 'w=800'),
        foundProduct.image.replace('crop&w=600', 'crop&w=800&h=1000'),
        foundProduct.image
      ],
      inStock: true
    };
  }, [id, allProducts]);

  // Related products - show products from same category
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return allProducts
      .filter(p => p.id !== product.id && p.category === product.category)
      .slice(0, 3);
  }, [allProducts, product]);

  // Scroll to top when component mounts or product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    
    if (!product) {
      alert('Product not found');
      return;
    }
    
    // Create swap request
    addSwapRequest({
      productId: product.id,
      productName: product.name,
      productImage: product.image,
      requestedBy: 'You',
      requestedWith: 'Product Owner', // In a real app, this would be the actual owner
      status: 'pending'
    });
    
    alert('Swap request submitted successfully!');
    console.log('Swap request created for:', { 
      productId: product.id, 
      productName: product.name,
      size: selectedSize, 
      color: selectedColor, 
      quantity 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-black transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-black">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 group">
              <img
                src={product.images[currentImage]}
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
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`aspect-square overflow-hidden border-2 transition-colors ${
                    currentImage === index ? 'border-black' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 mb-4">{product.brand}</p>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? 'text-black fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-black">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">₹{product.originalPrice}</span>
                )}
                {product.isSale && (
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                    Save ₹{product.originalPrice - product.price}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-semibold text-black mb-3">
                Color: {selectedColor}
              </h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === color.name
                        ? 'border-black ring-2 ring-black ring-offset-2'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: color.code }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-sm font-semibold text-black mb-3">
                Size: {selectedSize}
              </h3>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-4 border text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-gray-200 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <Link
                to="/size-guide"
                className="text-sm text-gray-600 hover:text-black transition-colors underline mt-2 inline-block"
              >
                Size Guide
              </Link>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-sm font-semibold text-black mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-200">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-50 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-50 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-black text-white py-4 px-8 text-lg font-medium hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transform hover:scale-[1.02] transition-all duration-200"
                disabled={!product.inStock}
              >
                {product.inStock ? 'Request Swap' : 'Out of Stock'}
              </button>

              <div className="flex space-x-4">
                <button className="flex-1 flex items-center justify-center space-x-2 py-3 border border-gray-200 hover:border-black transition-all duration-200 hover:bg-gray-50 transform hover:scale-[1.02]">
                  <Heart className="h-5 w-5" />
                  <span>Add to Wishlist</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 py-3 border border-gray-200 hover:border-black transition-all duration-200 hover:bg-gray-50 transform hover:scale-[1.02]">
                  <Share2 className="h-5 w-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <Truck className="h-5 w-5 text-gray-600" />
                <span className="text-sm text-gray-600">Free shipping on orders over ₹5000</span>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="h-5 w-5 text-gray-600" />
                <span className="text-sm text-gray-600">30-day returns</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-gray-600" />
                <span className="text-sm text-gray-600">Secure payment</span>
              </div>
            </div>

            {/* Product Details */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-black mb-3">Product Details</h3>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    • {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-black mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
