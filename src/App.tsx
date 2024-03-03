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
import Notifications from "@/pages/Notifications";
import AllEmployees from "@/pages/AllEmployees/AllEmployees";
import NewEmployee from "@/pages/NewEmployee";
import Requests from "@/pages/Requests/Requests";
import Reports from "@/pages/Reports/Reports";
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
import Analysis from "./pages/Analysis/Analysis";
import EditEmployee from "./pages/AllEmployees/EditEmployee";
import AddDepartment from "./features/AllEmployees/AddDepartment/components/AddDepartment";
import AddPosition from "./pages/AllEmployees/AddPosition";
import ViewReq from "./pages/Requests/ViewReq";
import Payslips from "./pages/Payslips/Payslips";
import CreatePayslip from "./pages/Payslips/CreatePayslip";
import ViewInsightsPage from "./features/Reports/employeePerformance/components/ViewInsightsPage";
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
        <Route path={pathList.payslips}>
          <Route element={<Payslips />} index />
          <Route element={<CreatePayslip />} path={pathList.create_payslip} />
        </Route>
        <Route element={<Notifications />} path={pathList.notifications} />
        <Route path={pathList.all_employees}>
          <Route element={<AllEmployees />} index />
          <Route element={<ViewEmployee />} path={pathList.view_employee} />
          <Route element={<EditEmployee />} path={pathList.edit_employee} />
          <Route element={<AddDepartment />} path={pathList.add_department} />
          <Route element={<AddPosition />} path={pathList.add_position} />
        </Route>
        <Route element={<NewEmployee />} path={pathList.new_employee} />
        <Route element={<Analysis />} path={pathList.analysis} />
        <Route path={pathList.requests}>
          <Route element={<Requests />} index />
          <Route element={<ViewReq />} path={pathList.viewRequests} />
        </Route>
        <Route path={pathList.reports}>
          <Route index element={<Reports />} />
          <Route element={<ViewInsightsPage />} path={pathList.view_insight} />
        </Route>
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
