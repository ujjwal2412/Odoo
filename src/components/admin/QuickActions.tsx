import React, { useState } from 'react';
import { Ban, AlertTriangle, Trash2, User, Shield, MessageSquare, X, Check } from 'lucide-react';

interface QuickActionsProps {
  onBanUser: (userId: string, reason: string, duration: string) => void;
  onWarnUser: (userId: string, message: string) => void;
  onDeleteItem: (itemId: number, reason: string) => void;
  selectedUser?: string;
  selectedItem?: number;
}

const QuickActions: React.FC<QuickActionsProps> = ({
  onBanUser,
  onWarnUser,
  onDeleteItem,
  selectedUser,
  selectedItem
}) => {
  const [showBanDialog, setShowBanDialog] = useState(false);
  const [showWarnDialog, setShowWarnDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [banReason, setBanReason] = useState('');
  const [banDuration, setBanDuration] = useState('7d');
  const [warnMessage, setWarnMessage] = useState('');
  const [deleteReason, setDeleteReason] = useState('');

  const handleBan = () => {
    if (selectedUser && banReason) {
      onBanUser(selectedUser, banReason, banDuration);
      setShowBanDialog(false);
      setBanReason('');
    }
  };

  const handleWarn = () => {
    if (selectedUser && warnMessage) {
      onWarnUser(selectedUser, warnMessage);
      setShowWarnDialog(false);
      setWarnMessage('');
    }
  };

  const handleDelete = () => {
    if (selectedItem && deleteReason) {
      onDeleteItem(selectedItem, deleteReason);
      setShowDeleteDialog(false);
      setDeleteReason('');
    }
  };

  const banDurations = [
    { value: '1h', label: '1 Hour' },
    { value: '24h', label: '24 Hours' },
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: 'permanent', label: 'Permanent' }
  ];

  const quickReasons = [
    'Inappropriate content',
    'Spam',
    'Harassment',
    'Copyright violation',
    'Fake items',
    'Other'
  ];

  return (
    <div className="space-y-6">
      {/* Quick Actions Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => setShowBanDialog(true)}
            disabled={!selectedUser}
            className="flex items-center justify-center space-x-2 px-4 py-3 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Ban className="h-5 w-5 text-red-600" />
            <span className="text-red-700 font-medium">Ban User</span>
          </button>
          
          <button
            onClick={() => setShowWarnDialog(true)}
            disabled={!selectedUser}
            className="flex items-center justify-center space-x-2 px-4 py-3 bg-yellow-50 border border-yellow-200 rounded-lg hover:bg-yellow-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            <span className="text-yellow-700 font-medium">Warn User</span>
          </button>
          
          <button
            onClick={() => setShowDeleteDialog(true)}
            disabled={!selectedItem}
            className="flex items-center justify-center space-x-2 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Trash2 className="h-5 w-5 text-gray-600" />
            <span className="text-gray-700 font-medium">Delete Item</span>
          </button>
        </div>

        {(!selectedUser && !selectedItem) && (
          <p className="text-sm text-gray-500 mt-4 text-center">
            Select a user or item to perform quick actions
          </p>
        )}
      </div>

      {/* Ban User Dialog */}
      {showBanDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Ban User</h3>
              <button
                onClick={() => setShowBanDialog(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  User: {selectedUser}
                </label>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration
                </label>
                <select
                  value={banDuration}
                  onChange={(e) => setBanDuration(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  {banDurations.map(duration => (
                    <option key={duration.value} value={duration.value}>
                      {duration.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reason
                </label>
                <select
                  value={banReason}
                  onChange={(e) => setBanReason(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Select a reason</option>
                  {quickReasons.map(reason => (
                    <option key={reason} value={reason}>{reason}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowBanDialog(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleBan}
                  disabled={!banReason}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Ban User
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Warn User Dialog */}
      {showWarnDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Warn User</h3>
              <button
                onClick={() => setShowWarnDialog(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  User: {selectedUser}
                </label>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Warning Message
                </label>
                <textarea
                  value={warnMessage}
                  onChange={(e) => setWarnMessage(e.target.value)}
                  placeholder="Enter warning message..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowWarnDialog(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleWarn}
                  disabled={!warnMessage}
                  className="flex-1 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Warning
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Item Dialog */}
      {showDeleteDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Delete Item</h3>
              <button
                onClick={() => setShowDeleteDialog(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Item ID: {selectedItem}
                </label>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for Deletion
                </label>
                <select
                  value={deleteReason}
                  onChange={(e) => setDeleteReason(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                >
                  <option value="">Select a reason</option>
                  {quickReasons.map(reason => (
                    <option key={reason} value={reason}>{reason}</option>
                  ))}
                </select>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                  <span className="text-sm text-red-700">
                    This action cannot be undone. The item will be permanently deleted.
                  </span>
                </div>
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowDeleteDialog(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  disabled={!deleteReason}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Delete Item
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recent Actions */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Actions</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
            <Ban className="h-5 w-5 text-red-600" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">User banned</p>
              <p className="text-xs text-gray-500">john_doe123 • 2 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Warning sent</p>
              <p className="text-xs text-gray-500">spam_user456 • 4 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <Trash2 className="h-5 w-5 text-gray-600" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Item deleted</p>
              <p className="text-xs text-gray-500">Item #1234 • 6 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActions; 