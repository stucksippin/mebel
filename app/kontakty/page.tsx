import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Контакты — мебель на заказ в [Город]",
  description: "Адрес шоурума, телефон, email и форма обратной связи. Приезжайте — покажем материалы и обсудим проект.",
};

const contacts = [
  { label: "Телефон", value: "+7 (XXX) XXX-XX-XX", href: "tel:+7XXXXXXXXXX", icon: "📞" },
  { label: "Email", value: "info@example.ru", href: "mailto:info@example.ru", icon: "✉️" },
  { label: "WhatsApp", value: "+7 (XXX) XXX-XX-XX", href: "https://wa.me/7XXXXXXXXXX", icon: "💬" },
];

const details = [
  { label: "Адрес шоурума", value: "г. Город, ул. Улица, д. X" },
  { label: "Режим работы", value: "Пн–Пт: 9:00–19:00, Сб–Вс: 10:00–17:00" },
  { label: "Производство", value: "г. Город, ул. Производственная, д. X" },
  { label: "ИНН / ОГРН", value: "XXXXXXXXXX / XXXXXXXXXXXXX" },
];

export default function KontaktyPage() {
  return (
    <div className="contacts-page">
      {/* Hero */}
      <div className="catalog-hero">
        <div className="container">
          <div className="catalog-hero-inner">
            <p className="catalog-hero-tag">Контакты</p>
            <h1 className="catalog-hero-title">Свяжитесь с нами</h1>
            <p className="catalog-hero-desc">
              Приезжайте в шоурум — покажем материалы и фурнитуру вживую. Или оставьте заявку — перезвоним за 30 минут.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="contacts-layout">
          {/* Left column */}
          <div className="contacts-left">
            {/* Contact cards */}
            <div className="contacts-cards">
              {contacts.map((c) => (
                <a key={c.label} href={c.href} className="contact-card" target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <span className="contact-card-icon">{c.icon}</span>
                  <div>
                    <div className="contact-card-label">{c.label}</div>
                    <div className="contact-card-value">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Map */}
            <div className="contacts-map">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.617617%2C55.755864&z=14&pt=37.617617,55.755864,pm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                title="Наш адрес на карте"
              />
            </div>

            {/* Details */}
            <div className="contacts-details">
              {details.map((d) => (
                <div key={d.label} className="contacts-detail">
                  <span className="contacts-detail-label">{d.label}</span>
                  <span className="contacts-detail-value">{d.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — form */}
          <div className="contacts-right">
            <div className="contacts-form-card">
              <h2 className="contacts-form-title">Оставить заявку</h2>
              <p className="contacts-form-sub">
                Опишите вашу задачу — рассчитаем стоимость и пришлём варианты.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
