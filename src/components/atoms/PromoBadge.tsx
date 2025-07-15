import clsx from "clsx";

interface PromoBadgeProps {
   variant: "light" | "dark";
}

const baseStyles =
   "w-24 h-8 flex items-center justify-center px-2.5 py-2 rounded-full";

const badgeStyles = {
   light: "bg-b-white text-b-black",
   dark: "bg-b-black text-b-white",
};

export const PromoBadge = ({ variant }: PromoBadgeProps) => {
   return (
      <div className={clsx(baseStyles, badgeStyles[variant])}>
         <span className="text-xs text-nowrap font-archivo font-semibold uppercase">
            Get Off 20%
         </span>
      </div>
   );
};
