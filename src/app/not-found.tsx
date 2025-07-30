import { NotFoundPage } from "@/components/pages/NotFoundPage";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Page Not Found",
   description: "The requested page doesn't exist.",
};

export default function NotFound() {
   return <NotFoundPage />;
}
