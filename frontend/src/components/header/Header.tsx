import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  IconArrowDown,
  IconSearch,
  IconPlus,
} from "./HeaderIcons";

interface HeaderProps {
  isSidebarOpen?: boolean;
  onToggleSidebar?: () => void;
}

const navOptions = [
  { path: "/app", label: "Calendar", icon: "event" },
  { path: "/app/customers", label: "Customers", icon: "account_circle" },
  { path: "/app/settings/company", label: "Settings", icon: "settings" },
] as const;

function getSelectedOption(pathname: string) {
  if (pathname.includes("customer")) return navOptions[1];
  if (pathname.includes("settings")) return navOptions[2];
  return navOptions[0];
}

export const Header = ({ isSidebarOpen = true, onToggleSidebar }: HeaderProps) => {
  const { pathname } = useLocation();
  const selectedOption = getSelectedOption(pathname);
  const [isCalendarMenuOpen, setCalendarMenuOpen] = useState(false);
  const calendarDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarDropdownRef.current &&
        !calendarDropdownRef.current.contains(event.target as Node)
      ) {
        setCalendarMenuOpen(false);
      }
    };
    if (isCalendarMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCalendarMenuOpen]);

  return (
    <div
      className="header-v2"
      id="header_v2"
      style={{ ["--background" as string]: "#FFFFFF" }}
    >
      <div className="container flex-betweenitems">
        {/* Left section */}
        <div className="container__header header-v2-left h-100">
          <div className="collapse-sidebar">
            <button
              type="button"
              className="btn-sidebar items-collapse"
              onClick={() => onToggleSidebar?.()}
              aria-label={isSidebarOpen ? "Ocultar menú" : "Mostrar menú"}
              aria-expanded={isSidebarOpen}
            >
              <span className="material-symbols-outlined">
                {isSidebarOpen ? "menu_open" : "menu"}
              </span>
            </button>
          </div>
          <Link className="logo" to="/app">
            <img src="/login/logo icon.png" alt="GorillaDesk" width={32} height={32} />
          </Link>
          <div
            ref={calendarDropdownRef}
            className={`wrap-nav nav-menu v2-dropdown calendar-dropdown${isCalendarMenuOpen ? " is-open" : ""}`}
          >
            <button
              type="button"
              className="dropbtn v2-btn-default nav"
              onClick={() => setCalendarMenuOpen((prev) => !prev)}
              aria-expanded={isCalendarMenuOpen}
              aria-haspopup="true"
            >
              <span className="nav-selector-icon material-symbols-outlined">
                {selectedOption.icon}
              </span>
              <p className="nav__label is-nav-items">{selectedOption.label}</p>
              <span className="arrow">
                <IconArrowDown />
              </span>
            </button>
            <div className="v2-dropdown__menu">
              <ul>
                {navOptions.map((opt) => (
                  <li
                    key={opt.path}
                    className={`items has-icon${selectedOption.path === opt.path ? " is-selected" : ""}`}
                  >
                    <Link
                      to={opt.path}
                      className="nav-dropdown-link"
                      onClick={() => setCalendarMenuOpen(false)}
                    >
                      <span className="nav-dropdown-link__icon">
                        <span className="material-symbols-outlined">{opt.icon}</span>
                      </span>
                      <span>{opt.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="horizontal-menu mr-1 dp-flex flexcenter" />
        </div>

        {/* Right section */}
        <div className="container__header header-v2-right h-100">
          <form autoComplete="off" className="search-form relative" onSubmit={(e) => e.preventDefault()}>
            <span className="svg-search-absolute">
              <IconSearch />
            </span>
            <input
              id="search-ip"
              className="search-ip"
              type="text"
              name="term"
              placeholder="Search ..."
            />
            <span className="key absolute">ALT+S</span>
            <div id="globalSearch" className="search-dropdown">
              <div className="scrolls" />
            </div>
          </form>

          <div className="v2-dropdown add-menu wrap-btn-primary">
            <span className="btn-primary --icon svg-white">
              <IconPlus />
            </span>
            <div id="show_list_quick_add" className="v2-dropdown__menu --center">
              <ul className="relative">
                <div className="arrow"><i className="up" /></div>
                <li className="items has-icon" tabIndex={0}>
                  <span className="material-symbols-outlined">person_add</span>
                  <span>New Customer</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="is-divider" />
          <div className="boxs-notification notifi nav-sms">
            <div className="notify-btn tooltip dp-hide" title="SMS">SMS</div>
          </div>
          <div className="boxs-notification notifi nav-notification tabs-notify">
            <div className="btn-notification notify-btn tooltip" title="Notifications">
            <span className="material-symbols-outlined">siren</span>
          </div>
          </div>
          <div className="boxs-notification notifi nav-inbox">
            <div className="notify-btn tooltip" title="Inbox">
            <span className="material-symbols-outlined">mail</span>
          </div>
          </div>
          <div className="is-divider ml-1" />
          <div className="nav-help v2-dropdown">
            <div className="dropbtn v2-btn-default --sm --icon-r fs-13" tabIndex={0}>
              <span className="txt-ellipsis">Help</span>
              <span className="arrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4.5 7.5L8 11L11.5 7.5" stroke="var(--color-icon)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </div>
            <div className="v2-dropdown__menu --right" />
          </div>
          <div className="v2-dropdown dropdown-dark-mode ml-1">
            <div className="dropbtn v2-btn-default --sm tooltip" tabIndex={0} title="Dark Mode">
              <span className="material-symbols-outlined">moon_stars</span>
            </div>
            <div className="v2-dropdown__menu --right" />
          </div>
          <div className="v2-dropdown wrap-nav nav-user">
            <div className="dropbtn v2-btn-default nav">
              <div className="avatar relative flexcenter">
                <img loading="lazy" src="https://d10lkxv225q7z2.cloudfront.net/avatars%2Fstatic%2Favatar_1.jpg" width={32} height={32} alt="Avatar" className="avt-img --lg" />
              </div>
              <span className="nav__label">IVY</span>
              <span className="arrow"><IconArrowDown /></span>
            </div>
            <div className="v2-dropdown__menu user-content --right scrolls">
              <ul>
                <li className="items has-icon">Sync to Google Calendar</li>
                <li className="items has-icon">My Account</li>
                <li className="items has-icon">Upgrade Plan</li>
                <li className="line" />
                <li className="items has-icon"><Link to="/login">Log out</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
