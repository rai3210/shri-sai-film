// Register.jsx
import React, { useState } from 'react';
// No need to import './Register.css' anymore

const Register = () => {
  // State to hold the form input values
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // State for any error messages (e.g., password mismatch, registration failed)
  const [errors, setErrors] = useState({});

  // State for success message
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for the current field as user types
    if (errors[name]) {
      setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    setErrors({}); // Clear previous errors
    setSuccessMessage(''); // Clear previous success message

    const newErrors = {};

    // Basic validation
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Stop submission if there are errors
    }

    // If validation passes, proceed with registration logic
    console.log('Form Data Submitted:', formData);

    // In a real application, you would send this data to a backend API
    try {
      // Example of an API call (you'll need to replace this with your actual API endpoint)
      // const response = await fetch('/api/register', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     username: formData.username,
      //     email: formData.email,
      //     password: formData.password,
      //   }),
      // });

      // const data = await response.json();

      // if (response.ok) {
      //   setSuccessMessage('Registration successful! Please log in.');
      //   // Optionally, redirect to login page or home page
      //   // history.push('/login'); // If using react-router-dom v5
      //   // navigate('/login'); // If using react-router-dom v6
      //   setFormData({ username: '', email: '', password: '', confirmPassword: '' }); // Clear form
      // } else {
      //   setErrors({ form: data.message || 'Registration failed. Please try again.' });
      // }

      // For demonstration, simulate a successful registration
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call delay
      setSuccessMessage('Registration successful! Please log in.');
      setFormData({ username: '', email: '', password: '', confirmPassword: '' }); // Clear form
    } catch (error) {
      console.error('Error during registration:', error);
      setErrors({ form: 'An unexpected error occurred. Please try again later.' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Register</h2>
        {successMessage && (
          <p className="bg-green-100 text-green-700 border border-green-400 px-4 py-3 rounded-md mb-4 text-center">
            {successMessage}
          </p>
        )}
        {errors.form && (
          <p className="bg-red-100 text-red-700 border border-red-400 px-4 py-3 rounded-md mb-4 text-center">
            {errors.form}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            />
            {errors.username && <p className="mt-1 text-sm text-red-600">{errors.username}</p>}
          </div>

          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            />
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
          </div>

          <div className="relative">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            />
            {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;