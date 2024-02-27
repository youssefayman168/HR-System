import { IoMdArrowDropdown } from "react-icons/io"

const BlueTableHeader = ({ children, departmentDropDown, positionDropDown, departmentClick, positionClick }: any) => {
    return (
        <div className="w-full bg-white rounded-[15px] h-[calc(100vh-264px)] mt-6 overflow-hidden">
            <div className="bg-primary py-7 px-6 text-white flex items-center gap-6 w-full">
                <p className="w-[25%]">All Employees</p>
                <p className="w-[15%]">Company</p>
                <button onClick={departmentClick} className="w-[15%] flex items-center gap-1 relative">
                    <span className="absolute top-[50px] left-[-110px]">{departmentDropDown}</span>
                    Department
                    <IoMdArrowDropdown />
                </button>
                <button onClick={positionClick} className="w-[15%] flex items-center gap-1 relative">
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