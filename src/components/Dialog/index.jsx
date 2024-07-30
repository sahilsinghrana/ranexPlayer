import {clsxWithMerge} from "../../utils/utils";

import "./index.css";

import {forwardRef} from "react";

function Dialog({children, className, ...props}, ref) {
  return (
    <dialog
      ref={ref}
      className={clsxWithMerge("h-64 w-80 ", className)}
      {...props}
    >
      {children}
    </dialog>
  );
}

export default forwardRef(Dialog);
