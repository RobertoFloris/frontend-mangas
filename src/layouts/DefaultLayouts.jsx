import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"

const DefaultLayouts = () => {
  return (
    <>
      <main className="container">
        <Outlet />
      </main>
      <Footer />

    </>
  )
}

export default DefaultLayouts