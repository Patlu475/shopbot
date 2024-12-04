import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Sidebar } from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

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
  <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>

      
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
            <Sidebar />
              {children} 
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
   
  
  );
}