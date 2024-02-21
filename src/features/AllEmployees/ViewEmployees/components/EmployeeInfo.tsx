type IProps = {
    title: string,
    value: string
}

const EmployeeInfo = ({ title, value }: IProps) => {
    return (
        <div className="flex items-start flex-col mb-6">
            <p className="text-sm text-grayColor font-bold capitalize">{title}</p>
            <p className="text-lg text-blackGrayColor font-semibold">{value}</p>
        </div>
    )
}

export default EmployeeInfo