import requestHelpers from "@/lib/requestHelpers";

const deleteTask = (taskID: number, projectID: number) => {
  return requestHelpers.deleteData(`/task/delete/${projectID}/${taskID}/`, {
    showToast: true,
    success: "Task deleted successfully",
    error: (error) => error.message,
  });
};

export default deleteTask;
