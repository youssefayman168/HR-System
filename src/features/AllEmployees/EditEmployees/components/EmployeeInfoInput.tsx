type IProps = {
    title: string,
    value: any,
    name?: string,
    onChange?: any,
    type: string,
    disabled?: boolean,
    inputStyle?: any
}

const EmployeeInfoInput = ({ title, value, name, onChange, type, disabled, inputStyle }: IProps) => {
    return (
        <div className="flex items-start flex-col mb-6 gap-2 flex-1">
            <p className="text-sm text-blackGrayColor font-bold capitalize">{title}</p>
            <input type={type} defaultValue={value} disabled={disabled ? true : false} onChange={onChange} name={name} className={`border border-[#BDBDBD] py-2 px-3 rounded-[10px] focus:outline-none w-full ${inputStyle}`} />
        </div>

    )
}

export default EmployeeInfoInput