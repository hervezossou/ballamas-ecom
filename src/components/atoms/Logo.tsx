import { LogoProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({ variant }: LogoProps) => {
   return (
      <Link href="/">
         <Image
            src={`/images/ballamas-${variant}.svg`}
            alt="Logo"
            width={158}
            height={36}
            className="object-cover size-auto"
            priority
         />
      </Link>
   );
};
