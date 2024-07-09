import clsx from "clsx";
import {twMerge} from "tailwind-merge";

function FormGroup({children, className}) {
  return (
    <div className={twMerge(clsx("flex flex-col", className))}>{children}</div>
  );
}

export default FormGroup;
