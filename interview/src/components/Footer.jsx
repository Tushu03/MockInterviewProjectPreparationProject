import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-xl font-bold">InterviewPrep Pro</span>
            </div>
            <p className="text-gray-600 max-w-md">
              The smartest way to prepare for your next job interview. Personalized questions based on your resume.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-600">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Team</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Terms</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>© 2023 InterviewPrep Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
