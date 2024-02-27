import BaseLayout from '@/layouts/BaseLayout/BaseLayout'
import ArrowLeft from '../../assets/CreateProjects/ArrowLeft.svg'
import { BiChevronRight } from 'react-icons/bi';
import { pathList } from '@/routes/routesPaths';
import { Link } from 'react-router-dom';
import testImg from "../../assets/testImg.jpg";
import People from '@/components/ViewPage/People';
import EmployeeInfo from '@/features/AllEmployees/ViewEmployees/components/EmployeeInfo';

const ViewReq = () => {


    let type;
    if(sessionStorage.Requests) {
        type = JSON.parse(sessionStorage.Requests)
    }

  return (
    <BaseLayout>
        <div className='p-6'>
        <Link to={pathList.requests} className="flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold ">
          <img src={ArrowLeft} alt="ArrowLeft" />
          Requests
          <BiChevronRight />
          View Requests
        </Link>
            <div className='bg-white pt-7 pb-3 px-10 mt-6 rounded-[15px] h-[calc(100vh-184px)] overflow-y-auto HideScroll '>

                {
                    type?.map((inf : any , index : number ) => {
                        return (
                            <div key={index} >
                                <div className='flex items-center justify-between mb-8'>
                                    <div>
                                        <p className='text-[24px] font-[600] text-[#0E2354]'>{inf.reqType} Request From {inf.name}</p>
                                        <p className='mt-1 text-[#676E7E]'>Lorem ipsum dolor sit amet consectetur. Cursus in.</p>
                                    </div>
                                    <div className='bg-white border-[1px] border-[#F5F6F7] rounded-[10px] w-fit flex items-center gap-4 px-4 py-[6px]  '>
                                        <div>
                                            <img className='w-[34px] h-[34px] rounded-full object-cover' src={inf.photo} alt="person" />
                                        </div>
                                        <div>
                                            <p className='text-[#091E42] font-[600] text-[15px] '>{inf.name}</p>
                                            <p className="text-[#909DAD] text-[15px] ">Reporting manager</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-start justify-between'>
                                    <div className='w-[630px] xxxl:w-[670px] max-xxl:w-[500px] '>
                                        <p className='text-[#091E42] text-[20px] font-[500] mb-3'>Notes From The Employee</p>
                                        <p>Responsible for driving revenue growth by identifying and pursuing new business opportunities, as well as maintaining relationships with existing clients. working closely with customers to understand their needs and provide solutions that meet or exceed their expectations, while also achieving the company's sales goals.</p>
                                        <div className='mt-16 mb-7'>
                                            <div className='border-b-[1px] border-[#EAECF0] flex items-center gap-32'>
                                                <EmployeeInfo title='Employee ID:' value={inf.id} />
                                                <EmployeeInfo title='Date' value={inf.date} />
                                            </div>
                                            <div className='pt-5 pb-2 border-b-[1px] border-[#EAECF0] flex items-center gap-32'>
                                                <div className="flex items-start flex-col mb-6">
                                                    <p className="text-sm text-grayColor font-bold capitalize">Status</p>
                                                    <p className={`relative text-[15px] font-semibold ${inf.status === 'Active' ? 'bg-[#ECFDF3]' : inf.status === 'Declined' ? 'bg-[#FFF2EA]' : inf.status === 'Referred' ? 'bg-[#FFEFC4]' : ''  } ${inf.status === 'Active' ? 'text-[#027A48]' : inf.status === 'Declined' ? 'text-[#F15046]' : inf.status === 'Referred' ? 'text-[#D99D00]' : ''  } after:absolute ${inf.status === 'Active' ? 'after:bg-[#12B76A]' : inf.status === 'Declined' ? 'after:bg-[#F15046]' : inf.status === 'Referred' ? 'after:bg-[#D99D00]' : ''  } left-[-5px] py-[3px] px-3 ps-5 after:w-[8px] after:h-[8px] after:rounded-full after:top-[50%] after:translate-y-[-50%] after:left-[7px] rounded-[15px] `}>{inf.status}</p>
                                                </div>                                                
                                                <EmployeeInfo title='Type' value={inf.reqType} />
                                            </div>
                                        </div>
                                        <div>
                                            {
                                                inf.status === 'Active' ?
                                                <div>
                                                    <p className='text-[#091E42] font-[500] text-[20px] mb-4'>Take Action</p>
                                                    <p className='w-[500px] xxxl:w-[600px] max-xxl:w-[400px] bg-red-40 '>Once you take the action the employees will be notified and the action can’t be undone </p>
                                                    <div className='Btns flex items-center gap-32 mt-8'>
                                                        <button className='text-[#224886] text-[18px] border-[1px] border-[#1F4690] w-[100%] text-center py-3 rounded-[10px]  '>Reject</button>
                                                        <button className='text-[#224886] text-[18px] border-[1px] border-[#1F4690] w-[100%] text-center py-3 rounded-[10px]  '>Accept</button>
                                                        <button className='text-[#224886] text-[18px] border-[1px] border-[#1F4690] w-[100%] text-center py-3 rounded-[10px]  '>Reffer</button>
                                                    </div>
                                                    
                                                </div>
                                                :
                                                inf.status === 'Referred' ?
                                                <div>
                                                    <p className='text-[20px] text-[#15294B] font-[600] mb-3'>Referred To:</p>
                                                    <div className='flex items-center flex-wrap gap-x-3 gap-y-4 '>
                                                        <People name='James Muriel' photo={testImg} />
                                                        <People name='James Muriel' photo={testImg} />
                                                    </div>
                                                </div>
                                                :
                                                ''
                                                
                                            }
                                        </div>

                                    </div>
                                    <div className='mt-10'>
                                        <p className='text-[18px] text-[#091E42] font-[600] mb-6'>Additional Notes</p>
                                        <textarea value={'Lorem ipsum dolor sit amet consectetur. Nullam et nulla in mi elit eu pellentesque. Sed pellentesque volutpat adipiscing erat. Scelerisque sit tellus non dolor elit id rhoncus. Adipiscing nibh quis malesuada aliquet in malesuada. Sem vitae iaculis scelerisque vitae. Tortor eget vulputate in lectus nibh volutpat gravida cursus. Quam posuere enim consequat consequat massa. Tortor ac amet purus porttitor cursus eget vitae pretium. Arcu dictumst tellus nulla mauris nisi placerat ipsum dis. Mauris vulputate aliquet amet sit sollicitudin sed ut. Ac massa dolor ullamcorper at. Turpis.'} className='border-[1px] p-5 border-[#eaebeb] rounded-[15px] outline-none w-[480px] h-[500px] '></textarea>
                                    </div>
                                </div>
                                {
                                inf.status === 'Active' ?
                                    <div className='Sent text-white flex items-center gap-10 mx-auto w-fit mt-16 mb-6'>
                                        <button className='bg-[#224886] py-[10px] w-[120px] text-center rounded-[6px] '>Cancel</button>
                                        <button className='bg-[#224886] py-[10px] w-[120px] text-center rounded-[6px] '>Send</button>
                                    </div>
                                :
                                ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </BaseLayout>
  )
}

export default ViewReq