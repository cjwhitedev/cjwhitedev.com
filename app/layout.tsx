import type { Metadata } from "next";
import { Open_Sans, Lora } from "next/font/google";
import "@/EngineDS/main.css";
import { RevealFallback } from "@/EngineDS/_Foundations/motion/RevealFallback";
import { SmoothScroll } from "@/EngineDS/_Foundations/motion/SmoothScroll";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cjwhitedev.com"),
  title: "CJ White",
  description: "Web Developer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${openSans.variable} ${lora.variable}`}>
      <body>
        <SmoothScroll />
        <RevealFallback />
        {children}
      </body>
    </html>
  );
}
