type Iprops = {
    text1: string ,
    text2: string ,
    text3: string ,
    text4: string ,
}

const RequestsTableElm = ({ text1 , text2 , text3 , text4 } : Iprops) => {
  return (
    <div className='Header mb-3 py-5 px-4 bg-[#FAFAFA] rounded-[6px] flex items-center gap-6 w-full '>
        <p className='w-[26%]'>{text1}</p>
        <p className='w-[26%]'>{text2}</p>
        <p className='w-[26%]'>{text3}</p>
        <button className='flex-1'>{text4}</button>
    </div>
  )
}

export default RequestsTableElm