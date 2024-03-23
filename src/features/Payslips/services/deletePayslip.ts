import requestHelpers from "@/lib/requestHelpers";

const deletePayslip = (payslipID: number) => {
  return requestHelpers.deleteData(`/payslips/delete/${payslipID}/`, {
    showToast: true,
    error: "Couldn't Delete This Payslip",
    success: "Payslip deleted successfully",
  });
};

export default deletePayslip;
