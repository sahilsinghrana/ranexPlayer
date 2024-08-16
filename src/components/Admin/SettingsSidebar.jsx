import SidebarLink from "./SidebarLink";

import useUserProfile from "../../hooks/fetch/useUserProfile";

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

export default SettingsSidebar;
