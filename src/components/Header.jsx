import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div className="container d-flex align-items-center h-100">
        <div className="logo">
          <Link to={`/`}>
            <img src="/img/naruto-5818259_640.png" alt="Logo" />
            <span>BooleAnime</span>
          </Link>
        </div>
      </div>
    </header>

  )
}

export default Header