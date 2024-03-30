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
  editSubtask: "/tasks/subtask/edit/:taskID/:subtaskID",
  editTasks: "/tasks/editTasks/:taskID/:phaseID?",
  viewTask: "/tasks/view-task/:taskID",
  viewSubTask: "/tasks/viewSubTask/:subTaskID",

  // Payslips URLs
  payslips: "/payslips",
  create_payslip: "/payslips/create_payslip",
  editPayslip: "/payslips/edit-payslip/:payslipID",

  notifications: "/notifications",

  // All Employees
  all_employees: "/all_employees",
  view_employee: "/all_employees/view_employee/:id",
  edit_employee: "/all_employees/edit_employee/:id",
  add_department: "/all_employees/add_department",
  add_position: "/all_employees/add_position",
  add_company: "/all_employees/add_company",

  new_employee: "/new_employee",
  analysis: "/analysis",

  // Reports
  reports: "/reports",
  view_insight: "/reports/view_insights/:userID",

  // Requests URLs
  requests: "/requests",
  createRequest: "/requests/create",
  viewRequests: "/requests/viewRequests/:id",

  // Vacation Requests URLs
  vacationRequests: "/vacation-requests",
  createVacationRequest: "/vacation-requests/create",
  viewVacationRequests: "/vacation-requests/viewRequests/:requestID",

  // Projects URLs
  projects: "/projects",
  createProject: "/projects/create",
  projectDetails: "/projects/:id",
  editProject: "/projects/editProject/:id",
  projectDetailsAddTask: "/projects/:id/addTask/:phaseID?",

  // HR
  hrReports: "/hr/reports",
};
