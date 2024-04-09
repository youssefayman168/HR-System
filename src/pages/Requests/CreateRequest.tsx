import AddIcon from "@/features/requests/create/components/AddIcon";
import RemainingDaysViewer from "@/features/requests/create/components/RemainingDaysViewer";
import RequestHeader from "@/features/requests/create/components/RequestHeader";
import BaseLayout from "@/layouts/BaseLayout/BaseLayout";
import React, { useState } from "react";
import RequestForm from "../../features/requests/create/components/RequestForm";
import { Link, useNavigate } from "react-router-dom";
import { pathList } from "@/routes/routesPaths";
import BaseBtn from "@/components/Buttons/BaseBtn";
import SecondaryBorderBtn from "@/components/Buttons/SecondaryBorderBtn";
import ArrowBottom from "@/assets/CreateProjects/ArrowBottom.svg";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import getAllEmployees from "@/features/AllEmployees/services/getAllEmployees";
import { toast } from "react-toastify";
import createFinancialRequest from "@/features/requests/create/services/createFinancialRequest";

export type IRequest = {
  type: string;
  comment_from_the_employee: string;
  hr: any;
};

const CreateRequest = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedHR, setSelectedHR] = useState<any>();
  const [data, setData] = useState<IRequest>({
    type: "",
    comment_from_the_employee: "",
    hr: "",
  });
  const employees = useQuery({
    queryKey: ["employees"],
    queryFn: getAllEmployees,
  });
  const HRs = employees.data?.data.filter(
    (employee: any) => employee.role == "HR"
  );
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const sendRequest = useMutation({
    mutationFn: () => {
      return createFinancialRequest({
        type: data.type,
        comment_from_the_employee: data.comment_from_the_employee,
        hr: selectedHR,
      });
    },
    onSuccess: () => {
      queryClient
        .invalidateQueries({
          queryKey: ["getAllRequests"],
        })
        .then(() => navigate(pathList.requests));
    },
  });
  const onSubmit = async () => {
    try {
      await sendRequest.mutateAsync();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <BaseLayout>
      <div className='p-6 pb-3'>
        <RequestHeader
          onClickSelect={() => setShowPopup(true)}
          selectedManager={
            employees.data?.data.find(
              (employee: any) => employee.id == selectedHR
            )?.name
          }
        >
          {/* <RemainingDaysViewer /> */}
          <RequestForm setData={setData} />
          <div className='mt-8 flex justify-center items-center gap-3 '>
            <Link
              className='border-[1px] border-[#224886] py-2 px-10 rounded-[6px] '
              to={pathList.vacationRequests}
            >
              Cancel
            </Link>
            <button
              className='bg-[#224886] text-white py-2 px-10 rounded-[6px] '
              type='submit'
              onClick={() => onSubmit()}
            >
              Save
            </button>
          </div>
        </RequestHeader>
      </div>
      <div
        className={`top-0 left-0 right-0 bottom-0 bg-[#000000CC] ${
          showPopup ? "absolute" : "hidden"
        }`}
        style={{
          zIndex: 99,
        }}
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
                onChange={(e) => setSelectedHR(Number(e.target.value))}
                required
              >
                {HRs?.map(({ id, name }: any) => {
                  console.log(id);
                  return (
                    <option value={id} key={id}>
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
                name='Save'
                styles={{
                  fontSize: 16,
                  fontWeight: 500,
                  width: 100,
                  textAlign: "center",
                }}
                onClick={() => {
                  if (!selectedHR) {
                    return toast.warn("Please select an HR to save");
                  }
                  setShowPopup(false);
                }}
              />
              <SecondaryBorderBtn
                text='Cancel'
                style={{ width: 100, justifyContent: "center" }}
                onClick={() => {
                  setShowPopup(false);
                  setSelectedHR(undefined);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default CreateRequest;
