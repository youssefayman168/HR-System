
const ProjectsElm = ({text , time} : {text : string , time : string}) => {
  return (
    <div className='bg-[#ececec] font-[500] px-5 py-3 rounded-[6px] mb-3'>
        <p className='text-[18px] mb-1'>{text}</p>
        <p className='text-[#686868] text-[14px]'>{time}</p>
    </div>
  )
}

export default ProjectsElm