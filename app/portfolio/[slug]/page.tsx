import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { portfolioItems, getPortfolioItem } from "@/data/portfolio";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioItem(slug);
  if (!item) return {};
  return {
    title: `${item.title} — проект на заказ`,
    description: item.description,
  };
}

export default async function PortfolioItemPage({ params }: Props) {
  const { slug } = await params;
  const item = getPortfolioItem(slug);
  if (!item) notFound();

  const related = portfolioItems
    .filter((p) => p.categorySlug === item.categorySlug && p.slug !== item.slug)
    .slice(0, 3);

  return (
    <div className="pf-item-page">
      <div className="container">
        <Breadcrumbs items={[
          { label: "Портфолио", href: "/portfolio" },
          { label: item.title },
        ]} />

        <div className="pf-item-layout">
          {/* Left — photos */}
          <div className="pf-item-gallery">
            <div className="pf-item-main-img">
              <div className="pf-item-img-placeholder">
                <span>{item.title}</span>
                <small>Главное фото</small>
              </div>
            </div>
            <div className="pf-item-thumbs">
              {[1, 2, 3].map((n) => (
                <div key={n} className="pf-item-thumb">
                  <div className="pf-item-thumb-placeholder">
                    <small>Фото {n}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — info */}
          <div className="pf-item-info">
            <span className="pf-item-cat">{item.category}</span>
            <h1 className="pf-item-title">{item.title}</h1>
            <p className="pf-item-desc">{item.description}</p>

            {/* Params */}
            <div className="pf-item-params">
              <div className="pf-item-param">
                <span className="pf-item-param-label">Площадь</span>
                <span className="pf-item-param-value">{item.size}</span>
              </div>
              <div className="pf-item-param">
                <span className="pf-item-param-label">Материал</span>
                <span className="pf-item-param-value">{item.material}</span>
              </div>
              <div className="pf-item-param">
                <span className="pf-item-param-label">Срок</span>
                <span className="pf-item-param-value">{item.term}</span>
              </div>
            </div>

            {/* Full description */}
            <p className="pf-item-full-desc">{item.fullDescription}</p>

            {/* CTA */}
            <div className="pf-item-cta">
              <a href="/#zayavka" className="btn-primary">Хочу такой же проект</a>
              <Link href={`/catalog/${item.categorySlug}`} className="btn-outline">
                Смотреть каталог
              </Link>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="pf-related">
            <h2 className="pf-related-title">Похожие проекты</h2>
            <div className="pf-related-grid">
              {related.map((r) => (
                <Link key={r.slug} href={`/portfolio/${r.slug}`} className="pf-card">
                  <div className="pf-card-img">
                    <div className="pf-card-placeholder">
                      <span className="pf-card-placeholder-title">{r.title}</span>
                      <small>Фото проекта</small>
                    </div>
                  </div>
                  <div className="pf-card-overlay">
                    <span className="pf-card-cat">{r.category}</span>
                    <h3 className="pf-card-title">{r.title}</h3>
                    <div className="pf-card-meta">
                      <span>{r.size}</span>
                      <span>·</span>
                      <span>{r.material}</span>
                    </div>
                    <span className="pf-card-more">Подробнее →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
