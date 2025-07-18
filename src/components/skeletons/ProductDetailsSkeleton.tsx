export const ProductDetailsSkeleton = () => {

   return (
      <div
         className="flex flex-col items-start justify-center gap-8 animate-pulse lg:h-[600px] lg:flex-row lg:gap-10.5"
      >
         <div className="w-full bg-gray-300 h-[600px] rounded-4xl lg:w-[579px]"></div>
         <div className="flex flex-col items-start justify-between gap-4 lg:w-1/2 lg:gap-5.5">
            <div className="flex flex-col gap-4 h-[410px] lg:gap-5">
               <div className="flex flex-col gap-2 md:gap-3 lg:gap-4.5">
                  <div className="h-10 w-3/4 bg-gray-300 rounded" />
                  <div className="h-10 w-1/4 bg-gray-300 rounded"></div>
                  <div className="flex flex-col gap-2 lg:gap-3">
                     <div className="w-40 h-8 bg-gray-300 rounded"></div>
                     <div className="flex items-center justify-start gap-4">
                        <div className="bg-gray-300 size-8 rounded-full"></div>
                        <div className="bg-gray-300 size-8 rounded-full"></div>
                        <div className="bg-gray-300 size-8 rounded-full"></div>
                        <div className="bg-gray-300 size-8 rounded-full"></div>
                        <div className="bg-gray-300 size-8 rounded-full"></div>
                     </div>
                  </div>
                  <div className="flex flex-col gap-2 lg:gap-3">
                     <div className="w-28 h-8 bg-gray-300 rounded"></div>
                     <div className="flex items-center gap-2">
                        <div className="w-20 h-10 bg-gray-300 rounded-4xl"></div>
                        <div className="w-20 h-10 bg-gray-300 rounded-4xl"></div>
                        <div className="w-20 h-10 bg-gray-300 rounded-4xl"></div>
                        <div className="w-20 h-10 bg-gray-300 rounded-4xl"></div>
                     </div>
                  </div>
               </div>
               <div className="flex w-[579px] items-center gap-2">
                  <div className="bg-gray-300 w-1/2 h-16 rounded-4xl"></div>
                  <div className="bg-gray-300 w-1/2 h-16 rounded-4xl"></div>
               </div>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-2 lg:gap-3.5">
               <div className="bg-gray-300 w-1/3 h-8 rounded"></div>
               <div className="bg-gray-300 w-full h-30 rounded"></div>
            </div>
         </div>
      </div>
   );
};