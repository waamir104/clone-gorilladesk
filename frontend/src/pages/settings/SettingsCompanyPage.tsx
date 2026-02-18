const EditIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.287 4.30252C14.9965 3.68271 15.9764 3.46038 16.8905 3.72147C18.5291 4.18978 19.8098 5.47059 20.2782 7.10916L20.3241 7.29276C20.5212 8.21402 20.2404 9.17817 19.5682 9.85037L12.5135 16.906C11.8425 17.5771 11.0366 18.0957 10.1512 18.4285L9.76644 18.5594L5.59359 19.8435C4.71136 20.1148 3.88476 19.2883 4.15609 18.406L5.44027 14.2332L5.57113 13.8484C5.90397 12.9631 6.4226 12.1571 7.09359 11.4861L14.1493 4.43143L14.287 4.30252Z"
      fill="rgba(var(--utility-color), 1)"
    />
  </svg>
);

const defaultCompany = {
  logoUrl: "https://d10lkxv225q7z2.cloudfront.net/large/logos%2Forigin%2F5bdd5dd269b11b993c1ba90ac87188daweb-WhatsApp_Image_2024-12-23_at_8.27.48_AM.jpeg",
  name: "IVY GREEN",
  email: "ivygreenlawncare@bellsouth.net",
  phone: "+1 (770) 487-3205",
  fax: "",
  website: "https://www.ivygreenlawncare.com/",
  country: "United States",
  address: ["205 Shamrock Industrial Blvd", "tyrone, GA 30290"],
  industry: "Lawn Care & Maintenance",
  businessLicense: "",
  operatingHours: "from 07:00 AM to 06:00 PM",
  timezone: "(GMT-05:00) Eastern Time (US & Canada)",
  dateFormat: "MM/dd/yyyy [ 02/18/2026 ]",
  currency: "USD US Dollar ($)",
  temperature: "Fahrenheit (F)",
  showHolidays: "On",
  language: "English",
};

export const SettingsCompanyPage = () => {
  const c = defaultCompany;

  return (
    <form className="contents-pages container-column wrapper-box-edit scrolls">
      <div className="box-tips hide">
        <div className="box-tips__content">
          <div className="tip">
            <div className="title">
              <span className="fw-600 fs-15">undefined</span>
              <div className="cursor-pointer pl-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 6.5L6.5 17.5" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.5 6.5L17.5 17.5" stroke="var(--color-icon)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="description fs-14">undefined</div>
          </div>
        </div>
      </div>
      <div className="wrapper-box-edit__content form-default">
        <div className="page-wrapper bg-white">
          <div className="rows mb-5">
            <div className="logo">
              <img className="logo-img" src={c.logoUrl} alt="" width={125} height={100} />
            </div>
            <div className="v2-btn-default has-icon js-edit-form" tabIndex={0} role="button">
              <div className="mr-1">
                <EditIcon />
              </div>
              <span>Edit</span>
            </div>
          </div>
          <div className="rows">
            <div className="rows__label">Name</div>
            <div className="rows__info">{c.name}</div>
          </div>
          <div className="rows">
            <div className="rows__label">Email</div>
            <div className="rows__info --link">{c.email}</div>
          </div>
          <div className="rows">
            <div className="rows__label">Phone</div>
            <div className="rows__info">{c.phone}</div>
          </div>
          <div className="rows">
            <div className="rows__label">Fax</div>
            <div className="rows__info">{c.fax}</div>
          </div>
          <div className="rows has-divider">
            <div className="rows__label">Website</div>
            <a href={c.website} className="rows__info --link" rel="noreferrer" target="_blank">
              {c.website}
            </a>
          </div>
          <div className="rows">
            <div className="rows__label">Country</div>
            <div className="rows__info">{c.country}</div>
          </div>
          <div className="rows has-divider">
            <div className="rows__label">Address</div>
            <div className="rows__info">
              {c.address.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
          <div className="rows">
            <div className="rows__label">Industry</div>
            <div className="rows__info">{c.industry}</div>
          </div>
          <div className="rows has-divider">
            <div className="rows__label">Business License</div>
            <div className="rows__info">{c.businessLicense}</div>
          </div>
          <div className="rows">
            <div className="rows__label">Operating Hours</div>
            <div className="rows__info">{c.operatingHours}</div>
          </div>
          <div className="rows">
            <div className="rows__label">Timezone</div>
            <div className="rows__info">{c.timezone}</div>
          </div>
          <div className="rows">
            <div className="rows__label">Date Format</div>
            <div className="rows__info">{c.dateFormat}</div>
          </div>
          <div className="rows">
            <div className="rows__label">Currency</div>
            <div className="rows__info">{c.currency}</div>
          </div>
          <div className="rows">
            <div className="rows__label">Temperature</div>
            <div className="rows__info">{c.temperature}</div>
          </div>
          <div className="rows">
            <div className="rows__label">Show Holidays</div>
            <div className="rows__info">{c.showHolidays}</div>
          </div>
          <div className="rows">
            <div className="rows__label">Language</div>
            <div className="rows__info">{c.language}</div>
          </div>
        </div>
      </div>
    </form>
  );
};
