import { Dispatch, ReactNode, SetStateAction } from "react";
import {
  RadioGroup,
  RadioGroupProps,
  RadioOptionProps,
} from "@headlessui/react";
import { cva } from "class-variance-authority";

export const toggleOptionStyles = cva(
  [
    "flex items-center py-2 font-medium leading-5 rounded-12",
    "outline-none cursor-pointer",
  ],
  {
    variants: {
      active: {
        true: ["bg-surface-surface-0 shadow-2"],
        false: ["hover:bg-surface-surface-1 hover:shadow-1"],
      },
      size: {
        lg: ["py-3 px-4 text-md"],
        md: ["py-2 px-3 text-base"],
        sm: ["py-2 px-2 text-sm"],
        xs: ["py-1 px-2 text-2xs"],
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

export type ToogleOptionSizeProp = "xs" | "sm" | "md" | "lg";

export const ToggleGroup = (
  props: RadioGroupProps<React.ElementType, string>
) => {
  return (
    <RadioGroup
      className="flex space-x-1 bg-surface-surface-2 p-[4px] rounded-12 w-fit"
      {...props}
    >
      {props.children}
    </RadioGroup>
  );
};

export const ToogleGroupLabel = RadioGroup.Label;

type ToggleOptionProp = RadioOptionProps<React.ElementType, string> &
  React.PropsWithChildren<{
    size?: ToogleOptionSizeProp;
  }>;

export const ToogleGroupOption = ({
  children,
  size,
  ...props
}: ToggleOptionProp) => {
  return (
    <RadioGroup.Option {...props}>
      {({ checked }) => (
        <div className={toggleOptionStyles({ active: checked, size })}>
          {children}
        </div>
      )}
    </RadioGroup.Option>
  );
};
