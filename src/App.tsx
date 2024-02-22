import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { pathList } from "@/routes/routesPaths";
import Login from "@/pages/auth/Login";
import ForgetPassword from "@/pages/auth/ForgetPassword";
import ForgetPasswordOTP from "@/pages/auth/ForgetPasswordOTP";
import ResetPassword from "@/pages/auth/ResetPassword";
import Home from "@/pages/Home";
import Projects from "@/pages/projects/all";
import CreateProject from "./pages/projects/create-project";
import ProjectDetails from "./pages/projects/project-details";
import Timetable from "@/pages/Timetable";
import Notifications from "@/pages/Notifications";
import AllEmployees from "@/pages/AllEmployees/AllEmployees";
import NewEmployee from "@/pages/NewEmployee";
import Analysis from "@/pages/Analysis";
import Requests from "@/pages/Requests";
import Reports from "@/pages/Reports";
import ProtectedRoute from "./Security/ProtectedRoute";
import { toast, ToastContainer } from "react-toastify";
import ArchitecturalDrawing from "./pages/Tasks/ArchitecturalDrawing";
import Tasks from "./pages/Tasks/Tasks";
import AddSubTasks from "./pages/Tasks/AddSubTasks";
import AddTaskProjectDetails from "./pages/projects/AddTaskProjectDetails";
import ViewEmployee from "./pages/AllEmployees/ViewEmployee";
import ViewTask from "./pages/Tasks/ViewTask";
import ViewSubTask from "./pages/Tasks/ViewSubTask";
import EditTasks from "./pages/Tasks/EditTasks";
import EditEmployee from "./pages/AllEmployees/EditEmployee";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={pathList.login}>
        <Route element={<Login />} index />
        <Route path={pathList.forgetPassword}>
          <Route element={<ForgetPassword />} index />
          <Route
            element={<ForgetPasswordOTP />}
            path={pathList.forgetPasswordOTP}
          />
          <Route element={<ResetPassword />} path={pathList.resetPassword} />
        </Route>
        <Route path={pathList.projects}>
          <Route element={<Projects />} index />
          <Route element={<CreateProject />} path={pathList.createProject} />
          <Route element={<ProjectDetails />} path={pathList.projectDetails} />
          <Route element={<AddTaskProjectDetails />} path={pathList.projectDetailsAddTask} />
        </Route>
        <Route
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
          path={pathList.home}
        />
        <Route path={pathList.tasks} >
          <Route element={<Tasks />} index />
          <Route element={<ArchitecturalDrawing />} path={pathList.architecturalDrawing} />
          <Route element={<AddSubTasks />} path={pathList.addSubTasks} />
          <Route element={<ViewTask />} path={pathList.viewTask} />
          <Route element={<ViewSubTask />} path={pathList.viewSubTask} />
          <Route element={<EditTasks />} path={pathList.editTasks} />
        </Route>
        <Route element={<Timetable />} path={pathList.time_table} />
        <Route element={<Notifications />} path={pathList.notifications} />
        <Route path={pathList.all_employees}>
          <Route element={<AllEmployees />} index />
          <Route element={<ViewEmployee />} path={pathList.view_employee} />
          <Route element={<EditEmployee />} path={pathList.edit_employee} />
        </Route>
        <Route element={<NewEmployee />} path={pathList.new_employee} />
        <Route element={<Analysis />} path={pathList.analysis} />
        <Route element={<Requests />} path={pathList.requests} />
        <Route element={<Reports />} path={pathList.reports} />
      </Route>
    </>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position={toast.POSITION.TOP_RIGHT}
        style={{
          zIndex: 99999,
        }}
      />
    </>
  );
}

export default App;
