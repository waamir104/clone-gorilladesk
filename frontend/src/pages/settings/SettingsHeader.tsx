import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getSettingsItemByPath, SETTINGS_GROUPS } from "./settingsConfig";

const BackIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711L6.41421 12L11.7071 17.2929C12.0976 17.6834 12.0976 18.3166 11.7071 18.7071C11.3166 19.0976 10.6834 19.0976 10.2929 18.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L10.2929 5.29289ZM19 16C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H15C14.4477 18 14 17.5523 14 17C14 16.4477 14.4477 16 15 16H19ZM19 11C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H10C9.44772 13 9 12.5523 9 12C9 11.4477 9.44772 11 10 11H19ZM19 6C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H15C14.4477 8 14 7.55228 14 7C14 6.44772 14.4477 6 15 6H19Z"
      fill="var(--color-icon)"
    />
  </svg>
);

const ArrowDownIcon = () => (
  <svg width="8" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.39378 0H8.60622C9.3014 0 9.86495 0.612378 9.86495 1.36778C9.86495 1.68776 9.76171 1.99761 9.5732 2.24342L5.96698 6.94579C5.52194 7.52611 4.72823 7.60452 4.19417 7.12092C4.13569 7.06796 4.08175 7.00934 4.03301 6.94579L0.426789 2.24342C-0.0182539 1.6631 0.0539014 0.800623 0.587953 0.317024C0.814167 0.112181 1.09931 0 1.39378 0Z"
      fill="var(--color-icon)"
    />
  </svg>
);

const TutorialsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.94304 6.30761L8.56379 5.95818C10.8445 5.65408 13.1556 5.65408 15.4363 5.95818L18.057 6.30761C18.9172 6.42229 19.6052 7.07855 19.7605 7.93229L20 9.25001C20.3307 11.0684 20.3307 12.9316 20 14.75L19.7605 16.0677C19.6052 16.9215 18.9172 17.5777 18.057 17.6924L15.4363 18.0418C13.1556 18.3459 10.8445 18.3459 8.56379 18.0418L5.94304 17.6924C5.08291 17.5777 4.39485 16.9215 4.23963 16.0677L4.00004 14.75C3.66942 12.9316 3.66942 11.0684 4.00004 9.25001L4.23963 7.93229C4.39485 7.07855 5.08291 6.42229 5.94304 6.30761Z"
      stroke="var(--color-icon)"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 10.4207V13.5794C10.5 14.1317 10.9477 14.5794 11.5 14.5794C11.7052 14.5794 11.9054 14.5163 12.0735 14.3986L14.3297 12.8193C14.7821 12.5025 14.8922 11.879 14.5754 11.4266C14.5085 11.3309 14.4253 11.2477 14.3297 11.1808L12.0735 9.60145C11.621 9.28473 10.9975 9.39477 10.6808 9.84722C10.5631 10.0153 10.5 10.2155 10.5 10.4207Z"
      stroke="var(--color-icon)"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SettingsHeader = () => {
  const { pathname } = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentItem = getSettingsItemByPath(pathname);
  const currentLabel = currentItem?.label ?? "Company";

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="header --main">
      <div className="header__left flex-1">
        <Link
          to="/app"
          className="header-items btn-bg-grey v2-btn-default --icon-lg --transparent"
          aria-label="Back"
        >
          <BackIcon />
        </Link>
        <div
          ref={dropdownRef}
          className={`header-items v2-dropdown list-menu${dropdownOpen ? " is-open" : ""}`}
        >
          <button
            type="button"
            className="dropbtn items v2-btn-default has-bg-grey"
            onClick={() => setDropdownOpen((o) => !o)}
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
          >
            <h2 className="txt-ellipsis fs-14">{currentLabel}</h2>
            <div className="arrow">
              <ArrowDownIcon />
            </div>
          </button>
          <div className="v2-dropdown__menu scrolls" id="dropdown-report-menu">
            <div className="d-flex">
              <div className="col-half">
                <div className="subtitle" title="SYSTEM SETTINGS">
                  SYSTEM SETTINGS
                </div>
                {SETTINGS_GROUPS[1].items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`items has-icon${pathname === item.path ? " active" : ""}`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span>{item.icon}</span>
                    <p className="txt-ellipsis items-text" title={item.label}>
                      {item.label}
                    </p>
                  </Link>
                ))}
              </div>
              <div className="col-half">
                <div className="subtitle" title="Email & Sms Templates">
                  Email & Sms Templates
                </div>
                {SETTINGS_GROUPS[2].items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`items has-icon${pathname === item.path ? " active" : ""}`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span>{item.icon}</span>
                    <p className="txt-ellipsis items-text" title={item.label}>
                      {item.label}
                    </p>
                  </Link>
                ))}
                <div className="line" />
                <div className="subtitle" title="Your Account">
                  Your Account
                </div>
                {SETTINGS_GROUPS[0].items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`items has-icon${pathname === item.path ? " active" : ""}`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span>{item.icon}</span>
                    <p className="txt-ellipsis items-text" title={item.label}>
                      {item.label}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-tutorials">
        <button type="button" className="v2-btn-default has-icon btn-modal">
          <TutorialsIcon />
          Tutorials
        </button>
      </div>
    </div>
  );
};
