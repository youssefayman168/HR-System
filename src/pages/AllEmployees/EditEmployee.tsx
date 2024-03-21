import BaseLayout from "@/layouts/BaseLayout/BaseLayout"
import { BiChevronRight } from "react-icons/bi"
import { Link, useNavigate, useParams } from "react-router-dom"
import ArrowLeft from '@/assets/CreateProjects/ArrowLeft.svg'
import { pathList } from "@/routes/routesPaths"
import EmployeeAttachment from "@/features/AllEmployees/ViewEmployees/components/EmployeeAttachment"
import editPen from '@/assets/editPen.svg'
import EmployeeInfoInput from "@/features/AllEmployees/EditEmployees/components/EmployeeInfoInput"
import SelectOption from "@/components/SelectOption"
import BaseBtn from "@/components/Buttons/BaseBtn"
import SecondaryBorderBtn from "@/components/Buttons/SecondaryBorderBtn"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import getEmployeeDetails from "@/features/AllEmployees/ViewEmployees/services/getEmployeeDetails"
import Loading from "@/components/Loading/Loading"
import getSelectedCompanies from "@/features/Projects/create-projets/services/getSelectedCompanies"
import getDepartmentList from "@/features/AllEmployees/AddPosition/services/getDepartmentList"
import updateSingleEmployee from "@/features/AllEmployees/EditEmployees/services/updateSingleEmployee"
import { useState } from "react"
import { format } from "date-fns"

const EditEmployee = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  // Get Employee Details
  const { data, isLoading } = useQuery({
    queryKey: ['getEmployeeDetails', id],
    queryFn: getEmployeeDetails
  })

  // console.log(format(data[0]?.sent_at, 'mm/dd/yyyy'))

  // Get Selected Companies
  const companies = useQuery({
    queryKey: ['getSelectedCompanies'],
    queryFn: getSelectedCompanies
  })

  // Get Department List Data
  const departmentList = useQuery({
    queryKey: ['getDepartmentList'],
    queryFn: getDepartmentList
  })

  // Format files name
  const cvPath = data?.cv?.replace('/media/employees-CVs/', '');
  const birthPah = data?.birth_certificate?.replace('/media/birth-certificate/', '')
  const employeePaper = data?.employee_paper?.replace('/media/employees-paper/', '')
  const graduationCertificate = data?.graduation_certificate?.replace('/media/graduation-certificate/', '')
  const idPhoto = data?.id_photo?.replace('/media/id-photo/', '')
  const militaryCertificate = data?.military_certificate?.replace('/media/military-certificate/', '')
  const passportCopy = data?.passport_copy?.replace('/media/passport-copy-file/', '')
  const scannedPaper = data?.scanned_paper?.replace('/media/scanned_paper/', '')
  const socialInsurance = data?.social_insurance?.replace('/media/social-insurance/', '')

  // Update User Data

  const [employeeData, setEmployeeData] = useState({
    image: '',
    name: '',
    email: '',
    phone_number: '',
    location: '',
    hiring_date: '',
    birth_date: '',
    school: '',
    graduation_year_from: '',
    graduation_year_to: '',
    role: '',
    nationality: '',
    company: '',
    department: '',
    cv: '',
    birth_certificate: '',
    employee_paper: '',
    graduation_certificate: '',
    id_photo: '',
    military_certificate: '',
    passport_copy: '',
    scanned_paper: '',
    social_insurance: ''
  })

  const queryClient = useQueryClient()
  const editEmployee = useMutation({
    mutationFn: () => {
      return updateSingleEmployee(
        id,
        {
          image: employeeData.image,
          name: employeeData.name ? employeeData.name : data?.name,
          email: employeeData.email ? employeeData.email : data?.email,
          phone_number: employeeData.phone_number ? employeeData.phone_number : data?.phone_number,
          location: employeeData.location ? employeeData.location : data?.location,
          hiring_date: employeeData.hiring_date ? employeeData.hiring_date : data?.hiring_date,
          birth_date: employeeData.birth_date ? employeeData.birth_date : data?.birth_date,
          school: employeeData.school ? employeeData.school : data?.school,
          graduation_year_from: employeeData.graduation_year_from ? employeeData.graduation_year_from : data?.graduation_year_from,
          graduation_year_to: employeeData.graduation_year_to ? employeeData.graduation_year_to : data?.graduation_year_to,
          role: employeeData.role ? employeeData.role : data?.role,
          nationality: employeeData.nationality ? employeeData.nationality : data?.nationality,
          company: employeeData.company ? employeeData.company : data?.company,
          department: employeeData.department ? employeeData.department : data?.department,
          cv: employeeData.cv ? employeeData.cv : data?.cv,
          birth_certificate: employeeData.birth_certificate ? employeeData.birth_certificate : data?.birth_certificate,
          employee_paper: employeeData.employee_paper ? employeeData.employee_paper : data?.employee_paper,
          graduation_certificate: employeeData.graduation_certificate ? employeeData.graduation_certificate : data?.graduation_certificate,
          id_photo: employeeData.id_photo ? employeeData.id_photo : data?.id_photo,
          military_certificate: employeeData.military_certificate ? employeeData.military_certificate : data?.military_certificate,
          passport_copy: employeeData.passport_copy ? employeeData.passport_copy : data?.passport_copy,
          scanned_paper: employeeData.scanned_paper ? employeeData.scanned_paper : data?.scanned_paper,
          social_insurance: employeeData.social_insurance ? employeeData.social_insurance : data?.social_insurance
        },
      )
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['getEmployeeDetails']
      }).then(() => navigate(pathList.all_employees))
    }
  })

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await editEmployee.mutateAsync()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <BaseLayout>
      {isLoading ?
        <Loading />
        :
        <form className="p-6" onSubmit={onSubmit}>
          <div className='Header mb-8 '>
            <Link to={pathList.view_employee} className="flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold ">
              <img src={ArrowLeft} alt="ArrowLeft" />
              All Employees
              <BiChevronRight />
              Edit Employee
            </Link>
          </div>
          <div className="mt-6 rounded-2xl bg-white px-8 h-[120px] ">
            <div className="flex items-center gap-4 h-full">
              <div className="bg-[#F5F6F7] rounded-2xl text-xs flex items-center p-2 gap-2">
                <span className="text-[#7A8699] font-bold">#Employee ID: </span>
                <span className="text-blackGrayColor font-bold">{data?.id}</span>
              </div>
            </div>
          </div>
          <div className="mt-5 w-full rounded-lg bg-white h-[calc(100vh-340px)] p-6 overflow-y-auto HideScroll">
            <div className=" flex items-stretch gap-5">
              <div className="w-[25%] border border-[#EFF1F4] rounded-2xl p-6 h-fit">
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-3 border-b border-b-[#F5F6F7] pb-6 relative">
                    <img className="rounded-full size-[80px] mx-auto" src={`https://sec-system-apis.up.railway.app${data?.image}`} alt="Picture" />
                    <label htmlFor="image" className="size-[24px] absolute bottom-1 cursor-pointer right-[8px]">
                      <img src={editPen} alt="" className="size-[24px]" />
                    </label>
                    <input type="file" name="image" id="image" className=" hidden" onChange={(e: any) =>
                      setEmployeeData((prev: any) => {
                        return {
                          ...prev,
                          image: e.target.files?.[0]
                        }
                      })
                    } />
                  </div>
                </div>
                <div className="mt-8">
                  <p className="text-primary text-xl font-bold mb-8">Personal Details</p>
                  <EmployeeInfoInput
                    type="text"
                    title="full name"
                    value={data?.name}
                    onChange={(e: any) =>
                      setEmployeeData((prev: any) => {
                        return {
                          ...prev,
                          name: e.target.value,
                        };
                      })
                    }
                  />
                  <EmployeeInfoInput type="text" title="email" value={data?.email} />
                  <EmployeeInfoInput type="text" title="phone number" value={data?.phone_number} />
                  <EmployeeInfoInput type="text" title="location" value={data?.location} />
                  <EmployeeInfoInput type="text" title="hired date" value={data?.hiring_date} />
                  <EmployeeInfoInput type="text" title="birth date" value={data?.birth_date} />
                </div>
              </div>
              <div className="w-[25%] border border-[#EFF1F4] rounded-2xl h-fit p-6">
                <p className="text-primary text-xl font-bold mb-8">Other details</p>
                <EmployeeInfoInput type="text" title="collage name" value={data?.school} />
                <div className="flex items-center gap-2 w-full">
                  <EmployeeInfoInput inputStyle={'!w-[120px]'} type="date" title="from" value={data?.graduation_year_from} />
                  <EmployeeInfoInput inputStyle={'!w-[120px]'} type="date" title="to" value={data?.graduation_year_to} />
                </div>
                <SelectOption label='role'>
                  <option value="HR">HR</option>
                  <option value="HOD">HOD</option>
                  <option value="ProjectManager">Project Manager</option>
                  <option value="Accountant">Accountant</option>
                  <option value="Employee">Employee</option>
                  <option value="OfficeManager">Office Manager</option>
                  <option value="Senior">Senior</option>
                </SelectOption>
                <EmployeeInfoInput type="text" title="Nationality" value={data?.nationality} />
                <SelectOption label='company'>
                  {companies?.data?.map(({ id, name }: any) => {
                    return <option key={id} value={id}>{name}</option>
                  })}
                </SelectOption>
                <SelectOption label='department'>
                  {departmentList?.data?.map(({ id, name }: any) => {
                    return <option key={id} value={id}>{name}</option>
                  })}
                </SelectOption>
              </div>
              {/* Start Attachments */}
              <div className="flex-1 border border-[#EFF1F4] rounded-2xl h-fit p-6">
                <p className="text-primary text-xl font-bold mb-8">Attachments</p>
                <div className="flex flex-col ml-12 gap-9">
                  <EmployeeAttachment document={cvPath} documentType="Cv Attachment" href={data?.cv} type="CV Document" />
                  <EmployeeAttachment document={birthPah} documentType="Birth Certificate" href={data?.birth_certificate} type="Birth Certification" />
                  <EmployeeAttachment document={employeePaper} documentType="Employee Paper" href={data?.employee_paper} type="Employee Paper" />
                  <EmployeeAttachment document={graduationCertificate} documentType="Graduation Certificate" href={data?.graduation_certificate} type="Graduation Certificate" />
                  <EmployeeAttachment document={idPhoto} documentType="ID Photo" href={data?.id_photo} type="ID Photo" />
                  <EmployeeAttachment document={militaryCertificate} documentType="Military Certificate" href={data?.military_certificate} type="Military Certificate" />
                  <EmployeeAttachment document={passportCopy} documentType="Passport Copy" href={data?.passport_copy} type="Passport Copy" />
                  <EmployeeAttachment document={scannedPaper} documentType="Scanned Paper" href={data?.scanned_paper} type="Scanned Paper" />
                  <EmployeeAttachment document={socialInsurance} documentType="Social Insurance" href={data?.social_insurance} type="Social Insurance" />
                </div>
              </div>
              {/* End Attachments */}
            </div>
            <div className="flex items-center justify-center mt-6">
              <div className="flex items-stretch gap-4">
                <BaseBtn
                  name="Save Changes"
                  type={'submit'}
                  styles={{ width: 130, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'normal', fontSize: 14 }} />
              </div>
            </div>
          </div>
        </form>
      }
    </BaseLayout>
  )
}

export default EditEmployee