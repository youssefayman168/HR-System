import React from 'react'


type Notify = {
    img: string,
    type: string,
    info: string,
    name: string,
    status: string,
    date: string
}

const NotificationCompo = ({ img , type , info , name , status , date} : Notify) => {
  return (
    <div className='relative flex gap-5 bg-white p-3 ps-5 rounded-xl mb-4 '>
        <div className='img'>
            <img className='rounded-full w-[52px] h-[50px] object-cover' src={img} alt="" />
            <div style={{backgroundColor: type === "New Emplyee" && "#228656" || type === "Update Employees" && "#FFAC46" || type === "Delete Employees" && "#C71026" || type === "Office supplies requests" && "#224886" || type === "Read" && "#A4A4A4"   }} className='Type absolute w-[6px] h-[99px] top-0 left-0 rounded-tl-[20px] rounded-bl-[20px]'></div>
        </div>
        <div>
            <p className='font-[500]'>{status}</p>
            <h3 className='font-[500] text-[17px]'><span className='font-bold text-[17.8px] '>{name} </span> {info}</h3>
            <span className='text-[#898989] text-[14px]'>{date}</span>
        </div>
        <svg className='absolute top-3 right-5 cursor-pointer  ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 16L8 8M8 16L16 8" stroke="#80849D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  )
}

export default NotificationCompo