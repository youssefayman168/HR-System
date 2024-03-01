type IProps = {
    title: string,
    time: string
}

const ProjectTime = ({ title, time }: IProps) => {
    return (
        <div className="bg-[#FAFAFA] border border-[#E0E0E0] rounded-md px-4 py-3 mt-3">
            <p className="font-semibold text-lg">{title}</p>
            <p className="text-sm text-[#686868] mt-2">{time}</p>
        </div>
    )
}

export default ProjectTime