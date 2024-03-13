import { Link } from "react-router-dom"

type Iprops = {
    photo: any,
    name: string,
    reqType: string,
    id: number,
    date: string,
    role: string,
    status: string,
    onClick?: any,
    src: any
}
const Elm = ({ photo, name, reqType, id, date, role, status, onClick, src }: Iprops) => {
    return (
        <div className='Element border-b-[1px] border-[#D9D9DB] flex items-center py-[31px] px-6 gap-6 font-[500] w-full'>
            <div className='w-[18%] flex items-center gap-2 mx-auto'>
                <img className='w-[30px] h-[30px] rounded-full object-cover' src={`https://sec-system-apis.up.railway.app${photo}`} alt="Photo" />
                <p>{name}</p>
            </div>
            <p className='w-[18%]'>{reqType}</p>
            <p className='w-[15%] text-center'>{id}</p>
            <p className='w-[15%]'>{date}</p>
            <p className='w-[15%]'>{role}</p>
            <div className='w-[8%]'>
                <p className='text-[#063C84] text-center w-[100px] border-[1px] border-[#224886] py-[5px] px-4 rounded-[6px]'>
                    {status}
                </p>
            </div>
            <div className='w-[15%]'>
                <Link onClick={onClick} to={`/requests/viewRequests/${src}`} className='text-[#063C84] bg-[#CCE2FF] py-[9px] px-[27px] rounded-[6px]'>
                    View
                </Link>
            </div>
        </div>
    )
}

export default Elm