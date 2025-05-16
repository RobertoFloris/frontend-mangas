import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import Header from "../components/Header";


const DetailPage = () => {
  const { id } = useParams();
  const { manga, fetchManga, loading } = useGlobalContext();

  useEffect(() => {
    fetchManga(id);
    window.scrollTo({ top: 0 });
  }, [id]);

  if (loading) {
    return (
      <div className="c-loader d-flex w-100 justify-content-center align-items-center">
        <div className="loader"></div>
      </div>
    )
  }


  return (
    <>
      <Header />
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
          <div className="detail-back-link">
            <Link to={`/mangas`}>← Torna alla lista principale</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
