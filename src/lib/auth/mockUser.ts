export interface MockUser {
  id: string;
  email: string;
  fullName: string;
  avatarUrl: string | null;
}

// Mock user data
export const mockUsers: MockUser[] = [
  {
    id: '1',
    email: 'john@example.com',
    fullName: 'John Doe',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    email: 'jane@example.com',
    fullName: 'Jane Smith',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
  },
];