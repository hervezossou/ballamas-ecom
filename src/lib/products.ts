import { graphqlClient } from "./graphqlClient";
import { gql } from "graphql-request";
import { Product, RawProduct, Collection } from "@/types";
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

type CollectionByHandleRequest = {
   title: string;
   handle: string;
   description: string;
   image: {
      url: string
   }
   products: {
      edges: {
         node: RawProduct;
      }[]
   };
}

type CollectionByHandleResponse = {
   title: string;
   handle: string;
   description: string;
   image: {
      url: string
   }
   products: Product[];
}

export async function getCollectionByHandle(
   handle: string,
   limit: number = 10
): Promise<CollectionByHandleResponse | null> {
   const query = gql`
      query GetCollectionByHandle($handle: String!, $limit: Int!) {
         collectionByHandle(handle: $handle) {
            title
            handle
            description
            image {
               url
            }
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
         collectionByHandle: CollectionByHandleRequest;
      }>(query, variables);

      const collection = response.collectionByHandle;
      return {
         title: collection.title,
         handle: collection.handle,
         description: collection.description,
         image: collection.image,
         products: collection.products.edges.map((edge) => mapProduct(edge.node)),
      };
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

export const getAllCollections = async (
   limit: number = 10
): Promise<Collection[] | null> => {
   const query = gql`
      query GetAllCollections($limit: Int!) {
         collections(first: $limit) {
            edges {
               cursor
               node {
                  handle
                  title
                  description
                  image {
                     url
                  }
               }
            }
         }
      }
   `;

   try {
      const variables = { limit };
      const response = await graphqlClient.request<{
         collections: { edges: { node: Collection }[] };
      }>(query, variables);

      return response.collections.edges.map((edge) => edge.node);
   } catch (error) {
      console.error("Failed to fetch all collections:", error);
      return null;
   }
};
