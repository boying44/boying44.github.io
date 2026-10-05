import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Boying Tang | Software Engineering & Consulting",
  description:
    "Seattle-based software engineer building thoughtful web products, dependable APIs, and better delivery systems. Explore work across Amazon, Aerware, and NYU IT.",
  icons: {
    icon: [
      { url: "/brand/bt-mark.svg", type: "image/svg+xml" },
      { url: "/brand/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/brand/apple-touch-icon.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
