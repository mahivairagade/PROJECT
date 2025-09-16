import React from 'react';
import { Clock, Users, Trophy, CheckCircle } from 'lucide-react';
import { Challenge } from '../types';

interface ChallengeCardProps {
  challenge: Challenge;
  isCompleted?: boolean;
}

export default function ChallengeCard({ challenge, isCompleted = false }: ChallengeCardProps) {
  const difficultyColors = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hard: 'bg-red-100 text-red-800'
  };

  const categoryIcons = {
    'waste-management': '♻️',
    'energy-conservation': '⚡',
    'water-conservation': '💧',
    'biodiversity': '🌱',
    'climate-action': '🌍'
  };

  return (
    <div className={`bg-white rounded-xl p-6 shadow-sm border transition-all hover:shadow-md ${
      isCompleted ? 'border-green-200 bg-green-50' : 'border-gray-100 hover:border-green-200'
    }`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-2xl">{categoryIcons[challenge.category]}</div>
          <div>
            <h3 className="font-semibold text-gray-900">{challenge.title}</h3>
            <p className="text-sm text-gray-600">{challenge.description}</p>
          </div>
        </div>
        {isCompleted && <CheckCircle className="w-6 h-6 text-green-600" />}
      </div>

      <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
        <div className="flex items-center space-x-1">
          <Clock className="w-4 h-4" />
          <span>{challenge.duration}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Trophy className="w-4 h-4" />
          <span>{challenge.points} points</span>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[challenge.difficulty]}`}>
          {challenge.difficulty}
        </span>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Instructions:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {challenge.instructions.slice(0, 2).map((instruction, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-green-600 mt-1">•</span>
              <span>{instruction}</span>
            </li>
          ))}
          {challenge.instructions.length > 2 && (
            <li className="text-gray-500 italic">... and {challenge.instructions.length - 2} more</li>
          )}
        </ul>
      </div>

      <button 
        className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
          isCompleted 
            ? 'bg-green-100 text-green-700 cursor-default'
            : 'bg-green-600 text-white hover:bg-green-700'
        }`}
        disabled={isCompleted}
      >
        {isCompleted ? 'Completed' : 'Start Challenge'}
      </button>
    </div>
  );
}