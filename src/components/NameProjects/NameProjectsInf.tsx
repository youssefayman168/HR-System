import { CSSProperties } from 'react'

type NameProj = {
  Name: string,
  Value: string,
  styleName?: CSSProperties,
  styleVal?: CSSProperties,
  styleDiv?: CSSProperties
}
const NameProjectsInf = ({ Name, Value, styleName, styleVal, styleDiv }: NameProj) => {
  return (
    <div style={styleDiv} className='flex items-center gap-3 mb-3'>
      <p style={styleName} className='text-[#9295AB] text-[21px] '>{Name}</p>
      <p style={styleVal} className='text-[#101828] text-[18px] font-[600] flex-1 '>{Value}</p>
    </div>
  )
}

export default NameProjectsInf