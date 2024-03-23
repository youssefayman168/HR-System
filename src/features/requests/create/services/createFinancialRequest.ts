import requestHelpers from "@/lib/requestHelpers";
import { IRequest } from "@/pages/Requests/CreateRequest";

const createFinancialRequest = (data: IRequest) => {
  const formData = new FormData();
  formData.append("type", data.type);
  formData.append("comment_from_the_employee", data.comment_from_the_employee);
  formData.append("hr", data.hr);
  return requestHelpers.postData("/request/create/", formData, {
    showToast: true,
    error: "Couldn't send the request",
    success: "Request sent successfully",
  });
};

export default createFinancialRequest;
