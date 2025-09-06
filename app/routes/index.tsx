import type { Route } from "./+types/index";
import { Feed } from "../components/feed";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Feed | foo-rum | Atlys" },
    { name: "description", content: "Blog for Atlys" },
  ];
}

export default function Index() {
  return <Feed />;
}
