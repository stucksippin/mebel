import Link from "next/link";
import { Category, Subcategory } from "@/types/catalog";

type Item = Pick<Category | Subcategory, "slug" | "name">;

export default function CategoryGrid({ categories, basePath = "/catalog" }: { categories: Item[]; basePath?: string }) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map((cat) => (
        <li key={cat.slug}>
          <Link href={`${basePath}/${cat.slug}`} className="block p-6 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all">
            <span className="font-medium text-gray-900">{cat.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
