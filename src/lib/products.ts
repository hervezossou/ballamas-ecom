import { graphqlClient } from "./graphqlClient";
import { gql } from "graphql-request";
import { Product, RawProduct } from "@/types";
import { mapProduct } from "@/lib/utils/mapProduct";

export type GetProductByIdResponse = {
   product: RawProduct;
};

export async function getProductById(id: string): Promise<Product | null> {
   const query = gql`
      query GetProductById($id: ID!) {
         product(id: $id) {
            id
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
      const variables = { id };
      const response = await graphqlClient.request<GetProductByIdResponse>(
         query,
         variables
      );

      //if (!response.product) return null;

      return mapProduct(response.product);
   } catch (error) {
      console.error("Failed to fetch product:", error);
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
                     id
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
                  id
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
