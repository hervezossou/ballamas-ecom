import { ProductSize } from "@/types";

export const mapSize = (size: ProductSize): string => {
    switch (size) {
        case "XS":
            return "Extra Small";
        case "S":
            return "Small";
        case "M":
            return "Medium";
        case "L":
            return "Large";
        case "XL":
            return "Extra Large";
    }
}