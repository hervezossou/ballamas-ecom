"use client";

import { SizeSelector } from "@/components/molecules/ProductSizes";

export default function Home() {
   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <h1 className="text-4xl font-archivo">Archivo</h1>
         <p className="font-chillax text-4xl">Chillax</p>
         <SizeSelector />
      </main>
   );
}
