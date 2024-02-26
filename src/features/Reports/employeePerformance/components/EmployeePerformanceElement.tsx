type IProps = {
    employeeImg: any,
    employeeName: string,
    companyName: string,
    departmentName: string,
    positionName: string,
    onActionClick?: number,
}

const EmployeePerformanceElement = ({ employeeImg, employeeName, companyName, departmentName, positionName, onActionClick }: IProps) => {

    return (
        <div className=" py-7 px-6 gap-6 flex items-center w-full border-b border-b-[#D9D9DB]">
            <div className="w-[25%] flex items-center gap-2">
                <img src={employeeImg} alt="Employee Image" className='w-[32px] h-[32px] rounded-full' />
                <p className="font-bold">{employeeName}</p>
            </div>
            <p className="w-[20%]">{companyName}</p>
            <p className="w-[15%]">{departmentName}</p>
            <p className="w-[15%]">{positionName}</p>
            <div className="w-[25%] flex items-center gap-2">
                <button onClick={() => onActionClick} className="rounded-md capitalize text-[#063C84] font-semibold bg-[#CCE2FF] h-[40px] w-[125px] flex items-center justify-center">view insights</button>
            </div>
        </div>

    )
}

export default EmployeePerformanceElement