import { LogoProps } from "@/types";
import Image from "next/image";

export const Logo = ({ variant }: LogoProps) => {
   return (
      <div className="flex items-center justify-center gap-2">
         <Image
            src={`/images/logo-${variant}.png`}
            alt="Logo"
            width={158}
            height={36}
            className="w-auto h-auto"
            priority={true}
         />
      </div>
   );
};
