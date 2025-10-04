import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

export const iconVariants = cva("", {
    variants: {
        animate: {
            false: "",
            true: "animate-spin"
        }
    },
    defaultVariants: {
        animate: false
    }
})

interface Iconprops extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants>  {
    svg: React.FC<React.ComponentProps<"svg">>;
}
 
export default function Icon({ svg: Svgcomponent, animate, className, ...props} : Iconprops) {
    return <Svgcomponent className={iconVariants({animate, className})} {...props} />
}