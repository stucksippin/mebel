import type { Metadata } from "next";

type Props = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  return { title: `Портфолио — ${category}` };
}

export default async function PortfolioCategory({ params }: Props) {
  const { category } = await params;
  return <div><h1>Портфолио: {category}</h1></div>;
}
