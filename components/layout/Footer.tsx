import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-4">Каталог</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/catalog/kuhni" className="hover:text-white">Кухни</Link></li>
            <li><Link href="/catalog/shkafy" className="hover:text-white">Шкафы</Link></li>
            <li><Link href="/catalog/gostinaya" className="hover:text-white">Гостиные</Link></li>
            <li><Link href="/catalog/spalnya" className="hover:text-white">Спальни</Link></li>
            <li><Link href="/catalog/detskaya" className="hover:text-white">Детские</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Компания</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/kak-my-rabotaem" className="hover:text-white">Как мы работаем</Link></li>
            <li><Link href="/portfolio" className="hover:text-white">Портфолио</Link></li>
            <li><Link href="/otzyvy" className="hover:text-white">Отзывы</Link></li>
            <li><Link href="/aksii" className="hover:text-white">Акции</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Полезно</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/materialy" className="hover:text-white">Материалы</Link></li>
            <li><Link href="/dizajner" className="hover:text-white">3D-проект</Link></li>
            <li><Link href="/blog" className="hover:text-white">Блог</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Контакты</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="tel:+7XXXXXXXXXX" className="hover:text-white">+7 (XXX) XXX-XX-XX</a></li>
            <li><a href="mailto:info@example.ru" className="hover:text-white">info@example.ru</a></li>
            <li>г. Город, ул. Улица, д. X</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-sm text-gray-500">
        © {new Date().getFullYear()} Мебель на заказ. Все права защищены.
      </div>
    </footer>
  );
}
