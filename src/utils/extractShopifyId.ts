export const extractShopifyId = (globalId: string) => {
    return globalId.split("/").pop() || "";
};