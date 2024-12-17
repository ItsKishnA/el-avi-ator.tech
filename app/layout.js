import { Inter, Pixelify_Sans } from "next/font/google";
import "./globals.css";

const pixel = Pixelify_Sans({ subsets: ["latin"], variable: "--font-pixel" });

export const metadata = {
  title: "Avi's PortFolio",
  description:
    "Explore my work in web development, including various certifications and technical skills.",
  icon: "Logo.ico",
  keywords: [
    "portfolio",
    "avi mahajan",
    "web development",
    "certifications",
    "technical skills",
    "next.js",
    "vercel",
  ],
  url: "https://el-avi-ator.com",
  image: "/images/Myself.jpeg",
  og: {
    title: "Avi's Portfolio",
    description:
      "Explore my work in web development, including various certifications and technical skills.",
    image: "/images/Myself.jpeg",
    type: "website",
    url: "https://el-avi-ator.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/Logo.svg" />
      <body className={`${pixel.variable}`}>
        {/* <div className="custom-cursor" /> */}
        {children}
      </body>
    </html>
  );
}
