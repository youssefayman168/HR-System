import requestHelpers from "@/lib/requestHelpers";

const getAllHeads = () => {
    return requestHelpers.getData("/user/get-all/");
};

export default getAllHeads;