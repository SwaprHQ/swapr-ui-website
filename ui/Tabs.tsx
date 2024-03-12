import { Children, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Tab } from "@headlessui/react";

interface TabsProps {
  children: ReactNode;
  [key: string]: any;
}

export const TabGroup = ({ children, ...props }: TabsProps) => {
  if (!children) return null;

  const headerChildren = Children.toArray(children).filter(
    child => (child as any)?.type === TabHeader
  );
  const bodyChildren = Children.toArray(children).filter(
    child => (child as any)?.type === TabBody
  );

  return (
    <Tab.Group {...props}>
      {headerChildren}
      {bodyChildren}
    </Tab.Group>
  );
};

export const TabHeader = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Tab.List className="flex space-x-3" {...props}>
      {children}
    </Tab.List>
  );
};

export const TabBody = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <Tab.Panels {...props}>{children}</Tab.Panels>;
};

export const TabStyled = ({ children, ...props }: TabsProps) => {
  return (
    <Tab
      className={({ selected }) =>
        twMerge(
          "flex items-center h-10 px-3 text-sm font-medium leading-5 rounded-32 outline-none",
          selected
            ? "shadow bg-surface-surface-1 shadow-3 border-outline-med-em text-text-high-em ring ring-outline-med-em"
            : "text-text-low-em bg-surface-surface-2 hover:bg-surface-surface-3"
        )
      }
      {...props}
    >
      {children}
    </Tab>
  );
};

export const TabPanel = Tab.Panel;
