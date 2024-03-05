import requestHelpers from "@/lib/requestHelpers";

const getWorkingHours = () => {
  return requestHelpers.getData("/analytics/working-hours/");
};

export default getWorkingHours;
