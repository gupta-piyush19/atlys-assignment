import { useNavigate } from "react-router";
import { AuthForm } from "~/components/auth-form";
import { useAuth } from "~/hooks/use-auth";
import { useEffect } from "react";

export const SigninPage = () => {
  const navigate = useNavigate();
  const onSwitchType = (type: "signin" | "signup") => {
    navigate(type === "signin" ? "/signin" : "/signup");
  };

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const onSuccess = () => {
    navigate("/");
  };
  return (
    <div className='flex justify-center items-center pt-32'>
      <AuthForm
        key='signin'
        type='signin'
        onSwitchType={onSwitchType}
        onSuccess={onSuccess}
      />
    </div>
  );
};
