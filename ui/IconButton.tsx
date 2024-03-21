import { cva } from "class-variance-authority";
import { Button, ButtonProps, ButtonSizeProp, Icon, IconProps } from ".";

export const iconButtonStyles = cva([], {
  variants: {
    size: {
      xs: "p-1 rounded-6",
      sm: "p-2 rounded-8",
      md: "p-3",
      lg: "p-3.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const iconSize: Record<ButtonSizeProp, number> = {
  xs: 14,
  sm: 14,
  md: 18,
  lg: 20,
};

export const IconButton = ({
  name,
  className,
  size = "md",
  ...props
}: ButtonProps & Pick<IconProps, "name">) => {
  return (
    <Button className={iconButtonStyles({ className, size })} {...props}>
      <Icon size={iconSize[size]} name={name} />
    </Button>
  );
};
