import type { Metadata } from "next";
import { archivoFont, chillaxFont, jetBrainsMono } from "../lib/fonts";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import "./globals.css";

export const metadata: Metadata = {
   title: "Ballamas Shop",
   description: "Your online shop for fashionable llamas",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${archivoFont.variable} ${chillaxFont.variable} ${jetBrainsMono.className} antialiased`}
         >
            <Navbar />
            <main className="min-h-screen flex flex-col px-5 md:px-11.5 xl:px-30">
               {children}
            </main>
            <Footer />
         </body>
      </html>
   );
}
