import type { Metadata } from "next";
import { archivoFont, chillaxFont, jetBrainsMono } from "../lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
   title: "Ballamas",
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
            {children}
         </body>
      </html>
   );
}
