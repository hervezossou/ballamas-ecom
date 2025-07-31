import ProductPage from "@/components/pages/ProductPage";
import { getProductByHandle } from "@/lib/products";
import { Metadata } from "next";

interface ProductDetailsPageProps {
   params: Promise<{ handle: string }>;
}

export async function generateMetadata({
   params,
}: ProductDetailsPageProps): Promise<Metadata> {
   const { handle } = await params;
   const product = await getProductByHandle(handle);

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

export default async function Page({ params }: ProductDetailsPageProps) {
   const { handle } = await params;

   return <ProductPage handle={handle} />;
}
