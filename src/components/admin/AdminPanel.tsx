
import React, { useState } from 'react';
import { Search, Filter, Check, X, Eye, Trash2, AlertTriangle } from 'lucide-react';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [searchTerm, setSearchTerm] = useState('');

  const pendingItems = [
    {
      id: 1,
      title: 'Vintage Camera Collection',
      uploader: 'John Doe',
      uploadDate: '2 hours ago',
      category: 'Electronics',
      status: 'pending',
      images: ['/placeholder.svg'],
      flagged: false
    },
    {
      id: 2,
      title: 'Designer Handbag',
      uploader: 'Sarah Wilson',
      uploadDate: '5 hours ago',
      category: 'Fashion',
      status: 'pending',
      images: ['/placeholder.svg'],
      flagged: true
    },
    {
      id: 3,
      title: 'Art Book Set',
      uploader: 'Mike Johnson',
      uploadDate: '1 day ago',
      category: 'Books',
      status: 'pending',
      images: ['/placeholder.svg'],
      flagged: false
    }
  ];

  const stats = [
    { label: 'Pending Review', value: '12', color: 'bg-yellow-100 text-yellow-800' },
    { label: 'Approved Today', value: '8', color: 'bg-green-100 text-green-800' },
    { label: 'Rejected Today', value: '3', color: 'bg-red-100 text-red-800' },
    { label: 'Flagged Items', value: '5', color: 'bg-orange-100 text-orange-800' }
  ];

  const handleApprove = (id: number) => {
    console.log('Approved item:', id);
  };

  const handleReject = (id: number) => {
    console.log('Rejected item:', id);
  };

  const handleDelete = (id: number) => {
    console.log('Deleted item:', id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
              <p className="text-gray-600 mt-1">Manage items and moderate content</p>
            </div>
            <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg text-sm font-medium">
              Admin Access
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white p-6 rounded-xl shadow-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${stat.color}`}>
                  New
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </button>
            </div>
            
            <div className="flex space-x-2">
              {['pending', 'approved', 'rejected', 'flagged'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
                    activeTab === tab
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Items List */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Uploader
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pendingItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          className="h-12 w-12 rounded-lg object-cover"
                          src={item.images[0]}
                          alt={item.title}
                        />
                        <div className="ml-4">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900">
                              {item.title}
                            </div>
                            {item.flagged && (
                              <AlertTriangle className="ml-2 h-4 w-4 text-orange-500" />
                            )}
                          </div>
                          <div className="text-sm text-gray-500">{item.uploadDate}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.uploader}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        item.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        item.status === 'approved' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleApprove(item.id)}
                          className="text-green-600 hover:text-green-800 p-1 rounded transition-colors"
                          title="Approve"
                        >
                          <Check className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleReject(item.id)}
                          className="text-red-600 hover:text-red-800 p-1 rounded transition-colors"
                          title="Reject"
                        >
                          <X className="h-4 w-4" />
                        </button>
                        <button
                          className="text-gray-600 hover:text-gray-800 p-1 rounded transition-colors"
                          title="View Details"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-red-600 hover:text-red-800 p-1 rounded transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
