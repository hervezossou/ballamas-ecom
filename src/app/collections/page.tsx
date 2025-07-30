import { CollectionsPage } from "@/components/pages/CollectionsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Our Collections",
   description: "Discover all our collections of products.",
};

export default function Page() {
   return <CollectionsPage />;
}
