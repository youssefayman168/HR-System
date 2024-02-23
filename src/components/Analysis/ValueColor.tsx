import { CSSProperties } from "react"


type Iprops = {
    aftColor: string ,
    name: string ,
    val?: string ,
    styleName? : CSSProperties
}

const ValueColor = ( { aftColor , name , val , styleName } : Iprops ) => {
  return (
    <>
    <p style={styleName} className={`relative after:absolute after:bg-[${aftColor === 'design' ? "#343C6A" : aftColor === 'managment' ? "#A1E3CB" : aftColor === 'hr' ? '#7694BA' : aftColor === 'other' ? '#1814F3' : aftColor === 'expand' ? '#7694BA' : aftColor === 'profit' ? '#343C6A' : '' }] after:top-[50%] after:translate-y-[-50%] after:w-[6px] after:h-[6px] after:rounded-full after:left-[-12px] w-[100px]`}>{name}</p>
    <p>{val}</p>
    </>
  )
}

export default ValueColor