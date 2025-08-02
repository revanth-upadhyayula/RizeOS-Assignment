import React from 'react';

const Landing = () => {
    return (
      <div className="flex flex-col justify-center items-center min-h-[80vh] bg-gradient-to-r from-blue-100 to-white text-center px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Job Network Portal</h1>
        <p className="text-lg text-gray-600 max-w-xl">
          Discover jobs tailored for you. Empowered by AI matching and Web3 payments. Fast. Secure. Smart.
        </p>
        <img src="https://illustrations.popsy.co/work-from-home.svg" alt="job portal illustration" className="mt-8 w-2/3 max-w-md" />
      </div>
    );
  };
  

export default Landing;
