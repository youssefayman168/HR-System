import { CSSProperties } from "react"

type IProps = {
    text: string,
    icon?: any,
    onClick?: any,
    style?: CSSProperties,
    type?: any
}

const SecondaryBorderBtn = ({ text, icon, onClick, style }: IProps) => {
    return (
        <button className='p-[10px] rounded-md border border-primary text-primary flex items-stretch gap-[10px]' style={style} onClick={onClick}>
            {icon && <img className="w-[20px] h-[20px]" src={icon} alt="icon" />}
            {text}
        </button>
    )
}

export default SecondaryBorderBtn