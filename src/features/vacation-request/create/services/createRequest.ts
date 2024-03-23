import requestHelpers from "@/lib/requestHelpers";
import { IRequest } from "@/pages/VacationRequests/CreateVacationRequest";

const createRequest = (data: IRequest) => {
  const formData = new FormData();
  formData.append("type", data.type);
  formData.append("medical_report", data.medical_report);
  formData.append("date_from", data.date_from);
  formData.append("date_to", data.date_to);
  formData.append("employee_notes", data.employee_notes);
  return requestHelpers.postData(
    "/vacation-requests/submit-request/",
    formData,
    {
      showToast: true,
      error: (e) => e.message,
      success: "Request sent successfully",
    }
  );
};

export default createRequest;
