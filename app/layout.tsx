import type { Metadata } from "next";
import "./globals.css";
import { headingFont, bodyFont } from "./fonts";
import Script from "next/script";

export const metadata: Metadata = {
  title: "GlowTap - Daily Devotional & Bible Game",
  description: "Collect devotional cards, get closer to God, and learn about the bible. Create custom devotionals based on your problems or blessings. Track and improve your mood with the Bible.",
  icons: {
    icon: "/Assets/appicon11.jpg",
    apple: "/Assets/appicon11.jpg",
    shortcut: "/Assets/appicon11.jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`} suppressHydrationWarning>
      <body className={bodyFont.className} suppressHydrationWarning>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '688496480971907');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=688496480971907&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
