import requestHelpers from "@/lib/requestHelpers";

const getProjects = () => {
  return requestHelpers.getData("/project/get/all/");
};

export default getProjects;
