
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, Shield } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  const handleAdminLogin = () => {
    // Navigate to admin panel
    navigate('/admin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 animate-fade-in">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Welcome back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to your account
          </p>
        </div>
        <form className="mt-8 space-y-6 bg-white p-8 rounded-xl shadow-lg" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                placeholder="Email address"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                className="pl-10 pr-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-200 hover:scale-105"
          >
            Sign in
          </button>

          <div className="flex items-center justify-between">
            <Link to="/forgot-password" className="text-sm text-gray-600 hover:text-black transition-colors">
              Forgot your password?
            </Link>
            <Link to="/signup" className="text-sm text-black hover:underline">
              Create account
            </Link>
          </div>
        </form>

        {/* Admin Login Section */}
        <div className="mt-6 p-4 bg-gray-900 rounded-xl border-2 border-gray-700">
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <div className="p-2 bg-gray-700 rounded-full">
                <Shield className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Admin Access</h3>
            <p className="text-gray-300 text-sm mb-4">
              Administrative portal for system management
            </p>
            <button
              onClick={handleAdminLogin}
              className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white py-3 px-4 rounded-lg font-medium hover:from-gray-500 hover:to-gray-600 transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Shield className="h-5 w-5" />
              <span>Admin Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
