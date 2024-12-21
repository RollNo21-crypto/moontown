export interface User {
  id: string;
  email: string;
  fullName: string | null;
  avatarUrl: string | null;
  googleId: string | null;
}

export interface Session {
  id: string;
  userId: string;
  expiresAt: Date;
}

export interface GoogleProfile {
  id: string;
  email: string;
  name: string;
  picture: string;
}