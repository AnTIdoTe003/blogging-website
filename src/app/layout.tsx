// "use client"

import React, { useContext } from "react";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { ThemeContext } from "@/context/ThemeContext";
import { Metadata } from "next";
import Head from "next/head";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
const poppins = Poppins({ weight: ["500", "700"], subsets: ["latin"] });

export const metadata:Metadata = {
  title: "theEngineerGuy",
  description: "The best blogging website",
};
<Head>
  <title>theEngineerGuy</title>
</Head>

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider>
          <AuthProvider>
        <Navbar/>
        {children}
        <Footer/>
          </AuthProvider>
        </ThemeProvider>
        </body>
    </html>
  );
}
