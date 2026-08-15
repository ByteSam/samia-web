import type { Metadata } from "next";
import { Instrument_Serif, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ScrollIndicator from "@/components/ScrollIndicator";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import FundadorProvider from "@/components/FundadorProvider";
import { SITE_URL } from "@/lib/site";
import { WHATSAPP_NUMBER } from "@/lib/contact";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-wordmark",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "afynova — Asistentes de WhatsApp con IA para negocios en Perú",
    template: "%s | afynova",
  },
  description:
    "Automatización y agentes de IA por WhatsApp para pymes peruanas. Menos ausencias, más clientes, configurado en días. Precios en soles.",
};

// Schema.org — solo datos reales y verificables: empresa, área de servicio, contacto.
// Sin redes sociales (no hay perfiles verificados todavía) ni métricas inventadas.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "afynova",
  url: SITE_URL,
  logo: `${SITE_URL}/opengraph-image`,
  description:
    "Automatización y agentes de IA por WhatsApp para pymes peruanas. Implementación directa, con diagnóstico gratuito.",
  areaServed: "PE",
  telephone: `+${WHATSAPP_NUMBER}`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${WHATSAPP_NUMBER}`,
    contactType: "customer service",
    areaServed: "PE",
    availableLanguage: "Spanish",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${instrumentSerif.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-sand text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <FundadorProvider>
          <Header />
          <ScrollIndicator />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <AnalyticsProvider />
        </FundadorProvider>
      </body>
    </html>
  );
}
