import React from 'react';
import DifficultyBadge from './DifficultyBadge';

const InterviewPanel = ({
  question,
  onResponseSubmit,
  currentQuestionIndex,
  totalQuestions,
  userResponses,
  setCurrentQuestionIndex,
  questions,
  handleResponseSubmit
}) => {

   if (!questions || !Array.isArray(questions) || questions.length === 0 || !question) {
    return <div className="p-6 text-red-500">No questions available.</div>;
  }


  return (
    <div className="bg-white rounded-xl overflow-hidden card-shadow">
      <div className="bg-gray-800 text-white p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Mock Interview</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm bg-gray-700 px-2 py-1 rounded">
              Question {currentQuestionIndex + 1} / {totalQuestions}
            </span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Interviewer:</h3>
            <DifficultyBadge difficulty={question.difficulty} />
          </div>
          <p className="text-lg">"{question.questiontext}"</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Your Response:</label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows={5}
            placeholder="Type your response"
            value={userResponses[question.id] || ''}
            onChange={(e) => onResponseSubmit(question.id, e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={() => currentQuestionIndex > 0 && setCurrentQuestionIndex(currentQuestionIndex - 1)}
            disabled={currentQuestionIndex === 0}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-300"
          >
            Previous
          </button>
          <button
            onClick={() =>
              handleResponseSubmit(
                questions[currentQuestionIndex].id,
                userResponses[questions[currentQuestionIndex].id] || ''
              )
            }
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            {currentQuestionIndex === questions.length - 1 ? 'View Results' : 'Submit & Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewPanel;