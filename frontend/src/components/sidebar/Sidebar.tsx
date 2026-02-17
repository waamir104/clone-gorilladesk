import { NavLink, useLocation } from "react-router-dom";

const menuItemClass = (isActive: boolean) =>
  `tooltip menu-item${isActive ? " is-active" : ""}`;

function isCalendarActive(pathname: string) {
  return pathname === "/app" || (pathname.startsWith("/app") && !pathname.includes("customer") && !pathname.includes("settings"));
}
function isCustomersActive(pathname: string) {
  return pathname.includes("customer");
}
function isSettingsActive(pathname: string) {
  return pathname.includes("settings");
}

export const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div id="sidebar" className="sidebar-container active">
      <div className="sidebar-container__content flex-column">
        <NavLink
          to="/app"
          className={() => menuItemClass(isCalendarActive(pathname))}
          aria-current={isCalendarActive(pathname) ? "page" : undefined}
        >
          <span className="menu-item__icon">
            <span className="material-symbols-outlined">event</span>
          </span>
          <span className="tooltiptext right"> Calendar </span>
        </NavLink>
        <NavLink
          to="/app/customers"
          className={() => menuItemClass(isCustomersActive(pathname))}
          aria-current={isCustomersActive(pathname) ? "page" : undefined}
        >
          <span className="menu-item__icon">
            <span className="material-symbols-outlined">account_circle</span>
          </span>
          <span className="tooltiptext right"> Customers </span>
        </NavLink>
      </div>
      <div className="sidebar-container__content flex-column">
        <NavLink
          to="/app/settings/company"
          className={() => menuItemClass(isSettingsActive(pathname))}
          aria-current={isSettingsActive(pathname) ? "page" : undefined}
        >
          <span className="menu-item__icon">
            <span className="material-symbols-outlined">settings</span>
          </span>
          <span className="tooltiptext right"> Settings </span>
        </NavLink>
      </div>
    </div>
  );
};
