import requestHelpers from "@/lib/requestHelpers";

/**
 * This method can approve or disapprove subtask, just when you approve insert approvalID as 1, otherwise, 0
 * @param {number} subTaskID - Number
 * @param {number} approvalID - Number
 */
const approveSubTask = (
  subTaskID: number,
  approvalID: number,
  commentsFromHOD?: string
) => {
  return requestHelpers.patchData(
    `/task/sub-task/approve/${subTaskID}/${approvalID}/`,
    {
      hod_comment: commentsFromHOD,
    },
    {
      showToast: true,
      success: "Subtask approved successfully",
      error: "Subtask didn't approve due to an error occurred",
    }
  );
};

export default approveSubTask;
