import React from 'react';
import { BookOpen, Play, CheckCircle } from 'lucide-react';

export default function ProgressCard() {
  const modules = [
    { name: 'Climate Change Basics', progress: 100, status: 'completed' },
    { name: 'Waste Management', progress: 75, status: 'in-progress' },
    { name: 'Water Conservation', progress: 45, status: 'in-progress' },
    { name: 'Renewable Energy', progress: 0, status: 'not-started' }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Learning Progress</h3>
        <BookOpen className="w-5 h-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        {modules.map((module, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex items-center space-x-3">
              {module.status === 'completed' ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : module.status === 'in-progress' ? (
                <Play className="w-5 h-5 text-blue-500" />
              ) : (
                <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
              )}
              <div>
                <p className="font-medium text-gray-900">{module.name}</p>
                <p className="text-sm text-gray-500">{module.progress}% complete</p>
              </div>
            </div>
            <div className="w-24">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    module.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                  }`}
                  style={{ width: `${module.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
        Continue Learning
      </button>
    </div>
  );
}