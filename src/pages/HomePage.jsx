import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="homepage">
        <div className="welcome-message">
          <h1>Benvenuti su <span>BooleAnime</span></h1>
          <p>
            <Link to={`/mangas`} className="cta-link">
              Clicca qui per vedere i manga disponibili →
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default HomePage
