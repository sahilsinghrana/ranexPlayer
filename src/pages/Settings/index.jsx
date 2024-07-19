import Header from "../../components/Layout/Header";
import useUserProfile from "../../hooks/fetch/useUserProfile";

import {GearIcon} from "@radix-ui/react-icons";
import {NavLink, Outlet} from "react-router-dom";

function SettingsPage() {
  return (
    <div className="h-dvh max-h-dvh">
      <Header />
      <div className="p-2 sm:p-4 ">
        <div>
          <h1 className="flex items-center gap-1 text-lg font-bold tracking-widest uppercase text-neutral-300">
            <GearIcon /> Settings
          </h1>
        </div>
        <div className="m-3  mt-6 my-3 grid flex-grow grid-cols-[minmax(100px,_1fr)_5fr]">
          <SettingsSidebar />
          <div className="w-full px-7">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;

function SettingsSidebar() {
  const {user} = useUserProfile();
  return (
    <div
      className="py-1 min-h-[300px] text-sm md:px-2"
      style={{
        borderRight: "1px solid #ffffff50",
      }}
    >
      <ul>
        <SidebarLink to="/settings/profile">Profile</SidebarLink>
        <SidebarLink to="/settings/account">Account</SidebarLink>
        <SidebarLink to="/settings/cloudIntegrations">Integrations</SidebarLink>
        {!!user?.iam && <SidebarLink to="/settings/admin">Admin</SidebarLink>}
      </ul>
    </div>
  );
}

function SidebarLink({children, to}) {
  return (
    <li className="mb-3 hover:text-white">
      <NavLink
        className={({isActive}) => (isActive ? "text-white" : "")}
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
}
