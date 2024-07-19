import {buttonVariants} from "./Button";

import {clsxWithMerge} from "../../utils/utils";

import {Link} from "react-router-dom";

function LinkButton({children, className, type, size, rounded, ...props}) {
  return (
    <Link
      className={clsxWithMerge(
        buttonVariants({type, size, rounded}),
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
