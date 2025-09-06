import { AuthForm } from "~/components/auth-form";
import { useNavigate } from "react-router";
import { useAuth } from "~/hooks/use-auth";
import { useEffect } from "react";

export const SignupPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const onSwitchType = (type: "signin" | "signup") => {
    navigate(type === "signin" ? "/signin" : "/signup");
  };
  const onSuccess = () => {
    navigate("/");
  };

  return (
    <div className='flex justify-center items-center pt-44'>
      <AuthForm
        key='signup'
        type='signup'
        onSwitchType={onSwitchType}
        onSuccess={onSuccess}
      />
    </div>
  );
};
