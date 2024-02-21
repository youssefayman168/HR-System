
type IProps = {
    text: string,
    icon?: any,
    onClick?: Function
}

const SecondaryBorderBtn = ({ text, icon, onClick }: IProps) => {
    return (
        <button className='p-[10px] rounded-md border border-primary text-primary flex items-stretch gap-[10px]' onClick={() => onClick}>
            <img className="w-[20px] h-[20px]" src={icon} alt="icon" />
            {text}
        </button>
    )
}

export default SecondaryBorderBtn