import Breadcrumb from "@/components/Breadcrumb";
import BaseLayout from "../layouts/BaseLayout/BaseLayout";
import Excel from "@/components/Excel";
import Step from "@/features/NewEmployee/components/Step";
import useMultiStepForm from "@/hooks/useMultistepForm";
import BasicInfo from "@/features/NewEmployee/components/BasicInfo";
import Attachment from "@/features/NewEmployee/components/Attachment";
import SetPermissions from "@/features/NewEmployee/components/SetPermissions";
import BorderBtn from "@/components/Buttons/BorderBtn";
import BaseBtn from "@/components/Buttons/BaseBtn";
import Calendar from "@/components/Calendar";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import createEmployee from "@/features/NewEmployee/services/createEmployee";

export type IEmployeeData = {
  name: string;
  email: string;
  phone_number: string;
  gender: string;
  nationality: string;
  location: string;
  birth_date: string;
  medical_insurance_type: string;
  image: File | string;
  position: string;
  department: string;
  grade: string;
  company: string;
  college_name: string;
  graduation_date_from: string;
  graduation_date_to: string;
  hiring_date: string;
  cv: string;
  passport_copy: string;
  scanned_paper: string;
  id_photo: string;
  birth_certificate: string;
  military_certificate: string;
  graduation_certificate: string;
  social_insurance: string;
};

const NewEmployee = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState<IEmployeeData>({
    name: "",
    email: "",
    phone_number: "",
    gender: "",
    nationality: "",
    location: "",
    birth_date: "",
    medical_insurance_type: "",
    image: "",
    position: "",
    department: "",
    grade: "",
    company: "",
    college_name: "",
    graduation_date_from: "",
    graduation_date_to: "",
    hiring_date: "",
    cv: "",
    passport_copy: "",
    scanned_paper: "",
    id_photo: "",
    birth_certificate: "",
    military_certificate: "",
    graduation_certificate: "",
    social_insurance: "",
  });
  const { currentStep, step, goNext } = useMultiStepForm([
    <BasicInfo setData={setData} />,
    <SetPermissions />,
    <Attachment />,
  ]);
  const addEmployee = useMutation<any, any, any>({
    mutationFn: (data) => {
      return createEmployee(data);
    },
    onSuccess: () => {
      setShowModal(true);
    },
  });

  const onSubmit = async () => {
    try {
      const formData = new FormData();
      // TODO: There was a conflict in the data gathering, so I'm going to re gather it again
      await addEmployee.mutateAsync(formData);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <BaseLayout>
      <Breadcrumb link='/home' />
      <div className='bg-white mx-[20px] w-[97%] rounded-[15px] h-[77vh] overflow-scroll'>
        <div className='flex justify-between px-[20px]'>
          <h2 className='text-[#101828] font-semibold text-[26px] mt-[50px]'>
            Create New Employee
          </h2>
          <div className='rounded-[10px] bg-[#188149] w-[42px] h-[42px] flex items-center justify-center mt-[43px]'>
            <Excel />
          </div>
        </div>
        <div className='px-[118px]'>
          <div className='mt-[54px] mb-[42px] flex gap-[42px]'>
            <Step
              active={currentStep <= 0}
              completed={currentStep > 0}
              stepNumber={1}
              stepName='Basic Info'
            />
            <Step
              active={currentStep <= 1}
              completed={currentStep > 1}
              stepNumber={2}
              stepName='Set Permissions'
            />
            <Step
              active={currentStep <= 2}
              completed={currentStep > 2}
              stepNumber={3}
              stepName='Attachments'
            />
          </div>
          {step}
          <div className='w-[100%] flex flex-row items-center justify-center gap-[27px] pb-[50px]'>
            <BorderBtn
              name='Cancel'
              styles={{
                width: "163px",
                height: "50px",
                fontSize: 16,
                fontWeight: 500,
              }}
            />
            {currentStep != 2 ? (
              <BaseBtn
                name='Next'
                styles={{
                  width: "163px",
                  height: "50px",
                  fontSize: 16,
                  fontWeight: 500,
                }}
                onClick={() => goNext()}
              />
            ) : (
              <BaseBtn
                name='Save'
                styles={{
                  width: "163px",
                  height: "50px",
                  fontSize: 16,
                  fontWeight: 500,
                }}
                onClick={() => onSubmit()}
              />
            )}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default NewEmployee;
