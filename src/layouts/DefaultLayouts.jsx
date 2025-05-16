import { Outlet } from "react-router-dom"

const DefaultLayouts = () => {
  return (
    <>
      <main className="container">
        <Outlet />
      </main>

    </>
  )
}

export default DefaultLayouts