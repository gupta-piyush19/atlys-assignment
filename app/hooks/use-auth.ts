"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  email: string;
  username: string;
  password: string; // store password too (for demo, not safe for prod!)
}

interface AuthState {
  user: Omit<User, "password"> | null;
  isAuthenticated: boolean;
  accounts: User[];
  signIn: (email: string, password: string) => Promise<boolean>;
  signUp: (email: string, password: string) => Promise<boolean>;
  signOut: () => void;
}

const DEFAULT_ACCOUNTS: User[] = [
  { email: "demo@example.com", password: "password123", username: "demo" },
  { email: "test@user.com", password: "testpass", username: "testuser" },
];

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      accounts: DEFAULT_ACCOUNTS,

      signIn: async (email: string, password: string) => {
        const account = get().accounts.find(
          (acc) => acc.email === email && acc.password === password
        );

        if (account) {
          const { password, ...user } = account;
          set({ user, isAuthenticated: true });
          return true;
        }
        return false;
      },

      signUp: async (email: string, password: string) => {
        const existingAccount = get().accounts.find(
          (acc) => acc.email === email
        );
        if (existingAccount) {
          return false;
        }

        const username = email.split("@")[0];
        const newAccount: User = { email, password, username };

        set((state) => ({
          accounts: [...state.accounts, newAccount],
          user: { email, username },
          isAuthenticated: true,
        }));

        return true;
      },

      signOut: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: "auth-storage", // everything (accounts + user) goes into localStorage
    }
  )
);
