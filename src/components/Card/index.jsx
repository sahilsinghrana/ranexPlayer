import {clsxWithMerge} from "../../utils/utils";

import {memo} from "react";

const Card = ({children, backgroundImage, className}) => {
  return (
    <div
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        backgroundSize: "cover",
      }}
      className={clsxWithMerge(
        "w-32 h-32 m-2 duration-100 rounded-md shadow-md cursor-pointer bg-slate-600 hover:-translate-y-1 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default memo(Card);
