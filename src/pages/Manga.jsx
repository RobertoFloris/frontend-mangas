import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react";
import MangaCard from "../components/MangaCard";

const Manga = () => {

  const { fetchMangas, mangas, loading } = useGlobalContext();

  const renderMangas = () => {
    return mangas.map(manga => {
      return (
        <div className="col" key={manga.id}>
          <MangaCard manga={manga} />
        </div>
      )
    })
  }

  useEffect(() => {
    fetchMangas();
    window.scrollTo({ top: 0 });
  }, []);

  if (loading) {
    return (
      <div className="c-loader d-flex w-100 justify-content-center align-items-center">
        <div className="loader"></div>
      </div>
    )
  }


  return (
    <>
      <h2 className="title mt-5 mb-5">Manga disponibili</h2>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-5 mb-5">
        {renderMangas()}
      </div>
    </>
  )
}

export default Manga