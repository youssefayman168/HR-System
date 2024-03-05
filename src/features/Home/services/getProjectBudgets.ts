import requestHelpers from "@/lib/requestHelpers";

const getProjectBudgets = () => {
  return requestHelpers.getData("/analytics/project-budgets/");
};

export default getProjectBudgets;
