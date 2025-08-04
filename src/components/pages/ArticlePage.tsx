"use client";

import { useArticlesStore } from "@/lib/store";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";

interface ArticlePageProps {
   handle: string;
}

export const ArticlePage = ({ handle }: ArticlePageProps) => {
   const { articles } = useArticlesStore();
   const article = articles.find((a) => a.handle === handle);

   if (!article) {
      return notFound();
   }

   return (
      <section className="mx-auto max-w-5xl flex flex-col items-start gap-4 py-8 lg:py-12 lg:gap-8">
         <div className="flex flex-col items-start gap-1">
            <h1 className="font-archivo font-bold text-xl md:text-2xl lg:text-4xl">
               {article?.title}
            </h1>
            <span className="font-medium font-archivo text-sm text-b-dark-gray md:text-base">
               Published : {`${formatDate(String(article?.publishedAt))}`}
            </span>
         </div>
         <article
            className="prose prose-neutral font-archivo prose-p:font-medium prose-h3:text-lg md:prose-h3:text-xl lg:prose-h3:text-2xl prose-p:text-justify prose-p:text-base lg:prose-p:text-lg max-w-5xl"
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
         />
      </section>
   );
};
