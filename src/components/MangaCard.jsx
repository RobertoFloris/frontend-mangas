import { Link } from "react-router-dom"

const MangaCard = ({ manga }) => {
  const { id, title, author, image } = manga

  return (
    <div className="manga-card">
      <Link to={`/mangas/${id}`} className="manga-link">
        <img
          className="manga-image"
          src={`http://localhost:8000/storage/${image}`}
          alt={title}
        />
      </Link>

      <div className="manga-info">
        <h3 className="manga-title">{title}</h3>
        <p className="manga-author"><i>{author}</i></p>

        <Link to={`/mangas/${id}`} className="manga-more">
          Maggiori informazioni →
        </Link>
      </div>
    </div>
  )
}

export default MangaCard
