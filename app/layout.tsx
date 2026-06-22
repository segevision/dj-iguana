import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DJ Iguana | ניסים שגב - DJ לחתונה ואירועים יוקרתיים",
  description: "DJ Iguana - ניסים שגב, DJ מקצועי לחתונות ואירועים יוקרתיים. מוזיקה שיוצרת רגעים בלתי נשכחים. DJ לחתונה, DJ לאירועים, DJ במרכז.",
  keywords: "DJ לחתונה, תקליטן לחתונה, DJ לאירועים, DJ במרכז, DJ יוקרתי, DJ Iguana, ניסים שגב, דיג'יי לחתונה",
  authors: [{ name: "Nissim Segev - DJ Iguana" }],
  creator: "DJ Iguana",
  openGraph: {
    title: "DJ Iguana | ניסים שגב - DJ לחתונה ואירועים יוקרתיים",
    description: "מוזיקה שיוצרת רגעים בלתי נשכחים. DJ מקצועי לחתונות, אירועים פרטיים ואירועי חברות.",
    type: "website",
    locale: "he_IL",
    siteName: "DJ Iguana",
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ Iguana | ניסים שגב",
    description: "מוזיקה שיוצרת רגעים בלתי נשכחים",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "DJ Iguana - ניסים שגב",
              "description": "DJ מקצועי לחתונות ואירועים יוקרתיים",
              "url": "https://djiguana.co.il",
              "telephone": "+972-50-000-0000",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IL",
                "addressRegion": "מרכז"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "32.0853",
                "longitude": "34.7818"
              },
              "openingHours": "Mo-Su 09:00-23:00",
              "priceRange": "₪₪₪",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "31.7683",
                  "longitude": "35.2137"
                },
                "geoRadius": "200000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "שירותי DJ",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DJ לחתונה" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DJ לאירועים פרטיים" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DJ לאירועי חברות" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DJ לפסטיבלים" } }
                ]
              }
            })
          }}
        />
      </head>
      <body className="bg-black text-white overflow-x-hidden">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
