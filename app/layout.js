import { Inter, Pixelify_Sans } from "next/font/google";
import "./globals.css";

const pixel = Pixelify_Sans({ subsets: ["latin"], variable: "--font-pixel" });

export const metadata = {
  title: "Avi's PortFolio",
  description: "Welcome to my website",
  icon: "/logo.svg",
};

const UnderDevStrip = () => {
  return (
    <div class="stripContainer">
      <div class="strip">
        This website is under development. Stay tuned for updates!
      </div>
    </div>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <>
        <link rel="icon" href={metadata.icon} />
        <UnderDevStrip />
        <body className={pixel.variable}>{children}</body>
      </>
    </html>
  );
}

const styles = {
  stripContainer: {
    position: "relative",
    // top: 0,
    width: "100%",
    backgroundColor: "#f44336",
    color: "red",
    textAlign: "center",
    zIndex: 1000,
    overflow: "hidden",
  },
  strip: {
    padding: "1rem",
    color: "red",
  },
};
