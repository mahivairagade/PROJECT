import React from 'react';
import { Trophy, Users, TrendingUp } from 'lucide-react';
import { schoolLeaderboard } from '../data/mockData';

export default function Leaderboard() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-6 text-white">
        <div className="flex items-center space-x-3">
          <Trophy className="w-8 h-8" />
          <div>
            <h2 className="text-2xl font-bold">School Leaderboard</h2>
            <p className="text-yellow-100">Compete with schools across India</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Top Schools</h3>
          <p className="text-sm text-gray-600">Rankings based on total eco-points earned by students</p>
        </div>

        <div className="divide-y divide-gray-100">
          {schoolLeaderboard.map((school, index) => (
            <div key={school.id} className="flex items-center justify-between p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                  index === 0 ? 'bg-yellow-100 text-yellow-800' :
                  index === 1 ? 'bg-gray-100 text-gray-700' :
                  index === 2 ? 'bg-orange-100 text-orange-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : school.rank}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{school.name}</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{school.studentCount} students</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>Rank #{school.rank}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">{school.totalPoints.toLocaleString()}</div>
                <div className="text-sm text-gray-500">eco-points</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your School's Progress</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Current Rank</span>
              <span className="font-bold text-green-600">#1</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Points</span>
              <span className="font-bold">45,230</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Active Students</span>
              <span className="font-bold">856</span>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress to maintain #1</span>
                <span>2,340 pts ahead</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">This Month's Top Contributors</h3>
          <div className="space-y-3">
            {[
              { name: 'Ananya Sharma', points: 1250 },
              { name: 'Rahul Verma', points: 1180 },
              { name: 'Priya Patel', points: 1120 },
              { name: 'Arjun Singh', points: 1050 }
            ].map((student, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-green-600">{index + 1}</span>
                  </div>
                  <span className="font-medium text-gray-900">{student.name}</span>
                </div>
                <span className="text-green-600 font-semibold">{student.points} pts</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}