
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share2, MapPin, Clock, User, Repeat, Coins, ChevronLeft, ChevronRight } from 'lucide-react';

const ItemDetail = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const item = {
    id: 1,
    title: "Vintage Leather Jacket",
    description: "Beautiful vintage leather jacket in excellent condition. Made from genuine leather with a classic design that never goes out of style. Perfect for both casual and formal occasions. Size M, fits true to size. Minor wear on the sleeves but adds to the vintage character.",
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: "Fashion",
    type: "Clothing",
    size: "M",
    condition: "Excellent",
    tags: ["vintage", "leather", "jacket", "fashion"],
    points: 150,
    uploader: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg",
      rating: 4.8,
      swaps: 23,
      location: "New York, NY"
    },
    availability: "available",
    views: 245,
    likes: 18,
    uploadDate: "3 days ago"
  };

  const relatedItems = [
    { id: 2, title: "Denim Jacket", image: "/placeholder.svg", points: 120 },
    { id: 3, title: "Wool Coat", image: "/placeholder.svg", points: 200 },
    { id: 4, title: "Blazer", image: "/placeholder.svg", points: 100 },
    { id: 5, title: "Cardigan", image: "/placeholder.svg", points: 80 }
  ];

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/items" className="hover:text-black transition-colors">Items</Link>
          <span>/</span>
          <Link to={`/items?category=${item.category}`} className="hover:text-black transition-colors">{item.category}</Link>
          <span>/</span>
          <span className="text-gray-900">{item.title}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src={item.images[currentImage]}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {item.images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImage(prev => prev === 0 ? item.images.length - 1 : prev - 1)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setCurrentImage(prev => prev === item.images.length - 1 ? 0 : prev + 1)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
            {item.images.length > 1 && (
              <div className="flex space-x-2">
                {item.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      currentImage === index ? 'border-black' : 'border-gray-200'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{item.title}</h1>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-2 rounded-full transition-colors ${
                      isLiked ? 'bg-red-50 text-red-600' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-2 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {item.uploadDate}
                </span>
                <span>•</span>
                <span>{item.views} views</span>
                <span>•</span>
                <span>{item.likes} likes</span>
              </div>

              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Coins className="h-5 w-5 text-yellow-600" />
                  <span className="text-2xl font-bold text-gray-900">{item.points} points</span>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  item.availability === 'available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {item.availability}
                </div>
              </div>
            </div>

            {/* Item Specs */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Item Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Category:</span>
                  <span className="ml-2 font-medium">{item.category}</span>
                </div>
                <div>
                  <span className="text-gray-600">Type:</span>
                  <span className="ml-2 font-medium">{item.type}</span>
                </div>
                <div>
                  <span className="text-gray-600">Size:</span>
                  <span className="ml-2 font-medium">{item.size}</span>
                </div>
                <div>
                  <span className="text-gray-600">Condition:</span>
                  <span className="ml-2 font-medium">{item.condition}</span>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-gray-600 text-sm">Tags:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-white rounded-full text-xs text-gray-700">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>

            {/* Uploader Info */}
            <div className="border rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={item.uploader.avatar}
                  alt={item.uploader.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{item.uploader.name}</h4>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>⭐ {item.uploader.rating}</span>
                    <span className="mx-2">•</span>
                    <span>{item.uploader.swaps} swaps</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                {item.uploader.location}
              </div>
              <Link
                to={`/profile/${item.uploader.name}`}
                className="text-black hover:underline text-sm"
              >
                View Profile
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center">
                <Repeat className="mr-2 h-5 w-5" />
                Request Swap
              </button>
              <button className="w-full border-2 border-black text-black py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors flex items-center justify-center">
                <Coins className="mr-2 h-5 w-5" />
                Redeem with Points
              </button>
            </div>
          </div>
        </div>

        {/* Related Items */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Similar Items</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedItems.map((relatedItem) => (
              <Link
                key={relatedItem.id}
                to={`/item/${relatedItem.id}`}
                className="group"
              >
                <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden mb-3">
                  <img
                    src={relatedItem.image}
                    alt={relatedItem.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-black transition-colors">
                  {relatedItem.title}
                </h3>
                <p className="text-gray-600">{relatedItem.points} points</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItemDetail;
