export const extractShopifyId = (globalId: string) => {
   return globalId.split("/").pop() || "";
};

export const buildShopifyGlobalId = (
   id: string,
   type: "Product" | "ProductVariant" = "Product"
): string => {
   return `gid://shopify/${type}/${id}`;
};
