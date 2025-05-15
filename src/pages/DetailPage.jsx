import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

const DetailPage = () => {
  const { id } = useParams();
  const { manga, fetchManga } = useGlobalContext();

  useEffect(() => {
    fetchManga(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);


  return (
    <div className="detail-container">
      <div className="detail-content">
        {manga?.image && (
          <img
            src={`http://localhost:8000/storage/${manga.image}`}
            alt={manga.title}
            className="detail-image"
          />
        )}

        <div className="detail-text">
          <h1 className="detail-title">{manga?.title}</h1>
          <h3 className="detail-author"><i>{manga?.author}</i></h3>
          <p><strong>Anno di pubblicazione:</strong> {manga?.year_of_publication}</p>
          <p>
            <strong>Genere:</strong> {manga?.type?.name}
            <small className="type-description"> – {manga?.type?.description}</small>
          </p>
          {manga?.languages?.length > 0 && (
            <p>
              <strong>Lingue disponibili:</strong> {manga.languages.map(lang => lang.name).join(", ")}
            </p>
          )}
          <p className="detail-description">{manga?.description}</p>
        </div>
      </div>

      <div className="detail-back-link">
        <Link to={`/mangas`}>← Torna alla lista principale</Link>
      </div>
    </div>
  );
};

export default DetailPage;
