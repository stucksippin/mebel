import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

interface Crumb { label: string; href?: string; }

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <BreadcrumbJsonLd items={items} />
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-black">Главная</Link></li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span>/</span>
              {item.href ? (
                <Link href={item.href} className="hover:text-black">{item.label}</Link>
              ) : (
                <span className="text-gray-900">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
