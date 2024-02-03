import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { pathList } from "./routes/routesPaths"
import Login from "./pages/auth/Login"
import ForgetPassword from "./pages/auth/ForgetPassword"
import ForgetPasswordOTP from "./pages/auth/ForgetPasswordOTP"
import ResetPassword from "./pages/auth/ResetPassword"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Tasks from "./pages/Tasks"
import Timetable from "./pages/Timetable"
import Notifications from "./pages/Notifications"
import AllEmployees from "./pages/AllEmployees"
import NewEmployee from "./pages/NewEmployee"
import Analysis from "./pages/Analysis"
import Requests from "./pages/Requests"
import Reports from "./pages/Reports"

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
          <Route element={<Home />} path={pathList.home} />
          <Route element={<Projects />} path={pathList.projects} />
          <Route element={<Tasks />} path={pathList.tasks} />
          <Route element={<Timetable />} path={pathList.time_table} />
          <Route element={<Notifications />} path={pathList.notifications} />
          <Route element={<AllEmployees />} path={pathList.all_employees} />
          <Route element={<NewEmployee />} path={pathList.new_employee} />
          <Route element={<Analysis />} path={pathList.analysis} />
          <Route element={<Requests />} path={pathList.requests} />
          <Route element={<Reports />} path={pathList.reports} />
        </Route>
      </>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App;
