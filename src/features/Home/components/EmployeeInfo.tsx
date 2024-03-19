type IProps = {
    image: any,
    employeeName: string,
    profession: string,
    projects: number,
    subTask: number,
    hours: number
}
const EmployeeInfo = ({ image, employeeName, profession, projects, subTask, hours }: IProps) => {
    return (
        <div className="flex items-center pb-6 border-b border-b-[#EAEFF4] mb-6">
            <div className="w-[30%] flex items-center gap-4">
                <img src={image} alt="Person Image" className="w-[40px] h-[40px] rounded-full" />
                <div>
                    <p className="text-primary text-sm font-bold">{employeeName}</p>
                    <p className="text-grayColor text-xs font-semibold mt-1">{profession}</p>
                </div>
            </div>
            <p className="w-[20%] text-center">{projects}</p>
            <p className="w-[20%] text-center">{subTask}</p>
            <p className="w-[20%] text-center">{hours}</p>
        </div>
    )
}

export default EmployeeInfo;