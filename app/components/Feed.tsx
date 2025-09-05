import React, { useState } from "react";
import { useAuth } from "../hooks/use-auth";
import PostEditor from "./PostEditor";
import Post from "./Post";
import AuthModal from "./AuthModal";

export interface PostType {
  id: string;
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  emoji: string;
}

const MOCK_POSTS: PostType[] = [
  {
    id: "1",
    author: {
      name: "Theresa Webb",
      username: "theresa_webb",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    timestamp: "5 mins ago",
    emoji: "🤔",
  },
  {
    id: "2",
    author: {
      name: "John Doe",
      username: "john_doe",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    timestamp: "5 mins ago",
    emoji: "😍",
  },
  {
    id: "3",
    author: {
      name: "Jane Doe",
      username: "jane_doe",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    timestamp: "5 mins ago",
    emoji: "💀",
  },
];

export default function Feed() {
  const { user, isAuthenticated, signOut } = useAuth();
  const [posts, setPosts] = useState<PostType[]>(MOCK_POSTS);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authModalType, setAuthModalType] = useState<"signin" | "signup">(
    "signin"
  );

  const handleInteraction = () => {
    if (!isAuthenticated) {
      setAuthModalType("signin");
      setShowAuthModal(true);
    } else {
      alert("Function not implemented");
    }
  };

  const handlePublishPost = (content: string, emoji: string) => {
    if (!isAuthenticated || !user) return;

    const newPost: PostType = {
      id: Date.now().toString(),
      author: {
        name: user.username,
        username: user.username,
        avatar: "https://github.com/shadcn.png",
      },
      content,
      timestamp: "just now",
      emoji,
    };

    setPosts([newPost, ...posts]);
  };

  const openSignIn = () => {
    setAuthModalType("signin");
    setShowAuthModal(true);
  };

  return (
    <div>
      {/* Main Content */}
      <main className='max-w-2xl mx-auto px-4 py-8'>
        {/* Post Editor */}
        <div className='mb-8 animate-slide-down'>
          <PostEditor
            onPublish={handlePublishPost}
            onInteraction={handleInteraction}
            isAuthenticated={isAuthenticated}
          />
        </div>

        {/* Posts Feed */}
        <div className='space-y-6'>
          {posts.map((post, index) => (
            <div
              key={post.id}
              className='animate-slide-up hover-lift'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Post post={post} onInteraction={handleInteraction} />
            </div>
          ))}
        </div>
      </main>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal
          type={authModalType}
          onClose={() => setShowAuthModal(false)}
          onSwitchType={(type) => setAuthModalType(type)}
        />
      )}
    </div>
  );
}
