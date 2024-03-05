import requestHelpers from "@/lib/requestHelpers";

const getProjectsAnalytics = () => {
  return requestHelpers.getData("/analytics/projects-count/");
};

export default getProjectsAnalytics;
