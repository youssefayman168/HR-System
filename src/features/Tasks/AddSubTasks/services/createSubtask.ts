import requestHelpers from "@/lib/requestHelpers";

const createSubTask = (data: any, taskID: number) => {
  return requestHelpers.postData(`/task/sub-task/create/${taskID}/`, data, {
    showToast: true,
    success: "Subtask created successfully",
    error: (e) => e.message,
  });
};

export default createSubTask;
