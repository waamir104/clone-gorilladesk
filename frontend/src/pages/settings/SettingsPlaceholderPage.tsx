import { useLocation } from "react-router-dom";
import { getSettingsItemByPath } from "./settingsConfig";

export const SettingsPlaceholderPage = () => {
  const { pathname } = useLocation();
  const item = getSettingsItemByPath(pathname);
  const title = item?.label ?? "Settings";

  return (
    <div className="contents-pages container-column wrapper-box-edit scrolls">
      <div className="wrapper-box-edit__content form-default">
        <div className="page-wrapper bg-white">
          <div className="rows mb-5">
            <h2 className="fs-18 fw-600">{title}</h2>
          </div>
          <div className="rows">
            <p className="fs-14" style={{ color: "var(--color-icon)" }}>
              This section is under construction. Content for {title} will be added here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
