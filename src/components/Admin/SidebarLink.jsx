import clsx from "clsx";
import {NavLink} from "react-router-dom";

function SidebarLink({children, to, Icon, collapsed}) {
  return (
    <li className="mb-3 hover:text-white">
      <NavLink
        className={({isActive}) =>
          clsx(
            "flex items-center gap-1 hover:text-slate-300",
            isActive ? "text-white" : "text-slate-500",
            {"justify-center": collapsed}
          )
        }
        to={to}
      >
        {Icon && <Icon />}
        {!collapsed && children}
      </NavLink>
    </li>
  );
}

export default SidebarLink;
