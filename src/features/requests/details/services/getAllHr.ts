import requestHelpers from "@/lib/requestHelpers"

const getAllHR = () => {
    return requestHelpers.getData('/user/get-all/')
}

export default getAllHR