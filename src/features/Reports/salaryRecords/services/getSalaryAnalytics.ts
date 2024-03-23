import requestHelpers from "@/lib/requestHelpers";

const getSalaryAnalytics = () => {
  return requestHelpers.getData("analytics/salary/");
};

export default getSalaryAnalytics;
