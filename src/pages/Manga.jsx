import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import MangaCard from "../components/MangaCard";
import HeaderResults from "../components/HeaderResults";

const Manga = () => {
  const { fetchMangas, mangas, title, type_id, order, menuOpen } = useGlobalContext();


  useEffect(() => {
    const filters = {};
    if (title) filters.title = title;
    if (type_id) filters.type_id = type_id;
    if (order) {
      switch (order) {
        case "1":
          filters.order = "alphabetical";
          break;
        case "2":
          filters.order = "newest";
          break;
        case "3":
          filters.order = "oldest";
          break;
        case "4":
          filters.order = "latest_added";
          break;
      }
    }

    fetchMangas(filters);
  }, [title, type_id, order]);

  return (
    <>
      <HeaderResults />
      <div style={{ marginTop: menuOpen ? "250px" : "0" }}>
        <h2 className="title mt-5 mb-5">Manga disponibili</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-5 mb-5">
          {mangas.map((manga) => (
            <div
              className="col d-flex justify-content-lg-start justify-content-center total"
              key={manga.id}
            >
              <div className="manga-card-wrapper">
                <MangaCard manga={manga} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Manga;
