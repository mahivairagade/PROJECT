import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ChallengeCard from './components/ChallengeCard';
import Leaderboard from './components/Leaderboard';
import { challenges } from './data/mockData';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'challenges':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Environmental Challenges</h2>
              <p className="text-blue-100">Take action and earn eco-points by completing real-world challenges</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge) => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
              ))}
            </div>
          </div>
        );
      case 'leaderboard':
        return <Leaderboard />;
      case 'learn':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Learning Modules</h2>
              <p className="text-purple-100">Master environmental concepts through interactive lessons</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Climate Change', 'Waste Management', 'Water Conservation', 'Renewable Energy', 'Biodiversity', 'Sustainable Living'].map((topic) => (
                <div key={topic} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">
                    {topic === 'Climate Change' ? '🌍' :
                     topic === 'Waste Management' ? '♻️' :
                     topic === 'Water Conservation' ? '💧' :
                     topic === 'Renewable Energy' ? '⚡' :
                     topic === 'Biodiversity' ? '🌱' : '🏡'}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{topic}</h3>
                  <p className="text-gray-600 mb-4">Interactive lessons and quizzes on {topic.toLowerCase()}</p>
                  <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                    Start Learning
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'community':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Community</h2>
              <p className="text-indigo-100">Connect with fellow eco-warriors and share your impact</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <p className="text-center text-gray-500 py-12">Community features coming soon! 🚀</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: '📊' },
              { id: 'learn', label: 'Learn', icon: '📚' },
              { id: 'challenges', label: 'Challenges', icon: '🎯' },
              { id: 'leaderboard', label: 'Leaderboard', icon: '🏆' },
              { id: 'community', label: 'Community', icon: '👥' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-green-600 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span>{tab.icon}</span>
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;