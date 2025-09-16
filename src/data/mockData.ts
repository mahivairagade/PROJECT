import { User, Challenge, LearningModule, Badge, School } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Ananya Sharma',
  email: 'ananya.sharma@example.com',
  role: 'student',
  school: 'Delhi Public School',
  grade: '10th',
  ecoPoints: 1250,
  level: 5,
  badges: [
    {
      id: 'eco-warrior',
      name: 'Eco Warrior',
      description: 'Completed 10 environmental challenges',
      icon: '🌱',
      category: 'intermediate',
      pointsRequired: 1000,
      unlockedAt: new Date('2024-01-15')
    },
    {
      id: 'water-saver',
      name: 'Water Saver',
      description: 'Completed all water conservation challenges',
      icon: '💧',
      category: 'beginner',
      pointsRequired: 500,
      unlockedAt: new Date('2024-01-10')
    }
  ],
  completedChallenges: ['waste-audit', 'energy-monitor', 'water-conservation'],
  completedQuizzes: ['climate-basics', 'waste-management-101']
};

export const challenges: Challenge[] = [
  {
    id: 'plastic-free-week',
    title: 'Plastic-Free Week Challenge',
    description: 'Avoid single-use plastics for an entire week',
    category: 'waste-management',
    difficulty: 'medium',
    points: 200,
    duration: '7 days',
    instructions: [
      'Track all plastic usage for one week',
      'Find alternatives to single-use plastics',
      'Document your journey with photos',
      'Share tips with classmates'
    ],
    verificationMethod: 'photo',
    isActive: true
  },
  {
    id: 'energy-audit',
    title: 'Home Energy Audit',
    description: 'Conduct a comprehensive energy audit of your home',
    category: 'energy-conservation',
    difficulty: 'easy',
    points: 150,
    duration: '3 days',
    instructions: [
      'Check all electrical appliances',
      'Monitor electricity usage',
      'Identify energy wastage areas',
      'Suggest improvements to family'
    ],
    verificationMethod: 'quiz',
    isActive: true
  },
  {
    id: 'tree-plantation',
    title: 'Community Tree Plantation',
    description: 'Organize or participate in tree plantation drive',
    category: 'biodiversity',
    difficulty: 'hard',
    points: 300,
    duration: '1 day',
    instructions: [
      'Find suitable location for plantation',
      'Gather saplings and tools',
      'Involve community members',
      'Commit to sapling maintenance'
    ],
    verificationMethod: 'peer-review',
    isActive: true
  }
];

export const learningModules: LearningModule[] = [
  {
    id: 'climate-change-basics',
    title: 'Understanding Climate Change',
    description: 'Learn about the causes and effects of climate change',
    category: 'Climate Science',
    difficulty: 'beginner',
    estimatedTime: '30 minutes',
    content: [
      {
        type: 'text',
        title: 'What is Climate Change?',
        content: 'Climate change refers to long-term shifts in global or regional climate patterns. It is largely attributed to increased levels of greenhouse gases in the atmosphere due to human activities.'
      },
      {
        type: 'image',
        title: 'Greenhouse Effect',
        content: 'The greenhouse effect is a natural process that warms the Earth\'s surface.',
        media: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ],
    quiz: {
      id: 'climate-basics-quiz',
      questions: [
        {
          id: 'q1',
          question: 'What is the primary cause of current climate change?',
          options: ['Solar variations', 'Human activities', 'Volcanic eruptions', 'Ocean currents'],
          correctAnswer: 1,
          explanation: 'Human activities, particularly burning fossil fuels, are the primary cause of current climate change.'
        }
      ],
      passingScore: 70,
      points: 100
    }
  }
];

export const availableBadges: Badge[] = [
  {
    id: 'green-thumb',
    name: 'Green Thumb',
    description: 'Plant 5 trees or maintain a garden',
    icon: '🌳',
    category: 'beginner',
    pointsRequired: 300
  },
  {
    id: 'waste-warrior',
    name: 'Waste Warrior',
    description: 'Complete 5 waste management challenges',
    icon: '♻️',
    category: 'intermediate',
    pointsRequired: 800
  },
  {
    id: 'energy-champion',
    name: 'Energy Champion',
    description: 'Save significant energy through conservation',
    icon: '⚡',
    category: 'intermediate',
    pointsRequired: 600
  },
  {
    id: 'climate-hero',
    name: 'Climate Hero',
    description: 'Complete advanced climate action challenges',
    icon: '🌍',
    category: 'advanced',
    pointsRequired: 1500
  }
];

export const schoolLeaderboard: School[] = [
  { id: '1', name: 'Delhi Public School', totalPoints: 45230, studentCount: 1200, rank: 1 },
  { id: '2', name: 'Kendriya Vidyalaya', totalPoints: 42890, studentCount: 980, rank: 2 },
  { id: '3', name: 'DAV Public School', totalPoints: 38940, studentCount: 1100, rank: 3 },
  { id: '4', name: 'Ryan International', totalPoints: 35670, studentCount: 890, rank: 4 },
  { id: '5', name: 'Modern School', totalPoints: 32450, studentCount: 750, rank: 5 }
];