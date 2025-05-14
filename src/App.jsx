import Manga from "./pages/Manga";
import DetailPage from "./pages/DetailPage";
import Error404 from "./pages/Error404";
import DefaultLayouts from "./layouts/DefaultLayouts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayouts />}>
            <Route path="/mangas" element={<Manga />} />
            <Route path="/mangas/:id" element={<DetailPage />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App