import React from 'react';

const Header = () => {
  return (
    <header className="gradient-bg text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h1 className="text-2xl font-bold">InterviewPrep Pro</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-purple-200">Features</a>
            <a href="#" className="hover:text-purple-200">How It Works</a>
            <a href="#" className="hover:text-purple-200">Testimonials</a>
          </nav>
          <button className="bg-white text-purple-800 px-4 py-2 rounded-lg font-medium hover:bg-purple-100 transition">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;

