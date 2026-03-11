import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: `Материалы — ${slug}` };
}

export default async function MaterialPage({ params }: Props) {
  const { slug } = await params;
  return <div><h1>{slug}</h1></div>;
}
