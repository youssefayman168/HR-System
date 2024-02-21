import React from 'react'


type NameProj = {
    Name: string , 
    Value: string ,
}

const NameProjectsInf = ({ Name , Value } : NameProj ) => {
  return (
    <div className='flex items-center gap-3 mb-3 '>
        <p className='text-[#9295AB] text-[21px] w-[170px] '>{Name}</p>
        <p className='text-[#101828] text-[18px] font-[600] '>{Value}</p>
    </div>
  )
}

export default NameProjectsInf