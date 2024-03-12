import {
  Children,
  Dispatch,
  ReactNode,
  SetStateAction,
  cloneElement,
  isValidElement,
} from "react";
import { RadioGroup, RadioOptionProps } from "@headlessui/react";
import { cva } from "class-variance-authority";

export const toggleOptionStyles = cva(
  [
    "flex items-center py-2 font-medium leading-5 rounded-12",
    "outline-none cursor-pointer",
  ],
  {
    variants: {
      active: {
        true: ["bg-surface-surface-0 shadow-3"],
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
      size: "md",
    },
  }
);

export type ToogleOptionSizeProp = "xs" | "sm" | "md" | "lg";

interface ToggleGroupProp {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  size?: ToogleOptionSizeProp;
  children: React.ReactNode;
}

export const ToggleGroup = ({
  value,
  onChange,
  children,
  size,
  ...props
}: ToggleGroupProp) => {
  const renderChildrenWithProps = () => {
    return Children.map(children, child => {
      if (isValidElement(child)) {
        //@ts-expect-error
        return cloneElement(child, { size });
      }
      return child;
    });
  };

  return (
    <RadioGroup
      value={value}
      onChange={onChange}
      className="flex space-x-1 bg-surface-surface-2 p-[4px] rounded-12 w-fit"
      {...props}
    >
      {renderChildrenWithProps()}
    </RadioGroup>
  );
};

export const ToogleGroupLabel = RadioGroup.Label;

interface ToggleOptionProp {
  children: ReactNode;
  size?: ToogleOptionSizeProp;
}
type ToogleGroupOptionProp = ToggleOptionProp &
  RadioOptionProps<"input", string>;

export const ToogleGroupOption = ({
  children,
  value,
  ...props
}: ToogleGroupOptionProp) => {
  const { size } = props;

  return (
    <RadioGroup.Option value={value} {...props}>
      {({ checked }) => (
        <div className={toggleOptionStyles({ active: checked, size })}>
          {children}
        </div>
      )}
    </RadioGroup.Option>
  );
};
