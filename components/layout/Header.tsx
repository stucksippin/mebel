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
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">Мебель на заказ</Link>
        <nav className="hidden md:flex gap-6">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-black transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <a href="tel:+7XXXXXXXXXX" className="text-sm font-medium">+7 (XXX) XXX-XX-XX</a>
      </div>
    </header>
  );
}
