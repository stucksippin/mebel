interface Crumb { label: string; href?: string; }

export function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const base = "https://your-domain.ru";
  const crumbs = [
    { "@type": "ListItem", position: 1, name: "Главная", item: base },
    ...items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 2,
      name: item.label,
      ...(item.href ? { item: `${base}${item.href}` } : {}),
    })),
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: crumbs,
        }),
      }}
    />
  );
}

export default function JsonLd({ type }: { type: "LocalBusiness" | "Product" }) {
  const schemas: Record<string, object> = {
    LocalBusiness: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Название компании",
      description: "Мебель на заказ в [Город]",
      url: "https://your-domain.ru",
      telephone: "+7XXXXXXXXXX",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ул. Улица, д. X",
        addressLocality: "Город",
        addressCountry: "RU",
      },
      openingHours: "Mo-Sa 09:00-19:00",
      priceRange: "₽₽",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas[type]) }}
    />
  );
}
