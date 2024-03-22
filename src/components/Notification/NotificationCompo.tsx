
type Notify = {
  type: string,
  content: string,
  status: string,
  date: string,
  deleteAction: any
}

const NotificationCompo = ({ type, content, status, date, deleteAction }: Notify) => {
  return (
    <div className='relative flex gap-5 bg-white p-3 ps-5 rounded-xl mb-4 '>
      <div className='img'>
        <div style={{
          backgroundColor:
            type === "new" ? "#228656" :
              type === "update" ? "#FFAC46" :
                type === "delete" ? "#C71026" :
                  type === "office" ? "#224886" :
                    type === "read" ? "#A4A4A4" :
                      ""
        }}
          className='Type absolute w-[6px] h-full top-0 left-0 rounded-tl-[20px] rounded-bl-[20px]'></div>
      </div>
      <div>
        <p className='font-[500]'>{status}</p>
        <h3 className='font-[500] text-[17px]'>{content}</h3>
        <span className='text-[#898989] text-[14px]'>{date}</span>
      </div>
      <button onClick={() => deleteAction?.()}>
        <svg className='absolute top-3 right-5 cursor-pointer  ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 16L8 8M8 16L16 8" stroke="#80849D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </button>
    </div>
  )
}

export default NotificationCompo