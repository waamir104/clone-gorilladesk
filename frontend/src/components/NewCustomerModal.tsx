import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

const STATUS_OPTIONS = ["New Lead", "Active Customer", "Inactive Customer"] as const;

const PHONE_TYPE_OPTIONS = ["Home", "Home Fax", "Main", "Mobile", "Work", "Work Fax"] as const;

const SOURCE_OPTIONS = ["Angieslist", "Craigslist", "Facebook", "Google", "Referral", "Yelp"] as const;

type NewCustomerModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 6.5L6.5 17.5" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.5 6.5L17.5 17.5" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7C13 6.44772 12.5523 6 12 6Z" fill="var(--color-icon)" />
  </svg>
);

type DropdownKey = "status" | "mobile" | "source" | "tags" | "billingEmail" | "workOrderEmail" | "locationTags";

export const NewCustomerModal: React.FC<NewCustomerModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<string>("Active Customer");
  const [phoneType, setPhoneType] = useState<string>("Mobile");
  const [source, setSource] = useState<string>("");
  const [openDropdownKey, setOpenDropdownKey] = useState<DropdownKey | null>(null);
  const statusDropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const sourceDropdownRef = useRef<HTMLDivElement>(null);
  const tagsDropdownRef = useRef<HTMLDivElement>(null);
  const billingEmailDropdownRef = useRef<HTMLDivElement>(null);
  const workOrderEmailDropdownRef = useRef<HTMLDivElement>(null);
  const locationTagsDropdownRef = useRef<HTMLDivElement>(null);

  const dropdownRefs: Record<DropdownKey, React.RefObject<HTMLDivElement | null>> = {
    status: statusDropdownRef,
    mobile: mobileDropdownRef,
    source: sourceDropdownRef,
    tags: tagsDropdownRef,
    billingEmail: billingEmailDropdownRef,
    workOrderEmail: workOrderEmailDropdownRef,
    locationTags: locationTagsDropdownRef,
  };

  const toggleDropdown = (key: DropdownKey) => {
    setOpenDropdownKey((prev) => (prev === key ? null : key));
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (openDropdownKey === null) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const ref = dropdownRefs[openDropdownKey];
      if (ref?.current && !ref.current.contains(target)) {
        setOpenDropdownKey(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdownKey]);

  if (!isOpen) return null;

  const modalContent = (
    <div className="ReactModalPortal ReactModalPortal-customer" aria-modal="true" role="dialog">
      <div
        className="ReactModal__Overlay ReactModal__Overlay--after-open"
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 99999,
        }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <div
          id="add_new_customer"
          className="ReactModal__Content ReactModal__Content--after-open modal container-modal modal-addcustomer open"
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal__overlay bg-fixed" aria-hidden />
          <div className="modal__container --preview-r">
            <div className="header-modal">
              <h3 className="header-modal__label">New Customer</h3>
              <button
                type="button"
                className="v2-btn-default --icon-lg --transparent"
                tabIndex={0}
                onClick={onClose}
                aria-label="Close"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="body-modal switch-form scrolls">
              <p className="required-label">
                Fields with <span className="red-default mx-1">*</span> are required
              </p>
              <div className="form-default">
                <form className="box-has-rows" onSubmit={(e) => e.preventDefault()}>
                  {/* Status */}
                  <div className="rows">
                    <div className="rows__label flexcenter">
                      <p className="txt-ellipsis txt-label" title="Status">Status</p>
                    </div>
                    <div className="rows__field">
                      <div
                        ref={statusDropdownRef}
                        className={`v2-dropdown${openDropdownKey === "status" ? " is-open" : ""}`}
                      >
                        <div
                          className="dropbtn items"
                          tabIndex={0}
                          role="button"
                          onClick={() => toggleDropdown("status")}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              toggleDropdown("status");
                            }
                          }}
                        >
                          <div className="txt-ellipsis">{status}</div>
                          <div className="arrow">
                            <span className="material-symbols-outlined">
                              {openDropdownKey === "status" ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                            </span>
                          </div>
                        </div>
                        <div className="v2-dropdown__menu scrolls">
                          <ul>
                            {STATUS_OPTIONS.map((option) => (
                              <li
                                key={option}
                                className={`items${status === option ? " is-selected" : ""}`}
                                role="option"
                                aria-selected={status === option}
                                onClick={() => {
                                  setStatus(option);
                                  setOpenDropdownKey(null);
                                }}
                              >
                                {option}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Account # */}
                  <div className="rows">
                    <div className="rows__label flexcenter flexcenter">
                      <p className="txt-ellipsis txt-label" title="Account #">Account #</p>
                      <span className="required">*</span>
                      <div className="tooltip d-flex">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="16" height="16" rx="8" fill="#7A83A6" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M8 11C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11ZM7.9998 3.25281C9.68874 3.25281 10.75 3.98978 10.75 5.99999C10.75 7.08162 10.3335 7.57488 9.39526 8.09934L9.36601 8.1157C8.83795 8.41104 8.7498 8.51866 8.7498 8.99999C8.7498 9.41421 8.41402 9.74999 7.9998 9.74999C7.58559 9.74999 7.2498 9.41421 7.2498 8.99999C7.2498 7.86609 7.68129 7.33929 8.6338 6.80655L8.66334 6.79003C9.17748 6.50262 9.25 6.41675 9.25 5.99999C9.25 4.95947 8.95241 4.75281 7.9998 4.75281C7.27298 4.75281 6.75 5.17814 6.75 5.99999C6.75 6.41421 6.41421 6.74999 6 6.74999C5.58579 6.74999 5.25 6.41421 5.25 5.99999C5.25 4.27345 6.50497 3.25281 7.9998 3.25281Z" fill="white" />
                        </svg>
                        <span className="tooltiptext top">This field can contain numbers, letters and dashes but must end in a number</span>
                      </div>
                    </div>
                    <div className="rows__field">
                      <input className="field-input --account" placeholder="Account #" name="account_no" defaultValue="" />
                    </div>
                  </div>

                  {/* First Name */}
                  <div className="rows">
                    <div className="rows__label flexcenter flexcenter">
                      <p className="txt-ellipsis txt-label" title="First Name">First Name</p>
                      <span className="required">*</span>
                    </div>
                    <div className="rows__field">
                      <input className="field-input" placeholder="First Name" name="first_name" defaultValue="" />
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="rows">
                    <div className="rows__label flexcenter">
                      <p className="txt-ellipsis txt-label" title="Last Name">Last Name</p>
                    </div>
                    <div className="rows__field">
                      <input className="field-input" placeholder="Last Name" name="last_name" defaultValue="" />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="rows">
                    <div className="rows__label flexcenter">
                      <p className="txt-ellipsis txt-label" title="Title">Title</p>
                    </div>
                    <div className="rows__field">
                      <input className="field-input" placeholder="Title" name="title" defaultValue="" />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="rows">
                    <div className="rows__label flexcenter">
                      <p className="txt-ellipsis txt-label" title="Company">Company</p>
                    </div>
                    <div className="rows__field">
                      <input className="field-input" placeholder="Company" name="company" defaultValue="" />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="rows">
                    <div className="rows__label flexcenter">
                      <p className="txt-ellipsis txt-label" title="Email">Email</p>
                    </div>
                    <div className="rows__field">
                      <input className="field-input" placeholder="Email" name="email" type="email" defaultValue="" />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="rows">
                    <div className="rows__label flexcenter">
                      <p className="txt-ellipsis txt-label" title="Phone">Phone</p>
                    </div>
                    <div className="rows__field has-many-field has-new-field">
                      <div className="has-many-field__items phone-field">
                        <input name="phone" className="field-input" type="text" placeholder="000-000-0000" defaultValue="" />
                        <div ref={mobileDropdownRef} className={`v2-dropdown${openDropdownKey === "mobile" ? " is-open" : ""}`}>
                          <div
                            className="dropbtn items"
                            tabIndex={0}
                            role="button"
                            onClick={() => toggleDropdown("mobile")}
                            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleDropdown("mobile"); } }}
                          >
                            <span className="txt-ellipsis">{phoneType}</span>
                            <span className="arrow">
                              <span className="material-symbols-outlined">
                                {openDropdownKey === "mobile" ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                              </span>
                            </span>
                          </div>
                          <div className="v2-dropdown__menu content-checked">
                            <ul>
                              {PHONE_TYPE_OPTIONS.map((option) => (
                                <li
                                  key={option}
                                  className={`items${phoneType === option ? " is-selected" : ""}`}
                                  role="option"
                                  aria-selected={phoneType === option}
                                  onClick={() => {
                                    setPhoneType(option);
                                    setOpenDropdownKey(null);
                                  }}
                                >
                                  {option}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <button type="button" className="v2-btn-main --bg-green has-icon svg-white" tabIndex={0}>
                        <PlusIcon />
                        Add Phone
                      </button>
                    </div>
                  </div>

                  {/* Source */}
                  <div className="rows">
                    <div className="rows__label flexcenter">
                      <p className="txt-ellipsis txt-label" title="Source">Source</p>
                    </div>
                    <div className="rows__field">
                      <div ref={sourceDropdownRef} className={`select-source v2-dropdown${openDropdownKey === "source" ? " is-open" : ""}`}>
                        <div
                          className="dropbtn items"
                          tabIndex={0}
                          role="button"
                          onClick={() => toggleDropdown("source")}
                          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleDropdown("source"); } }}
                        >
                          <div className="tag-label px-1 m-0">
                            <span className="tag-label__ellipsis">{source || "How did you hear about us?"}</span>
                          </div>
                          <span className="arrow">
                            <span className="material-symbols-outlined">
                              {openDropdownKey === "source" ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                            </span>
                          </span>
                        </div>
                        <div className="v2-dropdown__menu scrolls">
                          <ul>
                            {SOURCE_OPTIONS.map((option) => (
                              <li
                                key={option}
                                className={`items${source === option ? " is-selected" : ""}`}
                                role="option"
                                aria-selected={source === option}
                                onClick={() => {
                                  setSource(option);
                                  setOpenDropdownKey(null);
                                }}
                              >
                                {option}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="rows">
                    <div className="rows__label flexcenter">
                      <p className="txt-ellipsis txt-label" title="Tags">Tags</p>
                    </div>
                    <div className="rows__field --location-tag">
                      <div ref={tagsDropdownRef} className={`list-add-tags v2-dropdown${openDropdownKey === "tags" ? " is-open" : ""}`}>
                        <div
                          tabIndex={0}
                          role="button"
                          className="dropbtn items group-tags has-search p-1"
                          onClick={() => toggleDropdown("tags")}
                          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleDropdown("tags"); } }}
                        >
                          <div className="box-tags" onClick={(e) => e.stopPropagation()}>
                            <input type="text" className="select-input-tag" placeholder="Tag" />
                          </div>
                          <div className="arrow">
                            <span className="material-symbols-outlined">
                              {openDropdownKey === "tags" ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Contacts */}
                  <div className="rows">
                    <div className="rows__label flexcenter">
                      <p className="txt-ellipsis txt-label" title="Additional Contacts">Additional Contacts</p>
                    </div>
                    <div className="rows__field has-many-field">
                      <button type="button" className="v2-btn-main --bg-green has-icon svg-white btn-modal" tabIndex={0}>
                        <PlusIcon />
                        Add Contact
                      </button>
                    </div>
                  </div>

                  {/* Address Name */}
                  <div className="rows">
                    <div className="rows__label flexcenter">
                      <p className="txt-ellipsis txt-label" title="Address Name">Address Name</p>
                    </div>
                    <div className="rows__field">
                      <input name="location_name" type="text" className="field-input" placeholder="Address Name" defaultValue="" />
                    </div>
                  </div>

                  {/* Service Address */}
                  <div className="rows">
                    <div className="rows__label flexcenter flexcenter">
                      <p className="txt-ellipsis txt-label" title="Service Address">Service Address</p>
                      <span className="required">*</span>
                    </div>
                    <div className="rows__field has-many-address">
                      <input className="field-input field-street --first" placeholder="Street 1" name="services_street1" type="text" defaultValue="" />
                      <input className="field-input field-street --second" placeholder="Street 2" name="services_street2" type="text" defaultValue="" />
                      <input name="services_city" type="text" className="field-input field-city" placeholder="City" defaultValue="" />
                      <input name="services_state" type="text" className="field-input field-state" placeholder="St" defaultValue="" />
                      <input name="services_zip" type="text" className="field-input field-zip" placeholder="Zip" defaultValue="" />
                    </div>
                  </div>

                  {/* Billing Address - Same toggle */}
                  <div className="rows">
                    <div className="rows__label flexcenter">
                      <p className="txt-ellipsis txt-label" title="Billing Address">Billing Address</p>
                      <span className="required">*</span>
                    </div>
                    <div className="rows__field --has-toggle">
                      <div className="switch large" title="Same">
                        <input id="same_address" className="toggle toggle-round" type="checkbox" defaultChecked />
                        <label htmlFor="same_address" />
                        <span className="switch__label cursor-pointer ml-2 mr-0 --active">Same</span>
                      </div>
                    </div>
                  </div>

                  {/* Billing Email */}
                  <div className="rows">
                    <div className="rows__label flexcenter">
                      <p className="txt-ellipsis txt-label" title="Billing Email">Billing Email</p>
                    </div>
                    <div className="rows__field has-many-field has-new-field">
                      <div className="has-many-field__items">
                        <div ref={billingEmailDropdownRef} className={`v2-dropdown${openDropdownKey === "billingEmail" ? " is-open" : ""}`}>
                          <div
                            className="dropbtn items"
                            tabIndex={0}
                            role="button"
                            onClick={() => toggleDropdown("billingEmail")}
                            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleDropdown("billingEmail"); } }}
                          >
                            <p className="txt-ellipsis">None</p>
                            <span className="arrow">
                              <span className="material-symbols-outlined">
                                {openDropdownKey === "billingEmail" ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <button type="button" className="v2-btn-main --bg-green has-icon svg-white" tabIndex={0}>
                        <PlusIcon />
                        Add Billing Email
                      </button>
                    </div>
                  </div>

                  {/* Work Order Email */}
                  <div className="rows">
                    <div className="rows__label flexcenter">
                      <p className="txt-ellipsis txt-label" title="Work Order Email">Work Order Email</p>
                    </div>
                    <div className="rows__field has-many-field has-new-field">
                      <div className="has-many-field__items">
                        <div ref={workOrderEmailDropdownRef} className={`v2-dropdown${openDropdownKey === "workOrderEmail" ? " is-open" : ""}`}>
                          <div
                            className="dropbtn items"
                            tabIndex={0}
                            role="button"
                            onClick={() => toggleDropdown("workOrderEmail")}
                            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleDropdown("workOrderEmail"); } }}
                          >
                            <p className="txt-ellipsis">None</p>
                            <span className="arrow">
                              <span className="material-symbols-outlined">
                                {openDropdownKey === "workOrderEmail" ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <button type="button" className="v2-btn-main --bg-green has-icon svg-white" tabIndex={0}>
                        <PlusIcon />
                        Add Work Order Email
                      </button>
                    </div>
                  </div>

                  {/* Location Note */}
                  <div className="rows">
                    <div className="rows__label flexcenter">
                      <p className="txt-ellipsis txt-label" title="Location Note">Location Note</p>
                    </div>
                    <div className="rows__field has-many-field has-new-field">
                      <textarea name="location_note" className="field-textarea --no-resize --h-120" cols={30} rows={10} defaultValue="" />
                    </div>
                  </div>

                  {/* Units */}
                  <div className="rows">
                    <div className="rows__label flexcenter">
                      <p className="txt-ellipsis txt-label" title="Units">Units</p>
                      <span className="budget bg-btn-hover-black">0</span>
                    </div>
                    <div className="rows__field">
                      <button type="button" className="btn-modal v2-btn-main --bg-green has-icon" tabIndex={0}>
                        <span className="material-symbols-outlined">apartment</span>
                        Manage Units
                      </button>
                    </div>
                  </div>

                  {/* Location Tags */}
                  <div className="rows">
                    <div className="rows__label flexcenter">
                      <p className="txt-ellipsis txt-label" title="Location Tags">Location Tags</p>
                    </div>
                    <div className="rows__field --location-tag">
                      <div ref={locationTagsDropdownRef} className={`list-add-tags v2-dropdown${openDropdownKey === "locationTags" ? " is-open" : ""}`}>
                        <div
                          tabIndex={0}
                          role="button"
                          className="dropbtn items group-tags has-search p-1"
                          onClick={() => toggleDropdown("locationTags")}
                          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleDropdown("locationTags"); } }}
                        >
                          <div className="box-tags" onClick={(e) => e.stopPropagation()}>
                            <input type="text" className="select-input-tag" placeholder="Tag" />
                          </div>
                          <div className="arrow">
                            <span className="material-symbols-outlined">
                              {openDropdownKey === "locationTags" ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Messaging */}
                  <div className="rows">
                    <div className="rows__label flexcenter">
                      <p className="txt-ellipsis txt-label" title="Messaging">Messaging</p>
                    </div>
                    <div className="rows__field">
                      <button type="button" className="v2-btn-main --bg-green has-icon">
                        <span className="material-symbols-outlined">notifications</span>
                        Preferences
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="footer-modal">
              <div className="switch-form flexcenter gap-8">
                <div className="v2-btn-default --icon-lg btn-modal">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 4.5C12.5408 4.5 13.0351 4.80553 13.277 5.2892L13.5784 5.8921C13.6799 6.095 13.741 6.31516 13.7591 6.54041C14.0565 6.63525 14.3434 6.75466 14.6175 6.89549L14.5131 6.99127C14.7068 6.79755 14.9429 6.6516 15.2028 6.56496L15.8423 6.35181C16.3553 6.1808 16.9209 6.31432 17.3033 6.6967C17.6857 7.07908 17.8192 7.64468 17.6482 8.15769L17.435 8.79716C17.3633 9.01238 17.2509 9.21133 17.1043 9.38337C17.2453 9.65657 17.3647 9.94347 17.4605 10.241L17.3187 10.2353C17.5927 10.2353 17.8629 10.2991 18.1079 10.4216L18.7108 10.723C19.1945 10.9649 19.5 11.4592 19.5 12C19.5 12.5408 19.1945 13.0351 18.7108 13.277L18.1079 13.5784C17.905 13.6799 17.6848 13.741 17.4596 13.7591C17.3647 14.0565 17.2453 14.3434 17.1045 14.6175L17.0087 14.5131C17.2024 14.7068 17.3484 14.9429 17.435 15.2028L17.6482 15.8423C17.8192 16.3553 17.6857 16.9209 17.3033 17.3033C16.9209 17.6857 16.3553 17.8192 15.8423 17.6482L15.2028 17.435C14.9876 17.3633 14.7887 17.2509 14.6166 17.1043C14.3434 17.2453 14.0565 17.3647 13.759 17.4605L13.7647 17.3187C13.7647 17.5927 13.7009 17.8629 13.5784 18.1079L13.277 18.7108C13.0351 19.1945 12.5408 19.5 12 19.5C11.4592 19.5 10.9649 19.1945 10.723 18.7108L10.4216 18.1079C10.3201 17.905 10.259 17.6848 10.2409 17.4596C9.94347 17.3647 9.65657 17.2453 9.38248 17.1045L9.48694 17.0087C9.29322 17.2024 9.05706 17.3484 8.79716 17.435L8.15769 17.6482C7.64468 17.8192 7.07908 17.6857 6.6967 17.3033C6.31432 16.9209 6.1808 16.3553 6.35181 15.8423L6.56496 15.2028C6.6367 14.9876 6.74913 14.7887 6.89566 14.6166C6.75466 14.3434 6.63525 14.0565 6.53949 13.759L6.6813 13.7647C6.40733 13.7647 6.13713 13.7009 5.8921 13.5784L5.2892 13.277C4.80553 13.0351 4.5 12.5408 4.5 12C4.5 11.4592 4.80553 10.9649 5.2892 10.723L5.8921 10.4216C6.095 10.3201 6.31516 10.259 6.54041 10.2409C6.63525 9.94347 6.75466 9.65657 6.89549 9.38248L6.99127 9.48694C6.79755 9.29322 6.6516 9.05706 6.56496 8.79716L6.35181 8.15769C6.1808 7.64468 6.31432 7.07908 6.6967 6.6967C7.07908 6.31432 7.64468 6.1808 8.15769 6.35181L8.79716 6.56496C9.01238 6.6367 9.21133 6.74913 9.38337 6.89566C9.65657 6.75466 9.94347 6.63525 10.241 6.53949L10.2353 6.6813C10.2353 6.40733 10.2991 6.13713 10.4216 5.8921L10.723 5.2892C10.9649 4.80553 11.4592 4.5 12 4.5Z" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="switch large" title="Fast form">
                  <input id="switch-customer" className="toggle toggle-round label-enabled" type="checkbox" />
                  <label htmlFor="switch-customer" />
                  <span className="switch__label cursor-pointer ml-2 mr-0">Fast form</span>
                </div>
              </div>
              <div className="flexcenter">
                <button type="button" className="v2-btn-main" tabIndex={0}>Save</button>
                <div className="dropdown-save v2-dropup">
                  <div className="dropbtn v2-btn-main dropbtn-save active --icon-r svg-more-white" tabIndex={0}>
                    Save &amp;
                    <span className="material-symbols-outlined">more_vert</span>
                  </div>
                  <div className="v2-dropdown__menu scrolls" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
