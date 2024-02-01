import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { pathList } from "./routes/routesPaths"
import Login from "./pages/auth/Login"

function App() {

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <>

  //     </>
  //   )
  // )
  return (
    // <RouterProvider router={router} />
    <Login />
  )
}

export default App
