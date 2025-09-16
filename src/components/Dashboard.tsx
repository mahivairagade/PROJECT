import React from 'react';
import { Trophy, Target, Award, TrendingUp } from 'lucide-react';
import { mockUser } from '../data/mockData';
import StatsCard from './StatsCard';
import ProgressCard from './ProgressCard';
import RecentActivity from './RecentActivity';
import BadgeShowcase from './BadgeShowcase';

export default function Dashboard() {
  const levelProgress = ((mockUser.ecoPoints % 250) / 250) * 100;
  const nextLevelPoints = (mockUser.level * 250) - mockUser.ecoPoints;

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Welcome back, {mockUser.name}! 👋</h2>
            <p className="text-green-100 mb-4">
              You're at Level {mockUser.level} - Keep making a difference!
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <p className="text-sm opacity-90">Eco Points</p>
                <p className="text-2xl font-bold">{mockUser.ecoPoints}</p>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <p className="text-sm opacity-90">Current Level</p>
                <p className="text-2xl font-bold">{mockUser.level}</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-4xl">🌍</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="flex justify-between text-sm mb-2">
            <span>Progress to Level {mockUser.level + 1}</span>
            <span>{nextLevelPoints} points to go</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3">
            <div 
              className="bg-white h-3 rounded-full transition-all duration-500"
              style={{ width: `${levelProgress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          icon={<Trophy className="w-6 h-6" />}
          title="Challenges Completed"
          value={mockUser.completedChallenges.length}
          color="bg-yellow-500"
        />
        <StatsCard
          icon={<Target className="w-6 h-6" />}
          title="Quizzes Passed"
          value={mockUser.completedQuizzes.length}
          color="bg-blue-500"
        />
        <StatsCard
          icon={<Award className="w-6 h-6" />}
          title="Badges Earned"
          value={mockUser.badges.length}
          color="bg-purple-500"
        />
        <StatsCard
          icon={<TrendingUp className="w-6 h-6" />}
          title="School Rank"
          value="#1"
          color="bg-green-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ProgressCard />
          <RecentActivity />
        </div>
        <div>
          <BadgeShowcase />
        </div>
      </div>
    </div>
  );
}