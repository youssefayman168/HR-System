import IncreaseLine from '@/assets/Analysis/IncreaseLine.svg'
import DecreaseLine from '@/assets/Analysis/DecreaseLine.svg'
import DecreaseBTM from '../../assets/Analysis/DecreaseBTM.svg'
import IncreaseTOP from '../../assets/Analysis/IncreaseTOP.svg'

type IProps = {
    title: string,
    price: string,
    subNumber: any,
    type: string,
    rate: any
}

const IncreaseDec = ({ title, price, subNumber, type, rate }: IProps) => {
    return (
        <>
            <p>{title}</p>
            <div className='flex items-center justify-between'>
                <div>
                    <p className='font-[700] text-[27px] mb-1'>{price}</p>
                    <p className='font-[500] text-[15px] '>{subNumber}</p>
                </div>
                <div className='status'>
                    <p style={{ background: type === "increase" ? "#DCFCE7" : type === "decrease" ? "#FBD1D1" : "", color: type === 'increase' ? "#22C55E" : type === 'decrease' ? '#A00' : "" }} className='flex items-center rounded-lg text-[14px] absolute top-3 right-8 w-fit px-2 '>
                        {type === 'increase' ?
                            <img src={IncreaseTOP} alt="IncreaseTOP" />
                            :
                            <img src={DecreaseBTM} alt="IncreaseTOP" />
                        }
                        {rate}%
                    </p>
                    {type === 'increase' ?
                        <img className="max-xxl:me-2 xxl:me-3 xxxl:me-5" src={IncreaseLine} alt="IncreaseLine" />
                        :
                        <img className="max-xxl:me-2 xxl:me-3 xxxl:me-5" src={DecreaseLine} alt="IncreaseLine" />
                    }
                </div>
            </div>
        </>
    )
}

export default IncreaseDec