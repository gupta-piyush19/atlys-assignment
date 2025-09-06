import type { Route } from "./+types/signup";
import { SignupPage } from "~/pages/signup";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Signup | foo-rum | Atlys" },
    { name: "description", content: "Create an account" },
  ];
}

export default function Signup() {
  return <SignupPage />;
}
