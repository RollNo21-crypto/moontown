import { motion } from 'framer-motion';
import { useState } from 'react';
import { GoogleButton } from './auth/GoogleButton';
import { EmailForm } from './auth/EmailForm';
import { useAuthStore } from '../store/authStore';
import { useNavigationStore } from '../store/navigationStore';
import { ADMIN_CREDENTIALS } from './admin/AdminSidebar';

export function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const { user } = useAuthStore();
  const { setPage } = useNavigationStore();

  const handleAdminLogin = async (email: string, password: string) => {
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      setPage('admin-dashboard');
    }
  };

  if (user) {
    return (
      <div className="max-w-md mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-lg shadow-lg text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Welcome, {user.fullName || user.email}!</h2>
          <p className="text-gray-600 mb-6">You are successfully logged in.</p>
          <button
            onClick={() => useAuthStore.getState().signOut()}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Sign Out
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-lg shadow-lg"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-gray-600">
            {isLogin
              ? 'Sign in to access your account'
              : 'Sign up to start booking theaters'}
          </p>
        </div>

        <div className="space-y-6">
          <GoogleButton />

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <EmailForm mode={isLogin ? 'signin' : 'signup'} onAdminLogin={handleAdminLogin} />

          <div className="text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}