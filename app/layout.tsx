import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from "@/components/theme-provider";

const neutralFace = localFont({
  src: [
    {
      path: './font/NeutralFace.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/NeutralFace-Bold.otf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-neutral-face',
});

export const metadata: Metadata = {
  title: "Shopping Assistant",
  description: "Your personal shopping companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
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