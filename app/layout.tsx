import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Deckart - Une mémoire d'éléphant",
  description:
    "Deckart utilise la science cognitive pour optimiser la mémorisation et permettre aux élèves d'apprendre plus efficacement.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Deckart",
  },
  other: {
    "google-play-app": "app-id=com.cle.deckart",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/assets/deckart.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mende+Kikakui&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
          rel="stylesheet"
        />
        <meta name="apple-itunes-app" content="app-id=6702029675" />
      </head>
      <body className={nunito.className}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
