export function buildShopifyGlobalId(id: string, type: "Product" | "ProductVariant" = "Product"): string {
  return `gid://shopify/${type}/${id}`;
}