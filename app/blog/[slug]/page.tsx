import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogPost } from "@/data/blog";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.categorySlug === post.categorySlug && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="blog-post-page">
      {/* Hero */}
      <div className="blog-post-hero">
        <div className="container">
          <Breadcrumbs items={[
            { label: "Блог", href: "/blog" },
            { label: post.category, href: "/blog" },
            { label: post.title },
          ]} />
          <div className="blog-post-hero-meta">
            <span className="blog-post-cat">{post.category}</span>
            <span className="blog-post-date">{post.date}</span>
            <span className="blog-post-read">{post.readTime} чтения</span>
          </div>
          <h1 className="blog-post-title">{post.title}</h1>
          <p className="blog-post-excerpt">{post.excerpt}</p>
        </div>
      </div>

      {/* Main img */}
      <div className="container">
        <div className="blog-post-main-img">
          <div className="blog-post-img-placeholder">
            <span>{post.title}</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="blog-post-layout">
          {/* Content */}
          <article className="blog-post-content">
            {post.content.map((section, i) => {
              if (section.type === "heading") {
                return <h2 key={i} className="blog-content-heading">{section.content}</h2>;
              }
              if (section.type === "text") {
                return <p key={i} className="blog-content-text">{section.content}</p>;
              }
              if (section.type === "tip") {
                return (
                  <div key={i} className="blog-content-tip">
                    <span className="blog-tip-icon">💡</span>
                    <p>{section.content}</p>
                  </div>
                );
              }
              if (section.type === "list") {
                return (
                  <ul key={i} className="blog-content-list">
                    {section.items?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}

            {/* Tags */}
            <div className="blog-post-tags">
              <span className="blog-tag">{post.category}</span>
              <span className="blog-tag">Мебель на заказ</span>
              <span className="blog-tag">Советы</span>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="blog-post-sidebar">
            {/* CTA */}
            <div className="blog-sidebar-cta">
              <p className="blog-sidebar-cta-label">Нужна мебель?</p>
              <h3 className="blog-sidebar-cta-title">Бесплатный расчёт за 30 минут</h3>
              <p className="blog-sidebar-cta-desc">Оставьте заявку — замер и 3D-проект бесплатно.</p>
              <a href="/#zayavka" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Оставить заявку
              </a>
              <a href="tel:+7XXXXXXXXXX" className="blog-sidebar-phone">+7 (XXX) XXX-XX-XX</a>
            </div>

            {/* Related */}
            {related.length > 0 && (
              <div className="blog-sidebar-related">
                <div className="blog-sidebar-related-title">Читайте также</div>
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="blog-sidebar-related-item">
                    <div className="blog-sidebar-related-img">
                      <span>{r.category}</span>
                    </div>
                    <div>
                      <div className="blog-sidebar-related-cat">{r.category}</div>
                      <div className="blog-sidebar-related-name">{r.title}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* All posts */}
            <div className="blog-sidebar-all">
              <Link href="/blog" className="btn-outline" style={{ width: "100%", justifyContent: "center" }}>
                Все статьи
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}