import { createContext, useContext, useState } from "react"
import axios from "axios"

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const api_url = import.meta.env.VITE_API_URL;
  const [mangas, setMangas] = useState([]);
  const [manga, setManga] = useState({});
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [type_id, setType_id] = useState("");
  const [order, setOrder] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchChange = (e) => setTitle(e.target.value);
  const handleTypeChange = (e) => setType_id(e.target.value);
  const handleOrderChange = (e) => setOrder(e.target.value);

  const resetFilter = () => {
    setTitle("");
    setOrder("");
    setType_id("");
  }


  const fetchMangas = (filters = {}) => {
    setLoading(true);

    const params = new URLSearchParams(filters).toString();

    axios.get(`${api_url}?${params}`)
      .then(res => {
        setMangas(res.data.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
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
    loading,
    title,
    type_id,
    order,
    handleOrderChange,
    handleSearchChange,
    handleTypeChange,
    menuOpen,
    setMenuOpen,
    resetFilter
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