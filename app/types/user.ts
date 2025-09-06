export interface User {
  email: string;
  username: string;
  password: string;
}

export interface AuthStore {
  user: Omit<User, "password"> | null;
  isAuthenticated: boolean;
  accounts: User[];
  signIn: (email: string, password: string) => Promise<boolean>;
  signUp: (email: string, password: string) => Promise<boolean>;
  signOut: () => void;
}
