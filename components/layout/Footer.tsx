import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-heading">Каталог</div>
          <ul className="footer-links">
            <li><Link href="/catalog/kuhni">Кухни</Link></li>
            <li><Link href="/catalog/shkafy">Шкафы</Link></li>
            <li><Link href="/catalog/gostinaya">Гостиные</Link></li>
            <li><Link href="/catalog/spalnya">Спальни</Link></li>
            <li><Link href="/catalog/detskaya">Детские</Link></li>
            <li><Link href="/catalog/prihozhaya">Прихожие</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-heading">Компания</div>
          <ul className="footer-links">
            <li><Link href="/kak-my-rabotaem">Как мы работаем</Link></li>
            <li><Link href="/portfolio">Портфолио</Link></li>
            <li><Link href="/otzyvy">Отзывы</Link></li>
            <li><Link href="/aksii">Акции</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-heading">Полезно</div>
          <ul className="footer-links">
            <li><Link href="/materialy">Материалы</Link></li>
            <li><Link href="/dizajner">3D-проект</Link></li>
            <li><Link href="/blog">Блог</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-heading">Контакты</div>
          <ul className="footer-links">
            <li><a href="tel:+7XXXXXXXXXX">+7 (XXX) XXX-XX-XX</a></li>
            <li><a href="mailto:info@example.ru">info@example.ru</a></li>
            <li><span>г. Город, ул. Улица, д. X</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} МебельНаЗаказ. Все права защищены.
      </div>
    </footer>
  );
}