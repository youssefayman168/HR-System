import requestHelpers from "@/lib/requestHelpers";

const getBudgetAnalytics = () => {
  return requestHelpers.getData("analytics/budget/");
};

export default getBudgetAnalytics;
