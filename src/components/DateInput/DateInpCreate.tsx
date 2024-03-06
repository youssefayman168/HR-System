import { CSSProperties, useRef, useState } from 'react'
import Date from '../../assets/CreateProjects/Date.svg'

type DateInput = {

  when?: string,
  label?: string,
  styles?: CSSProperties
  styleLabel?: CSSProperties,
  name?: string
  onChange?: any

}
const DateInpCreate = ({ when, label, styleLabel, styles, name, onChange }: DateInput) => {

  const dateInpT = useRef<HTMLInputElement>(null);
  const [dateT, setDateT] = useState<any>(`${when}`)

  const dataInputToOnChange = () => {
    if (dateInpT.current) {
      setDateT(dateInpT.current.value);
    }
  };

  return (
    <main className='flex-1 w-full'>
      <label style={styleLabel} className='mb-2 mt-3 hidden text-lg font-medium'>{label}</label>
      <div style={styles} className="relative w-full border border-[#BDBDBD] rounded-[10px]">
        <input onChange={(e)=> {
          onChange(e)
          dataInputToOnChange()
        }} ref={dateInpT} className="border-2 px-[17.6px] rounded-[10px] absolute inset-0 z-[99] opacity-0 " type="date" name={name}/>
        <div className=" p-4 flex items-center justify-between ">
          <p className='text-[#737373]'>{dateT}</p>
          <img src={Date} alt="Date" />
        </div>
      </div>
    </main>
  )
}

export default DateInpCreate