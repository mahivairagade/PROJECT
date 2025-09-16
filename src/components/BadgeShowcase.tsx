import React from 'react';
import { Award, Lock } from 'lucide-react';
import { mockUser, availableBadges } from '../data/mockData';

export default function BadgeShowcase() {
  const unlockedBadges = mockUser.badges;
  const lockedBadges = availableBadges.filter(
    badge => !unlockedBadges.find(unlocked => unlocked.id === badge.id)
  );

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Badges</h3>
        <Award className="w-5 h-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Earned Badges</h4>
          <div className="grid grid-cols-2 gap-3">
            {unlockedBadges.map((badge) => (
              <div key={badge.id} className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">{badge.icon}</div>
                <p className="text-xs font-medium text-green-800">{badge.name}</p>
                <p className="text-xs text-green-600 mt-1">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Next Badges</h4>
          <div className="space-y-3">
            {lockedBadges.slice(0, 3).map((badge) => (
              <div key={badge.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="relative">
                  <div className="text-lg opacity-50">{badge.icon}</div>
                  <Lock className="absolute -top-1 -right-1 w-3 h-3 text-gray-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600">{badge.name}</p>
                  <p className="text-xs text-gray-500">
                    {badge.pointsRequired - mockUser.ecoPoints} more points
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className="w-full mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
        View All Badges
      </button>
    </div>
  );
}