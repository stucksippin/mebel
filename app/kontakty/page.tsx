import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Страница",
  description: "Описание",
};

export default function Page() {
  return <div><h1>Страница</h1></div>;
}
