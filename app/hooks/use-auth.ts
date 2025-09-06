"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthStore, User } from "~/types/user";
import { DEFAULT_ACCOUNTS } from "~/lib/constants";

export const useAuth = create<AuthStore>()(
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
      name: "auth-storage",
    }
  )
);
