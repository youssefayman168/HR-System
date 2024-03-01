import BaseLayout from '@/layouts/BaseLayout/BaseLayout'
import { pathList } from '@/routes/routesPaths'
import ArrowLeft from '../../assets/CreateProjects/ArrowLeft.svg'
import { Link } from 'react-router-dom'
import { BiChevronRight } from 'react-icons/bi'
import BaseInput from '@/components/BaseInput'
import DateInpCreate from '@/components/DateInput/DateInpCreate'

const CreatePayslip = () => {
    return (
        <BaseLayout>
            <div className='p-6 pb-[15px]'>
                <Link to={pathList.payslips} className="flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold ">
                    <img src={ArrowLeft} alt="ArrowLeft" />
                    Payslips
                    <BiChevronRight />
                    Create Payslip
                </Link>
                <form action="">
                    <div className='bg-white py-6 px-12 mt-8 rounded-[15px] h-[calc(100vh-240px)] overflow-y-auto HideScroll '>
                        <div className='flex items-center justify-between mb-10'>
                            <p className='text-[#101828] text-[24px] font-[600] '>Create New Payslip</p>
                            <button className='bg-[#105090] py-2 px-8 rounded-[10px] text-white '>Import Excel Sheet</button>
                        </div>
                        <div className='inputs flex gap-8 items-start mb-3'>

                            <div className='w-full'>
                                <BaseInput type='number' placeholder='Please enter employee ID' label='Employee ID' styles={{width: "100%"}} />
                                <BaseInput type='text' placeholder='Please Enter The Employee experience' label='Experience' styles={{width: "100%"}} />
                                <DateInpCreate when='Hiring Date' styleLabel={{display : "block"}} label='Hiring date' />
                                <BaseInput type='text' placeholder='Please Enter the number of working days' label='Actual working days' styles={{width: "100%"}} />
                                <BaseInput type='text' placeholder='Please Enter working days wage' label='Working days wage' styles={{width: "100%"}} />
                                <BaseInput type='text' placeholder='Please Enter the allowence' label='Transfer allowance' styles={{width: "100%"}} />
                                <BaseInput type='text' placeholder='Please Enter penalties' label='Penalties' styles={{width: "100%"}} />
                                <BaseInput type='text' placeholder='Please Enter the total salary' label='Total Salary' styles={{width: "100%"}} />
                            </div>

                            <div className=' w-full'>
                                <BaseInput type='text' placeholder='Please Enter categories Name' label='Category' styles={{width: "100%"}} />
                                <BaseInput type='text' placeholder='Please Choose The Grade' label='Grade' styles={{width: "100%"}} />
                                <BaseInput type='text' placeholder='Please Enter The Budget' label='Net Salary' styles={{width: "100%"}} />
                                <BaseInput type='text' placeholder='Please Enter the number of overtime hours' label='Overtime hours' styles={{width: "100%"}} />
                                <BaseInput type='text' placeholder='Please Enter Your overtime coast' label='Daily overtime cost' styles={{width: "100%"}} />
                                <BaseInput type='text' placeholder='Please Enter the total wage' label='Total wage' styles={{width: "100%"}} />
                                <BaseInput type='text' placeholder='Please Enter Your Loans' label='Loans' styles={{width: "100%"}} />
                            </div>
                            
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-5 mt-4'>
                        <button className='text-[#224886] border-[1px] border-[#224886] py-[8px] px-9 rounded-[6px]' >Cancel</button>
                        <button type='submit' className='bg-[#224886] text-white py-[8px] px-10 rounded-[6px]' >Save</button>
                    </div>
                </form>
            </div>
        </BaseLayout>
    )
}

export default CreatePayslip