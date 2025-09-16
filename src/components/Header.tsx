import React from 'react';
import { User, Trophy, Bell, Settings } from 'lucide-react';
import { mockUser } from '../data/mockData';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-green-600 text-white p-2 rounded-lg">
              <span className="text-xl font-bold">🌱</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">EcoEdu</h1>
              <p className="text-xs text-gray-500">Environmental Education Platform</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#dashboard" className="text-green-600 font-medium">Dashboard</a>
            <a href="#learn" className="text-gray-700 hover:text-green-600 transition-colors">Learn</a>
            <a href="#challenges" className="text-gray-700 hover:text-green-600 transition-colors">Challenges</a>
            <a href="#leaderboard" className="text-gray-700 hover:text-green-600 transition-colors">Leaderboard</a>
            <a href="#community" className="text-gray-700 hover:text-green-600 transition-colors">Community</a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-green-50 px-3 py-1 rounded-full">
              <Trophy className="w-4 h-4 text-yellow-600 mr-1" />
              <span className="text-sm font-semibold text-green-700">{mockUser.ecoPoints}</span>
            </div>
            
            <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-gray-900">{mockUser.name}</p>
                <p className="text-xs text-gray-500">{mockUser.school}</p>
              </div>
              <div className="bg-green-100 p-2 rounded-full">
                <User className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}