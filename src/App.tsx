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
import TaskDetails from "./pages/Tasks/TaskDetails";
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
import AddPosition from "./features/AllEmployees/AddPosition/components/AddPosition";
import ViewReq from "./pages/Requests/ViewReq";
import Payslips from "./pages/Payslips/Payslips";
import CreatePayslip from "./pages/Payslips/CreatePayslip";
import ViewInsightsPage from "./features/Reports/employeePerformance/components/ViewInsightsPage";
import Profile from "./pages/Profile/Profile";
import EditProject from "./pages/projects/EditProject";
import EditSubTask from "./pages/Tasks/EditSubTask";
import EditPayslip from "./pages/Payslips/EditPayslip";
import CreateRequest from "./pages/Requests/CreateRequest";
import All from "./pages/VacationRequests/all";
import CreateVacationRequest from "./pages/VacationRequests/CreateVacationRequest";
import RequestDetails from "./pages/VacationRequests/details";

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
        <Route element={<Profile />} path={pathList.profile} />
        <Route path={pathList.projects}>
          <Route
            element={
              <ProtectedRoute>
                <Projects />
              </ProtectedRoute>
            }
            index
          />
          <Route
            element={
              <ProtectedRoute>
                <CreateProject />
              </ProtectedRoute>
            }
            path={pathList.createProject}
          />
          <Route
            element={
              <ProtectedRoute>
                <ProjectDetails />
              </ProtectedRoute>
            }
            path={pathList.projectDetails}
          />
          <Route
            element={
              <ProtectedRoute>
                <AddTaskProjectDetails />
              </ProtectedRoute>
            }
            path={pathList.projectDetailsAddTask}
          />
          <Route
            element={
              <ProtectedRoute>
                <EditProject />
              </ProtectedRoute>
            }
            path={pathList.editProject}
          />
        </Route>
        <Route
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
          path={pathList.home}
        />
        <Route path={pathList.tasks}>
          <Route
            element={
              <ProtectedRoute>
                <Tasks />
              </ProtectedRoute>
            }
            index
          />
          <Route
            element={
              <ProtectedRoute>
                <TaskDetails />
              </ProtectedRoute>
            }
            path={pathList.taskDetails}
          />
          <Route
            element={
              <ProtectedRoute>
                <AddSubTasks />
              </ProtectedRoute>
            }
            path={pathList.addSubTasks}
          />
          <Route
            element={
              <ProtectedRoute>
                <EditSubTask />
              </ProtectedRoute>
            }
            path={pathList.editSubtask}
          />
          <Route
            element={
              <ProtectedRoute>
                <ViewTask />
              </ProtectedRoute>
            }
            path={pathList.viewTask}
          />
          <Route
            element={
              <ProtectedRoute>
                <ViewSubTask />
              </ProtectedRoute>
            }
            path={pathList.viewSubTask}
          />
          <Route
            element={
              <ProtectedRoute>
                <EditTasks />
              </ProtectedRoute>
            }
            path={pathList.editTasks}
          />
        </Route>
        <Route path={pathList.payslips}>
          <Route
            element={
              <ProtectedRoute>
                <Payslips />
              </ProtectedRoute>
            }
            index
          />
          <Route
            element={
              <ProtectedRoute>
                <CreatePayslip />
              </ProtectedRoute>
            }
            path={pathList.create_payslip}
          />
          <Route
            element={
              <ProtectedRoute>
                <EditPayslip />
              </ProtectedRoute>
            }
            path={pathList.editPayslip}
          />
        </Route>
        <Route
          element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          }
          path={pathList.notifications}
        />
        <Route path={pathList.all_employees}>
          <Route
            element={
              <ProtectedRoute>
                <AllEmployees />
              </ProtectedRoute>
            }
            index
          />
          <Route
            element={
              <ProtectedRoute>
                <ViewEmployee />
              </ProtectedRoute>
            }
            path={pathList.view_employee}
          />
          <Route
            element={
              <ProtectedRoute>
                <EditEmployee />
              </ProtectedRoute>
            }
            path={pathList.edit_employee}
          />
          <Route
            element={
              <ProtectedRoute>
                <AddDepartment />
              </ProtectedRoute>
            }
            path={pathList.add_department}
          />
          <Route
            element={
              <ProtectedRoute>
                <AddPosition />
              </ProtectedRoute>
            }
            path={pathList.add_position}
          />
        </Route>
        <Route
          element={
            <ProtectedRoute>
              <NewEmployee />
            </ProtectedRoute>
          }
          path={pathList.new_employee}
        />
        <Route
          element={
            <ProtectedRoute>
              <Analysis />
            </ProtectedRoute>
          }
          path={pathList.analysis}
        />
        <Route path={pathList.requests}>
          <Route
            element={
              <ProtectedRoute>
                <Requests />
              </ProtectedRoute>
            }
            index
          />
          <Route
            element={
              <ProtectedRoute>
                <ViewReq />
              </ProtectedRoute>
            }
            path={pathList.viewRequests}
          />
          <Route
            element={
              <ProtectedRoute>
                <CreateRequest />
              </ProtectedRoute>
            }
            path={pathList.createRequest}
          />
        </Route>
        <Route path={pathList.vacationRequests}>
          <Route
            element={
              <ProtectedRoute>
                <All />
              </ProtectedRoute>
            }
            index
          />
          <Route
            element={
              <ProtectedRoute>
                <RequestDetails />
              </ProtectedRoute>
            }
            path={pathList.viewVacationRequests}
          />
          <Route
            element={
              <ProtectedRoute>
                <CreateVacationRequest />
              </ProtectedRoute>
            }
            path={pathList.createVacationRequest}
          />
        </Route>
        <Route path={pathList.reports}>
          <Route
            index
            element={
              <ProtectedRoute>
                <Reports />
              </ProtectedRoute>
            }
          />
          <Route
            element={
              <ProtectedRoute>
                <ViewInsightsPage />
              </ProtectedRoute>
            }
            path={pathList.view_insight}
          />
        </Route>
      </Route>
    </>
  )
);
function App() {
  return (
    <>
      <ToastContainer
        position={toast.POSITION.TOP_RIGHT}
        style={{
          zIndex: 99999,
        }}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
