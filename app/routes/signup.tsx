import { AuthForm } from "~/components/auth-form";
import type { Route } from "./+types/signup";
import { useNavigate } from "react-router";
import { useAuth } from "~/hooks/use-auth";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Signup | foo-rum | Atlys" },
    { name: "description", content: "Create an account" },
  ];
}

export default function SignUp() {
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
    <div className='flex justify-center items-center'>
      <AuthForm
        key='signup'
        type='signup'
        onSwitchType={onSwitchType}
        onSuccess={onSuccess}
      />
    </div>
  );
}
