import { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'

const Header = ({children} : any) => {


    const [ EmployeeState , setEmployeeState ] = useState(false)
    const [ Department , setDepartment ] = useState(false)

    const EmployeeList = () => {
        setEmployeeState(!EmployeeState)
        setDepartment(false)
    }
    
    const DepartmentList = () => {
        setDepartment(!Department)
        setEmployeeState(false)
    }


  return (
    <div>
        <div className="border-b-[1px] border-[#EFEFEF] py-7 text-[#949494] flex items-center gap-6 w-full">
            <button onClick={EmployeeList} className="w-[22%] flex items-center gap-1 relative">
                <span className="absolute top-[50px] left-[-110px]">
                    <ul className={`bg-white duration-300 text-center absolute overflow-hidden w-[250px] text-black rounded-lg shadow-lg z-[2222] ${EmployeeState ? 'ulFilter act' : 'h-0'}`} style={{ opacity: EmployeeState ? 1 : 0 }}>
                        <li className='py-[10px] border-b cursor-pointer'>All</li>
                        <li className='py-[10px] border-b cursor-pointer'>HR</li>
                        <li className='py-[10px] border-b cursor-pointer'>Designing</li>
                        <li className='py-[10px] border-b cursor-pointer'>Accountant</li>
                        <li className='py-[10px] border-b cursor-pointer'>Manager</li>
                    </ul>
                </span>
                Employee Name
                <IoMdArrowDropdown />
            </button>
            <button onClick={DepartmentList} className="w-[20%] flex items-center gap-1 relative">
                <span className="absolute top-[50px] left-[-110px]">
                    <ul className={`bg-white duration-300 text-center absolute overflow-hidden w-[250px] text-black rounded-lg shadow-lg z-[2222] ${Department ? 'ulFilter act' : 'h-0'}`} style={{ opacity: Department ? 1 : 0 }}>
                        <li className='py-[10px] border-b cursor-pointer'>All</li>
                        <li className='py-[10px] border-b cursor-pointer'>HR</li>
                        <li className='py-[10px] border-b cursor-pointer'>Designing</li>
                        <li className='py-[10px] border-b cursor-pointer'>Accountant</li>
                        <li className='py-[10px] border-b cursor-pointer'>Manager</li>
                    </ul>
                </span>
                Department
                <IoMdArrowDropdown />
            </button>
            <p className="w-[15%]">Hours</p>
            <p className="w-[20%]">Total Month Fund</p>
            <p className="">Productivity</p>
        </div>
        {children}
    </div>
  )
}

export default Header