import { Metadata } from "next";
import { NewsPage } from "@/components/pages/NewsPage";

export const metadata: Metadata = {
   title: "Latest News | Ballamas",
   description: "Stay up to date with latest news.",
};

export default async function Page() {
   return <NewsPage />
}
