import requestHelpers from "@/lib/requestHelpers";

const getProjectsAnalytics = () => {
  return requestHelpers.getData("analytics/projects/");
};

export default getProjectsAnalytics;
