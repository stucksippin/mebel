import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { materials, getMaterial } from "@/data/materials";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return materials.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const m = getMaterial(slug);
  if (!m) return {};
  return {
    title: `${m.name} — материал для мебели на заказ`,
    description: m.shortDesc,
  };
}

export default async function MaterialPage({ params }: Props) {
  const { slug } = await params;
  const m = getMaterial(slug);
  if (!m) notFound();

  const related = materials.filter((r) => r.categorySlug === m.categorySlug && r.slug !== m.slug);

  return (
    <div className="mat-item-page">
      <div className="container">
        <Breadcrumbs items={[
          { label: "Материалы", href: "/materialy" },
          { label: m.name },
        ]} />

        <div className="mat-item-layout">
          {/* Left */}
          <div className="mat-item-main">
            <div className="mat-item-img">
              <div className="mat-item-img-placeholder">
                <span>{m.name}</span>
                <small>Фото материала</small>
              </div>
            </div>

            <div className="mat-item-desc-block">
              <h2 className="mat-item-desc-title">О материале</h2>
              <p className="mat-item-desc-text">{m.description}</p>
            </div>

            <div className="mat-item-pros-cons">
              <div className="mat-pros">
                <h3 className="mat-pros-title">Преимущества</h3>
                <ul className="mat-pros-list">
                  {m.pros.map((p) => (
                    <li key={p}>
                      <span className="mat-pro-icon">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mat-cons">
                <h3 className="mat-cons-title">Недостатки</h3>
                <ul className="mat-cons-list">
                  {m.cons.map((c) => (
                    <li key={c}>
                      <span className="mat-con-icon">—</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="mat-item-sidebar">
            <div className="mat-item-info-card">
              <span className="mat-item-cat-tag">{m.category}</span>
              <h1 className="mat-item-title">{m.name}</h1>
              <p className="mat-item-short-desc">{m.shortDesc}</p>

              <div className="mat-item-params">
                <div className="mat-item-param">
                  <span className="mat-item-param-label">Ценовой диапазон</span>
                  <span className="mat-item-param-value">{m.priceRange}</span>
                </div>
                <div className="mat-item-param">
                  <span className="mat-item-param-label">Срок службы</span>
                  <span className="mat-item-param-value">{m.durability}</span>
                </div>
                <div className="mat-item-param">
                  <span className="mat-item-param-label">Экология</span>
                  <span className="mat-item-param-value">{m.eco}</span>
                </div>
              </div>

              <div className="mat-item-used">
                <div className="mat-item-used-title">Применяется в:</div>
                <div className="mat-item-used-list">
                  {m.usedIn.map((u) => (
                    <span key={u} className="mat-item-used-tag">{u}</span>
                  ))}
                </div>
              </div>

              <a href="/#zayavka" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Обсудить проект
              </a>
              <a href="tel:+7XXXXXXXXXX" className="mat-item-phone">+7 (XXX) XXX-XX-XX</a>
            </div>

            {related.length > 0 && (
              <div className="mat-item-related">
                <div className="mat-item-related-title">Похожие материалы</div>
                {related.map((r) => (
                  <Link key={r.slug} href={`/materialy/${r.slug}`} className="mat-item-related-link">
                    <span>{r.name}</span>
                    <span className="mat-item-related-price">{r.priceRange}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}