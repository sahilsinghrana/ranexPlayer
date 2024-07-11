import clsx from "clsx";
import {twMerge} from "tailwind-merge";

export function clsxWithMerge(...args) {
  return twMerge(clsx(...args));
}
