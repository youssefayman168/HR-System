
const PayslipsTabElm = ({title , text} : {title: string , text:string}) => {
  return (
    <div>
        <p className='text-[#0E2354] text-[18px] font-[600] mb-3'>{title}</p>
        <p className='text-[#676E7E] w-[600px]'>{text}</p>
    </div>
  )
}

export default PayslipsTabElm