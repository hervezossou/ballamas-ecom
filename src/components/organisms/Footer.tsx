import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { InputField } from "../atoms/InputField";
import { Button } from "../atoms/Button";
import { productLinks, categoriesLinks, socialLinks } from "../../lib/links";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const linkedinUrl = "https://www.linkedin.com/in/waris-akinocho/";
    const [email, setEmail] = useState("");

    return (
        <footer className="w-full bg-b-black px-5 py-6.5 md:px-11.5 md:py-6.5 xl:px-30 xl:py-13">
            <div className="w-full flex flex-col items-start justify-between gap-8 lg:items-center">
                <div className="w-full flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-start">
                    <div className="flex max-w-[452px] flex-col items-start justify-between gap-2 md:gap-5">
                        <Image 
                            src="/images/logo-light.png" 
                            alt="Ballamas Logo" 
                            width={158} 
                            height={36} 
                        />
                        <div className="space-y-4">
                            <p className="text-xs text-b-gray font-medium font-archivo md:text-sm">
                                Subscribe to our newsletter  for upcoming products and best discount for all items.
                            </p>
                            <div className="flex items-center gap-2">
                                <InputField
                                    type="email"
                                    name="email"
                                    label="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email"
                                    color="white"
                                />
                                <Button 
                                    variant="filled" 
                                    label="Subscribe"
                                    size="small"
                                    color="white"
                                    layout="default"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start justify-between gap-5 xl:gap-13">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-b-white text-xs font-medium md:text-base">Product</h3>
                            <ul className="space-y-2">
                                {productLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link 
                                            href={link.href} 
                                            className="text-b-gray text-[10px] hover:text-b-white md:text-sm"
                                            target="_blank"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-b-white text-xs font-medium md:text-base">Categories</h3>
                            <ul className="space-y-2">
                                {categoriesLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link 
                                            href={link.href} 
                                            className="text-b-gray text-[10px] hover:text-b-white md:text-sm"
                                            target="_blank"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-b-white text-xs font-medium md:text-base">Our Social Media</h3>
                            <ul className="space-y-2">
                                {socialLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link 
                                            href={link.href} 
                                            className="text-b-gray text-[10px] hover:text-b-white md:text-sm"
                                            target="_blank"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mx-auto flex items-center justify-center gap-2">
                    <p className="text-[10px] text-b-dark-gray md:text-xs">
                        © BALLAMAS {currentYear} by <Link 
                            href={linkedinUrl} 
                            target="_blank"
                            className="underline hover:text-b-light-gray">
                            Waris
                        </Link>.
                    </p>
                </div>
            </div>
        </footer>
    )
}