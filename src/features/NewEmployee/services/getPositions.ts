import requestHelpers from "@/lib/requestHelpers";

const getPositions = (department: string) => {
  console.log(department);
  return requestHelpers.getData(
    `/company/position/get-department/${department}/`
  );
};

export default getPositions;
