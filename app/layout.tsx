import type { Metadata } from "next";
import "./globals.css";
import { headingFont, bodyFont } from "./fonts";
import Script from "next/script";

export const metadata: Metadata = {
  title: "GlowTap - AI Headshot Editor | Professional Photos in Seconds",
  description: "Transform any selfie into studio-quality professional headshots with AI. Create LinkedIn photos, dating profile pictures, social media content, and aesthetic portraits instantly. Download free on iOS.",
  keywords: ["AI headshot", "professional photos", "headshot generator", "AI portrait", "LinkedIn photo", "dating photos", "selfie editor"],
  icons: {
    icon: "/Assets/appicon11.jpg",
    apple: "/Assets/appicon11.jpg",
    shortcut: "/Assets/appicon11.jpg"
  },
  openGraph: {
    title: "GlowTap - AI Headshot Editor",
    description: "Professional headshots in seconds, not days. Transform selfies into studio-quality portraits with AI.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GlowTap - AI Headshot Editor",
    description: "Professional headshots in seconds, not days. Transform selfies into studio-quality portraits with AI.",
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
