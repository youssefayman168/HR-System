import requestHelpers from "@/lib/requestHelpers";

const delegateSubtask = (subtask: any, hodID: any) => {
  return requestHelpers.patchData(
    `/task/sub-task/delegate/`,
    { subtask_id: subtask, hod_id: hodID },
    {
      showToast: true,
      success: "The Task Is Referred To Another HOD Successfully",
      error: "There Is An Error Occurred",
    }
  );
};

export default delegateSubtask;
