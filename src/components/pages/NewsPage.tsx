"use client";

import { useState, useEffect } from "react";
import { getAllArticles } from "@/lib/articles";
import { ArticleCard } from "../molecules/ArticleCard";
import { useArticlesStore } from "@/lib/store";

export const NewsPage = () => {
   const [isLoading, setIsLoading] = useState(true);
   const { articles, setArticles } = useArticlesStore();

   useEffect(() => {
      const fetchArticles = async () => {
         try {
            setIsLoading(true);
            const fetchedArticles = await getAllArticles(10);
            if (fetchedArticles) {
               setArticles(fetchedArticles);
               setIsLoading(false);
               console.log(articles);
            }
         } catch (error) {
            console.error("Error while fetching articles", error);
         } finally {
            setIsLoading(false);
         }
      };

      fetchArticles();
   }, [isLoading, articles, setArticles]);

   return (
      <section className="h-auto w-full flex flex-col items-start justify-between gap-4 py-8 md:gap-8 lg:py-12">
         <h2 className="font-archivo font-bold text-2xl lg:text-4xl">
            Latest News
         </h2>
         <div className="w-full flex items-start justify-between gap-4 md:gap-12">
            {articles.map((article) => (
               <ArticleCard key={article.handle} article={article} />
            ))}
         </div>
      </section>
   );
};
