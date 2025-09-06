import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/use-auth";
import { Logo, Arrow } from "./icons";
import { DEFAULT_AVATAR } from "~/lib/constants";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, isAuthenticated, signOut } = useAuth();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  const isAuthPage =
    location.pathname.includes("signin") ||
    location.pathname.includes("signup");

  const navigateToSignIn = () => {
    navigate("signin");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='min-h-screen'>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300  ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className='mx-auto px-8 py-4 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Logo className='text-black' />
            <h1 className='font-bold'>foo-rum</h1>
          </div>

          {isAuthenticated ? (
            <div className='flex items-center space-x-4'>
              <img
                src={DEFAULT_AVATAR}
                alt={user?.username}
                className='w-8 h-8 rounded-full'
              />
              <span>{user?.username}</span>
              <button
                onClick={signOut}
                className='text-gray-600 hover:text-gray-900 cursor-pointer'
              >
                Logout
              </button>
            </div>
          ) : isAuthPage ? (
            <button
              onClick={navigateToHome}
              className='px-4 py-2 rounded-lg font-semibold text-sm flex items-center text-black gap-2 hover:bg-gray-100 transition-colors cursor-pointer'
            >
              <span>Back to home</span>
            </button>
          ) : (
            <button
              onClick={navigateToSignIn}
              className='px-4 py-2 rounded-lg font-semibold text-sm flex items-center text-black gap-2 hover:bg-gray-100 transition-colors cursor-pointer'
            >
              <span>Login</span>
              <Arrow className='text-black' />
            </button>
          )}
        </div>
      </header>

      <main className='pt-20'>{children}</main>
    </div>
  );
};
