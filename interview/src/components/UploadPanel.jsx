import React from 'react';

const UploadPanel = ({ isAnalyzing, onFileUpload}) => {
  return (
    <div className="bg-white rounded-xl p-6 card-shadow">
      <div className="text-center py-8">
        <div className="mx-auto w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-2">Upload Your Resume</h2>
        <p className="text-gray-600 mb-6">Upload your resume to generate personalized interview questions</p>
        <div className="resume-upload transition">
          <label className="cursor-pointer bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 inline-block">
            {isAnalyzing ? 'Analyzing...' : 'Select Resume'}
            <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={onFileUpload} disabled={isAnalyzing} />
          </label>
        </div>
        <p className="text-sm text-gray-500 mt-4">Supported formats: PDF, DOC, DOCX</p>
      </div>
    </div>
  );
};

export default UploadPanel;
