import { createContext, useContext, useState } from "react"
import axios from "axios"

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const api_url = import.meta.env.VITE_API_URL;
  const [mangas, setMangas] = useState([]);
  const [manga, setManga] = useState({});
  const [loading, setLoading] = useState(false);


  const fetchMangas = () => {
    setLoading(true);
    axios.get(api_url)
      .then(res => {
        setMangas(res.data.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }

  const fetchManga = (id) => {
    setLoading(true);
    axios.get(`${api_url}/${id}`)
      .then(res => {
        setManga(res.data.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }

  const value = {
    fetchMangas,
    mangas,
    fetchManga,
    manga,
    loading
  }

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export {
  GlobalProvider,
  useGlobalContext
}