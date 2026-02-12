import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { useLabels } from "./shared/LabelsContext";

export const App = () => {
  const { currentLang, setLang } = useLabels();

  return (
    <div className="app-container">
      <header className="app-header">
        <nav className="nav">
          <Link to="/">{/* home.title */}</Link>
          <Link to="/about">{/* menu.about */}</Link>
        </nav>

        <div className="lang-switcher">
          <label htmlFor="lang-select">Idioma:</label>
          <select
            id="lang-select"
            value={currentLang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </div>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
};

