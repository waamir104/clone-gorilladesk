import { useState } from "react";

const ArrowDown = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 7.5L8 11L11.5 7.5" stroke="var(--color-icon)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 5.5L8 12L14.5 18.5" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5 5.5L16 12L9.5 18.5" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronsLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 5.5L5 12L11.5 18.5" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.5 5.5L11 12L17.5 18.5" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronsRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 5.5L19 12L12.5 18.5" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.5 5.5L13 12L6.5 18.5" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconMap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 9.5C15.5899 9.5 18.5 8.60457 18.5 7.5C18.5 6.39543 15.5899 5.5 12 5.5C8.41015 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 8.41015 9.5 12 9.5Z" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.5 7.5C5.5 12.1667 7.66667 14.5 12 14.5C16.3333 14.5 18.5 12.1667 18.5 7.5" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.5 14.5V18.6972C10.5 19.2301 10.932 19.662 11.4648 19.662C11.6553 19.662 11.8415 19.6057 12 19.5L13.0547 18.7969C13.3329 18.6114 13.5 18.2992 13.5 17.9648V14.5" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconViewRows = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M5.78194 6.5H12.2181C12.6638 6.5 12.8255 6.54641 12.9884 6.63357C13.1514 6.72072 13.2793 6.84861 13.3664 7.01158C13.4536 7.17454 13.5 7.33618 13.5 7.78194V9.21806C13.5 9.66382 13.4536 9.82546 13.3664 9.98842C13.2793 10.1514 13.1514 10.2793 12.9884 10.3664C12.8255 10.4536 12.6638 10.5 12.2181 10.5H5.78194C5.33618 10.5 5.17454 10.4536 5.01158 10.3664C4.84861 10.2793 4.72072 10.1514 4.63357 9.98842C4.54641 9.82546 4.5 9.66382 4.5 9.21806V7.78194C4.5 7.33618 4.54641 7.17454 4.63357 7.01158C4.72072 6.84861 4.84861 6.72072 5.01158 6.63357C5.17454 6.54641 5.33618 6.5 5.78194 6.5Z" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M5.78194 13.5H18.2181C18.6638 13.5 18.8255 13.5464 18.9884 13.6336C19.1514 13.7207 19.2793 13.8486 19.3664 14.0116C19.4536 14.1745 19.5 14.3362 19.5 14.7819V16.2181C19.5 16.6638 19.4536 16.8255 19.3664 16.9884C19.2793 17.1514 19.1514 17.2793 18.9884 17.3664C18.8255 17.4536 18.6638 17.5 18.2181 17.5H5.78194C5.33618 17.5 5.17454 17.4536 5.01158 17.3664C4.84861 17.2793 4.72072 17.1514 4.63357 16.9884C4.54641 16.8255 4.5 16.6638 4.5 16.2181V14.7819C4.5 14.3362 4.54641 14.1745 4.63357 14.0116C4.72072 13.8486 4.84861 13.7207 5.01158 13.6336C5.17454 13.5464 5.33618 13.5 5.78194 13.5Z" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconViewColumns = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.78194 4.5H9.21806C9.66382 4.5 9.82546 4.54641 9.98842 4.63357C10.1514 4.72072 10.2793 4.84861 10.3664 5.01158C10.4536 5.17454 10.5 5.33618 10.5 5.78194V18.2181C10.5 18.6638 10.4536 18.8255 10.3664 18.9884C10.2793 19.1514 10.1514 19.2793 9.98842 19.3664C9.82546 19.4536 9.66382 19.5 9.21806 19.5H7.78194C7.33618 19.5 7.17454 19.4536 7.01158 19.3664C6.84861 19.2793 6.72072 19.1514 6.63357 18.9884C6.54641 18.8255 6.5 18.6638 6.5 18.2181V5.78194C6.5 5.33618 6.54641 5.17454 6.63357 5.01158C6.72072 4.84861 6.84861 4.72072 7.01158 4.63357C7.17454 4.54641 7.33618 4.5 7.78194 4.5Z" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M14.7819 4.5H16.2181C16.6638 4.5 16.8255 4.54641 16.9884 4.63357C17.1514 4.72072 17.2793 4.84861 17.3664 5.01158C17.4536 5.17454 17.5 5.33618 17.5 5.78194V12.2181C17.5 12.6638 17.4536 12.8255 17.3664 12.9884C17.2793 13.1514 17.1514 13.2793 16.9884 13.3664C16.8255 13.4536 16.6638 13.5 16.2181 13.5H14.7819C14.3362 13.5 14.1745 13.4536 14.0116 13.3664C13.8486 13.2793 13.7207 13.1514 13.6336 12.9884C13.5464 12.8255 13.5 12.6638 13.5 12.2181V5.78194C13.5 5.33618 13.5464 5.17454 13.6336 5.01158C13.7207 4.84861 13.8486 4.72072 14.0116 4.63357C14.1745 4.54641 14.3362 4.5 14.7819 4.5Z" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPalette = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.3884 8C15.9337 5.99601 14.1415 4.5 11.9999 4.5C9.85835 4.5 8.06618 5.99601 7.61145 8" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 19.0322C9.39752 19.3316 8.71842 19.5 8 19.5C5.51472 19.5 3.5 17.4853 3.5 15C3.5 12.5147 5.51472 10.5 8 10.5C8.71842 10.5 9.39752 10.6684 10 10.9678" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 19.5C18.4853 19.5 20.5 17.4853 20.5 15C20.5 12.5147 18.4853 10.5 16 10.5C13.5147 10.5 11.5 12.5147 11.5 15C11.5 17.4853 13.5147 19.5 16 19.5Z" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconSearch = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.5C15.0376 17.5 17.5 15.0376 17.5 12C17.5 8.96243 15.0376 6.5 12 6.5C8.96243 6.5 6.5 8.96243 6.5 12C6.5 15.0376 8.96243 17.5 12 17.5Z" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.25 16.25L17.75 17.75" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconZoomIn = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7C13 6.44772 12.5523 6 12 6Z" fill="var(--color-icon)" />
  </svg>
);

const IconZoomOut = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="11" width="10" height="2" rx="1" fill="var(--color-icon)" />
  </svg>
);

const formatCalendarTitle = (d: Date) =>
  d.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric", year: "numeric" });

const TIME_SLOTS = [
  "12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am",
  "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm",
];

export const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [mapVisible, setMapVisible] = useState(true);
  const [viewMode, setViewMode] = useState<"rows" | "columns">("columns");
  const [sidebarTab, setSidebarTab] = useState<"workpool" | "tasks" | "joblist">("workpool");

  const goPrev = () => setCurrentDate((d) => { const n = new Date(d); n.setDate(n.getDate() - 1); return n; });
  const goNext = () => setCurrentDate((d) => { const n = new Date(d); n.setDate(n.getDate() + 1); return n; });
  const goToday = () => setCurrentDate(new Date());

  const dayNum = currentDate.getDate();
  const dayShort = currentDate.toLocaleDateString("en-US", { weekday: "short" });

  return (
    <div className="container-wrap calendar" id="main_page_full_calendar">
      <div className="container">
        <div id="displayView" className="calendar-container calendar-mode-vertical display-vertical">
          {/* Calendar Header */}
          <header className="calendar-header">
            <div className="left-menu flexcenter">
              <button
                type="button"
                id="btn-map-toggle"
                className={`v2-btn-default btn-mapbox cursor ${mapVisible ? "active" : ""}`}
                onClick={() => setMapVisible((v) => !v)}
                title="Map"
              >
                Map
                <span className="switch-icon ml-1 has-toggle">
                  <span className="switch-icon__dots" />
                </span>
              </button>
              <div className="v2-dropdown list-agenda">
                <button type="button" className="dropbtn btn-agenda v2-btn-default --icon-r mr-0">
                  <p className="txt-ellipsis">Day</p>
                  <span className="arrow"><ArrowDown /></span>
                </button>
              </div>
              <div className="is-divider --h24 hide-mobile" />
              <div className="btn-viewtask tooltip">
                <button
                  type="button"
                  className={`v2-btn-default --icon-lg icons-viewrows ${viewMode === "rows" ? "active" : ""}`}
                  onClick={() => setViewMode("rows")}
                  title="View Horizontal"
                >
                  <IconViewRows />
                </button>
                <button
                  type="button"
                  className={`v2-btn-default --icon-lg icons-viewcolumns ${viewMode === "columns" ? "active" : ""}`}
                  onClick={() => setViewMode("columns")}
                  title="View Vertical"
                >
                  <IconViewColumns />
                </button>
              </div>
              <div className="v2-dropdown list-calendarcolor">
                <button type="button" className="dropbtn v2-btn-default tooltip" title="Color Codes">
                  <span className="mr-1"><IconPalette /></span>
                  <span className="arrow"><ArrowDown /></span>
                </button>
              </div>
              <div className="wrap-schedule-picker">
                <div className="wrap-schedule-picker__btn">
                  <div className="avt-img tooltip" title="HECTOR">
                    <img src="https://d10lkxv225q7z2.cloudfront.net/avatars%2Fstatic%2Favatar_1.jpg" width={24} height={24} alt="" />
                  </div>
                  <span className="svg-dropup">
                    <svg width="8" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M1.39378 0H8.60622C9.3014 0 9.86495 0.612378 9.86495 1.36778C9.86495 1.68776 9.76171 1.99761 9.5732 2.24342L5.96698 6.94579C5.52194 7.52611 4.72823 7.60452 4.19417 7.12092C4.13569 7.06796 4.08175 7.00934 4.03301 6.94579L0.426789 2.24342C-0.0182539 1.6631 0.0539014 0.800623 0.587953 0.317024C0.814167 0.112181 1.09931 0 1.39378 0Z" fill="var(--color-icon)" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div className="center-menu relative">
              <div className="action">
                <button type="button" className="btn-action tooltip" onClick={goPrev} title="Previous"> <ChevronLeft /> </button>
                <button type="button" className="btn-action tooltip" onClick={goPrev} title="Jump Back"> <ChevronsLeft /> </button>
                <button type="button" className="action__items v2-btn-default btn-today mr-0 active" onClick={goToday}>Today</button>
                <span id="title-calendar-time" className="action__items time text-capitalize" title={formatCalendarTitle(currentDate)}>
                  {formatCalendarTitle(currentDate)}
                </span>
                <button type="button" className="btn-action tooltip" onClick={goNext} title="Jump Next"> <ChevronsRight /> </button>
                <button type="button" className="btn-action tooltip" onClick={goNext} title="Next"> <ChevronRight /> </button>
              </div>
            </div>

            <div className="right-menu relative flexcenter">
              <div className="wrap-action relative">
                <div className="wrap-action__list">
                  <button type="button" className="v2-btn-default list-items tooltip" title="Route Optimizer">Route Optimizer</button>
                  <button type="button" className="v2-btn-default list-items tooltip" title="Batch Move">Batch Move</button>
                  <div className="v2-dropdown">
                    <button type="button" className="dropbtn v2-btn-default list-items tooltip" title="Messaging">Messaging <span className="arrow"><ArrowDown /></span></button>
                    <div className="v2-dropdown__menu content-full">
                      <ul>
                        <li><div className="items btn-modal">Send Reminders</div></li>
                        <li><div className="items btn-modal">Send Confirmations</div></li>
                        <li><div className="items btn-modal">Send a Broadcast</div></li>
                      </ul>
                    </div>
                  </div>
                  <button type="button" className="v2-btn-default list-items tooltip" title="Print Schedule">Print Schedule</button>
                </div>
              </div>
            </div>
          </header>

          {/* Main: Map + Calendar + Sidebar */}
          <div id="wrapper_main_calendar" className="wrapper-main-page">
            {mapVisible && (
              <div className="wrapper-map wrap-map-control" id="wrapper-map">
                <div id="map" className="container-map mapboxgl-map calendar-map-placeholder">
                  <div className="calendar-map-placeholder-inner">
                    <span className="map-placeholder-label">Map</span>
                  </div>
                </div>
                <div className="container-control">
                  <div id="map-header" className="map-header">
                    <div className="search relative flexcenter">
                      <span className="svg-search-absolute"><IconSearch /></span>
                      <input id="gd-search-map" className="field-search no-effect" type="text" placeholder="Search GorillaDesk" autoComplete="off" />
                    </div>
                    <div className="wrap-filter list-job-status v2-dropdown">
                      <button type="button" className="dropbtn v2-btn-default --transparent" tabIndex={0}>
                        <IconMap />
                        <p className="txt-ellipsis black-2">Filter</p>
                        <span className="arrow"><ArrowDown /></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="resizable">
                  <div className="resizable-handle" />
                </div>
              </div>
            )}

            <div id="view-calendar" className="view-calendar view-oneday h-15">
              <div id="fullCalendar" className="full-calendar">
                <div className="full-calendar__wrapper">
                  <div className="fc fc-media-screen fc-direction-ltr fc-theme-standard calendar-day-grid">
                    <div className="fc-view-harness fc-view-harness-active">
                      <div className="fc-resourceTimeGridDay-view fc-view fc-timegrid">
                        <table role="grid" className="fc-scrollgrid fc-scrollgrid-liquid">
                          <thead>
                            <tr className="fc-scrollgrid-section fc-scrollgrid-section-header">
                              <th>
                                <div className="fc-scroller-harness">
                                  <table className="fc-col-header">
                                    <thead>
                                      <tr>
                                        <th aria-hidden className="fc-timegrid-axis" />
                                        <th className="fc-col-header-cell fc-resource">
                                          <div className="fc-scrollgrid-sync-inner">
                                            <span className="fc-col-header-cell-cushion">
                                              <div className="w-100 flex-centeritem black-eerie overflow-hidden">
                                                <p className="fw-600 mr-1">{dayNum}</p>
                                                <p>{dayShort}</p>
                                              </div>
                                              <div className="schedules-wrap flex-centeritem cursor-pointer">
                                                <p title="Show Daily Invoice Summary">HECTOR</p>
                                              </div>
                                              <div data-resource-id-color="72_0" className="resource-color-bar" style={{ backgroundColor: "rgb(230, 196, 11)" }} />
                                            </span>
                                          </div>
                                        </th>
                                      </tr>
                                    </thead>
                                  </table>
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="fc-scrollgrid-section fc-scrollgrid-section-body">
                              <td>
                                <div className="fc-scroller-harness">
                                  <div className="fc-timegrid-body">
                                    <div className="fc-timegrid-slots">
                                      <table aria-hidden className="calendar-time-slots">
                                        <tbody>
                                          {TIME_SLOTS.map((label, i) => (
                                            <tr key={label}>
                                              <td className="fc-timegrid-slot-label">
                                                <div className="fc-timegrid-slot-label-cushion">
                                                  <span>{label}</span>
                                                </div>
                                              </td>
                                              <td className="fc-timegrid-slot-lane" data-time={`${i}:00:00`} />
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    </div>
                                    <div className="fc-timegrid-cols">
                                      <table>
                                        <tbody>
                                          <tr>
                                            <td aria-hidden className="fc-timegrid-col fc-timegrid-axis" />
                                            <td className="fc-day fc-timegrid-col fc-resource">
                                              <div className="fc-timegrid-col-frame">
                                                <div className="fc-timegrid-col-bg" />
                                                <div className="fc-timegrid-col-events" />
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vector-control">
                <div className="action-vector action-zoom">
                  <button type="button" id="calendar-control-zoom-in" className="btn-vector btn-zoomin tooltip" title="Stretch Timeline">
                    <IconZoomIn />
                  </button>
                  <button type="button" id="calendar-control-zoom-out" className="btn-vector btn-zoomout tooltip" title="Reduce Timeline">
                    <IconZoomOut />
                  </button>
                </div>
              </div>
            </div>

            {/* Calendar Sidebar */}
            <div id="calendar_sidebar" className="calendar-sidebar">
              <div className="monthly-calendar datepicker-custom">
                <div className="monthly-calendar__minimize tooltip" title="Show calendar" />
              </div>
              <div className="sidebar-details">
                <div className="switch-maintab tabs accessible-tabs-container">
                  <div className="tab-selectors header-action">
                    <div className="header-action__content w-100">
                      <button
                        type="button"
                        className={`tab-items svg-noeffect tooltip ${sidebarTab === "workpool" ? "active-tab-selector" : ""}`}
                        onClick={() => setSidebarTab("workpool")}
                        title="Work Pool"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12.5001 3.84961C12.9571 3.84961 13.3326 3.84923 13.6388 3.87012C13.9506 3.8914 14.2378 3.9375 14.5138 4.05176C15.1631 4.32073 15.6794 4.83703 15.9483 5.48633C16.0626 5.76236 16.1087 6.0495 16.13 6.36133C16.14 6.50778 16.144 6.67011 16.1466 6.84961C16.3201 6.85004 16.4492 6.85223 16.5704 6.86231C17.9564 6.97756 19.1565 7.87065 19.6651 9.16504C19.7229 9.31202 19.771 9.47581 19.8468 9.72852L20.4972 11.8945C20.6431 12.3811 20.5097 12.9093 20.1505 13.2686C20.137 13.2822 20.1286 13.3002 20.1271 13.3193L19.9747 15.3086C19.9223 15.9903 19.8806 16.5354 19.8155 16.9756C19.7495 17.4221 19.6536 17.807 19.4708 18.1641C19.0782 18.9302 18.4269 19.5334 17.6329 19.8662C17.2627 20.0213 16.8706 20.0876 16.42 20.1191C15.9762 20.1502 15.4298 20.1504 14.7462 20.1504H9.25401C8.57045 20.1504 8.02402 20.1502 7.58018 20.1191C7.12958 20.0876 6.73748 20.0213 6.36729 19.8662C5.57329 19.5334 4.92201 18.9303 4.5294 18.1641C4.34655 17.807 4.25066 17.4222 4.18467 16.9756C4.11963 16.5354 4.07793 15.9904 4.02549 15.3086L3.87315 13.3193C3.87165 13.3003 3.86315 13.2822 3.84971 13.2686C3.49045 12.9093 3.35704 12.3812 3.50303 11.8945L4.15342 9.72852C4.22923 9.47581 4.27731 9.31202 4.33506 9.16504C4.84373 7.87064 6.0438 6.97752 7.42979 6.86231C7.55057 6.85227 7.67913 6.85005 7.85166 6.84961C7.85429 6.67009 7.86022 6.50779 7.87022 6.36133C7.8915 6.04949 7.93758 5.76236 8.05186 5.48633C8.32082 4.83702 8.83712 4.32071 9.48643 4.05176C9.76244 3.93751 10.0496 3.8914 10.3614 3.87012C10.6676 3.84923 11.0431 3.84961 11.5001 3.84961H12.5001Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                        <p className="tab-items__label txt-ellipsis">Work Pool</p>
                      </button>
                      <button
                        type="button"
                        className={`tab-items svg-noeffect tooltip ${sidebarTab === "tasks" ? "active-tab-selector" : ""}`}
                        onClick={() => setSidebarTab("tasks")}
                        title="Tasks"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.04 10.04C14.2939 9.7862 14.7061 9.7862 14.96 10.04C15.2137 10.2939 15.2138 10.7061 14.96 10.96L11.96 13.96C11.7061 14.2137 11.2939 14.2137 11.04 13.96L9.54004 12.46C9.2906 12.1052 9.31804 11.7621 9.54004 11.54C9.76209 11.318 10.1051 11.2906 10.3574 11.457L10.46 11.54L11.5 12.5801L14.04 10.04Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="tab-items__label txt-ellipsis">Tasks</p>
                      </button>
                      <button
                        type="button"
                        className={`tab-items svg-noeffect tooltip ${sidebarTab === "joblist" ? "active-tab-selector" : ""}`}
                        onClick={() => setSidebarTab("joblist")}
                        title="Job List"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 4.84961C13.1561 4.84961 14.0639 4.84921 14.792 4.91113C15.5281 4.97375 16.1404 5.10435 16.6924 5.39941L16.9893 5.57227C17.6655 6.00085 18.2213 6.59816 18.6006 7.30762L18.7041 7.51758C18.9276 8.01462 19.0341 8.56382 19.0889 9.20801C19.1508 9.93603 19.1504 10.844 19.1504 12C19.1504 13.1561 19.1508 14.064 19.0889 14.792C19.0341 15.4362 18.9276 15.9854 18.7041 16.4824L18.6006 16.6924C18.1671 17.5031 17.5031 18.1671 16.6924 18.6006C16.1404 18.8956 15.5281 19.0263 14.792 19.0889C14.0639 19.1508 13.1561 19.1504 12 19.1504C10.8439 19.1504 9.93605 19.1508 9.20801 19.0889C8.5638 19.0341 8.01463 18.9276 7.51758 18.7041L7.30762 18.6006C6.59817 18.2213 6.00085 17.6655 5.57227 16.9893L5.39941 16.6924C5.10436 16.1404 4.97375 15.5281 4.91113 14.792C4.84921 14.064 4.84961 13.1561 4.84961 12C4.84961 10.844 4.84922 9.93603 4.91113 9.20801C4.97374 8.47192 5.10438 7.85962 5.39941 7.30762L5.57227 7.01074C6.00084 6.3345 6.59817 5.77873 7.30762 5.39941L7.51758 5.2959C8.01464 5.0724 8.56378 4.96593 9.20801 4.91113C9.93605 4.84921 10.8439 4.84961 12 4.84961Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="tab-items__label txt-ellipsis">Job List</p>
                      </button>
                    </div>
                  </div>
                  <div className="tab-contents">
                    {sidebarTab === "joblist" && (
                      <div className="tab-conts detail-joblist">
                        <div className="scrolls">
                          <div className="v2-dropdown search-jobs">
                            <div className="search-input has-closeicon">
                              <span className="svg-search-absolute"><IconSearch /></span>
                              <input type="text" placeholder="Search" spellCheck />
                            </div>
                          </div>
                          <div id="external-events-job-list" className="external-events-list-job details-jobslist external-events" />
                        </div>
                      </div>
                    )}
                    {sidebarTab === "workpool" && (
                      <div className="tab-conts detail-workpool detail-joblist tab-content-active">
                        <div className="scrolls flex-column">
                          <div className="tab-header">
                            <div className="btn-item m-0">
                              <button type="button" className="tab-items text-capitalize active-tab-selector">Pool</button>
                              <button type="button" className="tab-items text-capitalize ">Missed <span className="count --missed">0</span></button>
                            </div>
                          </div>
                          <div className="v2-dropdown search-jobs">
                            <div className="search-input has-closeicon">
                              <span className="svg-search-absolute"><IconSearch /></span>
                              <input type="text" placeholder="Search" spellCheck />
                            </div>
                          </div>
                          <div className="v2-dropdown select-list list-job-status --no-bg">
                            <button type="button" className="dropbtn items has-icon">
                              <IconMap />
                              <p className="txt-ellipsis flex-1">Job Status</p>
                              <span className="arrow"><ArrowDown /></span>
                            </button>
                          </div>
                          <div className="react-datepicker-wrapper select-list filter-date">
                            <div className="field-input field-date">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5 3.34973C15.859 3.34973 16.1504 3.64114 16.1504 4.00012V4.97278C16.897 5.07339 17.5267 5.26227 18.083 5.63391L18.2705 5.76575C18.6986 6.08337 19.0694 6.47294 19.3662 6.91711L19.5137 7.15735C19.832 7.72901 19.9842 8.37899 20.0625 9.14856C20.1508 10.0174 20.1504 11.1095 20.1504 12.5001C20.1504 13.8908 20.1508 14.9829 20.0625 15.8517C19.9842 16.6212 19.832 17.2712 19.5137 17.8429L19.3662 18.0831C19.0694 18.5273 18.6986 18.9169 18.2705 19.2345L18.083 19.3663C17.454 19.7865 16.7312 19.9731 15.8516 20.0626C14.9828 20.151 13.8907 20.1505 12.5 20.1505H11.5C10.1093 20.1505 9.01725 20.151 8.14844 20.0626C7.37885 19.9843 6.7289 19.8321 6.15723 19.5138L5.91699 19.3663C5.47282 19.0695 5.08325 18.6987 4.76563 18.2706L4.63379 18.0831C4.21359 17.4542 4.02699 16.7313 3.9375 15.8517C3.84915 14.9829 3.84961 13.8908 3.84961 12.5001C3.84961 11.1095 3.84916 10.0174 3.9375 9.14856C4.02698 8.26896 4.21361 7.54609 4.63379 6.91711L4.76563 6.72961C5.08324 6.30149 5.47282 5.93071 5.91699 5.63391L6.15723 5.48645C6.65338 5.21018 7.20849 5.05907 7.84961 4.97278V4.00012C7.84961 3.64114 8.14102 3.34973 8.5 3.34973C8.85898 3.34973 9.15039 3.64114 9.15039 4.00012V4.8761C9.8217 4.85213 10.598 4.84973 11.5 4.84973H12.5C13.402 4.84973 14.1783 4.85213 14.8496 4.8761V4.00012C14.8496 3.64114 15.141 3.34973 15.5 3.34973Z" fill="currentColor" />
                              </svg>
                              <p className="field-date__select">Select Date Range...</p>
                            </div>
                          </div>
                          <div id="external-events-work-pool" className="external-events-list-job list-workpool details-jobslist">
                            <div id="show_ui_list_wookpool_empty" className="box-drop-file">
                              <p className="description mb-2">Drag a job to the work pool</p>
                              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.79289 14.2071C5.40237 13.8166 5.40237 13.1834 5.79289 12.7929C6.18342 12.4024 6.81658 12.4024 7.20711 12.7929L11.5 17.087L11.5 4.5C11.5 3.94772 11.9477 3.5 12.5 3.5C13.0128 3.5 13.4355 3.88604 13.4933 4.38338L13.5 4.5L13.5 17.085L17.7929 12.7929C18.1534 12.4324 18.7206 12.4047 19.1129 12.7097L19.2071 12.7929C19.5976 13.1834 19.5976 13.8166 19.2071 14.2071L13.2071 20.2071C12.8166 20.5976 12.1834 20.5976 11.7929 20.2071L5.79289 14.2071Z" fill="#1E7EF7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {sidebarTab === "tasks" && (
                      <div className="tab-conts detail-joblist">
                        <div className="scrolls">
                          <p className="description">Tasks list</p>
                        </div>
                      </div>
                    )}
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
