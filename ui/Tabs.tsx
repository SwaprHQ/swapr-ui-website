import { Children, Fragment, ReactNode } from "react";
import { Tab } from "@headlessui/react";
import { ChipButton } from "@/ui";

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

export const TabStyled = ({ children, selected, ...props }: TabsProps) => {
  return (
    <Tab as={Fragment} {...props}>
      {({ selected }) => (
        /* Use the `selected` state to conditionally style the selected tab. */
        <ChipButton active={selected} colorScheme="secondary">
          {children}
        </ChipButton>
      )}
    </Tab>
  );
};

export const TabPanel = Tab.Panel;
