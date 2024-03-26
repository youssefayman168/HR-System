import ViewInsightStatsBox from '@/features/Reports/components/ViewInsightStatsBox'
import RequestsTableElm from './RequestsTableElm'
import { useQuery } from '@tanstack/react-query'
import Loading from '../Loading/Loading'
import getAllRequests from '@/features/requests/all/services/getAllRequests'

const AnnualsTab = () => {

  // Get All Requests
  const { data: allRequests, isLoading } = useQuery<any>({
    queryKey: ["getAllRequests"],
    queryFn: getAllRequests,
  });

  return (
    <>
      {isLoading ?
        <Loading />
        :
        <div>
          <div className='flex gap-5 mt-5'>
            <ViewInsightStatsBox title="Total Projects" value={24} />
            <ViewInsightStatsBox title="Total Projects" value={24} />
            <ViewInsightStatsBox title="Total Projects" value={24} />
          </div>
          <div className='flex gap-5 mt-5 w-[66%] '>
            <ViewInsightStatsBox title="Total Projects" value={24} />
            <ViewInsightStatsBox title="Total Projects" value={24} />
          </div>
          <div className='border-[1px] border-[#E0E0E0] p-4 rounded-[12px] mt-5'>
            <p className='text-[20px] font-[500] mb-5 text-[#161E54]'>Requests</p>
            <div className='Table'>

              <div className="Header py-5 mb-3 px-4 bg-[#FAFAFA] rounded-tr-[6px] rounded-tl-[6px] flex items-center gap-6 w-full">
                <p className="w-[26%]">Request Type</p>
                <p className="w-[26%] ">Date</p>
                <p className="w-[26%]">Action</p>
              </div>

              <div className='Body h-[300px] overflow-y-auto'>
                {allRequests.map(({ id, type, created_at, status }: any) => {
                  return <RequestsTableElm
                    key={id}
                    text1={type}
                    text2={created_at}
                    text3={status}
                    link={`/requests/viewRequests/${id}`}
                  />
                })}
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default AnnualsTab