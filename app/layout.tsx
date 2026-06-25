// app/layout.tsx

import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const siteName = "Sudipto Panda, Advocate";
const siteDescription =
  "Professional website of Sudipto Panda, Advocate, Calcutta High Court.";

export const metadata: Metadata = {
  metadataBase: new URL("https://advocatesudiptopanda.in"),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: "Sudipto Panda" }],
  creator: "Sudipto Panda",
  publisher: "Sudipto Panda",
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: "https://advocatesudiptopanda.in",
    siteName,
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7f1d1d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className="min-h-screen bg-stone-50 font-serif text-slate-900 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-red-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>

        <div className="flex min-h-screen flex-col">
          <Header />

          <main id="main-content" className="flex-1">
            {children}
          </main>

          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}