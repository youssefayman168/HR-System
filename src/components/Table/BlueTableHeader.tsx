
const BlueTableHeader = ({ children }: any) => {
    return (
        <div className="w-full mt-6 ">
            <div className="bg-primary rounded-tl-[15px] rounded-tr-[15px] py-7 px-6 text-white flex items-center gap-6 w-full">
                <p className="w-[25.6%] flex items-center gap-1 relative">
                    All Employees
                </p>
                <p className="w-[18%]">Company</p>
                <p className="w-[18%] flex items-center gap-1 relative">
                    Department
                </p>
                <p className="w-[18%] flex items-center gap-1 relative">
                    Position
                </p>
                <p className="w-[30%]">Action</p>
            </div>
            {children}
        </div>
    )
}

export default BlueTableHeader