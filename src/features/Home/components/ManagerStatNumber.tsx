type IProps = {
    uint: string,
    value: number
}

const ManagerStatNumber = ({ uint, value }: IProps) => {
    return (
        <div className="flex items-center flex-col gap-1">
            <p className="text-sm font-bold text-grayColor">{uint}</p>
            <p className="text-2xl text-primary font-bold">{value}</p>
        </div>
    )
}

export default ManagerStatNumber