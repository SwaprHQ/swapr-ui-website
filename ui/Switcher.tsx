import { Children, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Tab } from "@headlessui/react";

interface SwitcherProps {
  children: ReactNode;
  [key: string]: any;
}

export const Switcher = ({ children, ...props }: SwitcherProps) => {
  if (!children) return null;

  const headerChildren = Children.toArray(children).filter(
    child => (child as any)?.type === SwitcherHeader
  );
  const bodyChildren = Children.toArray(children).filter(
    child => (child as any)?.type === SwitcherBody
  );

  return (
    <Tab.Group {...props}>
      {headerChildren}
      {bodyChildren}
    </Tab.Group>
  );
};

export const SwitcherHeader = ({ children, ...props }: SwitcherProps) => {
  return (
    <Tab.List
      className="flex space-x-1 bg-surface-surface-2 p-1 rounded-12"
      {...props}
    >
      {children}
    </Tab.List>
  );
};

export const SwitcherBody = ({ children, ...props }: SwitcherProps) => {
  return <Tab.Panels {...props}>{children}</Tab.Panels>;
};

export const SwitcherTab = ({ children, ...props }: SwitcherProps) => {
  return (
    <Tab
      className={({ selected }) =>
        twMerge(
          "w-full rounded-lg py-2.5 text-sm font-medium leading-5 rounded-12 outline-none",
          "",
          selected
            ? "text-blue-700 shadow bg-surface-surface-0 shadow-3"
            : "text-blue-100 hover:bg-white/[0.12] hover:"
        )
      }
      {...props}
    >
      {children}
    </Tab>
  );
};
