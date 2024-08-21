import SettingsSidebar from "../../components/Admin/SettingsSidebar";
import Header from "../../components/Layout/Header";
import MoonEclipseLoader from "../../components/Loaders/MoonEclipseLoader";

import {GearIcon} from "@radix-ui/react-icons";
import {Suspense} from "react";
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
        <div className="flex my-3 mt-6 ">
          <SettingsSidebar />
          <div className="w-full overflow-auto">
            <Suspense fallback={<MoonEclipseLoader />}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
