import requestHelpers from "@/lib/requestHelpers";

const editSubtask = (data: any, taskID: number, subtaskID: number) => {
  return requestHelpers.putData(
    `/task/sub-task/update/${taskID}/${subtaskID}/`,
    data,
    {
      showToast: true,
      success: "Subtask updated successfully",
      error: (e) => e.message,
    }
  );
};

export default editSubtask;
