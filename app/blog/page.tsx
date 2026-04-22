import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, blogCategories } from "@/data/blog";

export const metadata: Metadata = {
  title: "Блог — советы по мебели на заказ",
  description: "Статьи о выборе материалов, планировке кухонь и шкафов, дизайне интерьера. Полезно перед заказом мебели.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="blog-page">
      <div className="catalog-hero">
        <div className="container">
          <p className="catalog-hero-tag">Блог</p>
          <h1 className="catalog-hero-title">Полезные статьи</h1>
          <p className="catalog-hero-desc">
            Советы по выбору материалов, планировке и уходу за мебелью. Пишем честно и по делу.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Categories */}
        <div className="blog-cats">
          <span className="blog-cat blog-cat--active">Все</span>
          {blogCategories.map((c) => (
            <span key={c.slug} className="blog-cat">{c.name}</span>
          ))}
        </div>

        {/* Featured post */}
        <Link href={`/blog/${featured.slug}`} className="blog-featured">
          <div className="blog-featured-img">
            <div className="blog-featured-img-placeholder">
              <span>{featured.title}</span>
            </div>
          </div>
          <div className="blog-featured-body">
            <div className="blog-featured-meta">
              <span className="blog-post-cat">{featured.category}</span>
              <span className="blog-post-date">{featured.date}</span>
              <span className="blog-post-read">{featured.readTime}</span>
            </div>
            <h2 className="blog-featured-title">{featured.title}</h2>
            <p className="blog-featured-excerpt">{featured.excerpt}</p>
            <span className="blog-featured-link">Читать статью →</span>
          </div>
        </Link>

        {/* Rest grid */}
        <div className="blog-grid">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
              <div className="blog-card-img">
                <div className="blog-card-img-placeholder">
                  <span>{post.category}</span>
                </div>
              </div>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span className="blog-post-cat">{post.category}</span>
                  <span className="blog-post-date">{post.date}</span>
                </div>
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <span className="blog-card-read">{post.readTime} чтения →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}