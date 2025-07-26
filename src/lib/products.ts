import { graphqlClient } from "./graphqlClient";
import { gql } from "graphql-request";
import { Product, RawProduct } from "@/types";
import { mapProduct } from "@/lib/utils/mapProduct";

export type ProductByHandleResponse = {
   product: RawProduct;
};

export async function getProductByHandle(
   handle: string
): Promise<Product | null> {
   const query = gql`
      query GetProductByHandle($handle: String!) {
         product(handle: $handle) {
            handle
            title
            description
            variants(first: 1) {
               edges {
                  node {
                     price {
                        amount
                        currencyCode
                     }
                  }
               }
            }
            images(first: 1) {
               edges {
                  node {
                     url
                  }
               }
            }
         }
      }
   `;

   try {
      const variables = { handle };
      const response = await graphqlClient.request<ProductByHandleResponse>(
         query,
         variables
      );

      return mapProduct(response.product);
   } catch (error) {
      console.error("Failed to fetch product by handle:", error);
      return null;
   }
}

export async function getCollectionByHandle(
   handle: string,
   limit: number = 10
): Promise<Product[] | null> {
   const query = gql`
      query GetCollectionByHandle($handle: String!, $limit: Int!) {
         collectionByHandle(handle: $handle) {
            title
            handle
            description
            products(first: $limit) {
               edges {
                  node {
                     handle
                     title
                     description
                     variants(first: 1) {
                        edges {
                           node {
                              price {
                                 amount
                                 currencyCode
                              }
                           }
                        }
                     }
                     images(first: 1) {
                        edges {
                           node {
                              url
                           }
                        }
                     }
                  }
               }
            }
         }
      }
   `;

   try {
      const variables = { handle, limit };
      const response = await graphqlClient.request<{
         collectionByHandle: { products: { edges: { node: RawProduct }[] } };
      }>(query, variables);

      return response.collectionByHandle.products.edges.map((edge) =>
         mapProduct(edge.node)
      );
   } catch (error) {
      console.error("Failed to fetch collection:", error);
      return null;
   }
}

export async function getAllProducts(
   limit: number = 10
): Promise<Product[] | null> {
   const query = gql`
      query GetAllProducts($limit: Int!) {
         products(first: $limit) {
            edges {
               node {
                  handle
                  title
                  description
                  variants(first: 1) {
                     edges {
                        node {
                           price {
                              amount
                              currencyCode
                           }
                        }
                     }
                  }
                  images(first: 1) {
                     edges {
                        node {
                           url
                        }
                     }
                  }
               }
            }
         }
      }
   `;

   try {
      const variables = { limit };
      const response = await graphqlClient.request<{
         products: { edges: { node: RawProduct }[] };
      }>(query, variables);

      return response.products.edges.map((edge) => mapProduct(edge.node));
   } catch (error) {
      console.error("Failed to fetch all products:", error);
      return null;
   }
}
