import type { Metadata } from "next";
import { Chivo, Open_Sans } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const chivo = Chivo({
  subsets: ["latin"],
  variable: "--font-chivo",
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"], 
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Journey On Wheel | Premium Cab, Taxi & Car Rental Service in North India",
    template: "%s | Journey On Wheels",
  },
  description:
    "Best cab service in Uttar Pradesh & North India. Book reliable outstation cabs, airport transfers, one-way taxis, and luxury car rentals in Lucknow, Varanasi, Ayodhya & more. 24/7 Support.",
  keywords: [
    "Cab booking Uttar Pradesh",
    "Taxi service North India",
    "Airport pickup drop",
    "Outstation cab booking",
    "Car rental Lucknow",
    "Taxi service Varanasi",
    "Cab service Ayodhya",
    "Journey On Wheels",
    "Luxury car rental",
    "Intercity cab service",
    "One way cab service",
    "Round trip taxi",
    "Tempo traveller hire",
    "Wedding car rental",
    "Corporate car rental",
  ],
  authors: [{ name: "Journey On Wheel" }],
  creator: "Journey On Wheel",
  publisher: "Journey On Wheel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Journey On Wheels | Premium Cab & Taxi Service",
    description:
      "Reliable and affordable cab services across North India. Book now for local, outstation, and airport transfers. Luxury cars & Tempo Travellers available.",
    url: "https://journeyonwheel.com",
    siteName: "Journey On Wheels",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo/small.png",
        width: 1200,
        height: 630,
        alt: "Journey On Wheels Cab Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Journey On Wheels | Best Taxi Service in UP",
    description: "Book your ride today! Local, Outstation, and Airport transfers. Best rates guaranteed.",
    images: ["/logo/journeyonwheels-trans-3.4.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo/small.png",
    shortcut: "/logo/small.png",
    apple: "/logo/small.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "Journey On Wheel",
    image: "https://journeyonwheel.com/logo/journeyonwheels-trans-3.4.png",
    description:
      "Premium cab and taxi services in Uttar Pradesh and North India. Offering local, outstation, and airport transfer services. Luxury cars, Sedans, SUVs and Tempo Travellers.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    telephone: "+91-9569210750",
    areaServed: ["Uttar Pradesh", "North India", "North-East India", "Lucknow", "Varanasi", "Ayodhya", "Prayagraj"],
    priceRange: "Start @ ₹999/-",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [
      "https://www.facebook.com/journeyonwheel",
      "https://www.instagram.com/journeyonwheel",
    ]
  };

  return (
    <html lang="en" className={`${chivo.variable} ${openSans.variable} ${poppins.variable} antialiased`}>
      <body
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
