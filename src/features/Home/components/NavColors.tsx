
type IProps = {
    bgColor: string,
    text: string
}

const NavColors = ({ bgColor, text }: IProps) => {
    return (
        <div className='flex items-center gap-2'>
            <div className="rounded-full w-[14px] h-[14px]" style={{ backgroundColor: bgColor }}></div>
            <p className="text-[18px] text-grayColor">{text}</p>
        </div>
    )
}

export default NavColors