import Dialog from "./index.jsx";

import {clsxWithMerge} from "../../utils/utils.js";

import {Cross2Icon} from "@radix-ui/react-icons";
import {forwardRef} from "react";

function DialogWithTitle({children, title, classNameTitle, ...props}, ref) {
  return (
    <Dialog ref={ref} {...props}>
      <div
        className={clsxWithMerge(
          "relative font-bold w-full py-2 text-xl text-center text-slate-300 tracking-wide bg-slate-800/50",
          classNameTitle
        )}
      >
        {title}
        <button
          onClick={() => ref.current.close()}
          className="absolute top-0 right-0 flex items-center h-full mr-2 text-xl"
        >
          <Cross2Icon className="w-6 h-6 hover:text-red-600" />
        </button>
      </div>
      {children}
    </Dialog>
  );
}

export default forwardRef(DialogWithTitle);
