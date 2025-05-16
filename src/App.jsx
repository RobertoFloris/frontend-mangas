import Manga from "./pages/Manga";
import DetailPage from "./pages/DetailPage";
import DefaultLayouts from "./layouts/DefaultLayouts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<DefaultLayouts />}>
            <Route path="/mangas" element={<Manga />} />
            <Route path="/mangas/:id" element={<DetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App