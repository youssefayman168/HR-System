import requestHelpers from "@/lib/requestHelpers";

const editTask = (data: any, projectID: number, taskID: number) => {
  return requestHelpers.putData(
    `/task/update/${projectID}/${taskID}/
`,
    data,
    {
      showToast: true,
      success: "Task Updated Successfully",
      error: "Task Couldn't Update",
    }
  );
};

export default editTask;
