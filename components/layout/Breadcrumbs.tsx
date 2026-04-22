import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

interface Crumb { label: string; href?: string; }

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <BreadcrumbJsonLd items={items} />
      <nav aria-label="Breadcrumb" className="breadcrumb-nav">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <Link href="/" className="breadcrumb-link">Главная</Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="breadcrumb-item">
              <span className="breadcrumb-sep">/</span>
              {item.href ? (
                <Link href={item.href} className="breadcrumb-link">{item.label}</Link>
              ) : (
                <span className="breadcrumb-current">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}