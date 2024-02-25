
type Iprops = {
    photo : string ,
    name : string
}

const People = ({ name , photo} : Iprops ) => {
  return (
    <div className='bg-[#F5F6F7] rounded-[16px] w-fit flex items-center gap-3 px-3 py-2  '>
        <img className='w-[22px] h-[22px] rounded-full object-cover' src={photo} alt="person" />
        <p className='text-[#091E42] font-[600] text-[15px] '>{name}</p>
    </div>
  )
}

export default People