import { useState } from "react";
import { useAuth } from "../hooks/use-auth";
import { usePost } from "../hooks/use-post";
import { PostEditor } from "./post-editor";
import { Post } from "./post";
import { AuthModal } from "./auth-modal";

export function Feed() {
  const { user, isAuthenticated } = useAuth();
  const { posts, addPost } = usePost();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authModalType, setAuthModalType] = useState<"signin" | "signup">(
    "signin"
  );

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
      avatar: "https://github.com/shadcn.png",
    });
  };

  const openSignIn = () => {
    setAuthModalType("signin");
    setShowAuthModal(true);
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

        <div className='space-y-6'>
          {posts.map((post, index) => (
            <div
              key={post.id}
              className='animate-slide-up'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Post post={post} />
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
}
