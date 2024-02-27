import ManagerStatNumber from "./ManagerStatNumber"
import testImg2 from '@/assets/home/testImg2.svg'

const ManagerInfo = () => {
    return (
        <div className="text-center">
            <div className="bg-[#F4F7FE] rounded-full w-[130px] h-[130px] flex items-center justify-center mx-auto">
                <img src={testImg2} alt="" className="w-[100px] h-[100px] rounded-full" />
            </div>
            <p className="mt-8 text-primary font-bold text-2xl">Mustafa Mousa</p>
            <div className="flex items-center gap-10 mt-8">
                <ManagerStatNumber uint="projects" value={586} />
                <ManagerStatNumber uint="Sub Tasks" value={95} />
                <ManagerStatNumber uint="Hours" value={940} />
            </div>
        </div>
    )
}

export default ManagerInfo