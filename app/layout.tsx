import "./globals.css";
import Lenify from "@/hooks/Lenis";
import type { Metadata } from "next";
import "aos/dist/aos.css";

export const metadata: Metadata = {
  title: "Abdul-Azeez Ahmed",
  description: "Abdul-Azeez Ahmed's Software Engineer Portfolio",
  applicationName: "Software Engineer Portfolio",
  // authors: { name: "Abdul-Azeez Ahmed", url: "https://www.niyo.co" },
  keywords: [
    "Porfolio",
    "Frontend Developer",
    "Frontend Engineer",
    "Backend Developer",
    "Backend Engineer",
    "Software Engineer",
    "Software Developer",
    "Fullstack Developer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Lenify>{children}</Lenify>
      </body>
    </html>
  );
}
