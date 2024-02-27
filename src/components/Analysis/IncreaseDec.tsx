

type Iprops = {
    title: string ,
    price: string ,
    lastYear: string ,
    arrowImgSm: any ,
    arrowImg: any ,
    type: string
}

const IncreaseDec = ( { title , price , lastYear , arrowImgSm , arrowImg , type } : Iprops ) => {
  return (
    <>
        <p>{title}</p>
        <div className='flex items-center justify-between'>
            <div>
                <p className='font-[700] text-[27px] mb-1'>${price}</p>
                <p className='font-[500] text-[15px] '>${lastYear} last year</p>
            </div>
            <div className='status'>
                <p style={{background: type === "increase" ? "#DCFCE7" : type === "decrease" ? "#FBD1D1" : "" , color: type === 'increase' ? "#22C55E" : type === 'decrease' ? '#A00' : "" }} className='flex items-center rounded-lg text-[14px] absolute top-3 right-8 w-fit px-2 '>
                    <img src={arrowImgSm} alt="IncreaseTOP" />
                    3%
                </p>
                <img className="max-xxl:me-2 xxl:me-3 xxxl:me-5" src={arrowImg} alt="IncreaseLine" />
            </div>
        </div>
    </>
  )
}

export default IncreaseDec