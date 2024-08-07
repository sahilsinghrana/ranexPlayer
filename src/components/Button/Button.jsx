import {clsxWithMerge} from "../../utils/utils";

import {StarFilledIcon} from "@radix-ui/react-icons";
import {cva} from "class-variance-authority";
import {memo} from "react";

export const buttonVariants = cva(
  "flex items-center justify-center p-2 transition-colors duration-300",
  {
    variants: {
      type: {
        primary: [
          "text-neutral-100 hover:text-neutral-300 font-bold",
          "hover:bg-red-950 bg-red-900",
          "disabled:bg-zinc-800 text-gray-400",
        ],
        secondary: ["text-neutral-200", "bg-neutral-600 hover:bg-neutral-700"],
        danger: ["text-gray-1", "bg-danger-10 hover:bg-danger-11"],
        outline: [
          "outline-1  outline-double",
          "outline-current hover:outline-2 active:outline-4 focus:outline-4 ",
        ],
        icon: [
          "text-white",
          "hover:text-accent-6 scale-2",
          "data-[active=true]:text-accent-11 hover:data-[active=true]:text-accent-9 font-extrabold",
        ],
        trasparent: ["bg-transparent"],
      },
      size: {
        sm: ["h-9"],
        md: ["h-10"],
        lg: ["h-14"],
      },
      rounded: {
        sm: ["rounded-sm"],
        md: ["rounded"],
        lg: ["rounded-lg"],
        xl: ["rounded-xl"],
        full: ["rounded-full"],
      },
    },
    defaultVariants: {
      type: "primary",
      size: "md",
      rounded: "md",
    },
  }
);

const BaseButton = ({
  children,
  className,
  type,
  size,
  rounded,
  loading,
  ...props
}) => {
  return (
    <button
      className={clsxWithMerge(
        buttonVariants({type, size, rounded}),
        className
      )}
      {...props}
    >
      {loading && <StarFilledIcon className="mr-1 animate-spin" />} {children}
    </button>
  );
};

export default memo(BaseButton);
