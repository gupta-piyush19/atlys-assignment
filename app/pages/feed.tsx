"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../hooks/use-auth";
import { usePost } from "../hooks/use-post";
import { PostEditor } from "../components/post-editor";
import { Post } from "../components/post";
import { AuthModal } from "../components/auth-modal";
import { DEFAULT_AVATAR } from "~/lib/constants";

export const Feed = () => {
  const { user, isAuthenticated } = useAuth();
  const { posts, addPost } = usePost();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authModalType, setAuthModalType] = useState<"signin" | "signup">(
    "signin"
  );

  useEffect(() => {
    if (showAuthModal) {
      const originalOverflow = document.body.style.overflow;

      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [showAuthModal]);

  const handleInteraction = () => {
    if (!isAuthenticated) {
      setAuthModalType("signin");
      setShowAuthModal(true);
    } else {
      alert("function not implemented");
    }
  };

  const handlePublishPost = (content: string) => {
    if (!isAuthenticated || !user) return;

    addPost(content, {
      name: user.username,
      avatar: DEFAULT_AVATAR,
    });
  };

  return (
    <div>
      <main className='max-w-2xl mx-auto px-4 py-8'>
        <div className='mb-8 animate-slide-down'>
          <PostEditor
            onPublish={handlePublishPost}
            onInteraction={handleInteraction}
            isAuthenticated={isAuthenticated}
          />
        </div>
        {!posts.length && (
          <div className='text-center text-gray-500'>Loading...</div>
        )}
        <div className='space-y-6'>
          {posts.map((post, index) => (
            <div
              key={post.id}
              className='animate-slide-up'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Post post={post} onInteraction={handleInteraction} />
            </div>
          ))}
        </div>
      </main>

      {showAuthModal && (
        <AuthModal
          type={authModalType}
          onClose={() => setShowAuthModal(false)}
          onSwitchType={(type) => setAuthModalType(type)}
        />
      )}
    </div>
  );
};
