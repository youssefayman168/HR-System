import { Link } from 'react-router-dom'

type Drop = {
    text1? : string,
    text2? : string,
    text3? : string,
    text4? : string,
    text5? : string,
}
const DropDown = ({ text1 , text2 , text3 , text4 , text5 } : Drop) => {

  return (
    <>
        <ul className='DropDownTable duration-300 w-[225px] text-start bg-white shadow-xl rounded-[10px] border-[1px] opacity-0 invisible border-[#8F93AC] absolute left-[20px] top-[-20px] '>
            <li><Link to={""} className='hover:bg-[#e4effe] duration-300 block mb-2 m-3  py-2 ps-3 text-[black]'>{text1}</Link></li>
            <li><Link to={""} className='hover:bg-[#e4effe] duration-300 block mb-2 mx-2 py-2 ps-3 text-[black]'>{text2}</Link></li>
            <li><Link to={""} className='hover:bg-[#e4effe] duration-300 block mb-2 mx-2 py-2 ps-3 text-[black]'>{text3}</Link></li>
            <li><Link to={""} className='hover:bg-[#e4effe] duration-300 block mb-2 mx-2 py-2 ps-3 text-[black]'>{text4}</Link></li>
            <li><Link to={""} className='hover:bg-[#e4effe] duration-300 block mb-2 mx-2 py-2 ps-3 text-[black]'>{text5}</Link></li>
        </ul>
    </>
  )
}

export default DropDown