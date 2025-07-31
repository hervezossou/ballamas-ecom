import { getCollectionByHandle } from "@/lib/products";
import CollectionProductsPage from "@/components/pages/CollectionProductsPage";
import { Metadata } from "next";

interface CollectionPageProps {
   params: Promise<{ handle: string }>;
}

export async function generateMetadata({
   params,
}: CollectionPageProps): Promise<Metadata> {
   const { handle } = await params;
   const collection = await getCollectionByHandle(handle);

   if (!collection) {
      return {
         title: "Collection introuvable",
         description: "Aucune collection trouvée.",
      };
   }

   return {
      title: `${collection.title} | Collections`,
      description: `Discover the products of the ${collection.title}'s collection`,
      openGraph: {
         title: collection.title,
         description: collection.description,
         images: [collection.image.url],
      },
   };
}

export default async function Page({ params }: CollectionPageProps) {
   const { handle } = await params;

   return <CollectionProductsPage handle={handle} />;
}
