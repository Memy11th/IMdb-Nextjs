import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "./Providers";
import Header from "@/components/Header";
import Searchbar from "@/components/Searchbar";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "IMdb clone",
  description: "this is a non-profit project clonning imdb for a movie review database",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppRouterCacheProvider>

        <Providers>
        <Navbar/>
        <Header/>
        <Searchbar/>
        {children}
        </Providers>
        </AppRouterCacheProvider>

      </body>
    </html>
  );
}
