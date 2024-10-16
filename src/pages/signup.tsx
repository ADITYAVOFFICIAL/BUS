import React from 'react';
import Link from 'next/link';
const Signup: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 md:p-8 bg-white rounded-lg shadow-md mx-4 sm:mx-6 md:mx-0">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Create an Account</h2>
        
        <form className="mt-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
            <input 
              type="email" 
              id="email" 
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" 
              placeholder="Enter your email"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" 
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">Confirm Password</label>
            <input 
              type="password" 
              id="confirmPassword" 
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" 
              placeholder="Confirm your password"
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account? <Link href="/login" className="text-blue-600 hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
