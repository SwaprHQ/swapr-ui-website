"use client";

import React, { useEffect, useMemo, useRef } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, cx } from "class-variance-authority";
import { Icon, IconName } from ".";

const inputStyles = cva(
  [
    "flex w-full items-center",
    "shadow border-outline-med-em",
    "focus-within:ring-[3px] focus-within:ring-outline-primary-low-em",
    "group-has-[:disabled]:cursor-not-allowed group-has-[:disabled]:text-text-disabled",
    "group-has-[:invalid]:text-text-danger-main group-has-[:invalid]:bg-surface-danger-accent-1 group-has-[:invalid]:border-outline-danger-med-em group-has-[:invalid]:ring-outline-danger-low-em",
  ],
  {
    variants: {
      size: {
        sm: "text-sm space-x-1 p-2 rounded-8",
        md: "text-md space-x-2 px-3 py-2 rounded-12",
        lg: "text-md space-x-3 px-4 py-3 rounded-12",
      },
      variant: {
        simple:
          "bg-surface-surface-2 text-text-med-em placeholder:text-text-disabled",
        solid:
          "bg-surface-primary-accent-2 text-text-primary-em placeholder:text-text-primary-med",
        pastel:
          "bg-surface-primary-accent-1 text-text-primary-em placeholder:text-text-primary-med",
        ghost: "bg-surface-surface-0 shadow-2 text-text-high-em",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "simple",
    },
  }
);

const inputFieldStyles = cva([], {
  variants: {
    variant: {
      simple: "placeholder:text-text-disabled",
      solid: "placeholder:text-text-primary-med",
      pastel: "placeholder:text-text-primary-med",
      ghost: "placeholder:text-text-disabled",
    },
  },
  defaultVariants: { variant: "simple" },
});

type InputSizeProp = "sm" | "md" | "lg";
type InputVariantProp = "simple" | "solid" | "pastel" | "ghost";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string | undefined | null;
  message?: string | undefined | null;
  leftIcon?: IconName | undefined | null;
  rightIcon?: IconName | undefined | null;
  size?: InputSizeProp | undefined;
  variant?: InputVariantProp | undefined;
  isInvalid?: boolean | undefined | null;
}

const iconSize: Record<InputSizeProp, number> = {
  sm: 14,
  md: 18,
  lg: 20,
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      id,
      label,
      message,
      leftIcon,
      rightIcon,
      children,
      size = "md",
      variant,
      isInvalid,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    ref = useMemo(() => inputRef, []);

    useEffect(() => {
      if (isInvalid && message) inputRef.current?.setCustomValidity(message);
      else inputRef.current?.setCustomValidity("");
    }, [isInvalid, message]);

    return (
      <div className={cx("space-y-1 group", className)}>
        {label && (
          <LabelPrimitive.Root
            className={cx([
              "text-sm font-medium text-text-med-em",
              "group-has-[:invalid]:text-text-danger-main",
            ])}
            htmlFor={id}
          >
            {label}
          </LabelPrimitive.Root>
        )}
        <div
          className={inputStyles({ size, variant })}
          onClick={() => {
            if (inputRef.current) inputRef.current.focus();
          }}
          onDoubleClick={() => {
            if (inputRef.current) inputRef.current.select();
          }}
        >
          {leftIcon && <Icon size={iconSize[size]} name={leftIcon} />}
          <InputField
            className={inputFieldStyles({ variant })}
            ref={inputRef}
            id={id}
            {...props}
          />
          {rightIcon && <Icon size={iconSize[size]} name={rightIcon} />}
        </div>
        {message && (
          <div
            className={cx([
              "flex space-x-0.5",
              "group-has-[:disabled]:text-text-disabled",
              "group-has-[:invalid]:text-text-danger-main",
            ])}
          >
            <Icon size={14} name="info-fill" />
            <p className="text-sm">{message}</p>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

const InputField = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      className={cx(
        "focus-visible:outline-none bg-transparent w-full disabled:cursor-not-allowed disabled:text-text-disabled",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

InputField.displayName = "InputField";

export { Input, InputField };
