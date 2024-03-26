import requestHelpers from "@/lib/requestHelpers";

const getInsights = (userID: number) => {
  return requestHelpers.getData(`/analytics/user-insights/${userID}/`);
};

export default getInsights;
