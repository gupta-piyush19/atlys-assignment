import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../hooks/use-auth";
import { Logo, Arrow } from "./icons";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, isAuthenticated, signOut } = useAuth();
  const navigate = useNavigate();

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

  return (
    <div className='min-h-screen bg-gray-50 '>
      <header>
        <div className='mx-auto px-8 py-4 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Logo className='text-black' />
            <h1 className='font-bold'>foo-rum</h1>
          </div>

          {isAuthenticated ? (
            <div className='flex items-center space-x-4'>
              <img
                src={"https://github.com/shadcn.png"}
                alt={user?.username}
                className='w-8 h-8 rounded-full'
              />
              <button
                onClick={signOut}
                className='text-gray-600 hover:text-gray-900'
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
      {children}
    </div>
  );
};
