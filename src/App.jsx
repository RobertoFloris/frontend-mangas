import HomePage from "./pages/HomePage";
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
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App