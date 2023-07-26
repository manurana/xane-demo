import { cn } from "@/lib/utils";

import "./globals.css";

import type { Metadata } from "next";
import {
  Space_Grotesk as FontHeading,
  Inter as FontSans,
} from "next/font/google";

import { Toaster } from "@/components/ui/toaster";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
const fontHeading = FontHeading({
  subsets: ["latin"],
  variable: "--font-heading",
});

// TODO: add metadata

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
