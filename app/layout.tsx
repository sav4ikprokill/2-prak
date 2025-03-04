import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shader/header";

const nunito = Nunito({
  variable: "--font-geist-sans",
  subsets: ["cyrillic"],
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Next proekt | Главная",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <main className="nin-h-screen">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
