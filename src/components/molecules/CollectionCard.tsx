import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Collection } from "@/types";

interface CollectionCardProps {
   collection: Collection;
}

export const CollectionCard = ({ collection }: CollectionCardProps) => {
   const router = useRouter();
   const handleClick = () => {
      router.push(`/collections/${collection.handle}`);
   };

   return (
      <div
         className="mx-auto flex flex-col items-start justify-between gap-2 group drop-shadow-xl"
         onClick={handleClick}
         tabIndex={0}
      >
         <div className="flex items-center justify-center size-96 bg-gray-200 rounded-2xl overflow-hidden">
            <Image
               src={collection.image.url}
               alt={collection.title}
               width={384}
               height={200}
               className="size-full object-cover group-hover:scale-110 transition-transform ease-in-out duration-300"
               loading="lazy"
            />
         </div>
         <Link
            href={`/collections/${collection.handle}`}
            className="flex items-center gap-2 text-b-black py-2"
         >
            <span className="font-archivo font-medium text-base md:text-xl">
               {collection.title}
            </span>
            <Image
               src="/icons/arrow-right.svg"
               alt="Arrow Right"
               width={16}
               height={16}
               className="object-cover size-auto group-hover:translate-x-1 transition-transform duration-300"
            />
         </Link>
      </div>
   );
};
