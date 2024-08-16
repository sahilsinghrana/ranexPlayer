import {NavLink} from "react-router-dom";

function SidebarLink({children, to}) {
  return (
    <li className="mb-3 hover:text-white">
      <NavLink
        className={({isActive}) => (isActive ? "text-white" : "text-slate-400")}
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default SidebarLink;
