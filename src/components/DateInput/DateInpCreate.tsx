import React, { CSSProperties, useRef, useState } from 'react'
import Date from '../../assets/CreateProjects/Date.svg'

type DateInput = {
    
    when? : string ,
    styles? : CSSProperties

}


const DateInpCreate = ({ when , styles } : DateInput ) => {
    let wh = `${when === "From" ? "From" : when === "To" ? "To" : when === "start" ? "Starting Date" : when === "expire" ? "Expiry date" : "" }`

    const dateInpT = useRef<HTMLInputElement>(null);
    const [dateT, setDateT] = useState<any>(wh)

  const dataInputToOnChange = () => {
    if (dateInpT.current) {
      setDateT(dateInpT.current.value);
    }
  };




  return (
    <div style={styles} className="relative w-full border-2 rounded-[10px]">
        <input onChange={dataInputToOnChange} ref={dateInpT} className="border-2 px-[17.6px] rounded-[10px] absolute inset-0 z-[99] opacity-0 " type="date"  />
        <div className=" p-4 flex items-center justify-between ">
        <p>{dateT}</p>
        <img src={Date} alt="Date" />
        </div>
    </div>
  )
}

export default DateInpCreate