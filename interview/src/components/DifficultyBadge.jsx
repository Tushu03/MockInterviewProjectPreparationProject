import React from 'react';

const DifficultyBadge = ({ difficulty }) => {
  const colors = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hard: 'bg-red-100 text-red-800'
  };

  return (
    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${colors[difficulty]}`}>
      {difficulty}
    </span>
  );
};

export default DifficultyBadge;
