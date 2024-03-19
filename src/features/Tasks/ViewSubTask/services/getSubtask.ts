import requestHelpers from "@/lib/requestHelpers";

const getSubtask = (subtaskID: number) => {
  return requestHelpers.getData(`/task/sub-task/get/${subtaskID}/`);
};

export default getSubtask;
