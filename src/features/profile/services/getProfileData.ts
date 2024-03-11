import requestHelpers from "@/lib/requestHelpers"

const getProfileData = () => {
    return requestHelpers.getData('/user/profile/')
}

export default getProfileData