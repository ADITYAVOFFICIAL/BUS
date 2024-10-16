import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-6xl font-bold text-blue-700">404</h1>
        <p className="mt-4 text-2xl font-semibold text-gray-800">Oops! Not Found</p>
        <p className="mt-2 text-sm text-gray-600">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;