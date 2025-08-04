"use client";

import { useParams } from "next/navigation";
import { ArticlePage } from "@/components/pages/ArticlePage";
import { useArticlesStore } from "@/lib/store";
import { useEffect } from "react";

export default function Page() {
   const params = useParams();
   const handle = params.handle as string;

   const { articles } = useArticlesStore();

   useEffect(() => {
      const article = articles.find((a) => (a.handle = handle));
      const title = article?.title;

      document.title = `${title} - News`;
   });

   return <ArticlePage handle={handle} />;
}
