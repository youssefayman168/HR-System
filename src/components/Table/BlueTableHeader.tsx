import { IoMdArrowDropdown } from "react-icons/io"

const BlueTableHeader = ({ children, departmentDropDown, positionDropDown, departmentClick ,allEmployeesClick, positionClick , allEmployeesDropDown }: any) => {
    return (
        <div className="w-full mt-6 ">
            <div className="bg-primary rounded-tl-[15px] rounded-tr-[15px] py-7 px-6 text-white flex items-center gap-6 w-full">
                <button onClick={allEmployeesClick} className="w-[25.6%] flex items-center gap-1 relative">
                    <span className="absolute top-[50px] left-[-110px]">{allEmployeesDropDown}</span>
                    All Employees
                    <IoMdArrowDropdown />
                </button>
                <p className="w-[18%]">Company</p>
                <button onClick={departmentClick} className="w-[18%] flex items-center gap-1 relative">
                    <span className="absolute top-[50px] left-[-110px]">{departmentDropDown}</span>
                    Department
                    <IoMdArrowDropdown />
                </button>
                <button onClick={positionClick} className="w-[18%] flex items-center gap-1 relative">
                    <span className="absolute top-[50px] left-[-110px]">{positionDropDown}</span>
                    Position
                    <IoMdArrowDropdown />
                </button>
                <p className="w-[30%]">Action</p>
            </div>
            {children}
        </div>
    )
}

export default BlueTableHeader