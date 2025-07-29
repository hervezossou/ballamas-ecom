export const CollectionCardSkeleton = () => {
   return (
      <div className="mx-auto flex flex-col items-start justify-between gap-2 group drop-shadow-xl animate-pulse">
         <div className="flex items-center justify-center size-96 bg-gray-300 rounded-2xl"></div>
         <div className="flex items-center gap-2 py-2">
            <div className="w-20 h-6 bg-gray-300 rounded-md"></div>
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
         </div>
      </div>
   );
};
