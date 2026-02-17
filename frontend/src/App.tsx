import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { AppPage } from "./pages/AppPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/app" element={<AppPage />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
