import { getCollectionByHandle } from "@/lib/products";
import CollectionProductsPage from "@/components/pages/CollectionProductsPage";

export async function generateMetadata({
   params,
}: {
   params: { handle: string };
}) {
   const collection = await getCollectionByHandle(params.handle);

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

export default function Page() {
   return <CollectionProductsPage />;
}
