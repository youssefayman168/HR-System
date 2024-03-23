import requestHelpers from "@/lib/requestHelpers";

const getPositions = () => {
  return requestHelpers.getData("/company/position/get/");
};

export default getPositions;
