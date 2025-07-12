import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Loader2 } from 'lucide-react';

interface AdminRouteGuardProps {
  children: React.ReactNode;
}

const AdminRouteGuard: React.FC<AdminRouteGuardProps> = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const adminToken = localStorage.getItem('adminToken');
      const adminUser = localStorage.getItem('adminUser');

      if (!adminToken || !adminUser) {
        navigate('/admin/login');
        return;
      }

      try {
        const userData = JSON.parse(adminUser);
        if (userData.role === 'admin') {
          setIsAuthorized(true);
        } else {
          navigate('/admin/login');
        }
      } catch (error) {
        navigate('/admin/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="h-8 w-8 text-gray-400 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Verifying admin access...</p>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return null;
  }

  return <>{children}</>;
};

export default AdminRouteGuard; 