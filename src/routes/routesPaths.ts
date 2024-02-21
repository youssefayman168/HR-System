export const pathList = {
  // Login Path Pages
  login: "/",
  forgetPassword: "/forget_password",
  forgetPasswordOTP: "/forget_password/forget_password_OTP/:email?",
  resetPassword: "/forget_password/reset_password/:otpCode/:email",

  home: "/home",

  // Taska URLs
  tasks: "/tasks",
  architecturalDrawing: "/tasks/architecturalDrawing" ,
  addSubTasks: "/tasks/architecturalDrawing/addSubTasks" ,

  time_table: "/time_table",
  notifications: "/notifications",
  all_employees: "/all_employees",
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
