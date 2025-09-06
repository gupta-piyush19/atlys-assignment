"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PostStore, PostType } from "~/types/post";
import { getRandomEmoji } from "~/lib/utils";
import { DEFAULT_POSTS } from "~/lib/constants";

export const usePost = create<PostStore>()(
  persist(
    (set, get) => ({
      posts: DEFAULT_POSTS,

      addPost: (content: string, author: { name: string; avatar: string }) => {
        const newPost: PostType = {
          id: Date.now().toString(),
          author,
          content,
          timestamp: "just now",
          emoji: getRandomEmoji(),
        };

        set((state) => ({
          posts: [newPost, ...state.posts],
        }));

        return newPost;
      },
    }),
    {
      name: "post-storage",
    }
  )
);
