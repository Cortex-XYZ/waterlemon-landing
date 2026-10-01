import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const jakarta = localFont({
  variable: "--font-jakarta",
  src: "./fonts/PlusJakartaSans-latin.woff2",
  weight: "200 800",
});

const montreal = localFont({
  variable: "--font-montreal",
  src: [
    { path: "./fonts/PPNeueMontreal-Book.woff", weight: "400", style: "normal" },
    { path: "./fonts/PPNeueMontreal-Medium.woff", weight: "500", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: {
    default: "WaterLeMON · Coming soon",
    template: "%s · WaterLeMON",
  },
  description:
    "Investing, made clearer. Leave your email and we’ll let you know the day WaterLeMON opens.",
};

export const viewport: Viewport = {
  themeColor: "#f8f4ec",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} ${montreal.variable}`}>
      <body className="relative flex min-h-dvh flex-col overflow-x-clip">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
