import requestHelpers from "@/lib/requestHelpers";

const deleteSubtask = (taskID: number, subtaskID: number) => {
  return requestHelpers.deleteData(
    `/task/sub-task/delete/${taskID}/${subtaskID}/`,
    {
      showToast: true,
      success: "Subtask deleted successfully",
      error: (e) => e.message,
    }
  );
};

export default deleteSubtask;
