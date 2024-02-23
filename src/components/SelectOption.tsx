import ArrowBottom from '@/assets/CreateProjects/ArrowBottom.svg'

const SelectOption = ({ children, label }: any) => {
    return (
        <div className="w-full mb-6">
            <label className='text-sm text-blackGrayColor font-bold capitalize' htmlFor="mySelect">{label}</label>
            <div className="Select-Container relative w-full mt-2">
                <select id="mySelect" className=" py-2 px-3 border-[1px] border-[#ccc] w-[100%] appearance-none outline-none rounded-[10px] ">
                    {children}
                </select>
                <img className="absolute top-[50%] translate-y-[-50%] right-4" src={ArrowBottom} alt="ArrowBottom" />
            </div>
        </div>
    )
}

export default SelectOption