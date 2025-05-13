import { createContext, useContext, useState } from "react"
import axios from "axios"

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const api_url = import.meta.env.VITE_API_URL;
  const [mangas, setMangas] = useState([]);

  const fetchMangas = () => {
    axios.get(api_url)
      .then(res => {
        setMangas(res.data.data);
      })
      .catch(err => console.log(err));
  }

  const value = {
    fetchMangas,
    mangas
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