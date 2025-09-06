import type { Route } from "./+types/signin";
import { SigninPage } from "~/pages/signin";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Signin | foo-rum | Atlys" },
    { name: "description", content: "Signin to your account" },
  ];
}

export default function Signin() {
  return <SigninPage />;
}
