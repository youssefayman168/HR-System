
const HomeTable = ({ children }: any) => {
    return (
        <main className="w-full p-8 h-full">
            <div className="flex items-center pb-6 border-b border-b-[#DFE5EF] mb-6">
                <p className="w-[30%] text-start">Employee</p>
                <p className="w-[20%] text-center">Projects</p>
                <p className="w-[20%] text-center">Sub task</p>
                <p className="w-[20%] text-center">Hours</p>
            </div>
            <div className=" h-full overflow-auto HideScroll">
                {children}
            </div>
        </main>
    )
}

export default HomeTable