import { Product, CartItem, ProductSize } from "@/types"

export const mapProductToCartItem = (
    product: Product, 
    quantity: number, 
    size: ProductSize, 
    color: string
): CartItem => {
    return {
        handle: product.handle,
        title: product.title,
        color,
        size,
        price: {
            amount: Number(product.price.amount),
            currency: product.price.currencyCode,
        },
        featuredImage: {
            url: product.featuredImage.url
        },
        quantity
    }
}