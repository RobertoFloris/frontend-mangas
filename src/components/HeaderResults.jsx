import { useGlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";
import Filters from "./Filters";
import { FaBars, FaTimes } from "react-icons/fa";

const HeaderResults = () => {

  const { menuOpen, setMenuOpen } = useGlobalContext();

  return (
    <header className="main-header">
      <div className="container d-flex align-items-center justify-content-between h-100">
        <div className="logo">
          <Link to={`/`}>
            <img src="/img/naruto-5818259_640.png" alt="Logo" />
            <span>BooleAnime</span>
          </Link>
        </div>

        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`filters-wrapper ${menuOpen ? "open" : ""}`}>
          <Filters />
        </div>
      </div>
    </header>
  );
};

export default HeaderResults;
