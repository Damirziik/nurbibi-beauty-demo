import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://nurbibi-beauty-demo.vercel.app"),
  title: "Nurbibi Beauty Studio — салон красоты в Каскелене",
  description:
    "Макияж, волосы, ногти, брови и ресницы в Nurbibi Beauty Studio. Каскелен, Наурызбай батыра, 25. Запись в WhatsApp.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Nurbibi Beauty Studio",
    description: "Пространство стиля и гармонии в Каскелене.",
    type: "website",
    locale: "ru_RU",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nurbibi Beauty Studio",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
