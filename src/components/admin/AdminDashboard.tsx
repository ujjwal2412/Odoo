import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, 
  LogOut, 
  Users, 
  FileText, 
  Settings, 
  BarChart3, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Flag,
  TrendingUp,
  Activity
} from 'lucide-react';
import ModerationTable from './ModerationTable';
import Reports from './Reports';
import QuickActions from './QuickActions';

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

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'moderation' | 'reports' | 'quick-actions'>('moderation');
  const [selectedUser, setSelectedUser] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<number | undefined>();
  const [adminUser, setAdminUser] = useState<any>(null);

  // Mock data
  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      title: 'Vintage Camera Collection',
      uploader: 'John Doe',
      uploadDate: '2 hours ago',
      category: 'Electronics',
      status: 'pending',
      images: ['/placeholder.svg'],
      flagged: false,
      description: 'Beautiful vintage camera collection from the 1960s',
      price: 250,
      location: 'New York, NY'
    },
    {
      id: 2,
      title: 'Designer Handbag',
      uploader: 'Sarah Wilson',
      uploadDate: '5 hours ago',
      category: 'Fashion',
      status: 'pending',
      images: ['/placeholder.svg'],
      flagged: true,
      description: 'Authentic designer handbag in excellent condition',
      price: 150,
      location: 'Los Angeles, CA',
      reportCount: 3
    },
    {
      id: 3,
      title: 'Art Book Set',
      uploader: 'Mike Johnson',
      uploadDate: '1 day ago',
      category: 'Books',
      status: 'pending',
      images: ['/placeholder.svg'],
      flagged: false,
      description: 'Complete set of art history books',
      price: 75,
      location: 'Chicago, IL'
    }
  ]);

  const [reports, setReports] = useState<Report[]>([
    {
      id: 1,
      type: 'inappropriate',
      status: 'open',
      reporter: 'user123',
      reportedUser: 'spam_user456',
      description: 'This user is posting inappropriate content repeatedly',
      reportDate: '1 hour ago',
      priority: 'high'
    },
    {
      id: 2,
      type: 'spam',
      status: 'investigating',
      reporter: 'moderator1',
      reportedUser: 'fake_seller789',
      description: 'Multiple spam posts detected',
      reportDate: '3 hours ago',
      priority: 'urgent'
    },
    {
      id: 3,
      type: 'copyright',
      status: 'resolved',
      reporter: 'copyright_holder',
      reportedUser: 'infringer_user',
      description: 'Copyright violation - unauthorized use of images',
      reportDate: '1 day ago',
      priority: 'medium',
      resolution: 'Content removed, user warned',
      resolvedBy: 'admin',
      resolvedDate: '12 hours ago'
    }
  ]);

  useEffect(() => {
    // Check if admin is logged in
    const adminToken = localStorage.getItem('adminToken');
    const adminUserData = localStorage.getItem('adminUser');
    
    if (!adminToken || !adminUserData) {
      navigate('/admin/login');
      return;
    }

    try {
      setAdminUser(JSON.parse(adminUserData));
    } catch (error) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  const handleApprove = (id: number) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, status: 'approved' as const } : item
    ));
  };

  const handleReject = (id: number) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, status: 'rejected' as const } : item
    ));
  };

  const handleDelete = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const handleViewDetails = (id: number) => {
    console.log('View details for item:', id);
  };

  const handleUpdateReportStatus = (id: number, status: string) => {
    setReports(prev => prev.map(report => 
      report.id === id ? { ...report, status: status as any } : report
    ));
  };

  const handleAddReportNote = (id: number, note: string) => {
    setReports(prev => prev.map(report => 
      report.id === id ? { ...report, adminNotes: note } : report
    ));
  };

  const handleBanUser = (userId: string, reason: string, duration: string) => {
    console.log('Banning user:', userId, 'for', duration, 'reason:', reason);
    // In a real app, this would make an API call
  };

  const handleWarnUser = (userId: string, message: string) => {
    console.log('Warning user:', userId, 'message:', message);
    // In a real app, this would make an API call
  };

  const handleDeleteItem = (itemId: number, reason: string) => {
    console.log('Deleting item:', itemId, 'reason:', reason);
    setItems(prev => prev.filter(item => item.id !== itemId));
  };

  const stats = {
    pendingItems: items.filter(item => item.status === 'pending').length,
    flaggedItems: items.filter(item => item.flagged).length,
    openReports: reports.filter(report => report.status === 'open').length,
    urgentReports: reports.filter(report => report.priority === 'urgent').length
  };

  if (!adminUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome back, {adminUser.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Items</p>
                <p className="text-3xl font-bold text-yellow-600 mt-2">{stats.pendingItems}</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Flagged Items</p>
                <p className="text-3xl font-bold text-orange-600 mt-2">{stats.flaggedItems}</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <Flag className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Open Reports</p>
                <p className="text-3xl font-bold text-red-600 mt-2">{stats.openReports}</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Urgent Reports</p>
                <p className="text-3xl font-bold text-purple-600 mt-2">{stats.urgentReports}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Activity className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm border mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'moderation', label: 'Moderation', icon: CheckCircle },
                { id: 'reports', label: 'Reports', icon: FileText },
                { id: 'quick-actions', label: 'Quick Actions', icon: Settings }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                      activeTab === tab.id
                        ? 'border-red-500 text-red-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'moderation' && (
              <ModerationTable
                items={items}
                onApprove={handleApprove}
                onReject={handleReject}
                onDelete={handleDelete}
                onViewDetails={handleViewDetails}
              />
            )}

            {activeTab === 'reports' && (
              <Reports
                reports={reports}
                onUpdateStatus={handleUpdateReportStatus}
                onAddNote={handleAddReportNote}
                onBanUser={handleBanUser}
                onViewDetails={handleViewDetails}
              />
            )}

            {activeTab === 'quick-actions' && (
              <QuickActions
                onBanUser={handleBanUser}
                onWarnUser={handleWarnUser}
                onDeleteItem={handleDeleteItem}
                selectedUser={selectedUser}
                selectedItem={selectedItem}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 