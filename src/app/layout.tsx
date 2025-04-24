import { Geist, Geist_Mono, Sawarabi_Mincho } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { LenisScroll } from "@/components/lenis/lenis-wrapper";
import Header from "@/components/layout/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

const swarabiMincho = Sawarabi_Mincho({
  variable: "--font-swarabi-mincho",
  weight: "400",
  subsets: ["latin"]
});

const basisGrotesque = localFont({
  variable: "--font-basis-grotesque",
  src: [
    {
      path: "../fonts/BasisGrotesqueArabicPro-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../fonts/BasisGrotesqueArabicPro-Light.ttf",
      weight: "300",
      style: "normal"
    },
    {
      path: "../fonts/BasisGrotesqueArabicPro-Medium.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "../fonts/BasisGrotesqueArabicPro-Bold.ttf",
      weight: "700",
      style: "normal"
    },
    {
      path: "../fonts/BasisGrotesqueArabicPro-Black.ttf",
      weight: "900",
      style: "normal"
    }
  ]
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${basisGrotesque.variable} ${swarabiMincho.variable}  antialiased`}
      >
        <LenisScroll>
          {/* Logo or Site Name */}
          <Header />
          {children}
        </LenisScroll>
      </body>
    </html>
  );
}
