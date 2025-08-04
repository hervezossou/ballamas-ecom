"use client"

import { useRouter } from "next/navigation"
import { Article } from "@/types"
import { formatDate } from "@/lib/utils"

interface ArticleCardProps {
    article: Article
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
    const router = useRouter();

    return(
        <div 
            className="w-full h-60 flex flex-col items-start gap-3 bg-b-white shadow-md p-8 group cursor-pointer" 
            onClick={() => router.push(`/news/${article.handle}`)}
        >
            <h3 className="font-archivo font-semibold text-b-black text-base group-hover:underline md:text-lg lg:text-3xl">
                {article.title}
            </h3>
            <span className="font-medium font-archivo text-sm text-b-dark-gray md:text-base">
                {`${formatDate(String(article.publishedAt))}`}
            </span>
            <p className="font-archivo text-sm text-justify md:text-base lg:text-lg">
                {article.excerpt}
            </p>
        </div>
    )
}