import BaseLayout from '@/layouts/BaseLayout/BaseLayout'
import ArrowLeft from '../../assets/CreateProjects/ArrowLeft.svg'
import { BiChevronRight } from 'react-icons/bi';
import { pathList } from '@/routes/routesPaths';
import { Link, useNavigate, useParams } from 'react-router-dom';
import People from '@/components/ViewPage/People';
import EmployeeInfo from '@/features/AllEmployees/ViewEmployees/components/EmployeeInfo';
import { useQuery } from '@tanstack/react-query';
import getRequestDetails from '@/features/requests/details/services/getRequestDetails';
import Loading from '@/components/Loading/Loading';
import acceptRequest from '@/features/requests/details/services/acceptRequest';
import rejectRequest from '@/features/requests/details/services/rejectRequest';

const ViewReq = () => {

  const navigate = useNavigate()

  const { id } = useParams()

  // Get Request Details
  const { data, isLoading } = useQuery({
    queryKey: ['getRequestDetails', id],
    queryFn: () => getRequestDetails(id)
  })

  console.log(data)

  return (
    <BaseLayout>
      {isLoading ?
        <Loading />
        :
        <div className='p-6'>
          <Link to={pathList.requests} className="flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold ">
            <img src={ArrowLeft} alt="ArrowLeft" />
            Requests
            <BiChevronRight />
            View Requests
          </Link>
          <div className='bg-white pt-7 pb-3 px-10 mt-6 rounded-[15px] h-[calc(100vh-184px)] overflow-y-auto HideScroll '>

            <div>
              <div className='flex items-center justify-between mb-8'>
                <div>
                  <p className='text-[24px] font-[600] text-[#0E2354]'>{data?.type} Request From {data?.employee?.name}</p>
                </div>
                <div className='bg-white border-[1px] border-[#F5F6F7] rounded-[10px] flex items-center gap-4 px-4 py-[6px] w-[240px]'>
                  <div>
                    <img className='w-[34px] h-[34px] rounded-full object-cover' src={`https://sec-system-apis.up.railway.app${data?.employee?.image}`} alt="person" />
                  </div>
                  <div>
                    <p className='text-[#091E42] font-[600] text-[15px] '>{data?.employee?.name}</p>
                    <p className="text-[#909DAD] text-[15px] ">{data?.employee?.position}</p>
                  </div>
                </div>
              </div>
              <div className='flex items-start justify-between'>
                <div className='w-[630px] xxxl:w-[670px] max-xxl:w-[500px] '>
                  <p className='text-[#091E42] text-[20px] font-[500] mb-3'>Notes From The Employee</p>
                  <p>{data?.comment_from_the_employee}</p>
                  <div className='mt-16 mb-7'>
                    <div className='border-b-[1px] border-[#EAECF0] flex items-center gap-32'>
                      <EmployeeInfo title='Employee ID:' value={data?.employee?.id} />
                      <EmployeeInfo title='Date' value={data?.created_at} />
                    </div>
                    <div className='pt-5 pb-2 border-b-[1px] border-[#EAECF0] flex items-center gap-32'>
                      <div className="flex items-start flex-col mb-6">
                        <p className="text-sm text-grayColor font-bold capitalize mb-1">Status</p>
                        <p
                          className={`relative text-[15px] font-semibold 
                        ${data?.status === 'accept' ? 'bg-[#ECFDF3]' :
                              data?.status === 'reject' ? 'bg-[#FFF2EA]' :
                                data?.status === 'referred' ? 'bg-[#FFEFC4]'
                                  : ''} 
                        ${data?.status === 'accept' ? 'text-[#027A48]' :
                              data?.status === 'reject' ? 'text-[#F15046]' :
                                data?.status === 'referred' ? 'text-[#D99D00]'
                                  : ''} after:absolute 
                         ${data?.status === 'accept' ? 'after:bg-[#12B76A]'
                              : data?.status === 'reject' ? 'after:bg-[#F15046]'
                                : data?.status === 'referred' ? 'after:bg-[#D99D00]'
                                  : ''} left-[-5px] py-[3px] px-3 ps-5 after:w-[8px] after:h-[8px] after:rounded-full after:top-[50%] after:translate-y-[-50%] after:left-[7px] rounded-[15px] `}>{data?.status}</p>
                      </div>
                      <EmployeeInfo title='Type' value={data?.type} />
                    </div>
                  </div>
                  <div>
                    {
                      data?.status === 'inactive' ?
                        <div>
                          <p className='text-[#091E42] font-[500] text-[20px] mb-4'>Take Action</p>
                          <p className='w-[500px] xxxl:w-[600px] max-xxl:w-[400px] bg-red-40 '>Once you take the action the employees will be notified and the action can’t be undone </p>
                          <div className='Btns flex items-center gap-32 mt-8'>
                            <button
                              className='text-[#224886] text-[18px] border-[1px] border-[#1F4690] w-[100%] text-center py-3 rounded-[10px] '
                              onClick={() => {
                                rejectRequest(id)
                                navigate(pathList.requests)
                              }}>
                              Reject
                            </button>
                            <button
                              className='text-[#224886] text-[18px] border-[1px] border-[#1F4690] w-[100%] text-center py-3 rounded-[10px]'
                              onClick={() => {
                                acceptRequest(id)
                                navigate(pathList.requests)
                              }}>
                              Accept
                            </button>
                            <button
                              className='text-[#224886] text-[18px] border-[1px] border-[#1F4690] w-[100%] text-center py-3 rounded-[10px]'
                              onClick={() => ''}>
                              Refer
                            </button>
                          </div>
                        </div>
                        :
                        data?.status === 'referred' ?
                          <div>
                            <p className='text-[20px] text-[#15294B] font-[600] mb-3'>Referred To:</p>
                            <div className='flex items-center flex-wrap gap-x-3 gap-y-4 '>
                              <People name={data?.hr?.name} photo={`https://sec-system-apis.up.railway.app${data?.hr?.image}`} />
                            </div>
                          </div>
                          :
                          ''
                    }
                  </div>
                </div>
                <div className='mt-10'>
                  <p className='text-[18px] text-[#091E42] font-[600] mb-6'>Additional Notes</p>
                  <textarea value={data?.comment_from_the_hr} className='border-[1px] p-5 border-[#eaebeb] rounded-[15px] outline-none w-[480px] h-[500px]' disabled></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </BaseLayout>
  )
}

export default ViewReq