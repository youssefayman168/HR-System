import testImg from '@/assets/testImg.jpg'
import EmployeeInfo from '@/features/AllEmployees/ViewEmployees/components/EmployeeInfo'

const InsightsEmployeeInfo = () => {
    return (
        <div className=" flex items-start justify-between w-full">
            <div className="flex items-start gap-3">
                <img src={testImg} alt="pic" className="size-[50px] rounded-full" />
                <div className="">
                    <p className='mt-2 text-primary font-semibold'>James campion</p>
                    <div className="mt-10">
                        <EmployeeInfo title='email' value='abdouumostafa1@gmail.com' valueStyle='text-sm' />
                        <EmployeeInfo title='hours worked' value='567' valueStyle='text-sm' />
                        <EmployeeInfo title='per hour' value='$566' valueStyle='text-sm' />
                    </div>
                </div>
            </div>
            <div className="">
                <button className='p-[10px] rounded-md border border-[#E6E7EC] text-primary flex items-stretch gap-[10px] mb-8'>
                    Sales specialist
                </button>
                <EmployeeInfo title='department' value='Designing' valueStyle='text-sm' />
                <EmployeeInfo title='company' value='PROGO' valueStyle='text-sm' />
                <EmployeeInfo title='grade' value='Grade' valueStyle='text-sm' />
            </div>
        </div>
    )
}

export default InsightsEmployeeInfo