import { AuthForm } from "~/components/auth-form";
import type { Route } from "./+types/signup";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Signup | foo-rum | Atlys" },
    { name: "description", content: "Create an account" },
  ];
}

export default function SignUp() {
  const navigate = useNavigate();
  const onSwitchType = (type: "signin" | "signup") => {
    navigate(type === "signin" ? "/signin" : "/signup");
  };

  return (
    <div className='flex justify-center items-center'>
      <AuthForm key='signup' type='signup' onSwitchType={onSwitchType} />
    </div>
  );
}
