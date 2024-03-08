import { Children, JSX, PropsWithChildren, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Tab } from "@headlessui/react";

interface SwitcherProps {
  children: ReactNode;
  [key: string]: any;
}

export default function Switcher({ children, ...props }: SwitcherProps) {
  if (!children) return null;

  const headerChildren = Children.toArray(children).filter(
    child => (child as any)?.type === SwitcherHeader
  );
  const bodyChildren = Children.toArray(children).filter(
    child => (child as any)?.type === SwitcherBody
  );

  return (
    <div className="w-full max-w-md px-2 sm:px-0">
      <Tab.Group {...props}>
        {headerChildren}
        {bodyChildren}
      </Tab.Group>
    </div>
  );
}

export function SwitcherHeader({ children, ...props }: PropsWithChildren) {
  return (
    <Tab.List
      className="flex space-x-1 bg-surface-surface-2 p-1 rounded-12"
      {...props}
    >
      {children}
    </Tab.List>
  );
}

export function SwitcherBody({ children, ...props }: PropsWithChildren) {
  return <Tab.Panels {...props}>{children}</Tab.Panels>;
}

export const SwitcherTab = ({ children, ...props }: PropsWithChildren) => {
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
