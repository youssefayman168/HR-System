import { IoMdArrowDropdown } from "react-icons/io"

const ProjectCostTable = ({ children, companyDropdown, projectBudgetDropdown, companyClick, projectBudgetClick }: any) => {
    return (
        <div className="w-full bg-white rounded-[15px] h-[calc(100vh-264px)] mt-6 overflow-hidden">
            <div className="bg-primary py-7 px-6 text-white flex items-center gap-6 w-full">
                <p className="w-[20%]">ID</p>
                <p className="w-[20%]">All Projects</p>
                <button onClick={companyClick} className="w-[20%] flex items-center gap-1 relative">
                    <span className="absolute top-[50px] left-[-110px]">{companyDropdown}</span>
                    Company
                    <IoMdArrowDropdown />
                </button>
                <button onClick={projectBudgetClick} className="w-[20%] flex items-center gap-1 relative">
                    <span className="absolute top-[50px] left-[-110px]">{projectBudgetDropdown}</span>
                    ProjectBudget
                    <IoMdArrowDropdown />
                </button>
                <p className="w-[20%]">Work Hours</p>
            </div>
            {children}
        </div>
    )
}

export default ProjectCostTable