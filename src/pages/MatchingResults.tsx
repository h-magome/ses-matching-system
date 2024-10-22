import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const MatchingResults: React.FC = () => {
  // Mock matching results data
  const matchingResults = [
    { id: 1, projectTitle: 'E-commerce Platform Development', matchPercentage: 95, status: 'Matched' },
    { id: 2, title: 'AI-powered Chatbot', matchPercentage: 80, status: 'Pending' },
    { id: 3, title: 'Mobile App for Fitness Tracking', matchPercentage: 70, status: 'Matched' },
    { id: 4, title: 'Cloud Migration Project', matchPercentage: 60, status: 'Not Matched' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Matching Results</h1>
      <div className="space-y-4">
        {matchingResults.map(result => (
          <div key={result.id} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{result.title}</h2>
              <p className="text-gray-600">Match: {result.matchPercentage}%</p>
            </div>
            <div className="flex items-center">
              {result.status === 'Matched' && (
                <span className="flex items-center text-green-600">
                  <CheckCircle size={20} className="mr-2" />
                  Matched
                </span>
              )}
              {result.status === 'Pending' && (
                <span className="flex items-center text-yellow-600">
                  <CheckCircle size={20} className="mr-2" />
                  Pending
                </span>
              )}
              {result.status === 'Not Matched' && (
                <span className="flex items-center text-red-600">
                  <XCircle size={20} className="mr-2" />
                  Not Matched
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchingResults;