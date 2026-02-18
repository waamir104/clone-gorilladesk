import type { ReactNode } from "react";

export const SETTINGS_BASE = "/app/settings";

export interface SettingsItem {
  path: string;
  label: string;
  title?: string;
  icon: ReactNode;
}

export interface SettingsGroup {
  title: string;
  items: SettingsItem[];
}

const iconFill = "rgba(var(--utility-color), 1)";

const IconAccount = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3.84973C13.1561 3.84973 14.0639 3.84933 14.792 3.91125C15.5281 3.97387 16.1404 4.10447 16.6924 4.39954L16.9893 4.57239C17.6655 5.00097 18.2213 5.59828 18.6006 6.30774L18.7041 6.5177C18.9276 7.01474 19.0341 7.56394 19.0889 8.20813C19.1508 8.93616 19.1504 9.84407 19.1504 11.0001V13.0001C19.1504 14.1562 19.1508 15.0641 19.0889 15.7921C19.0341 16.4363 18.9276 16.9855 18.7041 17.4825L18.6006 17.6925C18.2213 18.4019 17.6655 18.9993 16.9893 19.4279L16.6924 19.6007C16.1404 19.8958 15.5281 20.0264 14.792 20.089C14.064 20.1509 13.1561 20.1505 12 20.1505C10.8439 20.1505 9.93605 20.1509 9.20801 20.089C8.56379 20.0342 8.01463 19.9277 7.51758 19.7042L7.30762 19.6007C6.59817 19.2214 6.00085 18.6656 5.57227 17.9894L5.39941 17.6925C5.10436 17.1405 4.97375 16.5282 4.91113 15.7921C4.84921 15.0641 4.84961 14.1562 4.84961 13.0001V11.0001C4.84961 9.84408 4.84922 8.93615 4.91113 8.20813C4.97374 7.47205 5.10439 6.85974 5.39941 6.30774L5.57227 6.01086C6.00084 5.33462 6.59817 4.77886 7.30762 4.39954L7.51758 4.29602C8.01464 4.07252 8.56379 3.96605 9.20801 3.91125C9.93605 3.84933 10.8439 3.84973 12 3.84973Z" fill={iconFill} />
  </svg>
);

const IconPlans = () => (
  <span className="material-symbols-outlined" style={{ fontSize: 24 }}>credit_card</span>
);
const IconInvoices = () => (
  <span className="material-symbols-outlined" style={{ fontSize: 24 }}>receipt_long</span>
);
const IconCompany = () => (
  <span className="material-symbols-outlined" style={{ fontSize: 24 }}>business</span>
);
const IconUsers = () => (
  <span className="material-symbols-outlined" style={{ fontSize: 24 }}>group</span>
);
const IconSchedules = () => (
  <span className="material-symbols-outlined" style={{ fontSize: 24 }}>schedule</span>
);
const IconTaxes = () => (
  <span className="material-symbols-outlined" style={{ fontSize: 24 }}>percent</span>
);
const IconItems = () => (
  <span className="material-symbols-outlined" style={{ fontSize: 24 }}>list_alt</span>
);
const IconPaperwork = () => (
  <span className="material-symbols-outlined" style={{ fontSize: 24 }}>description</span>
);
const IconPayment = () => (
  <span className="material-symbols-outlined" style={{ fontSize: 24 }}>payment</span>
);
const IconService = () => (
  <span className="material-symbols-outlined" style={{ fontSize: 24 }}>build</span>
);
const IconSources = () => (
  <span className="material-symbols-outlined" style={{ fontSize: 24 }}>source</span>
);
const IconTags = () => (
  <span className="material-symbols-outlined" style={{ fontSize: 24 }}>label</span>
);
const IconTiles = () => (
  <span className="material-symbols-outlined" style={{ fontSize: 24 }}>grid_view</span>
);
const IconTemplates = () => (
  <span className="material-symbols-outlined" style={{ fontSize: 24 }}>dynamic_form</span>
);
const IconEmails = () => (
  <span className="material-symbols-outlined" style={{ fontSize: 24 }}>mail</span>
);
const IconCustom = () => (
  <span className="material-symbols-outlined" style={{ fontSize: 24 }}>tune</span>
);
const IconBroadcast = () => (
  <span className="material-symbols-outlined" style={{ fontSize: 24 }}>campaign</span>
);
const IconEmailInbox = () => (
  <span className="material-symbols-outlined" style={{ fontSize: 24 }}>inbox</span>
);

export const SETTINGS_GROUPS: SettingsGroup[] = [
  {
    title: "Your Account",
    items: [
      { path: `${SETTINGS_BASE}/account`, label: "Account", title: "Account", icon: <IconAccount /> },
      { path: `${SETTINGS_BASE}/plans`, label: "Plans", title: "Plans", icon: <IconPlans /> },
      { path: `${SETTINGS_BASE}/invoices`, label: "Invoices", title: "Invoices", icon: <IconInvoices /> },
    ],
  },
  {
    title: "SYSTEM SETTINGS",
    items: [
      { path: `${SETTINGS_BASE}/company`, label: "Company", title: "Company", icon: <IconCompany /> },
      { path: `${SETTINGS_BASE}/users`, label: "Users", title: "Users", icon: <IconUsers /> },
      { path: `${SETTINGS_BASE}/schedules`, label: "Schedules", title: "Schedules", icon: <IconSchedules /> },
      { path: `${SETTINGS_BASE}/taxes`, label: "Taxes", title: "Taxes", icon: <IconTaxes /> },
      { path: `${SETTINGS_BASE}/items`, label: "Line Items", title: "Line Items", icon: <IconItems /> },
      { path: `${SETTINGS_BASE}/paperwork`, label: "Paperwork", title: "Paperwork", icon: <IconPaperwork /> },
      { path: `${SETTINGS_BASE}/paymentmethods`, label: "Payment Methods", title: "Payment Methods", icon: <IconPayment /> },
      { path: `${SETTINGS_BASE}/service`, label: "Service Templates", title: "Service Templates", icon: <IconService /> },
      { path: `${SETTINGS_BASE}/sources`, label: "Sources", title: "Sources", icon: <IconSources /> },
      { path: `${SETTINGS_BASE}/tags`, label: "Tags", title: "Tags", icon: <IconTags /> },
      { path: `${SETTINGS_BASE}/tiles`, label: "Tiles", title: "Tiles", icon: <IconTiles /> },
      { path: `${SETTINGS_BASE}/templates`, label: "Templates", title: "Templates", icon: <IconTemplates /> },
    ],
  },
  {
    title: "Email & Sms Templates",
    items: [
      { path: `${SETTINGS_BASE}/emails`, label: "System", title: "System", icon: <IconEmails /> },
      { path: `${SETTINGS_BASE}/customs`, label: "Custom", title: "Custom", icon: <IconCustom /> },
      { path: `${SETTINGS_BASE}/broadcast`, label: "Broadcast", title: "Broadcast", icon: <IconBroadcast /> },
      { path: `${SETTINGS_BASE}/emailinbox`, label: "Email Inbox", title: "Email Inbox", icon: <IconEmailInbox /> },
    ],
  },
];

export function getSettingsItemByPath(pathname: string): SettingsItem | undefined {
  for (const group of SETTINGS_GROUPS) {
    const found = group.items.find((item) => pathname === item.path || pathname.startsWith(item.path + "/"));
    if (found) return found;
  }
  return undefined;
}

export function getAllSettingsItems(): SettingsItem[] {
  return SETTINGS_GROUPS.flatMap((g) => g.items);
}
