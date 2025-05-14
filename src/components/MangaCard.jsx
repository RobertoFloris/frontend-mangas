import { Link } from "react-router-dom"

const MangaCard = ({ manga }) => {
  const { id, title, author, image } = manga
  return (
    <div>
      <div className="card mb-4">

        <Link to={`mangas/${id}`}>
          <img className="card-image-top manga-image" src={`http://localhost:8000/storage/${image}`} alt={title} />
        </Link>

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <address><i>{author}</i></address>

          <div>
            <Link to={`mangas/${id}`}>Maggiori informazioni</Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MangaCard