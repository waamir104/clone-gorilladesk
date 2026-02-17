import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export const AppPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div id="main-page">
      <Header
        isSidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
      />
      <div className={`app-body${sidebarOpen ? "" : " sidebar-hidden"}`}>
        <Sidebar />
        <main className="app-main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

