import { OrderBlock } from "../organisms/OrderBlock";
import { ShippingMethods } from "../organisms/ShippingMethods";

export const CheckoutPage = () => {
   return (
      <div className="w-full min-h-scren pt-4 pb-8 md:pt-8 lg:pt-12 xl:pb-24">
         <section className="flex flex-col items-start gap-5">
            <h3 className="font-chillax font-semibold text-lg md:text-2xl">
               Checkout
            </h3>
            <div className="w-full flex flex-col items-start justify-between gap-15.5 xl:flex-row xl:gap-28">
               <div className="w-full flex flex-col items-start justify-between gap-4">
                  <OrderBlock />
                  <ShippingMethods />
               </div>
               <div></div>
            </div>
         </section>
      </div>
   );
};
