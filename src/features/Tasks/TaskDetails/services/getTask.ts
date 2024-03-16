import requestHelpers from "@/lib/requestHelpers";

const getTask = (taskID: number) => {
  return requestHelpers.getData(`/task/get-task/${taskID}/`);
};

export default getTask;
