import type { Metadata } from "next";
import { Jura, Slabo_13px, Andika } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

const jura = Jura({
  variable: "--font-jura",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const slabo = Slabo_13px({
  variable: "--font-slabo",
  subsets: ["latin"],
  weight: "400",
});

const andika = Andika({
  variable: "--font-andika",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Unit.Cloud - IT Service Excellence",
  description: "Reibungslos. Kompetent. Ihr Partner für IT-Services, Sicherheit, TK Services und Multi Cloud Services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jura.variable} ${slabo.variable} ${andika.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
