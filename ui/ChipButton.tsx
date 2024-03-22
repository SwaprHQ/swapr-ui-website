import { cva, cx } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

export const chipButtonStyles = cva(
  [
    "flex items-center justify-center h-fit",
    "select-none font-semibold rounded-100 text-nowrap",
    "disabled:text-text-disabled disabled:cursor-not-allowed disabled:ring-0 disabled:shadow-inherit disabled:bg-surface-disabled-low-em disabled:border-0",
    "focus-visible:outline-none focus-visible:ring-[3px]",
    "active:ring-[3px]",
  ],
  {
    variants: {
      size: {
        md: "px-[10px] py-2 space-x-2 text-base font-semibold",
        sm: "p-2 space-x-[6px] text-sm font-semibold",
      },
      colorScheme: {
        primary: [
          "bg-surface-primary-accent-1 border border-outline-primary-low-em",
          "hover:bg-surface-primary-accent-2",
          "focus-visible:bg-surface-primary-accent-2 focus-visible:ring-outline-primary-low-em",
          "active:bg-surface-primary-accent-2 active:ring-outline-primary-low-em",
        ],
        secondary: [
          "bg-surface-surface-0 border border-outline-low-em",
          "hover:bg-surface-surface-2",
          "focus-visible:bg-surface-surface-2 focus-visible:ring-outline-med-em",
          "active:bg-surface-surface-2 active:ring-outline-med-em",
        ],
      },
      active: {
        true: ["ring-[3px]"],
      },
    },
    compoundVariants: [
      {
        active: true,
        colorScheme: "primary",
        class: ["bg-surface-primary-accent-2 ring-outline-primary-low-em"],
      },
      {
        active: true,
        colorScheme: "secondary",
        class: ["bg-surface-surface-2 ring-outline-med-em"],
      },
    ],
    defaultVariants: {
      active: false,
      colorScheme: "secondary",
      size: "md",
    },
  }
);

export type ChipButtonSizeProp = "sm" | "md";
export type ChipButtonColorSchemeProp = "primary" | "secondary";

interface ChipButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorScheme?: ChipButtonColorSchemeProp;
  size?: ChipButtonSizeProp;
  disabled?: boolean;
  active?: boolean;
}

export const ChipButton = ({
  children,
  size,
  colorScheme,
  active,
  className,
  ...props
}: ChipButtonProps) => {
  return (
    <button
      className={cx(
        chipButtonStyles({
          size,
          colorScheme,
          active,
          className,
        })
      )}
      {...props}
    >
      {children}
    </button>
  );
};
