import {clsxWithMerge} from "../../utils/utils";

import {memo} from "react";

const HorizontalList = ({children, className}) => {
  return (
    <ul
      className={clsxWithMerge(
        "flex flex-wrap items-center justify-center sm:justify-start whitespace-nowrap",
        className
      )}
    >
      {children}
    </ul>
  );
};

export default memo(HorizontalList);
