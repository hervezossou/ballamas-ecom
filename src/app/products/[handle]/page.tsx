import ProductPage from "@/components/pages/ProductPage";
import { getProductByHandle } from "@/lib/products";

export async function generateMetadata({
   params,
}: {
   params: { handle: string };
}) {
   const product = await getProductByHandle(params.handle);

   if (!product) {
      return {
         title: "Product Not Found",
         description: "This product does not exist.",
      };
   }

   return {
      title: `${product.title} | Ballamas`,
      description: product.description || "Buy now at the best price!",
      openGraph: {
         title: product.title,
         description: product.description,
         images: [product.featuredImage.url],
      },
   };
}

export default function Page() {
   return <ProductPage />;
}
