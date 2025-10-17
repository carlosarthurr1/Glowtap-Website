import type { Metadata } from "next";
import "./globals.css";
import { headingFont, bodyFont } from "./fonts";

export const metadata: Metadata = {
  title: "Verso - Daily Devotional & Bible Game",
  description: "Collect devotional cards, get closer to God, and learn about the bible. Create custom devotionals based on your problems or blessings. Track and improve your mood with the Bible.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    shortcut: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`} suppressHydrationWarning>
      <body className={bodyFont.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
