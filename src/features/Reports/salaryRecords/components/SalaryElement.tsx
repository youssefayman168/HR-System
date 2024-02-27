type IProps = {
    employeeImg: any,
    employeeName: string,
    companyName: string,
    departmentName: string,
    positionName: string,
    hourPrice: number,
    workHours: number
}

const SalaryElement = ({ employeeImg, employeeName, companyName, departmentName, positionName, hourPrice, workHours }: IProps) => {

    return (
        <div className=" py-7 px-6 gap-6 flex items-center w-full border-b border-b-[#D9D9DB]">
            <div className="w-[25%] flex items-center gap-2">
                <img src={employeeImg} alt="Employee Image" className='w-[32px] h-[32px] rounded-full' />
                <p className="font-bold">{employeeName}</p>
            </div>
            <p className="w-[15%]">{companyName}</p>
            <p className="w-[15%]">{departmentName}</p>
            <p className="w-[15%]">{positionName}</p>
            <div className="w-[15%] flex items-center gap-2">
                {hourPrice}
            </div>
            <div className="w-[15%] flex items-center gap-2">
                {workHours}
            </div>
        </div>

    )
}

export default SalaryElement