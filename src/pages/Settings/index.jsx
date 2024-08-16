import SettingsSidebar from "../../components/Admin/SettingsSidebar";
import Header from "../../components/Layout/Header";

import {GearIcon} from "@radix-ui/react-icons";
import {Outlet} from "react-router-dom";

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
