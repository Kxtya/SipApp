// MARK: - User Model
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  profileImage?: string;
  emergencyContact?: string;
  bathroomTimerDuration: number;
}

// MARK: - Friend Model
export interface Friend {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  profileImage?: string;
  sipsTogether: number;
  isOnline: boolean;
}

// MARK: - Session Model
export interface Session {
  id: string;
  startTime: Date;
  endTime?: Date;
  participants: User[];
  photos: SessionPhoto[];
  drinkRequests: DrinkRequest[];
  bathroomBreaks: BathroomBreak[];
  isActive: boolean;
}

export interface SessionPhoto {
  id: string;
  imageURL: string;
  timestamp: Date;
  uploadedBy: User;
  comments: PhotoComment[];
  reactions: PhotoReaction[];
}

export interface PhotoComment {
  id: string;
  text: string;
  timestamp: Date;
  user: User;
}

export interface PhotoReaction {
  id: string;
  emoji: string;
  user: User;
  timestamp: Date;
}

export interface DrinkRequest {
  id: string;
  requester: User;
  timestamp: Date;
  isResolved: boolean;
}

export interface BathroomBreak {
  id: string;
  user: User;
  startTime: Date;
  endTime?: Date;
  duration?: number;
}

// MARK: - Color Scheme
export interface SipColors {
  mainTheme: string;
  accent1: string;
  whiteProxy: string;
  blackProxy: string;
}

export const COLORS: SipColors = {
  mainTheme: '#D81B60', // #D81B60
  accent1: '#750F35', // #750F35
  whiteProxy: '#FCF8FA', // #FCF8FA
  blackProxy: '#27000F', // #27000F
};

// MARK: - Authentication
export interface AuthContextType {
  isAuthenticated: boolean;
  currentUser: User | null;
  signIn: (username: string, password: string) => void;
  signUp: (user: User) => void;
  signOut: () => void;
} 