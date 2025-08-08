import React, { useState } from 'react';
import { Film, User, Lock, Mail } from 'lucide-react';

const SignUp = ({ setCurrentPage }) => {
  const [signUpData, setSignUpData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
  const [signUpErrors, setSignUpErrors] = useState({});

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!signUpData.username) errors.username = 'Username is required.';
    if (!signUpData.email) errors.email = 'Email is required.';
    if (!signUpData.password) errors.password = 'Password is required.';
    if (signUpData.password !== signUpData.confirmPassword) errors.confirmPassword = 'Passwords do not match.';

    if (Object.keys(errors).length > 0) {
      setSignUpErrors(errors);
      return;
    }
    
    console.log("Signing up with:", signUpData);
    alert('Sign up successful! (This is a mock registration)');
    setCurrentPage('signIn');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 pt-16 md:pt-0">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8">
        <div className="flex flex-col items-center">
          <Film className="h-10 w-10 text-blue-800 mb-4" />
          <h3 className="text-4xl font-bold text-gray-900 text-center mb-6">Register here</h3>
        </div>

        <form onSubmit={handleSignUpSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="username"
                value={signUpData.username}
                onChange={handleSignUpChange}
                className={`w-full pl-10 pr-3 py-2 rounded-lg border ${signUpErrors.username ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 bg-gray-50`}
                placeholder="Your username"
                required
              />
              {signUpErrors.username && <p className="text-red-500 text-sm mt-1">{signUpErrors.username}</p>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                name="email"
                value={signUpData.email}
                onChange={handleSignUpChange}
                className={`w-full pl-10 pr-3 py-2 rounded-lg border ${signUpErrors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 bg-gray-50`}
                placeholder="your@email.com"
                required
              />
              {signUpErrors.email && <p className="text-red-500 text-sm mt-1">{signUpErrors.email}</p>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="password"
                name="password"
                value={signUpData.password}
                onChange={handleSignUpChange}
                className={`w-full pl-10 pr-3 py-2 rounded-lg border ${signUpErrors.password ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 bg-gray-50`}
                placeholder="Password"
                required
              />
              {signUpErrors.password && <p className="text-red-500 text-sm mt-1">{signUpErrors.password}</p>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="password"
                name="confirmPassword"
                value={signUpData.confirmPassword}
                onChange={handleSignUpChange}
                className={`w-full pl-10 pr-3 py-2 rounded-lg border ${signUpErrors.confirmPassword ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 bg-gray-50`}
                placeholder="Confirm Password"
                required
              />
              {signUpErrors.confirmPassword && <p className="text-red-500 text-sm mt-1">{signUpErrors.confirmPassword}</p>}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
          >
            Create Account
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <button onClick={() => setCurrentPage('signIn')} className="text-blue-800 hover:underline font-semibold">
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;