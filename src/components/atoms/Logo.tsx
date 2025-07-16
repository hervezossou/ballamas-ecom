import { LogoProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({ variant }: LogoProps) => {
   return (
      <Link href="/">
         <Image
            src={`/images/logo-${variant}.png`}
            alt="Logo"
            width={158}
            height={36}
         />
      </Link>
   );
};
