
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Package, Repeat, Plus, Coins, TrendingUp, Calendar, Clock } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Points Balance', value: '1,250', icon: <Coins className="h-6 w-6" /> },
    { label: 'Items Listed', value: '8', icon: <Package className="h-6 w-6" /> },
    { label: 'Successful Swaps', value: '15', icon: <Repeat className="h-6 w-6" /> },
    { label: 'This Month', value: '+3', icon: <TrendingUp className="h-6 w-6" /> }
  ];

  const recentItems = [
    { id: 1, title: 'Vintage Camera', status: 'active', image: '/placeholder.svg', views: 24 },
    { id: 2, title: 'Designer Jacket', status: 'swapped', image: '/placeholder.svg', views: 18 },
    { id: 3, title: 'Art Book Collection', status: 'pending', image: '/placeholder.svg', views: 12 }
  ];

  const recentSwaps = [
    { id: 1, item: 'Bluetooth Speaker', with: 'Sarah M.', date: '2 days ago', type: 'completed' },
    { id: 2, item: 'Yoga Mat', with: 'John D.', date: '1 week ago', type: 'ongoing' },
    { id: 3, item: 'Coffee Maker', with: 'Emma L.', date: '2 weeks ago', type: 'completed' }
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
              {recentItems.map((item) => (
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
              {recentSwaps.map((swap) => (
                <div key={swap.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div>
                    <h3 className="font-medium text-gray-900">{swap.item}</h3>
                    <p className="text-sm text-gray-600">with {swap.with}</p>
                  </div>
                  <div className="text-right">
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      swap.type === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {swap.type}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{swap.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
