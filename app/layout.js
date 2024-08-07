import { Inter, Pixelify_Sans } from "next/font/google";
import "./globals.css";

const pixel = Pixelify_Sans({ subsets: ["latin"], variable: "--font-pixel" });

export const metadata = {
  title: "Avi's PortFolio",
  description: "Open to Work as an Online Intern",
  icon: "/logo.svg",
  // url: "https://el-avi-ator.github.io",
  image: "/images/Myself.jpeg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pixel.variable}>{children}</body>
    </html>
  );
}
