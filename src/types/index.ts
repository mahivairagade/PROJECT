export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'admin';
  school: string;
  grade?: string;
  ecoPoints: number;
  level: number;
  badges: Badge[];
  completedChallenges: string[];
  completedQuizzes: string[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'beginner' | 'intermediate' | 'advanced' | 'special';
  pointsRequired: number;
  unlockedAt?: Date;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  category: 'waste-management' | 'energy-conservation' | 'water-conservation' | 'biodiversity' | 'climate-action';
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  duration: string;
  instructions: string[];
  verificationMethod: 'photo' | 'quiz' | 'peer-review';
  isActive: boolean;
}

export interface LearningModule {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  content: ModuleContent[];
  quiz: Quiz;
}

export interface ModuleContent {
  type: 'text' | 'image' | 'video' | 'interactive';
  title: string;
  content: string;
  media?: string;
}

export interface Quiz {
  id: string;
  questions: Question[];
  passingScore: number;
  points: number;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface School {
  id: string;
  name: string;
  totalPoints: number;
  studentCount: number;
  rank: number;
}