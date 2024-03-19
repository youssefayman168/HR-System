
const Header = ({ children }: any) => {

    return (
        <div>
            <div className="border-b-[1px] border-[#EFEFEF] py-7 text-[#949494] flex items-center gap-6 w-full">
                <p className="w-[22%]"> Employee Name</p>
                <p className="w-[20%]">Department</p>
                <p className="w-[15%]">Hours</p>
                <p className="w-[20%]">Total Month Fund</p>
                <p className="">Productivity</p>
            </div>
            {children}
        </div>
    )
}

export default Header