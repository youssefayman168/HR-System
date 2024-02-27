import BaseLayout from "@/layouts/BaseLayout/BaseLayout"
import { BiChevronRight } from "react-icons/bi"
import { Link } from "react-router-dom"
import ArrowLeft from '@/assets/CreateProjects/ArrowLeft.svg'
import { pathList } from "@/routes/routesPaths"
import testImg from '@/assets/testImg.jpg'
import EmployeeAttachment from "@/features/AllEmployees/ViewEmployees/components/EmployeeAttachment"
import editPen from '@/assets/editPen.svg'
import EmployeeInfoInput from "@/features/AllEmployees/EditEmployees/components/EmployeeInfoInput"
import SelectOption from "@/components/SelectOption"
import BaseBtn from "@/components/Buttons/BaseBtn"
import SecondaryBorderBtn from "@/components/Buttons/SecondaryBorderBtn"

const EditEmployee = () => {
    return (
        <BaseLayout>
            <div className="p-6">
                <div className='Header mb-8 '>
                    <Link to={pathList.view_employee} className="flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold ">
                        <img src={ArrowLeft} alt="ArrowLeft" />
                        All Employees
                        <BiChevronRight />
                        Edit Employee
                    </Link>
                </div>
                <div className="mt-6 rounded-2xl bg-white px-8 h-[120px] ">
                    <div className="flex items-center gap-4 h-full">
                        <div className="bg-[#F5F6F7] rounded-2xl text-xs flex items-center p-2 gap-2">
                            <span className="text-[#7A8699] font-bold">#Employee ID: </span>
                            <span className="text-blackGrayColor font-bold"> 23454GH6</span>
                        </div>
                    </div>
                </div>
                <div className="mt-5 w-full rounded-lg bg-white h-[calc(100vh-340px)] p-6 overflow-y-auto HideScroll">
                    <div className=" flex items-stretch gap-5">
                        <div className="w-[25%] border border-[#EFF1F4] rounded-2xl p-6 h-fit">
                            <div className="flex items-center justify-center">
                                <div className="flex items-center gap-3 border-b border-b-[#F5F6F7] pb-6 relative">
                                    <img className="rounded-full size-[80px] mx-auto" src={testImg} alt="Picture" />
                                    <label htmlFor="picFile" className="size-[24px] absolute bottom-1 cursor-pointer right-[8px]">
                                        <img src={editPen} alt="" className="size-[24px]" />
                                    </label>
                                    <input type="file" name="picFile" id="picFile" className=" hidden" />
                                </div>
                            </div>
                            <div className="mt-8">
                                <p className="text-primary text-xl font-bold mb-8">Personal Details</p>
                                <EmployeeInfoInput type="text" title="full name" value="Abdelrahman Mustafa" />
                                <EmployeeInfoInput type="text" title="email" value="invision@invisionapp.com" />
                                <EmployeeInfoInput type="text" title="phone number" value="+2010118122497" />
                                <EmployeeInfoInput type="text" title="location" value="Cairo" />
                                <EmployeeInfoInput type="text" title="hired date" value="1/9/2023" />
                                <EmployeeInfoInput type="text" title="birth date" value="19/2/2002" />
                            </div>
                        </div>
                        <div className="w-[25%] border border-[#EFF1F4] rounded-2xl h-fit p-6">
                            <p className="text-primary text-xl font-bold mb-8">Other details</p>
                            <EmployeeInfoInput type="text" title="collage name" value="Georgia" />
                            <EmployeeInfoInput type="text" title="study" value="Programming" />
                            <div className="flex items-center gap-2">
                                <EmployeeInfoInput type="text" title="from" value="2020" />
                                <EmployeeInfoInput type="text" title="to" value="2024" />
                            </div>
                            <SelectOption label='role'>
                                <option value="">HR</option>
                                <option value="">Super Admin</option>
                                <option value="">Accountant</option>
                                <option value="">Office Manager</option>
                            </SelectOption>
                            <SelectOption label='nationality'>
                                <option value="">Egyptian</option>
                                <option value="">Egyptian</option>
                                <option value="">Egyptian</option>
                                <option value="">Egyptian</option>
                            </SelectOption>
                            <SelectOption label='social insurance type'>
                                <option value="">Insurance</option>
                                <option value="">Insurance</option>
                                <option value="">Insurance</option>
                                <option value="">Insurance</option>
                            </SelectOption>
                            <EmployeeInfoInput type="text" title="company" value="PROGO" />
                        </div>
                        <div className="flex-1 border border-[#EFF1F4] rounded-2xl h-fit p-6">
                            <p className="text-primary text-xl font-bold mb-8">Attachments</p>
                            <div className="flex flex-col ml-12 gap-9">
                                <EmployeeAttachment document="word-documents12" documentType="Cv Attachment" onViewClick={''} />
                                <EmployeeAttachment document="word-documents12" documentType="Cv Attachment" onViewClick={''} />
                                <EmployeeAttachment document="word-documents12" documentType="Cv Attachment" onViewClick={''} />
                                <EmployeeAttachment document="word-documents12" documentType="Cv Attachment" onViewClick={''} />
                                <EmployeeAttachment document="word-documents12" documentType="Cv Attachment" onViewClick={''} />
                                <EmployeeAttachment document="word-documents12" documentType="Cv Attachment" onViewClick={''} />
                                <EmployeeAttachment document="word-documents12" documentType="Cv Attachment" onViewClick={''} />
                                <EmployeeAttachment document="word-documents12" documentType="Cv Attachment" onViewClick={''} />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-6">
                        <div className="flex items-stretch gap-4">
                            <SecondaryBorderBtn text="cancel" style={{ width: 130, display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
                            <BaseBtn name="Save Changes" styles={{ width: 130, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'normal', fontSize: 14 }} />
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}

export default EditEmployee