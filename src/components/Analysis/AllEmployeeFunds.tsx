import increase from '../../assets/Analysis/increase.svg'
import decrease from '../../assets/Analysis/decrease.svg'

type Iprops = {
    employeeImg: any ,
    Department: string ,
    Hours: string ,
    TotalMonthFund: string ,
    Productivity: string ,
    EmpolyeeName: string ,
    type: string
}

const AllEmployeeFunds = ( { employeeImg , EmpolyeeName , Department , Hours , TotalMonthFund , Productivity , type } : Iprops ) => {
  return (
    <div className="py-6 gap-6 flex items-center">
        <div className="w-[22%] flex items-center gap-3">
            <img src={employeeImg} alt="Employee Image" className='w-[32px] h-[32px] object-cover rounded-full' />
            <p className='font-[500]'>{EmpolyeeName}</p>
        </div>
        <p className="w-[20%]">{Department}</p>
        <p className="w-[15%]">{Hours}</p>
        <p className="w-[20%]">{TotalMonthFund}</p>
        {
            type === "increase" ? 
            <p className='flex items-center gap-2'><img src={increase} alt="increase" />  {Productivity}</p>
            :
            type === "decrease" ?
            <p className='flex items-center gap-2'><img src={decrease} alt="decrease" />  {Productivity}</p>
            :
            <p>{Productivity}</p>
        }
    </div>
  )
}

export default AllEmployeeFunds