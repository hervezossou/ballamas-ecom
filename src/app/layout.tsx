import type { Metadata } from "next";
import { archivoFont, chillaxFont } from "../lib/fonts";
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
            className={`${archivoFont.variable} ${chillaxFont.variable} antialiased`}
         >
            {children}
         </body>
      </html>
   );
}
