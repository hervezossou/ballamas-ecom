import { getCollectionByHandle } from "@/lib/products";
import CollectionProductsPage from "@/components/pages/CollectionProductsPage";

export async function generateMetadata({
   params,
}: {
   params: { handle: string };
}) {
   const collection = await getCollectionByHandle(params.handle);

   if (!collection || collection.length === 0) {
      return {
         title: "Collection introuvable",
         description: "Aucune collection trouvée.",
      };
   }

   return {
      title: `${params.handle.charAt(0).toUpperCase() + params.handle.slice(1)} | Collections`,
      description: `Discover the products of the ${params.handle}'s collection`,
   };
}

export default function Page() {
   return <CollectionProductsPage />;
}
