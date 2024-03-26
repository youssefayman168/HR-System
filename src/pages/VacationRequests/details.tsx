import BaseLayout from "@/layouts/BaseLayout/BaseLayout";
import ArrowLeft from "../../assets/CreateProjects/ArrowLeft.svg";
import { BiChevronRight } from "react-icons/bi";
import { pathList } from "@/routes/routesPaths";
import { Link, useNavigate, useParams } from "react-router-dom";
import People from "@/components/ViewPage/People";
import EmployeeInfo from "@/features/AllEmployees/ViewEmployees/components/EmployeeInfo";
import { useMutation, useQuery } from "@tanstack/react-query";
import getRequestDetails from "@/features/requests/details/services/getRequestDetails";
import Loading from "@/components/Loading/Loading";
import acceptRequest from "@/features/requests/details/services/acceptRequest";
import rejectRequest from "@/features/requests/details/services/rejectRequest";
import { useState } from "react";
import BaseBtn from "@/components/Buttons/BaseBtn";
import SecondaryBorderBtn from "@/components/Buttons/SecondaryBorderBtn";
import getAllHR from "@/features/requests/details/services/getAllHr";
import referHR from "@/features/requests/details/services/referHR";
import ArrowBottom from "@/assets/CreateProjects/ArrowBottom.svg";
import getVacationRequest from "@/features/vacation-request/details/services/getVacationRequest";
import { format } from "date-fns";
import { getStatus } from "./all";
import rejectVacationRequest from "@/features/vacation-request/details/services/reject";
import approveVacationRequest from "@/features/vacation-request/details/services/accept";
import delegateRequest from "@/features/vacation-request/details/services/delegateRequest";

const RequestDetails = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const closePopup = () => setShowPopup(false);

  const navigate = useNavigate();

  const { requestID } = useParams();
  console.log(requestID);

  // Get Request Details
  const { data, isLoading } = useQuery({
    queryKey: ["request-details", requestID],
    queryFn: () => getVacationRequest(Number(requestID!)),
  });

  console.log(data?.data.is_referred);

  const [HOD, setHOD] = useState("");

  const HODs = useQuery({
    queryKey: ["getAllHR"],
    queryFn: getAllHR,
  });

  const filteredHODs = HODs?.data?.data
    ?.filter(({ role }: any) => role === "HOD")
    .map(({ name, id }: any) => ({ name, id }));
  const referRequest = useMutation({
    mutationFn: () => {
      return delegateRequest(requestID, HOD);
    },
    onSuccess: () => {
      navigate(pathList.vacationRequests);
    },
  });
  return (
    <BaseLayout>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='p-6'>
          <Link
            to={pathList.vacationRequests}
            className='flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold '
          >
            <img src={ArrowLeft} alt='ArrowLeft' />
            Requests
            <BiChevronRight />
            View Requests
          </Link>
          <div className='bg-white pt-7 pb-3 px-10 mt-6 rounded-[15px] h-[calc(100vh-184px)] overflow-y-auto HideScroll '>
            <div>
              <div className='flex items-center justify-between mb-8'>
                <div>
                  <p className='text-[24px] font-[600] text-[#0E2354]'>
                    {data?.data.type} Request From {data?.data.user?.name}
                  </p>
                </div>
                <div className='bg-white border-[1px] border-[#F5F6F7] rounded-[10px] flex items-center gap-4 px-4 py-[6px] w-[240px]'>
                  <div>
                    <img
                      className='w-[34px] h-[34px] rounded-full object-cover'
                      src={`https://sec-system-apis.up.railway.app${data?.data.user?.image}`}
                      alt='person'
                    />
                  </div>
                  <div>
                    <p className='text-[#091E42] font-[600] text-[15px] '>
                      {data?.data.employee?.name}
                    </p>
                    <p className='text-[#909DAD] text-[15px] '>
                      {data?.data.employee?.position}
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex items-start justify-between'>
                <div className='w-[630px] xxxl:w-[670px] max-xxl:w-[500px] '>
                  <p className='text-[#091E42] text-[20px] font-[500] mb-3'>
                    Notes From The Employee
                  </p>
                  <p>{data?.data.employee_notes}</p>
                  <div className='mt-16 mb-7'>
                    <div className='border-b-[1px] border-[#EAECF0] flex items-center gap-32'>
                      <EmployeeInfo
                        title='Employee ID:'
                        value={data?.data.user?.id}
                      />
                      <div className='flex items-start flex-col mb-6'>
                        <p className='text-sm text-grayColor font-bold capitalize mb-1'>
                          Status
                        </p>
                        <p
                          className={`relative text-[15px] font-semibold 
                        ${
                          data?.status === "accept"
                            ? "bg-[#ECFDF3]"
                            : data?.status === "reject"
                            ? "bg-[#FFF2EA]"
                            : data?.status === "referred"
                            ? "bg-[#FFEFC4]"
                            : ""
                        } 
                        ${
                          data?.status === "accept"
                            ? "text-[#027A48]"
                            : data?.status === "reject"
                            ? "text-[#F15046]"
                            : data?.status === "referred"
                            ? "text-[#D99D00]"
                            : ""
                        } after:absolute 
                         ${
                           data?.status === "accept"
                             ? "after:bg-[#12B76A]"
                             : data?.status === "reject"
                             ? "after:bg-[#F15046]"
                             : data?.status === "referred"
                             ? "after:bg-[#D99D00]"
                             : ""
                         } left-[-5px] py-[3px] px-3 ps-5 after:w-[8px] after:h-[8px] after:rounded-full after:top-[50%] after:translate-y-[-50%] after:left-[7px] rounded-[15px] `}
                        >
                          {getStatus(
                            data?.data.hod_approved,
                            data?.data.staff_approved
                          )}
                        </p>
                      </div>
                    </div>
                    <div className='pt-5 pb-2 border-b-[1px] border-[#EAECF0] flex items-center gap-32'>
                      <EmployeeInfo title='Type' value={data?.data.type} />
                    </div>
                  </div>
                  <div>
                    {data?.data.hod_approved ? null : (
                      <div>
                        <p className='text-[#091E42] font-[500] text-[20px] mb-4'>
                          Take Action
                        </p>
                        <p className='w-[500px] xxxl:w-[600px] max-xxl:w-[400px] bg-red-40 '>
                          Once you take the action the employees will be
                          notified and the action can’t be undone{" "}
                        </p>
                        <div className='Btns flex items-center gap-32 mt-8'>
                          <button
                            className='text-[#224886] text-[18px] border-[1px] border-[#1F4690] w-[100%] text-center py-3 rounded-[10px] '
                            onClick={() => {
                              rejectVacationRequest(requestID).then(() =>
                                navigate(pathList.vacationRequests)
                              );
                            }}
                          >
                            Reject
                          </button>
                          <button
                            className='text-[#224886] text-[18px] border-[1px] border-[#1F4690] w-[100%] text-center py-3 rounded-[10px]'
                            onClick={() => {
                              approveVacationRequest(requestID).then(() =>
                                navigate(pathList.vacationRequests)
                              );
                            }}
                          >
                            Accept
                          </button>
                          <button
                            className='text-[#224886] text-[18px] border-[1px] border-[#1F4690] w-[100%] text-center py-3 rounded-[10px]'
                            onClick={() => setShowPopup(true)}
                          >
                            Refer
                          </button>
                        </div>
                      </div>
                    )}

                    {data?.data.is_referred ? (
                      <div className='mt-10'>
                        <p className='text-[20px] text-[#15294B] font-[600] mb-3'>
                          Referred To:
                        </p>
                        <div className='flex items-center flex-wrap gap-x-3 gap-y-4 '>
                          <People
                            name={data?.data.hod?.name}
                            photo={`https://sec-system-apis.up.railway.app${data?.data.hod?.image}`}
                          />
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className='mt-10'>
                  <p className='text-[18px] text-[#091E42] font-[600] mb-6'>
                    Additional Notes
                  </p>
                  <textarea
                    value={data?.data.comment_from_the_hr}
                    className='border-[1px] p-5 border-[#eaebeb] rounded-[15px] outline-none w-[480px] h-[500px]'
                    disabled
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`top-0 left-0 right-0 bottom-0 bg-[#000000CC] ${
              showPopup ? "absolute" : "hidden"
            }`}
          >
            <div className='w-[600px] h-[400px] absolute top-[28.5%] left-[33%] rounded-[6px] bg-white flex flex-col justify-center items-center'>
              <div className='flex items-between justify-between h-full flex-col p-10'>
                <h4 className='font-medium text-[#000] text-[24px] text-center'>
                  Please Choose the HR that you want to refer about this request{" "}
                </h4>
                <div className='Select-Container relative w-full'>
                  <select
                    id='mySelect'
                    className='custom-select p-5 border-[1px] border-[#ccc] w-[100%] appearance-none outline-none h-[60px] rounded-[10px] '
                    onChange={(e) => setHOD(e.target.value)}
                    required
                  >
                    <option value=''>Select HOD</option>
                    {filteredHODs?.map(({ id, name }: any) => {
                      return (
                        <option selected value={id} key={id}>
                          {name}
                        </option>
                      );
                    })}
                  </select>
                  <img
                    className='absolute top-[50%] translate-y-[-50%] right-8 '
                    src={ArrowBottom}
                    alt='ArrowBottom'
                  />
                </div>
                <div className='flex gap-8 items-center justify-center'>
                  <BaseBtn
                    name='Send'
                    styles={{
                      fontSize: 16,
                      fontWeight: 500,
                      width: 100,
                      textAlign: "center",
                    }}
                    onClick={() => referRequest.mutate()}
                  />
                  <SecondaryBorderBtn
                    text='Cancel'
                    style={{ width: 100, justifyContent: "center" }}
                    onClick={closePopup}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </BaseLayout>
  );
};

export default RequestDetails;
