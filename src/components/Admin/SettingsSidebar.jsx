import SidebarLink from "./SidebarLink";

import useUserProfile from "../../hooks/fetch/useUserProfile";
import {useIsMobile} from "../../hooks/useMediaQuery";

import {
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
  GearIcon,
  Link2Icon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import clsx from "clsx";
import {useState} from "react";

function SettingsSidebar() {
  const {user} = useUserProfile();
  const isMobile = useIsMobile();

  const [collapsed, setCollapsed] = useState(isMobile);

  return (
    <div
      className={clsx("py-1 text-sm pr-2 min-h-[300px]", {
        "": !collapsed,
      })}
      style={{
        borderRight: "1px solid #ffffff50",
      }}
    >
      <button
        className="flex justify-end w-full p-1 mb-4 text-right rounded-md bg-gray-600/60"
        onClick={() => setCollapsed((p) => !p)}
      >
        {collapsed ? <DoubleArrowRightIcon /> : <DoubleArrowLeftIcon />}
      </button>
      <ul className="mt-4 ">
        <SidebarLink
          Icon={PersonIcon}
          collapsed={collapsed}
          to="/settings/profile"
        >
          Profile
        </SidebarLink>
        <SidebarLink
          Icon={GearIcon}
          collapsed={collapsed}
          to="/settings/account"
        >
          Account
        </SidebarLink>
        <SidebarLink
          Icon={Link2Icon}
          collapsed={collapsed}
          to="/settings/cloudIntegrations"
        >
          Integrations
        </SidebarLink>
        {!!user?.iam && (
          <SidebarLink
            Icon={RocketIcon}
            collapsed={collapsed}
            to="/settings/admin"
          >
            Admin
          </SidebarLink>
        )}
      </ul>
    </div>
  );
}

export default SettingsSidebar;
