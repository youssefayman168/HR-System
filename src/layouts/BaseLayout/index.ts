import { pathList } from "../../routes/routesPaths";
import DashboardIcon from "../../assets/icons/DashboardIcon";
import ProjectsIcon from "../../assets/icons/ProjectsIcon";
import TasksIcon from "../../assets/icons/TasksIcon";
import TimeTableIcon from "../../assets/icons/TimeTableIcon";
import NotificationsIcon from "../../assets/icons/NotificationsIcon";
import AllEmployeesIcon from "../../assets/icons/AllEmployyesIcon";
import NewEmployeeIcon from "../../assets/icons/NewEmployeeIcon";
import AnalysisIcon from "../../assets/icons/AnalysisIcon";
import RequestsIcon from "../../assets/icons/RequestsIcon";
import ReportsIcon from "../../assets/icons/ReportsIcon";
import FinancialRequestIco from "@/assets/icons/FinancialRequestIco";

export const asideLinks = [
  {
    title: "Dashboard",
    src: pathList.home,
    Icon: DashboardIcon,
  },
  {
    title: "Projects",
    src: pathList.projects,
    Icon: ProjectsIcon,
  },
  {
    title: "Tasks",
    src: pathList.tasks,
    Icon: TasksIcon,
  },
  {
    title: "Payslips",
    src: pathList.payslips,
    Icon: TimeTableIcon,
  },
  {
    title: "Notifications",
    src: pathList.notifications,
    Icon: NotificationsIcon,
  },
  {
    title: "All Employees",
    src: pathList.all_employees,
    Icon: AllEmployeesIcon,
  },
  {
    title: "New Employee",
    src: pathList.new_employee,
    Icon: NewEmployeeIcon,
  },
  {
    title: "Analysis",
    src: pathList.analysis,
    Icon: AnalysisIcon,
  },
  {
    title: "Financial Requests",
    src: pathList.requests,
    Icon: FinancialRequestIco,
  },
  {
    title: "Requests",
    src: pathList.vacationRequests,
    Icon: RequestsIcon,
  },
  {
    title: "Reports",
    src: pathList.reports,
    Icon: ReportsIcon,
  },
  // {
  //     title: 'LogOut',
  //     src: pathList.login,
  //     Icon: LogoutIcon
  // },
];
