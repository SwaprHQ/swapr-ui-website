import { cva } from "class-variance-authority";
import { Logo, LogoSizeProp } from ".";

export const logoPairStyles = cva(["flex items-center w-fit h-fit relative"], {
  variants: {
    size: {
      xl: [],
      lg: [],
      md: [],
      sm: [],
      xs: [],
    },
    variant: {
      balance: [],
      highlight: [],
    },
  },
  compoundVariants: [
    {
      size: "xl",
      variant: "highlight",
      class: ["!mr-3"],
    },
    {
      size: "lg",
      variant: "highlight",
      class: ["!mr-2"],
    },
    {
      size: "md",
      variant: "highlight",
      class: ["!mr-2"],
    },
    {
      size: "sm",
      variant: "highlight",
      class: ["!mr-2"],
    },
    {
      size: "xs",
      variant: "highlight",
      class: ["!mr-2"],
    },
  ],
  defaultVariants: {
    size: "sm",
    variant: "balance",
  },
});

export const logoPairLogoStyles = cva([], {
  variants: {
    size: {
      xl: [],
      lg: [],
      md: [],
      sm: [],
      xs: [],
    },
    variant: {
      balance: [],
      highlight: ["absolute top-0"],
    },
  },
  compoundVariants: [
    {
      size: "xl",
      variant: "highlight",
      class: ["size-6", "-right-3"],
    },
    {
      size: "lg",
      variant: "highlight",
      class: ["size-5", "-right-2"],
    },
    {
      size: "md",
      variant: "highlight",
      class: ["size-5", "-right-2"],
    },
    {
      size: "sm",
      variant: "highlight",
      class: ["size-4", "-right-2"],
    },
    {
      size: "xs",
      variant: "highlight",
      class: ["size-3", "-right-2"],
    },
    {
      size: "xl",
      variant: "balance",
      class: ["-ml-2"],
    },
    {
      size: "lg",
      variant: "balance",
      class: ["-ml-2"],
    },
    {
      size: "md",
      variant: "balance",
      class: ["-ml-1.5"],
    },
    {
      size: "sm",
      variant: "balance",
      class: ["-ml-1"],
    },
    {
      size: "xs",
      variant: "balance",
      class: ["-ml-1"],
    },
  ],
  defaultVariants: {
    size: "sm",
    variant: "balance",
  },
});

export type LogoPairVariant = "balance" | "highlight";

interface LogoPairProps {
  logoASrc: string;
  logoBSrc: string;
  size?: LogoSizeProp;
  alt: string;
  variant?: LogoPairVariant;
}

export const LogoPair = ({
  logoASrc,
  logoBSrc,
  size,
  alt,
  variant,
}: LogoPairProps) => (
  <div className={logoPairStyles({ size, variant })}>
    <Logo src={logoASrc} size={size} alt={alt} />
    <Logo
      src={logoBSrc}
      size={size}
      alt={alt}
      className={logoPairLogoStyles({ size, variant })}
    />
  </div>
);
