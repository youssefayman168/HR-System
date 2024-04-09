import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import download from "../../assets/Projects/Download.svg";
import Elm from "../../components/Requests/Elm";
import BtnCreate from "../../components/Buttons/BtnCreate";
import { useMutation, useQuery } from "@tanstack/react-query";
import getAllRequests from "@/features/requests/all/services/getAllRequests";
import { pathList } from "@/routes/routesPaths";
import plus from "@/assets/plus.svg";
import getHrRequests from "@/features/requests/all/services/getHrRequests";
import getMyRequests from "@/features/requests/all/services/getMyRequests";
import getProfileData from "@/features/profile/services/getProfileData";
import { useEffect, useState } from "react";

/**
 * if super admin -> get all requests
 * if HR -> get HR's requests
 * if Employee -> get my requests
 */

const Requests = () => {
  const [data, setData] = useState([]);

  const { data: allRequests, mutate: getRequests } = useMutation({
    mutationFn: () => getAllRequests(),
    onSuccess: (data) => setData(data),
  });

  const { data: hrRequests, mutate: fetchHrRequests } = useMutation({
    mutationFn: () => getHrRequests(),
    onSuccess: (data) => setData(data),
  });

  const { data: myRequests, mutate: fetchMyRequests } = useMutation({
    mutationFn: () => getMyRequests(),
    onSuccess: (data) => setData(data),
  });

  const { data: profileData, isLoading: profileLoading } = useQuery<any>({
    queryKey: ["getProfileData"],
    queryFn: getProfileData,
  });

  useEffect(() => {
    if (profileData?.is_superuser) {
      return getRequests();
    } else if (profileData?.role == "HR") {
      return fetchHrRequests();
    } else if (profileData?.role == "Employee") {
      return fetchMyRequests();
    }
  }, [profileLoading]);
  console.log(profileData);

  console.log(data);

  // const [currentPage, setCurrentPage] = useState(0)
  // const [filterDataReq, setFilterDataReq] = useState<any>()
  // const itemsNum = 6

  // useEffect(() => {
  //     setFilterDataReq(
  //         data?.filter((_: any, index: number) => {
  //             return (index >= currentPage * itemsNum) && (index < (currentPage + 1) * itemsNum);
  //         })
  //     );
  // }, [currentPage]);

  return (
    <BaseLayout>
      <div className='p-6 pb-3'>
        <div className='flex justify-between'>
          <p className='text-[#224886] text-[25px] font-bold '>Requests</p>
          <BtnCreate
            text='Create Request'
            icon={plus}
            path={pathList.createRequest}
          />
        </div>
        <div className='Table bg-white rounded-[15px] w-full mt-6'>
          <div className='Header bg-primary py-7 rounded-tl-[15px] rounded-tr-[15px] px-6 text-white flex items-center gap-6 w-full'>
            <p className='w-[18%]'>Employee Name</p>
            <p className='w-[18%]'>Request Type</p>
            <p className='w-[15%] '>Employee ID</p>
            <p className='w-[15%] '>Date</p>
            <p className='w-[15%]'>Role</p>
            <p className='w-[8%]'>Status</p>
            <p className='w-[15%] '>Action</p>
          </div>
          <div className='Body w-full h-[calc(100vh-385px)] HideScroll overflow-y-auto '>
            {data?.map(({ employee, type, status, id }: any) => {
              const { image, name, hiring_date, role } = employee;
              return (
                <Elm
                  key={id}
                  photo={image}
                  name={name}
                  reqType={type}
                  id={id}
                  date={hiring_date}
                  role={role}
                  status={status}
                  src={id}
                />
              );
            })}
          </div>
          <div className='flex items-center justify-between px-6'>
            {/* <div>
                            <ReactPaginate
                                containerClassName={"pagination flex items-center py-[14px] gap-[8px]"}
                                pageClassName={"size-[40px] rounded-lg flex items-center justify-center border border-[#D9D9DB]"}
                                activeClassName={"active border-primary"}
                                onPageChange={(event) => setCurrentPage(event.selected)}
                                pageCount={Math.ceil(RequestData.length / itemsNum)}
                                breakLabel="..."
                                previousLabel={
                                    <div className='border border-[#D9D9DB] size-[40px] flex items-center justify-center rounded-lg'>
                                        <IoIosArrowBack />
                                    </div>
                                }
                                nextLabel={
                                    <div className='border border-[#D9D9DB] size-[40px] flex items-center justify-center rounded-lg'>
                                        <IoIosArrowForward />
                                    </div>
                                }
                            />
                        </div> */}
          </div>
        </div>
        <div className='w-fit ms-auto mt-4'>
          <BtnCreate text='Export As PDF' icon={download} path='' />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Requests;
