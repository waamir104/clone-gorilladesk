import { Outlet } from "react-router-dom";
import { SettingsSidebar } from "./SettingsSidebar";
import { SettingsHeader } from "./SettingsHeader";

export const SettingsLayout = () => {
  return (
    <div className="container-wrap container-setting custom-grid-sidebar container-table">
      <SettingsSidebar />
      <div className="settings-main">
        <SettingsHeader />
        <div className="wrapper-columns">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
