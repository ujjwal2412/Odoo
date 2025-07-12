import React, { useState, useMemo } from 'react';
import { Search, Filter, AlertTriangle, User, Flag, Clock, Eye, Ban, MessageSquare, Shield } from 'lucide-react';

interface Report {
  id: number;
  type: 'inappropriate' | 'spam' | 'fake' | 'copyright' | 'other';
  status: 'open' | 'investigating' | 'resolved' | 'dismissed';
  reporter: string;
  reportedUser?: string;
  reportedItem?: string;
  description: string;
  reportDate: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  evidence?: string[];
  adminNotes?: string;
  resolution?: string;
  resolvedBy?: string;
  resolvedDate?: string;
}

interface ReportsProps {
  reports: Report[];
  onUpdateStatus: (id: number, status: string) => void;
  onAddNote: (id: number, note: string) => void;
  onBanUser: (userId: string) => void;
  onViewDetails: (id: number) => void;
}

const Reports: React.FC<ReportsProps> = ({
  reports,
  onUpdateStatus,
  onAddNote,
  onBanUser,
  onViewDetails
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'reports' | 'abuse-log'>('reports');

  const filteredReports = useMemo(() => {
    return reports.filter(report => {
      const matchesSearch = report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          report.reporter.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (report.reportedUser && report.reportedUser.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesStatus = statusFilter === 'all' || report.status === statusFilter;
      const matchesType = typeFilter === 'all' || report.type === typeFilter;
      const matchesPriority = priorityFilter === 'all' || report.priority === priorityFilter;
      
      return matchesSearch && matchesStatus && matchesType && matchesPriority;
    });
  }, [reports, searchTerm, statusFilter, typeFilter, priorityFilter]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-red-100 text-red-800';
      case 'investigating': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'dismissed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'inappropriate': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'spam': return <Flag className="h-4 w-4 text-orange-500" />;
      case 'fake': return <Shield className="h-4 w-4 text-yellow-500" />;
      case 'copyright': return <MessageSquare className="h-4 w-4 text-blue-500" />;
      default: return <Flag className="h-4 w-4 text-gray-500" />;
    }
  };

  const stats = {
    total: reports.length,
    open: reports.filter(r => r.status === 'open').length,
    urgent: reports.filter(r => r.priority === 'urgent').length,
    resolved: reports.filter(r => r.status === 'resolved').length
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Reports</p>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            </div>
            <Flag className="h-8 w-8 text-gray-400" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Open</p>
              <p className="text-2xl font-bold text-red-600">{stats.open}</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-400" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Urgent</p>
              <p className="text-2xl font-bold text-orange-600">{stats.urgent}</p>
            </div>
            <Clock className="h-8 w-8 text-orange-400" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Resolved</p>
              <p className="text-2xl font-bold text-green-600">{stats.resolved}</p>
            </div>
            <Shield className="h-8 w-8 text-green-400" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'reports', label: 'User Reports', count: filteredReports.length },
              { id: 'abuse-log', label: 'Abuse Log', count: reports.filter(r => r.status === 'resolved').length }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'reports' | 'abuse-log')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-red-500 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
                <span className="ml-2 bg-gray-100 text-gray-900 py-0.5 px-2.5 rounded-full text-xs">
                  {tab.count}
                </span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Filters */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search reports..."
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
                <option value="open">Open</option>
                <option value="investigating">Investigating</option>
                <option value="resolved">Resolved</option>
                <option value="dismissed">Dismissed</option>
              </select>

              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="inappropriate">Inappropriate</option>
                <option value="spam">Spam</option>
                <option value="fake">Fake</option>
                <option value="copyright">Copyright</option>
                <option value="other">Other</option>
              </select>

              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="all">All Priorities</option>
                <option value="urgent">Urgent</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>

          {/* Reports List */}
          <div className="space-y-4">
            {filteredReports.map((report) => (
              <div key={report.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      {getTypeIcon(report.type)}
                      <span className="text-sm font-medium text-gray-900 capitalize">
                        {report.type} Report
                      </span>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getPriorityColor(report.priority)}`}>
                        {report.priority}
                      </span>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(report.status)}`}>
                        {report.status}
                      </span>
                    </div>
                    
                    <div className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">Reporter:</span> {report.reporter}
                      {report.reportedUser && (
                        <>
                          <span className="mx-2">•</span>
                          <span className="font-medium">Reported User:</span> {report.reportedUser}
                        </>
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-700 mb-3">{report.description}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Reported on {report.reportDate}</span>
                      {report.resolvedBy && (
                        <span>Resolved by {report.resolvedBy} on {report.resolvedDate}</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-4">
                    <button
                      onClick={() => onViewDetails(report.id)}
                      className="text-blue-600 hover:text-blue-800 p-2 rounded-lg hover:bg-blue-50 transition-colors"
                      title="View Details"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    {report.reportedUser && (
                      <button
                        onClick={() => onBanUser(report.reportedUser!)}
                        className="text-red-600 hover:text-red-800 p-2 rounded-lg hover:bg-red-50 transition-colors"
                        title="Ban User"
                      >
                        <Ban className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
                
                {report.adminNotes && (
                  <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <span className="font-medium">Admin Notes:</span> {report.adminNotes}
                    </p>
                  </div>
                )}
                
                {report.resolution && (
                  <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-800">
                      <span className="font-medium">Resolution:</span> {report.resolution}
                    </p>
                  </div>
                )}
              </div>
            ))}
            
            {filteredReports.length === 0 && (
              <div className="text-center py-12">
                <Flag className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No reports found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  No reports match your current filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports; 