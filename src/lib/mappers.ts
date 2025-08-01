import {
   Product,
   RawProduct,
   CartItem,
   ProductSize,
   ProductColor,
   RawProductRecommendation,
   ProductRecommendation,
} from "@/types";

// An utility function that map a RawProduct to fit a Product
export function mapProduct(raw: RawProduct): Product {
   const priceNode = raw.variants.edges[0]?.node.price;
   const imageNode = raw.images.edges[0]?.node;

   return {
      id: raw.id,
      handle: raw.handle,
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

// An utility function that map a product to fit an item in the cart
export const mapProductToCartItem = (
   product: Product,
   quantity: number,
   size: ProductSize,
   color: ProductColor
): CartItem => {
   return {
      id: product.id,
      handle: product.handle,
      title: product.title,
      color,
      size,
      price: {
         amount: Number(product.price.amount),
         currency: product.price.currencyCode,
      },
      featuredImage: {
         url: product.featuredImage.url,
      },
      quantity,
   };
};

// An utility function that map a size to its label
export const mapSize = (size: ProductSize): string => {
   switch (size) {
      case "XS":
         return "Extra Small";
      case "S":
         return "Small";
      case "M":
         return "Medium";
      case "L":
         return "Large";
      case "XL":
         return "Extra Large";
   }
};

// An utility function that map a Raw product recommendation to a cleanable product recommendation object
export function mapRawToProductRecommendation(
   raw: RawProductRecommendation
): ProductRecommendation {
   const priceNode = raw.variants.edges[0]?.node.price;

   return {
      id: raw.id,
      title: raw.title,
      handle: raw.handle,
      description: raw.description,
      featuredImage: raw.featuredImage,
      price: {
         amount: Number(priceNode?.amount || 0),
         currencyCode: priceNode?.currencyCode || "CAD",
      },
   };
}
