import { Link } from "react-router-dom"

type Iprops = {
  text1: string,
  text2: string,
  text3: string,
  link: string,
}

const RequestsTableElm = ({ text1, text2, text3, link }: Iprops) => {
  return (
    <div className='Header mb-3 py-5 px-4 bg-[#FAFAFA] rounded-[6px] flex items-center gap-6 w-full '>
      <p className='w-[26%]'>{text1}</p>
      <p className='w-[26%]'>{text2}</p>
      <p className='w-[26%]'>{text3}</p>
      <Link to={link} className='flex-1'>View</Link>
    </div>
  )
}

export default RequestsTableElm