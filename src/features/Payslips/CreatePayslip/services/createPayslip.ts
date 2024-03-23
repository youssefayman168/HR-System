import requestHelpers from "@/lib/requestHelpers";

const createPayslip = (data: any) => {
  return requestHelpers.postData("/payslips/create/", data, {
    showToast: true,
    success:
      "Payslip added successfully to this user, he'll be notified about it",
    error:
      "Couldn't add the payslip to this user, please check the data and make sure that user exists with this number",
  });
};

export default createPayslip;
