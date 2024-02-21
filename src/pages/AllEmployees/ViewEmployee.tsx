import BaseLayout from "@/layouts/BaseLayout/BaseLayout"
import { BiChevronRight } from "react-icons/bi"
import { Link } from "react-router-dom"
import ArrowLeft from '@/assets/CreateProjects/ArrowLeft.svg'
import { pathList } from "@/routes/routesPaths"
import testImg from '@/assets/testImg.jpg'
import EmployeeInfo from "@/features/AllEmployees/ViewEmployees/components/EmployeeInfo"

const ViewEmployee = () => {
    return (
        <BaseLayout>
            <div className="p-6">
                <div className='Header mb-8 '>
                    <Link to={pathList.view_employee} className="flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold ">
                        <img src={ArrowLeft} alt="ArrowLeft" />
                        All Employees
                        <BiChevronRight />
                        View Employee
                    </Link>
                </div>
                <div className="mt-6 rounded-2xl bg-white px-8 h-[120px] flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <p className="text-blackGrayColor text-2xl font-bold">Tanner Finsha</p>
                        <div className="bg-[#F5F6F7] rounded-2xl text-xs flex items-center p-2 gap-2">
                            <span className="text-[#7A8699] font-bold">#Employee ID: </span>
                            <span className="text-blackGrayColor font-bold"> 23454GH6</span>
                        </div>
                    </div>
                    <div className="border border-grayColor rounded-lg py-[10px] px-4 text-darkBlueColor">Sales specialist</div>
                </div>
                <div className="mt-5 w-full rounded-lg bg-white h-[calc(100vh-340px)] flex items-stretch gap-5 p-6 overflow-y-auto HideScroll">
                    <div className="w-[25%] border border-[#EFF1F4] rounded-2xl p-6 h-fit">
                        <div className="flex items-center gap-3 border-b border-b-[#F5F6F7] pb-6">
                            <img className="rounded-full size-[60px]" src={testImg} alt="Picture" />
                            <div>
                                <p className="text-blackGrayColor font-bold">Tanner Finsha</p>
                                <p className="text-grayColor font-bold text-sm">Tannerfisher@gmail.com</p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <p className="text-primary text-xl font-bold mb-8">Personal Details</p>
                            <EmployeeInfo title="email" value="invision@invisionapp.com" />
                            <EmployeeInfo title="gender" value="Female" />
                            <EmployeeInfo title="phone number" value="+2010118122497" />
                            <EmployeeInfo title="location" value="Cairo" />
                            <EmployeeInfo title="hired date" value="1/9/2023" />
                            <EmployeeInfo title="birth date" value="19/2/2002" />
                        </div>
                    </div>
                    <div className="w-[25%] border border-[#EFF1F4] rounded-2xl h-full p-6">
                        <p className="text-primary text-xl font-bold mb-8">Other details</p>
                        <EmployeeInfo title="university" value="2020 - 2024" />
                        <p className="text-blackGrayColor -mt-6 mb-8">Design Communication visuals</p>
                        <EmployeeInfo title="department" value="Programming" />
                        <EmployeeInfo title="company" value="PROGO" />
                        <EmployeeInfo title="grade" value="3.56" />
                        <EmployeeInfo title="nationality" value="Egyptian" />
                        <EmployeeInfo title="social insurance type" value="Grade" />
                    </div>
                    <div className="flex-1 border border-[#EFF1F4] rounded-2xl h-full p-6">
                        <p className="text-primary text-xl font-bold mb-8">Attachments</p>
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}

export default ViewEmployee