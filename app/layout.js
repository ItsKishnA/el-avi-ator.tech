import { Inter, Pixelify_Sans } from "next/font/google";
import "./globals.css";

const pixel = Pixelify_Sans({ subsets: ["latin"], variable: "--font-pixel" });

export const metadata = {
  title: "Avi's PortFolio",
  description:
    "Avi's Portfolio website made using Next.js as well as hosted on vercel",
  icon: "Logo.ico",
  keywords: [
    "portfolio",
    "avi mahajan",
    "avi portfolio",
    "avi mahajan portfolio",
    "el-avi-ator",
    "elaviator",
    "el.avi.ator",
    "avi mahajan website",
    "avi mahajan portfolio website",
    "avi mahajan portfolio website next.js",
    "avi mahajan portfolio website next.js vercel",
    "avi mahajan portfolio website next.js vercel hosted",
    "avi mahajan portfolio website next.js vercel hosted on vercel",
  ],
  url: "https://el-avi-ator.com",
  image: "/images/Myself.jpeg",
  og: {
    title: "Avi's Portfolio",
    description:
      "Avi's Portfolio website made using Next.js as well as hosted on vercel",
    image: "/images/Myself.jpeg",
    type: "website",
    url: "https://el-avi-ator.com",
  },
  visualViewport: {
    width: "device-width",
    height: "device-height",
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1,
    userScalable: "no",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/Logo.svg" />
      <body className={pixel.variable}>{children}</body>
    </html>
  );
}
