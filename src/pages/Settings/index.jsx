import Header from "../../components/Layout/Header";

import {GearIcon} from "@radix-ui/react-icons";
import {Link, Outlet} from "react-router-dom";

function SettingsPage() {
  return (
    <>
      <Header />
      <div className="p-4 ">
        <div>
          <h1 className="flex items-center gap-1 text-lg font-bold tracking-widest uppercase text-neutral-300">
            <GearIcon /> Settings
          </h1>
        </div>
        <div className="m-3 mt-6 my-3 h-full grid flex-grow grid-cols-[minmax(100px,_1fr)_5fr]">
          <SettingsSidebar />
          <div className="w-full h-full px-7">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingsPage;

function SettingsSidebar() {
  return (
    <div
      className="h-full min-h-[400px] "
      style={{
        borderRight: "1px solid #ffffff50",
      }}
    >
      <ul>
        <li>
          <Link to="/settings/profile">Profile</Link>
        </li>
        <li>
          <Link to="/settings/account">Account</Link>
        </li>
        <li>
          <Link to="/settings/cloudIntegrations">Integrations</Link>
        </li>
      </ul>
    </div>
  );
}
