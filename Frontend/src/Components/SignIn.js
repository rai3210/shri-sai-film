import React, { useState } from 'react';
import { Film, Lock, Mail } from 'lucide-react';

const SignIn = ({ setCurrentPage }) => {
  const [signInData, setSignInData] = useState({ email: '', password: '' });
  const [signInErrors, setSignInErrors] = useState({});

  const handleSignInChange = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!signInData.email) errors.email = 'Email is required.';
    if (!signInData.password) errors.password = 'Password is required.';

    if (Object.keys(errors).length > 0) {
      setSignInErrors(errors);
      return;
    }

    console.log("Signing in with:", signInData);
    alert('Sign in successful! (This is a mock login)');
    setCurrentPage('home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 pt-16 md:pt-0">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8">
        <div className="flex flex-col items-center">
          <Film className="h-10 w-10 text-blue-800 mb-4" />
          <h3 className="text-4xl font-bold text-gray-900 text-center mb-6">Sign In</h3>
        </div>

        <form onSubmit={handleSignInSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                name="email"
                value={signInData.email}
                onChange={handleSignInChange}
                className={`w-full pl-10 pr-3 py-2 rounded-lg border ${signInErrors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 bg-gray-50`}
                placeholder="Email address"
                required
              />
              {signInErrors.email && <p className="text-red-500 text-sm mt-1">{signInErrors.email}</p>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="password"
                name="password"
                value={signInData.password}
                onChange={handleSignInChange}
                className={`w-full pl-10 pr-3 py-2 rounded-lg border ${signInErrors.password ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 bg-gray-50`}
                placeholder="Password"
                required
              />
              {signInErrors.password && <p className="text-red-500 text-sm mt-1">{signInErrors.password}</p>}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button onClick={() => setCurrentPage('signUp')} className="text-blue-800 hover:underline font-semibold">
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
