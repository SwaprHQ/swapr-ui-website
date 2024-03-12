"use client";

import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cva, cx } from "class-variance-authority";
import { Button, Icon } from ".";

interface SizeProp {
  size?: "lg" | "xl" | null | undefined;
}

interface AppendProp {
  append?: "center" | "bottom" | null | undefined;
}

interface PositionProp {
  position?: "right" | "left" | null | undefined;
}

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cx(
      "fixed inset-0 z-50 bg-black-12 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const modalPositionStyles = cva(
  [
    "fixed left-[50%] z-50 max-h-[70%] flex w-full max-w-lg translate-x-[-50%] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
  ],
  {
    variants: {
      append: {
        center: "top-[50%] translate-y-[-50%]",
        bottom:
          "top-[15%] md:top-[50%] h-[85vh] max-h-[100%] md:max-h-[70%] md:h-auto md:translate-y-[-50%] ",
      },
    },
    defaultVariants: { append: "center" },
  }
);

const modalContentStyles = cva(
  [
    "flex flex-col bg-surface-surface-0 border border-outline-base-em rounded-16 shadow-6 overflow-hidden",
  ],
  {
    variants: {
      append: {
        center: "mx-2 md:mx-0",
        bottom: "mx-0 rounded-b-0 md:rounded-b-16",
      },
    },
    defaultVariants: { append: "center" },
  }
);

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & AppendProp
>(({ className, append, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={modalPositionStyles({ append, className })}
      {...props}
    >
      <div className={modalContentStyles({ append })}>{children}</div>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const closeStyle = cva(
  [
    "absolute data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
  ],
  {
    variants: {
      position: { right: "", left: "" },
      size: { lg: "", xl: "" },
    },
    compoundVariants: [
      { position: "right", size: "lg", class: ["top-5 right-5"] },
      { position: "left", size: "lg", class: ["top-5 left-5"] },
      { position: "right", size: "xl", class: ["top-6 right-6"] },
      { position: "left", size: "xl", class: ["top-6 left-6"] },
    ],
    defaultVariants: { position: "right", size: "lg" },
  }
);

const DialogClose = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close> &
    PositionProp &
    SizeProp
>(({ className, position, size, children, ...props }, ref) => (
  <DialogPrimitive.Close
    ref={ref}
    className={closeStyle({ position, size, className })}
    {...props}
  >
    {children}
    <span className="sr-only">Close</span>
  </DialogPrimitive.Close>
));
DialogClose.displayName = DialogPrimitive.Close.displayName;

const DialogHeader = ({
  className,
  size,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & SizeProp) => (
  <>
    <DialogClose position="right" size={size}>
      <Button variant="ghost">
        <Icon name="cross" />
      </Button>
    </DialogClose>
    <DialogTitle className={cx("p-6", className)} {...props} />
  </>
);
DialogHeader.displayName = "DialogHeader";

const DialogBody = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cx("overflow-auto", className)} {...props} />
);
DialogBody.displayName = "DialogBody";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cx(
      "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end p-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const titleStyle = cva(["font-bold"], {
  variants: { size: { lg: "text-lg", xl: "text-xl" } },
  defaultVariants: { size: "lg" },
});

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> & SizeProp
>(({ className, size, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={titleStyle({ size, className })}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogTitle,
};
