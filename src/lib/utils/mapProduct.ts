import { Product, RawProduct } from "@/types";

export function mapProduct(raw: RawProduct): Product {
   const priceNode = raw.variants.edges[0]?.node.price;
   const imageNode = raw.images.edges[0]?.node;

   return {
      id: raw.id,
      title: raw.title,
      description: raw.description,
      price: {
         amount: Number(priceNode?.amount || 0),
         currencyCode: priceNode?.currencyCode || "CAD",
      },
      featuredImage: {
         url: imageNode?.url || "",
      },
   };
}
