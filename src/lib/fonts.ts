import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";

export const archivoFont = localFont({
   src: "../../public/fonts/Archivo-Variable.woff2",
   variable: "--font-archivo",
   display: "swap",
});

export const chillaxFont = localFont({
   src: "../../public/fonts/Chillax-Variable.woff2",
   variable: "--font-chillax",
   display: "swap",
});

export const jetBrainsMono = JetBrains_Mono({
   subsets: ["latin"],
   variable: "--font-jetbrains-mono",
   display: "swap",
});
