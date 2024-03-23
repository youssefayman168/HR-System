import { CSSProperties } from "react"


type Iprops = {
  colorStyle: string,
  name: string,
  val?: string,
  styleName?: CSSProperties
}

const ValueColor = ({ colorStyle, name, val, styleName }: Iprops) => {
  return (
    <>
      <p style={styleName} className={`w-[30%] relative`}>
        {name}
        <p className={`absolute top-[50%] translate-y-[-50%] w-[6px] h-[6px] rounded-full left-[-12px]`} style={{ backgroundColor: colorStyle }}></p>
      </p>
      <p>{val}</p>
    </>
  )
}

export default ValueColor