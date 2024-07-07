import {cva} from "class-variance-authority";
import clsx from "clsx";
import {twMerge} from "tailwind-merge";

const button = cva(
  "flex items-center justify-center p-2 transition-colors duration-300",
  {
    variants: {
      type: {
        primary: [
          "text-white dark:text-black",
          "bg-black hover:bg-slate-700",
          "dark:bg-white dark:hover:bg-gray-8",
        ],
        secondary: ["text-gray-1", "bg-gray-9 hover:bg-gray-10"],
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

const BaseButton = ({children, className, type, size, rounded, ...props}) => {
  return (
    <button
      className={twMerge(clsx(button({type, size, rounded}), className))}
      {...props}
    >
      {children}
    </button>
  );
};

export default BaseButton;
