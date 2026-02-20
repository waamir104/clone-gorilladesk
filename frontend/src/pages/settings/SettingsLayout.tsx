import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SettingsSidebar } from "./SettingsSidebar";
import { SettingsHeader } from "./SettingsHeader";

export const SettingsLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div
      className={`container-wrap container-setting custom-grid-sidebar container-table${!sidebarOpen ? " settings-sidebar-hidden" : ""}`}
    >
      <div className="settings-header-full">
        <SettingsHeader
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
        />
      </div>
      <div className="settings-body">
        <SettingsSidebar ariaHidden={!sidebarOpen} />
        <div className="wrapper-columns">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
