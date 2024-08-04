import { Inter, Pixelify_Sans } from "next/font/google";
import "./globals.css";
const pixel = Pixelify_Sans({ subsets: ["latin"], variable: "--font-pixel" });

export const metadata = {
  title: "Avi's PortFolio",
  description: "Welcome to my website",
  icon: "/logo.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href={metadata.icon} />
      <body className={pixel.variable}>{children}</body>
    </html>
  );
}
