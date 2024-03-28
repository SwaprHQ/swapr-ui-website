"use client";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/tailwind.config";

import {
  Button,
  ButtonColorSchemeProp,
  ButtonSizeProp,
  ButtonVariantProp,
  ChipButton,
  ChipButtonColorSchemeProp,
  ChipButtonSizeProp,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogBody,
  Icon,
  IconBadge,
  IconBadgeColorSchemeProp,
  IconBadgeVariantProp,
  IconButton,
  IconName,
  iconMap,
  Input,
  Logo,
  LogoSizeProp,
  LogoPair,
  LogoPairVariant,
  TabBody,
  TabGroup,
  TabHeader,
  TabPanel,
  TabStyled,
  Tag,
  TagColorSchemeProp,
  ToggleGroup,
  ToogleGroupOption,
  ToogleOptionSizeProp,
  toast,
  errorToast,
  successToast,
  warningToast,
  Dialog,
  DialogClose,
  DialogFooter,
} from "swapr-ui";

import { ThemeSwitch } from "@/components";
import { Fragment, PropsWithChildren, useState } from "react";

const fullConfig = resolveConfig(tailwindConfig);

function extractStringValuesFromObject(object: any): string[] {
  const keys = [];

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const value = object[key];

      if (typeof value === "string") {
        keys.push(key);
      } else if (typeof value === "object" && value) {
        const nestedKeys = extractStringValuesFromObject(value);
        keys.push(...nestedKeys.map(nestedKey => `${key}-${nestedKey}`));
      }
    }
  }

  return keys;
}

const tailwindColors: { [key: string]: Array<string> } = Object.keys(
  fullConfig.theme.colors
).reduce(
  (acc, key) => ({
    ...acc,
    [key]: extractStringValuesFromObject(fullConfig.theme.colors[key]),
  }),
  {}
);

interface ButtonListProps {
  children: string;
  disabled?: boolean;
  active?: boolean;
  variant?: ButtonVariantProp;
  colorScheme?: ButtonColorSchemeProp;
}

const buttonsList: Array<Array<ButtonListProps>> = [
  [
    { children: "Primary" },
    { children: "Disabled", disabled: true },
    { children: "Primary active", active: true },
    { children: "Secondary", variant: "pastel" },
    { children: "Outline", variant: "outline" },
    { children: "Ghost", variant: "ghost" },
    { children: "Ghost disabled", variant: "ghost", disabled: true },
  ],
  [
    { children: "Error", colorScheme: "error" },
    { children: "Error disabled", colorScheme: "error", disabled: true },
    { children: "Error active", colorScheme: "error", active: true },
    { children: "Error secondary", colorScheme: "error", variant: "pastel" },
    { children: "Error outline", colorScheme: "error", variant: "outline" },
    { children: "Error ghost", colorScheme: "error", variant: "ghost" },
    {
      children: "Error ghost disabled",
      colorScheme: "error",
      variant: "ghost",
      disabled: true,
    },
  ],
  [
    { children: "Success", colorScheme: "success" },
    { children: "Success disabled", colorScheme: "success", disabled: true },
    { children: "Success active", colorScheme: "success", active: true },
    {
      children: "Success secondary",
      colorScheme: "success",
      variant: "pastel",
    },
    { children: "Success outline", colorScheme: "success", variant: "outline" },
    { children: "Success ghost", colorScheme: "success", variant: "ghost" },
    {
      children: "Success ghost disabled",
      colorScheme: "success",
      variant: "ghost",
      disabled: true,
    },
  ],
];

interface IconBadgeListProps {
  colorScheme?: IconBadgeColorSchemeProp;
  variant?: IconBadgeVariantProp;
  size?: "lg";
}

const iconBadgeList: Array<Array<IconBadgeListProps>> = [
  [
    { size: "lg" },
    {},
    { size: "lg", variant: "pastel" },
    { variant: "pastel" },
    { size: "lg", variant: "outline" },
    { variant: "outline" },
    { size: "lg", variant: "ghost" },
    { variant: "ghost" },
  ],
  [
    { size: "lg", colorScheme: "secondary" },
    { colorScheme: "secondary" },
    { size: "lg", variant: "pastel", colorScheme: "secondary" },
    { variant: "pastel", colorScheme: "secondary" },
    { size: "lg", variant: "outline", colorScheme: "secondary" },
    { variant: "outline", colorScheme: "secondary" },
    { size: "lg", variant: "ghost", colorScheme: "secondary" },
    { variant: "ghost", colorScheme: "secondary" },
  ],
  [
    { size: "lg", colorScheme: "error" },
    { colorScheme: "error" },
    { size: "lg", variant: "pastel", colorScheme: "error" },
    { variant: "pastel", colorScheme: "error" },
    { size: "lg", variant: "outline", colorScheme: "error" },
    { variant: "outline", colorScheme: "error" },
    { size: "lg", variant: "ghost", colorScheme: "error" },
    { variant: "ghost", colorScheme: "error" },
  ],
  [
    { size: "lg", colorScheme: "success" },
    { colorScheme: "success" },
    { size: "lg", variant: "pastel", colorScheme: "success" },
    { variant: "pastel", colorScheme: "success" },
    { size: "lg", variant: "outline", colorScheme: "success" },
    { variant: "outline", colorScheme: "success" },
    { size: "lg", variant: "ghost", colorScheme: "success" },
    { variant: "ghost", colorScheme: "success" },
  ],
];

interface LogoListProps {
  variant?: LogoPairVariant;
  size?: LogoSizeProp;
}

const logoList: Array<LogoListProps> = [
  { size: "xl" },
  { size: "lg" },
  { size: "md" },
  { size: "sm" },
  { size: "xs" },
];

const logoPairList: Array<Array<LogoListProps>> = [
  [
    { size: "xl" },
    { size: "lg" },
    { size: "md" },
    { size: "sm" },
    { size: "xs" },
  ],
  [
    { size: "xl", variant: "highlight" },
    { size: "lg", variant: "highlight" },
    { size: "md", variant: "highlight" },
    { size: "sm", variant: "highlight" },
    { size: "xs", variant: "highlight" },
  ],
];

interface ChipButtonProps extends PropsWithChildren {
  colorScheme?: ChipButtonColorSchemeProp;
  size?: ChipButtonSizeProp;
  disabled?: boolean;
  active?: boolean;
}

const ChipBittonChildren = (
  <>
    <Icon name="plus" />
    <span>Chip Button</span>
    <Icon name="cross" />
  </>
);

const toggleGroupOptionSizes: ToogleOptionSizeProp[] = ["xs", "sm", "md", "lg"];

const chipButtonList: Array<Array<ChipButtonProps>> = [
  [
    {
      children: ChipBittonChildren,
    },
    { size: "sm", children: ChipBittonChildren },
    { children: ChipBittonChildren, active: true },
    { children: ChipBittonChildren, disabled: true },
  ],
  [
    { colorScheme: "primary", children: ChipBittonChildren },
    { colorScheme: "primary", size: "sm", children: ChipBittonChildren },
    { colorScheme: "primary", children: ChipBittonChildren, active: true },
    { colorScheme: "primary", children: ChipBittonChildren, disabled: true },
  ],
];

const TagColorSchemes = [
  "primary",
  "secondary",
  "tertiary",
  "quaternary",
  "success",
  "danger",
  "info",
];

interface IconListProps {
  name: IconName;
  disabled?: boolean;
  active?: boolean;
  variant?: ButtonVariantProp;
  size?: ButtonSizeProp;
}

const iconButtonList: Array<Array<IconListProps>> = [
  [
    { name: "add-fill", size: "xs" },
    { name: "add-fill", disabled: true, size: "xs" },
    { name: "add-fill", active: true, size: "xs" },
    { name: "add-fill", variant: "pastel", size: "xs" },
    { name: "add-fill", variant: "outline", size: "xs" },
    { name: "add-fill", variant: "ghost", size: "xs" },
  ],
  [
    { name: "add-fill", size: "sm" },
    { name: "add-fill", disabled: true, size: "sm" },
    { name: "add-fill", active: true, size: "sm" },
    { name: "add-fill", variant: "pastel", size: "sm" },
    { name: "add-fill", variant: "outline", size: "sm" },
    { name: "add-fill", variant: "ghost", size: "sm" },
  ],
  [
    { name: "add-fill" },
    { name: "add-fill", disabled: true },
    { name: "add-fill", active: true },
    { name: "add-fill", variant: "pastel" },
    { name: "add-fill", variant: "outline" },
    { name: "add-fill", variant: "ghost" },
  ],
  [
    { name: "add-fill", size: "lg" },
    { name: "add-fill", disabled: true, size: "lg" },
    { name: "add-fill", active: true, size: "lg" },
    { name: "add-fill", variant: "pastel", size: "lg" },
    { name: "add-fill", variant: "outline", size: "lg" },
    { name: "add-fill", variant: "ghost", size: "lg" },
  ],
];

export default function UI() {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };
  // radioGroup eg.
  let [slipage, setSlipage] = useState("auto");

  return (
    <main className="px-5 mx-auto my-10 max-w-screen-xl overflow-auto">
      <ThemeSwitch />
      <div className="pb-12 my-12 space-y-5 divide-y divide-outline-primary-low-em">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Swapr UI</h1>
          <p>A set of components to build apps faster.</p>
        </div>
        <Section>
          <h2 className="text-2xl font-semibold">Buttons</h2>
          {buttonsList.map((row, i) => (
            <div key={i} className="flex space-x-2">
              {row.map((button, j) => (
                <Button {...button} key={j} />
              ))}
            </div>
          ))}
        </Section>
        <Section>
          <h2 className="text-2xl font-semibold">Chip Buttons</h2>
          {chipButtonList.map((row, i) => (
            <div key={i} className="flex space-x-2">
              {row.map((button, j) => (
                <ChipButton {...button} key={j} />
              ))}
            </div>
          ))}
        </Section>
        <Section>
          <h2 className="text-2xl font-semibold">Icon Buttons</h2>
          {iconButtonList.map((row, i) => (
            <div key={i} className="flex space-x-2">
              {row.map((button, j) => (
                <IconButton {...button} key={j} />
              ))}
            </div>
          ))}
        </Section>
        <Section>
          <h2 className="text-2xl font-semibold">Toast</h2>
          <div className="flex space-x-4">
            <Button onClick={() => toast({ children: "Default Toast" })}>
              Open Default Toast
            </Button>
            <Button
              colorScheme="error"
              onClick={() =>
                errorToast({ children: "Error Toast", colorScheme: "error" })
              }
            >
              Open Error Toast
            </Button>
            <Button
              colorScheme="success"
              onClick={() =>
                successToast({
                  children: "Success Toast",
                  colorScheme: "success",
                })
              }
            >
              Open Success Toast
            </Button>
            <Button
              variant="pastel"
              onClick={() =>
                warningToast({
                  children: "Warning Toast",
                  colorScheme: "warning",
                })
              }
            >
              Open Warning Toast
            </Button>
          </div>
        </Section>
        <Section>
          <h2 className="text-2xl font-semibold">Modal</h2>
          <div className="flex space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open</Button>
              </DialogTrigger>
              <DialogContent append="bottom">
                <DialogHeader>Select a token</DialogHeader>
                <DialogBody className="px-4 pb-6">
                  <ul>
                    {Array(15)
                      .fill("")
                      .map((_, i) => (
                        <li key={i}>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </li>
                      ))}
                  </ul>
                </DialogBody>
              </DialogContent>
            </Dialog>
            <Dialog open={openModal} onOpenChange={setOpenModal}>
              <DialogTrigger asChild>
                <Button>Open</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader size="xl" className="text-center">
                  <DialogClose position="left" size="xl">
                    <Button variant="ghost">
                      <Icon name="arrow-left" />
                    </Button>
                  </DialogClose>
                  Confirm Swap
                </DialogHeader>
                <DialogBody className="mx-10 mb-6">
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogBody>
                <DialogFooter>
                  <Button
                    width="full"
                    colorScheme="primary"
                    variant="pastel"
                    onClick={closeModal}
                  >
                    Cancel
                  </Button>
                  <Button
                    width="full"
                    colorScheme="success"
                    variant="pastel"
                    onClick={closeModal}
                  >
                    Confirm
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </Section>
        <Section>
          <h2 className="text-2xl font-semibold">Tabs</h2>
          <div className="space-y-5">
            <p>
              Tabs is based on{" "}
              <a
                className="text-text-primary-main hover:underline"
                href="https://headlessui.com/react/tabs"
              >
                headlessui tabs
              </a>
              , check out their docs for usage.
            </p>
            <div className="w-full max-w-md px-2 sm:px-0">
              <TabGroup
                onChange={(index: number) =>
                  console.log("Changed selected tab to:", index)
                }
              >
                <TabHeader>
                  <TabStyled>All bets</TabStyled>
                  <TabStyled>
                    Active
                    <div className="bg-surface-surface-0 text-2xs border border-outline-low-em rounded-6 p-1 px-1.5 ml-2">
                      01
                    </div>
                  </TabStyled>
                  <TabStyled>Unredeemed</TabStyled>
                  <TabStyled>Complete</TabStyled>
                </TabHeader>
                <TabBody className="mt-2">
                  <TabPanel>
                    <div className="bg-surface-primary-accent-1 p-5 rounded-4">
                      All bets
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="bg-surface-primary-accent-1 p-5 rounded-4">
                      Active
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="bg-surface-danger-accent-1 p-5 rounded-4">
                      Unredeemed
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="bg-surface-warning-accent-1 p-5 rounded-4">
                      Complete
                    </div>
                  </TabPanel>
                </TabBody>
              </TabGroup>
            </div>
          </div>
        </Section>
        <Section>
          <div className="text-2xl font-semibold">ToogleGroup</div>
          <p>
            Based on Radio Group component from Headless ui,{" "}
            <a
              className="text-surface-primary-main hover:underline"
              href="https://headlessui.com/react/radio-group"
            >
              check their docs
            </a>
            .
          </p>
          <div className="divide-x divide-surface-surface-2 flex items-center space-x-5">
            {toggleGroupOptionSizes.map(size => (
              <div key={size} className="pl-4">
                <p>Size: {size}</p>
                <ToggleGroup value={slipage} onChange={setSlipage}>
                  <ToogleGroupOption value="auto" size={size}>
                    auto
                  </ToogleGroupOption>
                  <ToogleGroupOption value="0.1" size={size}>
                    0.1%
                  </ToogleGroupOption>
                  <ToogleGroupOption value="0.5" size={size}>
                    0.5%
                  </ToogleGroupOption>
                </ToggleGroup>
              </div>
            ))}
          </div>
          <div>Selected: {slipage}</div>
        </Section>
        <Section>
          <h2 className="text-2xl font-semibold">Modal</h2>
          <div className="flex space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open</Button>
              </DialogTrigger>
              <DialogContent append="bottom">
                <DialogHeader>Select a token</DialogHeader>
                <DialogBody className="px-4 pb-6">
                  <ul>
                    {Array(15)
                      .fill("")
                      .map((_, i) => (
                        <li key={i}>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </li>
                      ))}
                  </ul>
                </DialogBody>
              </DialogContent>
            </Dialog>
            <Dialog open={openModal} onOpenChange={setOpenModal}>
              <DialogTrigger asChild>
                <Button>Open</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader size="xl" className="text-center">
                  <DialogClose position="left" size="xl">
                    <IconButton variant="ghost" name="arrow-left" />
                  </DialogClose>
                  Confirm Swap
                </DialogHeader>
                <DialogBody className="mx-10 mb-6">
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogBody>
                <DialogFooter>
                  <Button
                    width="full"
                    colorScheme="primary"
                    variant="pastel"
                    onClick={closeModal}
                  >
                    Cancel
                  </Button>
                  <Button
                    width="full"
                    colorScheme="success"
                    variant="pastel"
                    onClick={closeModal}
                  >
                    Confirm
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </Section>
        <Section>
          <h2 className="text-2xl font-semibold">Tag</h2>
          <div className="flex space-x-6">
            {TagColorSchemes.map(color => (
              <Fragment key={color}>
                <Tag colorScheme={color as TagColorSchemeProp} size="sm">
                  Tag
                </Tag>
                <Tag colorScheme={color as TagColorSchemeProp}>Tag</Tag>
              </Fragment>
            ))}
          </div>
        </Section>
        <Section>
          <h2 className="text-2xl font-semibold">Input</h2>
          <div className="flex flex-col space-y-4 w-[200px]">
            <Input
              label="Email"
              type="email"
              id="email"
              message="This is a message"
              placeholder="Input email here"
            />
            <Input
              label="Solid"
              type="email"
              id="email"
              placeholder="Input email here"
              variant="solid"
            />
            <Input
              label="Pastel"
              type="email"
              id="email"
              placeholder="Input email here"
              variant="pastel"
            />
            <Input
              label="Ghost"
              type="email"
              id="email"
              placeholder="Input email here"
              variant="ghost"
            />
            <Input
              label="Large (lg)"
              type="email"
              id="email"
              placeholder="Input email here"
              leftIcon="search"
              rightIcon="chevron-down"
              size="lg"
            />
            <Input
              label="Medium (md) - default"
              type="email"
              id="email"
              placeholder="Input email here"
              leftIcon="search"
              rightIcon="chevron-down"
              size="md"
            />
            <Input
              label="Small (sm)"
              type="email"
              id="email"
              placeholder="Input email here"
              leftIcon="search"
              rightIcon="chevron-down"
              size="sm"
            />
            <Input
              label="Disabled"
              type="email"
              id="email-2"
              disabled
              message="This is a message"
              placeholder="Input email here"
            />
            <Input
              label="With error"
              type="email"
              id="email-3"
              message="There is an error"
              placeholder="Input email here"
              isInvalid={true}
            />
          </div>
        </Section>
        <Section>
          <h2 className="text-2xl font-semibold">Icons</h2>
          <div className="flex flex-wrap space-x-4 space-y-2 md:space-y-0">
            {Object.keys(iconMap).map(iconName => (
              <div
                className="flex flex-col items-center space-y-2"
                key={iconName}
              >
                <Icon name={iconName as IconName} size={24} />
                <div className="p-1 rounded-lg bg-surface-75">
                  <p>{iconName}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
        <Section>
          <h2 className="text-2xl font-semibold">Icon Badges</h2>
          <div className="space-y-4">
            {iconBadgeList.map((row, i) => (
              <div key={i} className="flex space-x-4 items-center">
                {row.map((iconBadge, j) => (
                  <IconBadge name="bar-graph-fill" {...iconBadge} key={j} />
                ))}
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl font-semibold">Logos</h2>
          <div className="space-y-4">
            <div className="flex space-x-2">
              {logoList.map((iconBadge, i) => (
                <Logo
                  src="https://assets.smold.app/api/token/100/0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d/logo-128.png"
                  alt="xdai token"
                  {...iconBadge}
                  key={i}
                />
              ))}
            </div>
            {logoPairList.map((row, i) => (
              <div key={i} className="flex space-x-2">
                {row.map((iconBadge, j) => (
                  <LogoPair
                    logoASrc="https://assets.smold.app/api/token/100/0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d/logo-128.png"
                    logoBSrc="https://assets.smold.app/api/token/1/0x6810e776880C02933D47DB1b9fc05908e5386b96/logo-128.png"
                    alt="xdai token"
                    {...iconBadge}
                    key={j}
                  />
                ))}
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl font-semibold">Font sizes</h2>
          <div className="space-y-2">
            <p>
              9. <span className="text-3xl">Font size 3xl</span>
            </p>
            <p>
              8. <span className="text-2xl">Font size 2xl</span>
            </p>
            <p>
              7. <span className="text-xl">Font size xl</span>
            </p>
            <p>
              6. <span className="text-lg">Font size lg</span>
            </p>
            <p>
              5. <span className="text-md">Font size md</span>
            </p>
            <p>
              4. <span className="text-base">Font size base</span>
            </p>
            <p>
              3. <span className="text-sm">Font size sm</span>
            </p>
            <p>
              2. <span className="text-xs">Font size xs</span>
            </p>
            <p>
              1. <span className="text-2xs">Font size 2xs</span>
            </p>
          </div>
        </Section>
        <Section>
          <h2 className="text-2xl font-semibold">Box Shadows</h2>
          <div className="space-y-2">
            <div className="bg-surface-disabled-low-em rounded-16 shadow-0 w-[1000px] h-[700px]">
              <div className="bg-surface-disabled-low-em rounded-16 shadow-1 w-[900px] h-[600px]">
                <div className="bg-surface-disabled-med-em rounded-16 shadow-2 w-[800px] h-[500px]">
                  <div className="bg-surface-disabled-high-em rounded-16 shadow-3 w-[700px] h-[400px]">
                    <div className="bg-surface-disabled-high-em rounded-16 shadow-4 w-[600px] h-[300px]">
                      <div className="bg-surface-disabled-high-em rounded-16 shadow-5 w-[500px] h-[200px]">
                        <div className="bg-surface-disabled-high-em rounded-16 shadow-6 w-[400px] h-[100px]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <h2 className="text-2xl font-semibold">Colors</h2>
          <div className="space-y-2">
            {Object.keys(tailwindColors).map(key => (
              <div key={key} className="space-y-2">
                <p className="text-xl capitalize">{key}</p>
                <div className="space-y-2">
                  {tailwindColors[key].map(color => (
                    <div key={color} className="flex space-x-4">
                      <p>{`${key}-${color}`}</p>
                      <div
                        className={`bg-${key}-${color} w-20 h-10 rounded-6`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}

const Section = ({ children }: PropsWithChildren) => {
  return <section className="space-y-4 py-12 border-b">{children}</section>;
};
