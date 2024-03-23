import requestHelpers from "@/lib/requestHelpers";

const getPayslip = (payslipID: number) => {
  return requestHelpers.getData(`/payslips/get-payslip/${payslipID}/`);
};

export default getPayslip;
