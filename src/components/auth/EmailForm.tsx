import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useAuthStore } from '../../store/authStore';
import { useNavigationStore } from '../../store/navigationStore';

interface EmailFormProps {
  mode: 'signin' | 'signup';
  onAdminLogin?: (email: string, password: string) => void;
}

export function EmailForm({ mode, onAdminLogin }: EmailFormProps) {
  const { signInWithEmail, signUpWithEmail } = useAuthStore();
  const { setPage } = useNavigationStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (mode === 'signin') {
        if (onAdminLogin) {
          await onAdminLogin(email, password);
        }
        await signInWithEmail(email, password);
        toast.success('Signed in successfully!');
        setPage('dashboard');
      } else {
        await signUpWithEmail(email, password, fullName);
        toast.success('Account created successfully!');
        setPage('dashboard');
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Authentication failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {mode === 'signup' && (
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          required
          minLength={6}
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        {mode === 'signin' ? 'Sign In' : 'Sign Up'}
      </motion.button>
    </form>
  );
}