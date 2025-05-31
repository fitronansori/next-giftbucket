import type { Metadata } from "next";
import { Great_Vibes, Inter } from "next/font/google";

import { ThemeProvider } from "@/components/provider/theme-provider";

import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Gift Bucket",
  description: "Gift Bucket Unik untuk Semua Momen Spesial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={cn("antialiased", inter.variable, greatVibes.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
