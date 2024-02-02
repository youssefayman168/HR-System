import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { pathList } from "./routes/routesPaths"
import Login from "./pages/auth/Login"
import ForgetPassword from "./pages/auth/ForgetPassword"
import ForgetPasswordOTP from "./pages/auth/ForgetPasswordOTP"
import ResetPassword from "./pages/auth/ResetPassword"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path={pathList.login}>
          <Route element={<Login />} index />
          <Route path={pathList.forgetPassword}>
            <Route element={<ForgetPassword />} index />
            <Route element={<ForgetPasswordOTP />} path={pathList.forgetPasswordOTP} />
            <Route element={<ResetPassword />} path={pathList.resetPassword} />
          </Route>
        </Route>
      </>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App;
