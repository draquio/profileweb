import type { Metadata } from "next";
import css from "./globals.module.scss"

import { Header } from "@/components/shared/header/Header";
import { Footer } from "@/components/shared/footer/Footer";

const title = "Profile Card Website";
const description = "Página web de prueba técnica sobre una web profile card con animación y testing";
export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: "profile, perfil, profile web, perfil web, prueba tecnica",
  icons: {
    icon: [
      "/favicon.ico"
    ],
    apple: [
      "/favicon.ico"
    ],
    shortcut: [
      "/favicon.ico"
    ]
  },
  openGraph: {
    title: title,
    description: description,
    siteName: title,
    images: [
      {
        url: '/profile_m.webp', 
        width: 800,
        height: 600,
        alt: title
      },
      {
        url: '/profile_b.webp',
        width: 1800,
        height: 1600,
        alt: title,
      },
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    creator: 'Ing. Sergio Mercado',
    images: ['profile_m.webp'], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={css.body}>
        <Header />
        <main className={css.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
