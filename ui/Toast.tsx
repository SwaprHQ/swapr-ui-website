import { toast as sonnerToast } from "sonner";
import { Button, Icon } from ".";
import { PropsWithChildren, ReactNode } from "react";
import { cva } from "class-variance-authority";

export const toastStyles = cva(
  [
    "flex items-center",
    "w-fit px-4 py-3 space-x-4",
    "bg-surface-surface-0 border shadow-4 rounded-20",
    "text-md font-bold",
  ],
  {
    variants: {
      colorScheme: {
        default: ["border-outline-low-em"],
        error: ["border-outline-danger-med-em"],
        success: ["border-outline-success-med-em"],
        warning: ["border-outline-warning-med-em"],
      },
    },
    defaultVariants: {
      colorScheme: "default",
    },
  }
);

interface ToastProps extends PropsWithChildren {
  action?: ReactNode | undefined;
  colorScheme?: "default" | "error" | "success" | "warning";
  className?: string;
}

export const toast = ({
  action,
  colorScheme,
  children,
  className,
}: ToastProps = {}) => {
  sonnerToast.custom((t) => (
    <div className={toastStyles({ colorScheme, className })}>
      <div>{children}</div>
      <div className="h-6 border border-outline-low-em" />
      {action && <div>action</div>}
      <Button variant="ghost" onClick={() => sonnerToast.dismiss(t)}>
        <Icon name="cross" />
      </Button>
    </div>
  ));
};

export const errorToast = ({ action, children, className }: ToastProps = {}) =>
  toast({
    children: (
      <div className="flex items-center space-x-4">
        <Icon name="info-fill" className=" text-text-danger-main" />
        <div>{children}</div>
      </div>
    ),
    action,
    colorScheme: "error",
    className,
  });

export const successToast = ({
  action,
  children,
  className,
}: ToastProps = {}) =>
  toast({
    children: (
      <div className="flex items-center space-x-4">
        <Icon name="info-fill" className=" text-text-success-main" />
        <div>{children}</div>
      </div>
    ),
    action,
    colorScheme: "success",
    className,
  });

export const warningToast = ({
  action,
  children,
  className,
}: ToastProps = {}) =>
  toast({
    children: (
      <div className="flex items-center space-x-4">
        <Icon name="info-fill" />
        <div>{children}</div>
      </div>
    ),
    action,
    colorScheme: "warning",
    className,
  });
