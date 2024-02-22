export const pathList = {
  // Login Path Pages
  login: "/",
  forgetPassword: "/forget_password",
  forgetPasswordOTP: "/forget_password/forget_password_OTP/:email?",
  resetPassword: "/forget_password/reset_password/:otpCode/:email",

  home: "/home",

  // Task URLs
  tasks: "/tasks",
  architecturalDrawing: "/tasks/architecturalDrawing",
  addSubTasks: "/tasks/architecturalDrawing/addSubTasks",
  editTasks: "/tasks/editTasks",
  viewTask: "/tasks/architecturalDrawing/viewTask",
  viewSubTask: "/tasks/architecturalDrawing/viewSubTask",

  time_table: "/time_table",
  notifications: "/notifications",

  // All Employees
  all_employees: "/all_employees",
  view_employee: "/all_employees/view_employee",
  edit_employee: "/all_employees/edit_employee",

  new_employee: "/new_employee",
  analysis: "/analysis",
  requests: "/requests",
  reports: "/reports",

  // Projects URLs
  projects: "/projects",
  createProject: "/projects/create",
  projectDetails: "/projects/:id",
  projectDetailsAddTask: "/projects/:id/addTask",

};
