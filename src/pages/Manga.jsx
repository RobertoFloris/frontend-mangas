import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react";
import MangaCard from "../components/MangaCard";

const Manga = () => {

  const { fetchMangas, mangas } = useGlobalContext();

  const renderMangas = () => {
    return mangas.map(manga => {
      return (
        <div className="col" key={manga.id}>
          <MangaCard manga={manga} />
        </div>
      )
    })
  }

  useEffect(fetchMangas, [])

  return (
    <>
      <h1>Manga disponibili</h1>

      <div className="row row-cols-4">
        {renderMangas()}
      </div>
    </>
  )
}

export default Manga