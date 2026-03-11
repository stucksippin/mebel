import Link from "next/link";

const nav = [
  { label: "Каталог", href: "/catalog" },
  { label: "Портфолио", href: "/portfolio" },
  { label: "Материалы", href: "/materialy" },
  { label: "Как мы работаем", href: "/kak-my-rabotaem" },
  { label: "Блог", href: "/blog" },
  { label: "Контакты", href: "/kontakty" },
];

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <Link href="/" className="header-logo">
          МебельНаЗаказ
        </Link>
        <nav className="header-nav">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="header-link">
              {item.label}
            </Link>
          ))}
        </nav>
        <a href="tel:+7XXXXXXXXXX" className="header-phone">
          +7 (XXX) XXX-XX-XX
        </a>
      </div>
    </header>
  );
}