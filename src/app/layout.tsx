import type { Metadata } from "next";
import { Oswald } from "next/font/google"; /* change the font */
import { Header } from "app/components/shared/Header";
import { Footer } from "app/components/shared/Footer";
import "app/sass/global.scss"
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "500"]
});

export const metadata: Metadata = {
  title: "Future world",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
