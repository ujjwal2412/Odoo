import React, { useState, useMemo } from 'react';
import { Search, Filter, Check, X, Eye, Trash2, AlertTriangle, MoreVertical, Calendar, User, Tag } from 'lucide-react';

interface Item {
  id: number;
  title: string;
  uploader: string;
  uploadDate: string;
  category: string;
  status: 'pending' | 'approved' | 'rejected' | 'flagged';
  images: string[];
  flagged: boolean;
  description: string;
  price?: number;
  location?: string;
  reportCount?: number;
}

interface ModerationTableProps {
  items: Item[];
  onApprove: (id: number) => void;
  onReject: (id: number) => void;
  onDelete: (id: number) => void;
  onViewDetails: (id: number) => void;
}

const ModerationTable: React.FC<ModerationTableProps> = ({
  items,
  onApprove,
  onReject,
  onDelete,
  onViewDetails
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('uploadDate');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const categories = useMemo(() => {
    const cats = [...new Set(items.map(item => item.category))];
    return cats.sort();
  }, [items]);

  const filteredAndSortedItems = useMemo(() => {
    let filtered = items.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.uploader.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
      const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
      
      return matchesSearch && matchesStatus && matchesCategory;
    });

    // Sort items
    filtered.sort((a, b) => {
      let aValue: any = a[sortBy as keyof Item];
      let bValue: any = b[sortBy as keyof Item];
      
      if (sortBy === 'uploadDate') {
        aValue = new Date(aValue).getTime();
        bValue = new Date(bValue).getTime();
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [items, searchTerm, statusFilter, categoryFilter, sortBy, sortOrder]);

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'flagged': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Filters and Search */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search items, uploaders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent w-64"
              />
            </div>
            
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="flagged">Flagged</option>
            </select>

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          <div className="text-sm text-gray-600">
            {filteredAndSortedItems.length} of {items.length} items
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Item
              </th>
              <th 
                className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('uploader')}
              >
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>Uploader</span>
                </div>
              </th>
              <th 
                className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('category')}
              >
                <div className="flex items-center space-x-1">
                  <Tag className="h-4 w-4" />
                  <span>Category</span>
                </div>
              </th>
              <th 
                className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('uploadDate')}
              >
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Upload Date</span>
                </div>
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
            {filteredAndSortedItems.map((item) => (
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
                        <div className="text-sm font-medium text-gray-900 max-w-xs truncate">
                          {item.title}
                        </div>
                        {item.flagged && (
                          <AlertTriangle className="ml-2 h-4 w-4 text-orange-500" />
                        )}
                        {item.reportCount && item.reportCount > 0 && (
                          <span className="ml-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                            {item.reportCount} reports
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-500 max-w-xs truncate">
                        {item.description}
                      </div>
                      {item.price && (
                        <div className="text-sm text-green-600 font-medium">
                          ${item.price}
                        </div>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.uploader}</div>
                  {item.location && (
                    <div className="text-sm text-gray-500">{item.location}</div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.category}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{item.uploadDate}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onApprove(item.id)}
                      className="text-green-600 hover:text-green-800 p-2 rounded-lg hover:bg-green-50 transition-colors"
                      title="Approve"
                    >
                      <Check className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => onReject(item.id)}
                      className="text-red-600 hover:text-red-800 p-2 rounded-lg hover:bg-red-50 transition-colors"
                      title="Reject"
                    >
                      <X className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => onViewDetails(item.id)}
                      className="text-blue-600 hover:text-blue-800 p-2 rounded-lg hover:bg-blue-50 transition-colors"
                      title="View Details"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => onDelete(item.id)}
                      className="text-red-600 hover:text-red-800 p-2 rounded-lg hover:bg-red-50 transition-colors"
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
        
        {filteredAndSortedItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500">No items found matching your criteria</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModerationTable; 