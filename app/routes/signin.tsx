import type { Route } from "./+types/signin";
import { useNavigate } from "react-router";
import AuthForm from "~/components/auth-form";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Signin | foo-rum | Atlys" },
    { name: "description", content: "Signin to your account" },
  ];
}

export default function SignIn() {
  const navigate = useNavigate();
  const onSwitchType = (type: "signin" | "signup") => {
    navigate(type === "signin" ? "/signin" : "/signup");
  };

  return (
    <div className='flex justify-center items-center'>
      <AuthForm
        key='signin'
        type='signin'
        onSuccess={() => {}}
        onSwitchType={onSwitchType}
      />
    </div>
  );
}
