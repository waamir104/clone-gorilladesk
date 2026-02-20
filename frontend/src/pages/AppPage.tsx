import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { NewCustomerModalProvider } from "../context/NewCustomerModalContext";

export const AppPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <NewCustomerModalProvider>
      <div id="main-page">
        <Header
          isSidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
        />
        <div className={`app-body${sidebarOpen ? "" : " sidebar-hidden"}`}>
          <Sidebar />
          <main className="app-main-content">
            <div className="app-main-content__inner">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </NewCustomerModalProvider>
  );
};

