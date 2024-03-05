import { cva } from "class-variance-authority";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const tagStyles = cva(
  ["flex items-center justify-center", "rounded-6 font-semibold border"],
  {
    variants: {
      size: {
        sm: ["h-8 px-2 text-sm leading-4"],
        xs: ["h-6 px-[6px] text-2xs leading-3"],
      },
      colorScheme: {
        primary: [
          " bg-surface-primary-main text-surface-white border-black-12",
        ],
        secondary: [
          "bg-surface-primary-accent-2 text-text-primary-em border-transparent",
        ],
        tertiary: [
          "bg-surface-surface-0 text-text-high-em border-outline-low-em",
        ],
        quaternary: [
          "bg-surface-surface-2 text-text-med-em border-transparent",
        ],
        success: [
          "bg-surface-success-accent-1 text-text-success-em border-transparent",
        ],
        danger: [
          "bg-surface-danger-accent-1 text-text-danger-em border-transparent",
        ],
        info: ["bg-surface-info-accent-1 text-text-info-em border-transparent"],
        disabled: [""],
      },
    },
    defaultVariants: {
      size: "xs",
      colorScheme: "primary",
    },
  }
);

export type TagSizeProp = "xs" | "sm";
export type TagColorSchemeProp =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "success"
  | "danger"
  | "info";

interface TagProps {
  size?: TagSizeProp;
  colorScheme?: TagColorSchemeProp;
  className?: string;
  children: ReactNode;
}

export const Tag = ({ children, colorScheme, size, className }: TagProps) => {
  return (
    <div className={twMerge(tagStyles({ size, colorScheme, className }))}>
      {children}
    </div>
  );
};
