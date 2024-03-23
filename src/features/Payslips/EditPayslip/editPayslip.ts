import requestHelpers from "@/lib/requestHelpers";

const editPayslip = (data: any, payslipID: number) => {
  return requestHelpers.putData(`/payslips/update/${payslipID}/`, data, {
    showToast: true,
    error: "Payslip couldn't be updated",
    success: "Payslip updated successfully",
  });
};

export default editPayslip;
