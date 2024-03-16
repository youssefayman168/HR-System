import requestHelpers from "@/lib/requestHelpers";

const createTask = (data: any, projectID: number) => {
  return requestHelpers.postData(`/task/create/${projectID}/`, data, {
    showToast: true,
    success: "Task Created Successfully",
    error: (e) => e.message,
  });
};

export default createTask;
