import requestHelpers from "@/lib/requestHelpers";

const getAllPayslips = () => {
  return requestHelpers.getData("/payslips/get/");
};

export default getAllPayslips;
