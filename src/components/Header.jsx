import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container">
      <div className="logo h-100">
        <Link to={`/`}>
          <img src="/img/naruto-5818259_640.png" alt="Logo" />
          <span>BooleAnime</span>
        </Link>
      </div>
    </header>
  )
}

export default Header