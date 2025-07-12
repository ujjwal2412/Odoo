import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, Shield, AlertTriangle } from 'lucide-react';

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    adminCode: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate admin authentication
    try {
      // In a real app, this would be an API call
      if (formData.email === 'admin@example.com' && formData.password === 'admin123' && formData.adminCode === 'ADMIN2024') {
        // Store admin session
        localStorage.setItem('adminToken', 'admin-session-token');
        localStorage.setItem('adminUser', JSON.stringify({
          email: formData.email,
          role: 'admin',
          permissions: ['moderate', 'ban', 'delete', 'reports']
        }));
        navigate('/admin/dashboard');
      } else {
        setError('Invalid admin credentials. Please check your email, password, and admin code.');
      }
    } catch (err) {
      setError('Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 animate-fade-in">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Admin Access
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Elevated privileges required
          </p>
        </div>

        <form className="mt-8 space-y-6 bg-white p-8 rounded-xl shadow-lg border border-red-100" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                placeholder="Admin email"
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                className="pl-10 pr-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                placeholder="Admin password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            <div className="relative">
              <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                required
                value={formData.adminCode}
                onChange={(e) => setFormData(prev => ({ ...prev, adminCode: e.target.value }))}
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                placeholder="Admin security code"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Authenticating...' : 'Access Admin Panel'}
          </button>

          <div className="text-center">
            <Link to="/login" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
              ← Back to regular login
            </Link>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-xs text-yellow-800 text-center">
              <strong>Demo Credentials:</strong><br />
              Email: admin@example.com<br />
              Password: admin123<br />
              Code: ADMIN2024
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin; 