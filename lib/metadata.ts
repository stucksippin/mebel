import type { Metadata } from "next";

const BASE_URL = "https://your-domain.ru";
const SITE_NAME = "Название компании";

export function buildMetadata(override: Partial<Metadata> & { title: string; description: string }): Metadata {
  return {
    ...override,
    metadataBase: new URL(BASE_URL),
    openGraph: {
      title: override.title,
      description: override.description,
      siteName: SITE_NAME,
      locale: "ru_RU",
      type: "website",
    },
    alternates: {
      canonical: override.alternates?.canonical,
    },
  };
}
