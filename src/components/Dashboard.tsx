
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Package, Repeat, Plus, Coins, TrendingUp, Calendar, Clock, Search, Settings, Eye, Check, X, Clock3 } from 'lucide-react';
import { useSwap } from '../hooks/useSwapManager';

const Dashboard = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { state, updateSwapStatus } = useSwap();
  const { swapRequests, userItems } = state;

  const handleSwapAction = (swapId: string, action: 'approved' | 'ongoing' | 'rejected') => {
    updateSwapStatus(swapId, action, 'Just now');
  };

  const stats = [
    { label: 'Points Balance', value: '1,250', icon: <Coins className="h-6 w-6" /> },
    { label: 'Items Listed', value: userItems.length.toString(), icon: <Package className="h-6 w-6" /> },
    { label: 'Successful Swaps', value: swapRequests.filter(req => req.status === 'completed').length.toString(), icon: <Repeat className="h-6 w-6" /> },
    { label: 'This Month', value: '+3', icon: <TrendingUp className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your swaps.</p>
          </div>
          <Link
            to="/add-item"
            className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105"
          >
            <Plus className="mr-2 h-5 w-5" />
            Add Item
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
                <div className="text-gray-400">
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Your Items */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Your Items</h2>
              <Link to="/my-items" className="text-black hover:underline text-sm">View All</Link>
            </div>
            <div className="space-y-4">
              {userItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.status === 'active' ? 'bg-green-100 text-green-800' :
                        item.status === 'swapped' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.status}
                      </span>
                      <span>{item.views} views</span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <button className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors">
                      <Search className="h-3 w-3 mr-1" />
                      Look for Swap
                    </button>
                    <button className="inline-flex items-center px-3 py-1 text-xs font-medium text-green-600 bg-green-50 rounded-md hover:bg-green-100 transition-colors">
                      <Coins className="h-3 w-3 mr-1" />
                      Redeem ({item.points} pts)
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Swaps */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Recent Swaps</h2>
              <Link to="/swaps" className="text-black hover:underline text-sm">View All</Link>
            </div>
            <div className="space-y-4">
              {swapRequests.length > 0 ? (
                swapRequests.map((swap) => (
                  <div key={swap.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <img
                        src={swap.productImage}
                        alt={swap.productName}
                        className="w-12 h-12 rounded-lg object-cover border"
                      />
                      <div>
                        <h3 className="font-medium text-gray-900">{swap.productName}</h3>
                        <p className="text-sm text-gray-600">with {swap.requestedWith}</p>
                        <p className="text-xs text-gray-500 mt-1">{swap.requestDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className={`text-xs px-3 py-1 rounded-full font-medium ${
                        swap.status === 'completed' ? 'bg-green-100 text-green-800' :
                        swap.status === 'approved' ? 'bg-blue-100 text-blue-800' :
                        swap.status === 'ongoing' ? 'bg-yellow-100 text-yellow-800' :
                        swap.status === 'pending' ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {swap.status}
                      </div>
                      
                      {/* Action buttons for pending swaps */}
                      {swap.status === 'pending' && (
                        <div className="flex space-x-1">
                          <button
                            onClick={() => handleSwapAction(swap.id, 'approved')}
                            className="inline-flex items-center px-2 py-1 text-xs font-medium text-green-600 bg-green-50 rounded-md hover:bg-green-100 transition-colors"
                            title="Accept"
                          >
                            <Check className="h-3 w-3" />
                          </button>
                          <button
                            onClick={() => handleSwapAction(swap.id, 'ongoing')}
                            className="inline-flex items-center px-2 py-1 text-xs font-medium text-yellow-600 bg-yellow-50 rounded-md hover:bg-yellow-100 transition-colors"
                            title="Mark as Ongoing"
                          >
                            <Clock3 className="h-3 w-3" />
                          </button>
                          <button
                            onClick={() => handleSwapAction(swap.id, 'rejected')}
                            className="inline-flex items-center px-2 py-1 text-xs font-medium text-red-600 bg-red-50 rounded-md hover:bg-red-100 transition-colors"
                            title="Reject"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      )}
                      
                      {/* Action button for approved swaps */}
                      {swap.status === 'approved' && (
                        <button
                          onClick={() => handleSwapAction(swap.id, 'ongoing')}
                          className="inline-flex items-center px-3 py-1 text-xs font-medium text-yellow-600 bg-yellow-50 rounded-md hover:bg-yellow-100 transition-colors"
                        >
                          <Clock3 className="h-3 w-3 mr-1" />
                          Start Swap
                        </button>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Package className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>No swap requests yet</p>
                  <p className="text-sm">Start browsing items to create swap requests!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
