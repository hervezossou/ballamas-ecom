"use client";

import Link from "next/link";
import Image from "next/image";
import { Logo } from "../atoms/Logo";
import { Hamburger } from "../atoms/Hamburger";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useCartStore } from "@/lib/store";

export const Navbar = () => {
   const navLinks = [
      { name: "Men", path: "/collections/men" },
      { name: "Women", path: "/collections/women" },
      { name: "Unisex", path: "/collections/unisex" },
      { name: "Collections", path: "/collections" },
      { name: "News", path: "/news" },
   ];

   const shopLinks = [
      { name: "Shop", path: "/collections" },
      { name: "About Us", path: "/about-us" },
      { name: "Account", path: "/account", icon: "/icons/user.svg" },
      { name: "Cart", path: "/cart" },
      { name: "Search", path: "/search", icon: "/icons/search.svg" },
   ];

   const mobileShopLinks = [
      { name: "Shop", path: "/collections" },
      { name: "About Us", path: "/about-us" },
      { name: "Account", path: "/account", icon: "/icons/user.svg" },
      { name: "FAQ", path: "/faq" },
      { name: "Contact Us", path: "/contact-us" },
   ];

   const [isOpen, setIsOpen] = useState(false);
   const totalItems = useCartStore((state) => state.cartItems.length);

   useEffect(() => {
      if (isOpen) {
         document.body.classList.add("overflow-hidden");
      } else {
         document.body.classList.remove("overflow-hidden");
      }

      // Sécurité : clean up si le composant est démonté
      return () => {
         document.body.classList.remove("overflow-hidden");
      };
   }, [isOpen]);

   return (
      <header className="sticky z-50 top-0 w-full h-20 bg-b-white px-5 md:px-11.5 lg:border-none xl:px-30">
         {/* Desktop */}
         <div className="hidden h-full py-5 border-b border-b-gray lg:flex lg:items-center lg:justify-between lg:gap-12.5">
            <nav className="flex items-center justify-between gap-4.5">
               {navLinks.map((link) => (
                  <Link
                     key={link.name}
                     href={link.path}
                     className="w-auto h-6 font-archivo text-b-black text-base hover:underline cursor-pointer"
                  >
                     {link.name}
                  </Link>
               ))}
            </nav>
            <Logo variant="dark" />
            <nav className="flex items-center justify-between gap-4.5">
               {shopLinks.map((link) => (
                  <Link
                     key={link.name}
                     href={link.path}
                     className="w-auto h-6 flex gap-1 font-archivo text-b-black text-base hover:underline cursor-pointer"
                  >
                     {link.icon && (
                        <Image
                           src={link.icon}
                           width={18}
                           height={18}
                           alt={`${link.name} icon`}
                           className="object-cover size-auto"
                        />
                     )}
                     {link.name === "Search"
                        ? null
                        : link.name === "Cart"
                          ? `Cart(${totalItems})`
                          : link.name}
                  </Link>
               ))}
            </nav>
         </div>

         {/** Mobile */}
         <div className="block h-full border-b border-b-gray lg:hidden">
            <div className="flex items-center justify-between py-5 gap-12.5">
               <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
               <Logo variant="dark" />
               <div className="flex items-center gap-3">
                  <Link href="/search" className="hover:cursor-pointer">
                     <Image
                        src="/icons/search.svg"
                        alt="search icon"
                        width={18}
                        height={18}
                        className="object-cover size-auto"
                     />
                  </Link>
                  <Link href="/cart" className="hover:cursor-pointer">
                     <Image
                        src="/icons/basket.svg"
                        alt="cart icon"
                        width={20}
                        height={20}
                        className="object-cover size-auto"
                     />
                  </Link>
               </div>
            </div>

            <AnimatePresence>
               {isOpen && (
                  <motion.nav
                     initial={{ x: "-100%" }}
                     animate={{ x: 0 }}
                     exit={{ x: "-100%" }}
                     transition={{ duration: 0.3 }}
                     role="navigation"
                     aria-label="Mobile Menu"
                     className="z-50 absolute top-20 left-0 w-full flex flex-col gap-4 bg-b-white min-h-screen py-10 transition-all duration-300 lg:hidden"
                  >
                     <div className="flex flex-col items-center justify-between gap-4.5">
                        {navLinks.map((link) => (
                           <Link
                              key={link.name}
                              href={link.path}
                              className="w-auto h-6 font-archivo text-b-black text-base hover:underline cursor-pointer"
                           >
                              {link.name}
                           </Link>
                        ))}
                     </div>
                     <div className="flex flex-col items-center justify-between gap-4.5">
                        {mobileShopLinks.map((link) => (
                           <Link
                              key={link.name}
                              href={link.path}
                              className="w-auto h-6 flex gap-1 font-archivo text-b-black text-base hover:underline cursor-pointer"
                           >
                              {link.icon && (
                                 <Image
                                    src={link.icon}
                                    width={18}
                                    height={18}
                                    alt={`${link.name} icon`}
                                    className="object-cover size-auto"
                                 />
                              )}
                              {link.name === "Search"
                                 ? null
                                 : link.name === "Cart"
                                   ? `Cart(${totalItems})`
                                   : link.name}
                           </Link>
                        ))}
                     </div>
                  </motion.nav>
               )}
            </AnimatePresence>
         </div>
      </header>
   );
};
