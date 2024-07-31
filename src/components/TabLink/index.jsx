import {clsxWithMerge} from "../../utils/utils";

import {NavLink} from "react-router-dom";

function TabLink({children, className, ...props}) {
  return (
    <NavLink
      className={({isActive, isPending}) =>
        clsxWithMerge(
          " border-2 text-sm border-gray-700 font-normal text-slate-400 p-2 px-3 m-0 hover:bg-yellow-900/25 duration-150",
          isActive && "bg-red-900/5 text-white font-bold",
          isPending && "bg-gray-900",
          className
        )
      }
      {...props}
    >
      {children}
    </NavLink>
  );
}

export default TabLink;
