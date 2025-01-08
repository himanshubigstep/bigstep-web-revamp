import type { Metadata } from "next";
import { Poppins, Playfair_Display } from 'next/font/google'
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "BigStep Tech - AI-Driven Product Engineering & Digital Transformation Company",
  description: "BigStep Technologies is an AI-driven Cloud-Native Custom Software Product Development, Data Engineering and Digital Transformation company.",
  openGraph: {
    title: "BigStep Tech - AI-Driven Product Engineering & Digital Transformation Company",
    description: "BigStep Technologies is an AI-driven Cloud-Native Custom Software Product Development, Data Engineering and Digital Transformation company.",
    url: "https://bigsteptech.com/",
    type: "website",
    siteName: "BigStep Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "BigStep Tech - AI-Driven Product Engineering & Digital Transformation Company",
    description: "BigStep Technologies is an AI-driven Cloud-Native Custom Software Product Development, Data Engineering and Digital Transformation company.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.variable}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
