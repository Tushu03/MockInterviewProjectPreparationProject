import React from 'react';
import DifficultyBadge from './DifficultyBadge';

const QuestionsPanel = ({ questions, onStartInterview }) => {
  return (
    <div className="bg-white rounded-xl p-6 card-shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Personalized Questions</h2>
        <button onClick={onStartInterview} className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700">
          Start Practice Interview
        </button>
      </div>
      <p className="text-gray-600 mb-6">
        These questions are tailored based on your resume to prepare you for your next interview.
      </p>
      <div className="space-y-4">
        {questions.map((question, index) => (
          <div key={question.id} className="question-card transition bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-purple-300">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-2">
                <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  {index + 1}
                </span>
                <h3 className="font-medium">{question.questiontext}</h3>
              </div>
              <DifficultyBadge difficulty={question.difficulty} />
            </div>
            <div className="mt-2 text-sm text-gray-500">Category: {question.category}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsPanel;
