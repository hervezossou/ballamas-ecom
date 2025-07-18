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
