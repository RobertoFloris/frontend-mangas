import { useEffect } from "react";
import { useParams, Link } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext";

const DetailPage = () => {

  const { id } = useParams();
  const { manga, fetchManga } = useGlobalContext();

  useEffect(() => fetchManga(id), [])

  return (
    <div>
      <div className="d-flex">
        {manga?.image && (
          <img
            src={`http://localhost:8000/storage/${manga.image}`}
            alt={manga.title}
            className="manga-details"
          />
        )}
        <div className="p-4">
          <h1>{manga?.title}</h1>
          <h3><i>{manga?.author}</i></h3>
          <p><strong>Anno di pubblicazione: </strong>{manga?.year_of_publication}</p>
          <p><strong>Genere:</strong> {manga?.type?.name}<small> - {manga?.type?.description}</small></p>
          {manga?.languages?.length > 0 && (
            <p>
              <strong>Lingue disponibili:</strong>{" "}
              {manga.languages.map(lang => lang.name).join(", ")}
            </p>
          )}
          <p>{manga?.description}</p>
        </div>
      </div>
      <div>
        <Link to={`/`}>Torna alla lista principale</Link>
      </div>
    </div>

  )
}

export default DetailPage