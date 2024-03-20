import SecondaryBorderBtn from "@/components/Buttons/SecondaryBorderBtn";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import outlinePlus from "@/assets/outlinePlus.svg";
import DownloadIcon from "@/assets/Projects/Download.svg";
import BlueTableHeader from "@/components/Table/BlueTableHeader";
import AllEmployeesComponents from "@/features/AllEmployees/components/AllEmployeesComponents";
import { useRef, useState } from "react";
import BtnCreate from "@/components/Buttons/BtnCreate";
import { useNavigate } from "react-router-dom";
import { pathList } from "@/routes/routesPaths";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import getAllEmployees from "@/features/AllEmployees/services/getAllEmployees";
import { useReactToPrint } from "react-to-print";
import deleteEmployee from "@/features/AllEmployees/ViewEmployees/services/deleteEmployee";
import deleteIcon from '@/assets/deletionPopup.svg'
import BaseBtn from "@/components/Buttons/BaseBtn";
import Loading from "@/components/Loading/Loading";

const AllEmployees = () => {
  // To print the table in PDF
  const componentRef = useRef<any>();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'All Employees Overview',
  });

  // View employee functionality
  const navigation = useNavigate();

  const viewEmployee = (id: any) => navigation(`/all_employees/view_employee/${id}`);
  const addDepartment = () => navigation(pathList.add_department);
  const addPosition = () => navigation(pathList.add_position);

  // Get All Employees Data
  const { data, isLoading } = useQuery({
    queryKey: ["employees"],
    queryFn: getAllEmployees,
  });

  // Delete Single Project
  const client = useQueryClient()

  const deleteEmployeeMutation = useMutation({
    mutationFn: (variables) => {
      return deleteEmployee(variables)
    },
    onSuccess: () => {
      return client.invalidateQueries({
        queryKey: ['singleEmployee']
      })
    }
  })

  // Popup Functionality

  const [showPopup, setShowPopup] = useState<boolean>(false)

  const closePopup = () => setShowPopup(false)

  const [globalId, setGlobalId] = useState<any>()

  return (
    <BaseLayout>
      {isLoading ?
        <Loading />
        :
        <div className='p-6 pb-2'>
          <div className='flex items-center justify-between gap-[15px]'>
            <h1 className='text-primary font-bold text-2xl'>All Employees</h1>
            <div className='flex items-center gap-[15px]'>
              <SecondaryBorderBtn
                text='Add Department'
                icon={outlinePlus}
                onClick={() => addDepartment()}
              />
              <SecondaryBorderBtn
                text='Add Position'
                icon={outlinePlus}
                onClick={() => addPosition()}
              />
            </div>
          </div>
          <div className='bg-white rounded-[15px]' ref={componentRef}>
            <BlueTableHeader>
              <div className='h-[calc(100vh-395px)] overflow-y-auto HideScroll'>
                {
                  data?.data?.map(
                    (
                      { id,
                        name,
                        image,
                        company,
                        department,
                        position
                      }: any,
                    ) => {
                      return (
                        <>
                          <AllEmployeesComponents
                            key={id}
                            employeeImg={`https://sec-system-apis.up.railway.app${image}`}
                            employeeName={name}
                            companyName={company}
                            departmentName={department}
                            positionName={position}
                            onViewClick={() => viewEmployee(id)}
                            onEditClick={() => navigation(`/all_employees/edit_employee/${id}`)}
                            onDeleteClick={() => {
                              setGlobalId(id)
                              setShowPopup(true)
                            }}
                          />
                        </>
                      );
                    }
                  )}
              </div>
              <div className='w-full py-3'>
              </div>
            </BlueTableHeader>
          </div>
          <div className='w-fit mt-6 ms-auto'>
            <BtnCreate icon={DownloadIcon} text='Export As PDF' path='' onClick={handlePrint} />
          </div>
        </div>
      }
      {/* Delete Modal */}
      <div className={`top-0 left-0 right-0 bottom-0 bg-[#000000CC] ${showPopup ? 'absolute' : 'hidden'}`}>
        <div className='w-[600px] h-[400px] absolute top-[28.5%] left-[33%] rounded-[6px] bg-white flex flex-col justify-center items-center'>
          <div className='flex items-between justify-between h-full flex-col p-10'>
            <img src={deleteIcon} alt="deletion" className="w-[100px] h-[100px] mx-auto" />
            <h4 className='font-medium text-[#000] text-[24px] text-center'>Do you want to confirm deleting this employee ?</h4>
            <div className="flex gap-8 items-center justify-center">
              <BaseBtn
                name="Delete"
                styles={{ fontSize: 16, fontWeight: 500, width: 100, textAlign: 'center' }}
                onClick={() => deleteEmployeeMutation.mutate(globalId)} />
              <SecondaryBorderBtn text="Cancel" style={{ width: 100, justifyContent: 'center' }} onClick={closePopup} />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default AllEmployees;
