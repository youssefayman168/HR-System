import requestHelpers from "@/lib/requestHelpers";

const getEmployeesAnalytics = () => {
  return requestHelpers.getData("/analytics/employees-count/");
};

export default getEmployeesAnalytics;
