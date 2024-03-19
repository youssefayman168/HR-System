export const pathList = {
  // Login Path Pages
  login: "/",
  forgetPassword: "/forget_password",
  forgetPasswordOTP: "/forget_password/forget_password_OTP/:email?",
  resetPassword: "/forget_password/reset_password/:otpCode/:email",

  home: "/home",

  // Profile URLs
  profile: "/profile",

  // Task URLs
  tasks: "/tasks",
  taskDetails: "/tasks/details/:taskID",
  addSubTasks: "/tasks/:taskID/addSubTasks",
  editTasks: "/tasks/editTasks/:taskID",
  viewTask: "/tasks/view-task/:taskID",
  viewSubTask: "/tasks/viewSubTask/:subTaskID",

  // Payslips URLs
  payslips: "/payslips",
  create_payslip: "/payslips/create_payslip",

  notifications: "/notifications",

  // All Employees
  all_employees: "/all_employees",
  view_employee: "/all_employees/view_employee",
  edit_employee: "/all_employees/edit_employee",
  add_department: "/all_employees/add_department",
  add_position: "/all_employees/add_position",

  new_employee: "/new_employee",
  analysis: "/analysis",

  // Reports
  reports: "/reports",
  view_insight: "/reports/view_insights",

  // Requests URLs
  requests: "/requests",
  viewRequests: "/requests/viewRequests/:id",

  // Projects URLs
  projects: "/projects",
  createProject: "/projects/create",
  projectDetails: "/projects/:id",
  editProject: "/projects/editProject/:id",
  projectDetailsAddTask: "/projects/:id/addTask",
};
