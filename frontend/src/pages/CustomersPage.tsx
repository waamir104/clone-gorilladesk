import React, { useState } from "react";
import { Link } from "react-router-dom";

const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="16" height="16" rx="8" fill="#7A83A6" />
    <g>
      <path fillRule="evenodd" clipRule="evenodd" d="M8 11C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11ZM7.9998 3.25281C9.68874 3.25281 10.75 3.98978 10.75 5.99999C10.75 7.08162 10.3335 7.57488 9.39526 8.09934L9.36601 8.1157C8.83795 8.41104 8.7498 8.51866 8.7498 8.99999C8.7498 9.41421 8.41402 9.74999 7.9998 9.74999C7.58559 9.74999 7.2498 9.41421 7.2498 8.99999C7.2498 7.86609 7.68129 7.33929 8.6338 6.80655L8.66334 6.79003C9.17748 6.50262 9.25 6.41675 9.25 5.99999C9.25 4.95947 8.95241 4.75281 7.9998 4.75281C7.27298 4.75281 6.75 5.17814 6.75 5.99999C6.75 6.41421 6.41421 6.74999 6 6.74999C5.58579 6.74999 5.25 6.41421 5.25 5.99999C5.25 4.27345 6.50497 3.25281 7.9998 3.25281Z" fill="white" />
    </g>
  </svg>
);

const BackIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711L6.41421 12L11.7071 17.2929C12.0976 17.6834 12.0976 18.3166 11.7071 18.7071C11.3166 19.0976 10.6834 19.0976 10.2929 18.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L10.2929 5.29289ZM19 16C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H15C14.4477 18 14 17.5523 14 17C14 16.4477 14.4477 16 15 16H19ZM19 11C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H10C9.44772 13 9 12.5523 9 12C9 11.4477 9.44772 11 10 11H19ZM19 6C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H15C14.4477 8 14 7.55228 14 7C14 6.44772 14.4477 6 15 6H19Z" fill="var(--color-icon)" />
  </svg>
);

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.5C15.0376 17.5 17.5 15.0376 17.5 12C17.5 8.96243 15.0376 6.5 12 6.5C8.96243 6.5 6.5 8.96243 6.5 12C6.5 15.0376 8.96243 17.5 12 17.5Z" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 9.5C10.6193 9.5 9.5 10.6193 9.5 12" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.25 16.25L17.75 17.75" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ImportIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 10.5V7.5C4.5 6.39543 5.39543 5.5 6.5 5.5H16.5C17.6046 5.5 18.5 6.39543 18.5 7.5V10.5" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.5 19.5L11.5 10.5" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M16 15L11.5 10.5L7 15" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 7.5L8 11L11.5 7.5" stroke="var(--color-icon)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SortCaretIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.46967 5.21967C7.76256 4.92678 8.23744 4.92678 8.53033 5.21967L12.0303 8.71967C12.3232 9.01256 12.3232 9.48744 12.0303 9.78033C11.7374 10.0732 11.2626 10.0732 10.9697 9.78033L8 6.81066L5.03033 9.78033C4.73744 10.0732 4.26256 10.0732 3.96967 9.78033C3.67678 9.48744 3.67678 9.01256 3.96967 8.71967L7.46967 5.21967Z" fill="currentColor" />
  </svg>
);

const ALPHABET = ["A-Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z"];

const SIDEBAR_ITEMS = [
  { id: "total", label: "Total Customers", count: 1841, active: true, tooltip: "Total customers counts your active and inactive customers. This total does not include leads." },
  { id: "with-service", label: "With a Service", count: 354 },
  { id: "without-service", label: "Without a Service", count: 1487 },
  { id: "leads", label: "Total Leads", count: 1, lead: true, tooltip: "All leads and new customers without a completed job. After 90 days, new customers will be removed from this list." },
  { id: "bounced-emails", label: "Bounced Emails", red: true, disabled: true, tooltip: "Bounced emails are undeliverable emails and should be checked or replaced with a new valid email." },
  { id: "bounced-phones", label: "Bounced Phones", red: true, disabled: true, tooltip: "Bounced phones are undeliverable phones and should be checked or replaced with a new valid phone." },
  { id: "expired-cc", label: "Expired Credit Card", red: true, disabled: true },
  { id: "expiring-60", label: "Expiring < 60 Days", disabled: true },
];

const MOCK_CUSTOMERS = [
  { id: 2938, name: "Aaron Rathburn", email: "vwabr337@yahoo.com", company: "", balance: "$0.00" },
  { id: 596, name: "ABDUL AHMED", email: "ahmed0369@gmail.com", company: "", balance: "$0.00" },
  { id: 597, name: "ABDULLA AMYN", email: "", company: "", balance: "$0.00" },
  { id: 598, name: "ABERDEEN SUITES LLC.", email: "tiffany@aberdeensuitesllc.com", company: "", balance: "$0.00" },
  { id: 599, name: "ABI-NAJM CHRIS", email: "chris.abinajm@gmail.com", company: "", balance: "$0.00" },
  { id: 600, name: "ABRON JAMES & KAREN (1X)", email: "jabron@icloud.com", company: "", balance: "$0.00" },
  { id: 601, name: "ACALIN NADA & STEVE", email: "sacalin@aol.com", company: "", balance: "$0.00" },
  { id: 603, name: "ACOSTA JORGE", email: "jiaglobal@bellsouth.net", company: "", balance: "$0.00" },
  { id: 602, name: "ACOSTA MIKE", email: "lauraacosta02@gmail.com", company: "", balance: "$0.00" },
  { id: 604, name: "ADDISON BOBBY (1X)", email: "baddison@bop.gov", company: "", balance: "$0.00" },
  { id: 605, name: "ADKINS LINDSAY (1X)", email: "", company: "", balance: "$0.00" },
  { id: 606, name: "AGUAYO PHILLIS (1X)", email: "", company: "", balance: "$0.00" },
  { id: 607, name: "AHJUDER SONNY (1X)", email: "sonnyahjuder@att.net", company: "", balance: "$0.00" },
  { id: 608, name: "ALBA HORACIO", email: "horalbas@aol.com", company: "", balance: "$0.00" },
  { id: 609, name: "ALDRED BARBARA (1X)", email: "aldred.mail6@gmail.com", company: "", balance: "$0.00" },
  { id: 610, name: "ALEXANDRA VALERIE", email: "", company: "", balance: "$0.00" },
  { id: 3763, name: "Alexis Brown", email: "aw011709@yahoo.com", company: "", balance: "$0.00" },
  { id: 611, name: "ALIM MOHAMMAD", email: "mohammadalim1973@gmail.com", company: "", balance: "$0.00" },
  { id: 612, name: "ALIM MOHAMMAD (2)", email: "mohammadahalim@gmail.com", company: "", balance: "$0.00" },
  { id: 613, name: "ALLEN CINDY", email: "cinallen@gmail.com", company: "", balance: "$0.00" },
];

export const CustomersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [alphabetFilter, setAlphabetFilter] = useState("A-Z");
  const [selectedCount, setSelectedCount] = useState(0);
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const [activeSidebarId, setActiveSidebarId] = useState<string>("total");

  const toggleRow = (id: number) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      setSelectedCount(next.size);
      setSelectAll(next.size === MOCK_CUSTOMERS.length);
      return next;
    });
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedIds(new Set());
      setSelectedCount(0);
      setSelectAll(false);
    } else {
      setSelectedIds(new Set(MOCK_CUSTOMERS.map((c) => c.id)));
      setSelectedCount(MOCK_CUSTOMERS.length);
      setSelectAll(true);
    }
  };

  return (
    <div id="wrapper-customer-list" className="container-wrap container-table custom-grid-sidebar container-customer-list customer-list-dark">
      {/* Left sidebar - customer list filters */}
      <div id="wrapper-side-menu-customer-list" className="sidebar-menu sidebar-left scrolls">
        <ul className="sidebar-menu__nav flex-column">
          {SIDEBAR_ITEMS.map((item, index) => {
            const showDivider =
              (item.id === "leads" || item.id === "bounced-emails" || item.id === "expired-cc") && index > 0;
            return (
              <React.Fragment key={item.id}>
                {showDivider && (
                  <li className="is-divider --horizontal my-2 mx-1" aria-hidden="true" />
                )}
                <li>
                  <div
                    role="button"
                    tabIndex={0}
                    className={`sidebar-items flex-betweenitems ${activeSidebarId === item.id ? "active" : ""} ${item.lead ? "--lead" : ""} ${item.red ? "--red" : ""} ${item.disabled ? "is-disable" : ""}`}
                    onClick={() => !item.disabled && setActiveSidebarId(item.id)}
                    onKeyDown={(e) => !item.disabled && (e.key === "Enter" || e.key === " ") && setActiveSidebarId(item.id)}
                  >
                    <div className="title flex-1">
                      <p className="txt-ellipsis" title={item.label}>
                        {item.label}
                      </p>
                      {item.tooltip && (
                        <div className="tooltip ml-1 d-flex" title={item.tooltip}>
                          <InfoIcon />
                          <span className="tooltiptext">{item.tooltip}</span>
                        </div>
                      )}
                    </div>
                    {!item.disabled && item.count !== undefined && (
                      <p className={`count ${item.lead ? "count--lead" : ""}`} title={String(item.count)}>
                        {item.count}
                      </p>
                    )}
                  </div>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>

      <div className="wrapper-columns customer-list-main">
        <div className="container-print contents-pages has-tab accessible-tabs-container customer-list gap-8">
          {/* Header: back, search, export, import, new customer */}
          <div className="header customer-list-header">
            <div className="header__left flex-1">
              <Link to="/app" className="header-items v2-btn-default --icon-lg" aria-label="Back">
                <BackIcon />
              </Link>
              <div className="search-form relative header-items">
                <span className="svg-search-absolute">
                  <SearchIcon />
                </span>
                <input
                  className="search-ip"
                  type="text"
                  name="term"
                  placeholder="Search"
                  autoComplete="off"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div id="customer-search-list" className="search-dropdown" style={{ height: "max-content" }}>
                  <div className="scrolls" />
                </div>
              </div>
            </div>
            <div className="export flexcenter flex-wrap gap-4 fw-500 fs-13">
              <div className="export flexcenter gap-4 fw-500 fs-13">
                <p>Export to:</p>
                <div className="flexcenter">
                  <div className="export__option --blue --left"><span>CSV</span></div>
                  <div className="export__option --blue --right"><span>Excel</span></div>
                </div>
              </div>
              <span className="is-divider mx-1" />
              <div className="header-items v2-btn-default has-icon btn-modal">
                <ImportIcon />
                Import
              </div>
              <div className="header-items v2-btn-main btn-modal --bg-green">New Customer</div>
            </div>
          </div>

          {/* Alphabet filter */}
          <div className="header filter-alphabet">
            {ALPHABET.map((letter) => (
              <button
                key={letter}
                type="button"
                className={`alphabet-item ${alphabetFilter === letter ? "is-active" : ""}`}
                onClick={() => setAlphabetFilter(letter)}
              >
                {letter}
              </button>
            ))}
          </div>

          <div className="wrap-tables flex-column relative">
            {/* Table toolbar */}
            <div className="header --filter action-export align-center gap-8">
              <div className="flexcenter w-100 flex-wrap gap-4">
                <div className="header__left has-filter flex-1">
                  <div className="v2-btn-default btn-mapbox cursor">Map<span className="switch-icon ml-1"><span className="switch-icon__dots" /></span></div>
                  <div className="header-items has-bg-blue v2-dropdown">
                    <div tabIndex={0} className="dropbtn v2-btn-default selection">
                      <div className="dropbtn__label">
                        <span className="txt-ellipsis">Columns</span>
                        <span className="budget">4</span>
                      </div>
                      <span className="arrow"><ArrowDownIcon /></span>
                    </div>
                  </div>
                  <div className="header-items has-bg-blue v2-dropdown">
                    <div tabIndex={0} className="dropbtn v2-btn-default selection">
                      <div className="dropbtn__label">
                        <span className="txt-ellipsis">Status</span>
                        <span className="budget">2</span>
                      </div>
                      <span className="arrow"><ArrowDownIcon /></span>
                    </div>
                  </div>
                  <div className="header-items has-bg-blue v2-dropdown">
                    <div tabIndex={0} className="dropbtn v2-btn-default selection">
                      <div className="dropbtn__label">
                        <span className="txt-ellipsis">Tags</span>
                        <span className="budget --grey">All</span>
                      </div>
                      <span className="arrow"><ArrowDownIcon /></span>
                    </div>
                  </div>
                  <div className="header-items v2-dropdown">
                    <div tabIndex={0} className="dropbtn v2-btn-default">
                      <span className="txt-ellipsis">First name</span>
                      <span className="arrow"><ArrowDownIcon /></span>
                    </div>
                  </div>
                  <div className="v2-btn-default btn-mapbox cursor">Sub Locations<span className="switch-icon ml-1"><span className="switch-icon__dots" /></span></div>
                </div>
                <div className="header-items switch-action v2-dropdown">
                  <div className="dropbtn v2-btn-default --sm --icon-r fs-13" tabIndex={0}>
                    <div className="txt-ellipsis">Active</div>
                    <div className="arrow"><ArrowDownIcon /></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-betweenitems flex-wrap gap-8 w-100">
              <div className={`flexcenter gap-4 flex-wrap ${selectedCount === 0 ? "is-disable" : ""}`}>
                <div className="header-items check-items flexcenter">
                  <input
                    id="customer_list_cb"
                    type="checkbox"
                    checked={selectAll}
                    onChange={toggleSelectAll}
                    aria-label="Select all"
                  />
                  <div className="item-checkbox">
                    <label htmlFor="customer_list_cb"><span /></label>
                  </div>
                  <span className="flexcenter black fw-600">
                    <span className="black-darker2">{selectedCount}</span>
                    <span>/{MOCK_CUSTOMERS.length.toLocaleString()}</span>
                  </span>
                </div>
                <div className="header-items v2-dropdown">
                  <div className="dropbtn items" tabIndex={0}>
                    <div className="txt-ellipsis mr-1">Mark as</div>
                    <div className="arrow"><ArrowDownIcon /></div>
                  </div>
                </div>
                <div className="v2-btn-default has-icon header-items">Merge Accounts</div>
                <div className="header-items v2-dropdown">
                  <div className="dropbtn v2-btn-default has-icon" tabIndex={0}>
                    <div className="txt-ellipsis mr-1 black-3">Global Override</div>
                    <div className="arrow"><ArrowDownIcon /></div>
                  </div>
                </div>
                <div className="v2-btn-default has-icon svg-delete-grey header-items">Delete</div>
              </div>
            </div>

            {/* Table */}
            <div className="tab-contents has-map">
              <div className="tab-conts" />
              <div className="tab-conts tab-content-active">
                <div className="tables table-multi-column has-checkbox scrolls-x" tabIndex={0}>
                  {/* Table header */}
                  <div className="rows --fixed --header">
                    <div className="col --checkbox">
                      <div className="check-items">
                        <input
                          id="-checkbox-header0-check-box"
                          type="checkbox"
                          checked={selectAll}
                          onChange={toggleSelectAll}
                          aria-label="Select all rows"
                        />
                        <div className="item-checkbox">
                          <label htmlFor="-checkbox-header0-check-box" />
                        </div>
                      </div>
                    </div>
                    <div className="col col-lg">
                      <div className="has-orderby asc" title="Customer">
                        <span className="orderby-txt">Customer</span>
                        <span className="caret" />
                        <div className="orderby-icons flex-column gap-3">
                          <span className="icon --asc"><SortCaretIcon /></span>
                          <span className="icon --desc"><SortCaretIcon /></span>
                        </div>
                      </div>
                    </div>
                    <div className="col col-lg">
                      <div className="has-orderby" title="Email">
                        <span className="orderby-txt">Email</span>
                        <span className="caret" />
                        <div className="orderby-icons flex-column gap-3">
                          <span className="icon --asc"><SortCaretIcon /></span>
                          <span className="icon --desc"><SortCaretIcon /></span>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="has-orderby" title="Company">
                        <span className="orderby-txt">Company</span>
                        <span className="caret" />
                        <div className="orderby-icons flex-column gap-3">
                          <span className="icon --asc"><SortCaretIcon /></span>
                          <span className="icon --desc"><SortCaretIcon /></span>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="has-orderby" title="Balance">
                        <span className="orderby-txt">Balance</span>
                        <span className="caret" />
                        <div className="orderby-icons flex-column gap-3">
                          <span className="icon --asc"><SortCaretIcon /></span>
                          <span className="icon --desc"><SortCaretIcon /></span>
                        </div>
                      </div>
                    </div>
                    <div className="col col-xs flex-none">
                      <p className="col-label" title="" />
                    </div>
                  </div>

                  {/* Table body */}
                  <div className="tables-list">
                    {MOCK_CUSTOMERS.map((customer) => (
                      <div id={String(customer.id)} key={customer.id} className="rows">
                        <div className="col --checkbox">
                          <div className="check-items">
                            <input
                              id={`-${customer.id}-check-box`}
                              type="checkbox"
                              checked={selectedIds.has(customer.id)}
                              onChange={() => toggleRow(customer.id)}
                              aria-label={`Select ${customer.name}`}
                            />
                            <div className="item-checkbox">
                              <label htmlFor={`-${customer.id}-check-box`} />
                            </div>
                          </div>
                        </div>
                        <Link to={`/app/customers/${customer.id}`} className="col col-lg">
                          <p className="name" title={customer.name}>{customer.name}</p>
                        </Link>
                        <div className="col col-lg">
                          <div className="txt-ellipsis" title={customer.email}>{customer.email || ""}</div>
                        </div>
                        <div className="col">
                          <div className="txt-ellipsis" title={customer.company}>{customer.company || ""}</div>
                        </div>
                        <div className={`col ${!customer.balance ? "--empty" : ""}`}>
                          <p className="col-label" title={customer.balance}>{customer.balance}</p>
                        </div>
                        <div className="col col-xs flex-none">
                          <Link
                            to={`/app/customers/account/${customer.id}`}
                            title="Edit"
                            className="v2-btn-default --purple px-1"
                          >
                            Edit
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
