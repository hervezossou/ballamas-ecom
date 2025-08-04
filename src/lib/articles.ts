import { Article } from "@/types";
import { graphqlClient } from "./graphqlClient";
import { gql } from "graphql-request";

export const getAllArticles = async (
   limit: number = 6
): Promise<Article[] | null> => {
   const query = gql`
      query GetAllArticles($limit: Int!) {
         articles(first: $limit, reverse: true) {
            edges {
               node {
                  id
                  handle
                  title
                  publishedAt
                  excerpt
                  contentHtml
               }
            }
         }
      }
   `;

   try {
      const variables = { limit };
      const response = await graphqlClient.request<{
         articles: { edges: { node: Article }[] };
      }>(query, variables);

      return response.articles.edges.map((edge) => edge.node);
   } catch (error) {
      console.error("Failed to fetch articles:", error);
      return null;
   }
};
