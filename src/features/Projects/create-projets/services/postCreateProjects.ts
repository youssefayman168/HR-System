import requestHelpers from "@/lib/requestHelpers";

const postCreateProjects = async (action: any, data: any) => {
  let formData = new FormData();
  formData.append("project_name", data.project_name);
  formData.append("start_date", data.start_date);
  formData.append("scope", data.scope);
  formData.append("location", data.location);
  formData.append("company", data.company ? data.company : 1);
  formData.append("plan", data.plan);
  formData.append("budget", data.budget);
  formData.append("work_hours", data.work_hours);
  formData.append("project_number", data.project_number);
  formData.append("status", data.status ? data.status : "Hold");
  return requestHelpers
    .postData("/project/create/", formData, {
      success: "The Project Is Created Successfully",
      showToast: true,
      error: "The Project Does not Created",
    })
    .then(action);
};

export default postCreateProjects;
