import React from 'react';
import { Calendar, Trophy, Award, Target } from 'lucide-react';

export default function RecentActivity() {
  const activities = [
    {
      type: 'challenge',
      title: 'Completed Plastic-Free Day Challenge',
      points: 150,
      date: '2 hours ago',
      icon: <Trophy className="w-4 h-4" />
    },
    {
      type: 'badge',
      title: 'Earned Water Saver Badge',
      points: 0,
      date: '1 day ago',
      icon: <Award className="w-4 h-4" />
    },
    {
      type: 'quiz',
      title: 'Passed Climate Change Quiz',
      points: 100,
      date: '2 days ago',
      icon: <Target className="w-4 h-4" />
    },
    {
      type: 'challenge',
      title: 'Started Energy Audit Challenge',
      points: 0,
      date: '3 days ago',
      icon: <Trophy className="w-4 h-4" />
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <Calendar className="w-5 h-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className={`p-2 rounded-lg ${
              activity.type === 'challenge' ? 'bg-yellow-100 text-yellow-600' :
              activity.type === 'badge' ? 'bg-purple-100 text-purple-600' :
              'bg-blue-100 text-blue-600'
            }`}>
              {activity.icon}
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">{activity.title}</p>
              <p className="text-sm text-gray-500">{activity.date}</p>
            </div>
            {activity.points > 0 && (
              <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-medium">
                +{activity.points} pts
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="w-full mt-4 text-green-600 font-medium hover:text-green-700 transition-colors">
        View All Activity
      </button>
    </div>
  );
}