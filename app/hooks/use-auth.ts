"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  email: string;
  username: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  signUp: (email: string, password: string) => Promise<boolean>;
  signOut: () => void;
}

// Test accounts
const TEST_ACCOUNTS = [
  { email: "demo@example.com", password: "password123", username: "demo" },
  { email: "test@user.com", password: "testpass", username: "testuser" },
];

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,

      signIn: async (email: string, password: string) => {
        const account = TEST_ACCOUNTS.find(
          (acc) => acc.email === email && acc.password === password
        );

        if (account) {
          const user = { email: account.email, username: account.username };
          set({ user, isAuthenticated: true });
          return true;
        }

        return false;
      },

      signUp: async (email: string, password: string) => {
        // Check if email already exists
        const existingAccount = TEST_ACCOUNTS.find(
          (acc) => acc.email === email
        );
        if (existingAccount) {
          return false;
        }

        const username = email.split("@")[0];
        const user = { email, username };
        set({ user, isAuthenticated: true });
        return true;
      },

      signOut: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
