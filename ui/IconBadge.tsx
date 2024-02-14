import { Icon, IconName } from "./Icon";
import { cva } from "class-variance-authority";

const iconBadgeStyles = cva(
  ["flex items-center justify-center", "w-fit h-fit rounded-16"],
  {
    variants: {
      size: {
        lg: "p-6",
        md: "p-4",
      },
      variant: {
        solid: [],
        pastel: [],
        outline: [],
        ghost: [],
      },
      colorScheme: {
        primary: [],
        secondary: [],
        error: [],
        success: [],
      },
    },
    compoundVariants: [
      {
        variant: "outline",
        size: "md",
        class: ["border"],
      },
      {
        variant: "outline",
        size: "lg",
        class: ["border-2"],
      },
      {
        variant: "solid",
        colorScheme: "primary",
        class: ["bg-surface-primary-main text-text-white"],
      },
      {
        variant: "pastel",
        colorScheme: "primary",
        class: ["bg-surface-primary-accent-2 text-text-primary-em"],
      },
      {
        variant: "outline",
        colorScheme: "primary",
        class: [
          "bg-surface-surface-0 text-text-primary-em",
          "border-outline-primary-low-em",
        ],
      },
      {
        variant: "ghost",
        colorScheme: "primary",
        class: ["text-text-primary-em"],
      },
      {
        variant: "solid",
        colorScheme: "secondary",
        class: ["bg-surface-surface-high-em text-text-neutral-alt-white"],
      },
      {
        variant: "pastel",
        colorScheme: "secondary",
        class: ["bg-surface-surface-3 text-text-high-em"],
      },
      {
        variant: "outline",
        colorScheme: "secondary",
        class: [
          "bg-surface-surface-0 text-text-med-em",
          "border-outline-low-em",
        ],
      },
      {
        variant: "ghost",
        colorScheme: "secondary",
        class: ["text-text-med-em"],
      },
      {
        variant: "solid",
        colorScheme: "error",
        class: ["bg-surface-danger-main text-text-white"],
      },
      {
        variant: "pastel",
        colorScheme: "error",
        class: ["bg-surface-danger-accent-1 text-text-danger-em"],
      },
      {
        variant: "outline",
        colorScheme: "error",
        class: [
          "bg-surface-surface-0 text-text-danger-main",
          "border-outline-danger-low-em",
        ],
      },
      {
        variant: "ghost",
        colorScheme: "error",
        class: ["text-text-danger-main"],
      },
      {
        variant: "solid",
        colorScheme: "success",
        class: ["bg-surface-success-main text-text-black"],
      },
      {
        variant: "pastel",
        colorScheme: "success",
        class: ["bg-surface-success-accent-1 text-text-success-em"],
      },
      {
        variant: "outline",
        colorScheme: "success",
        class: [
          "bg-surface-surface-0 text-text-success-main",
          "border-outline-success-low-em",
        ],
      },
      {
        variant: "ghost",
        colorScheme: "success",
        class: ["text-text-success-main"],
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorScheme: "primary",
    },
  }
);

export type IconBadgeVariantProp = "solid" | "pastel" | "outline" | "ghost";
export type IconBadgeColorSchemeProp =
  | "primary"
  | "secondary"
  | "error"
  | "success";
type SizeProp = "md" | "lg";

interface IconBadgeProps {
  name: IconName;
  variant?: IconBadgeVariantProp;
  colorScheme?: IconBadgeColorSchemeProp;
  size?: SizeProp;
  className?: string;
}

const iconSize = { lg: 32, md: 24 };

export const IconBadge = ({
  name,
  variant,
  colorScheme,
  size = "md",
  className,
}: IconBadgeProps) => {
  return (
    <div className={iconBadgeStyles({ variant, size, colorScheme, className })}>
      <Icon name={name} size={size && iconSize[size]} />
    </div>
  );
};
