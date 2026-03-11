import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: slug };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  return <article><h1>{slug}</h1></article>;
}
