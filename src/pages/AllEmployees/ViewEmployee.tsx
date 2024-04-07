import BaseLayout from "@/layouts/BaseLayout/BaseLayout"
import { BiChevronRight } from "react-icons/bi"
import { Link, useParams } from "react-router-dom"
import ArrowLeft from '@/assets/CreateProjects/ArrowLeft.svg'
import { pathList } from "@/routes/routesPaths"
import EmployeeInfo from "@/features/AllEmployees/ViewEmployees/components/EmployeeInfo"
import EmployeeAttachment from "@/features/AllEmployees/ViewEmployees/components/EmployeeAttachment"
import { useQuery } from "@tanstack/react-query"
import getEmployeeDetails from "@/features/AllEmployees/ViewEmployees/services/getEmployeeDetails"
import Loading from "@/components/Loading/Loading"

const ViewEmployee = () => {
  const { id } = useParams()

  const { data, isLoading } = useQuery({
    queryKey: ['getEmployeeDetails', id],
    queryFn: () => getEmployeeDetails(id)
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

  return (
    <BaseLayout>
      {isLoading ? <Loading /> :
        <div className="p-6">
          <div className='Header mb-8 '>
            <Link to={pathList.all_employees} className="flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold ">
              <img src={ArrowLeft} alt="ArrowLeft" />
              All Employees
              <BiChevronRight />
              View Employee
            </Link>
          </div>
          <div className="mt-6 rounded-2xl bg-white px-8 h-[120px] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <p className="text-blackGrayColor text-2xl font-bold">{data?.name}</p>
              <div className="bg-[#F5F6F7] rounded-2xl text-xs flex items-center p-2 gap-2">
                <span className="text-[#7A8699] font-bold">#Employee ID: </span>
                <span className="text-blackGrayColor font-bold"> {data?.id}</span>
              </div>
            </div>
            <div className="border border-grayColor rounded-lg py-[10px] px-4 text-darkBlueColor">{data?.position}</div>
          </div>
          <div className="mt-5 w-full rounded-lg bg-white h-[calc(100vh-340px)] flex items-stretch gap-5 p-6 overflow-y-auto HideScroll">
            <div className="w-[25%] border border-[#EFF1F4] rounded-2xl p-6 h-fit">
              <div className="flex items-center gap-3 border-b border-b-[#F5F6F7] pb-6">
                <img className="rounded-full size-[60px]" src={`https://sec-system-apis.up.railway.app${data?.image}`} alt="Picture" />
                <div>
                  <p className="text-blackGrayColor font-bold">{data?.name}</p>
                  <p className="text-grayColor font-bold text-sm">{data?.email}</p>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-primary text-xl font-bold mb-8">Personal Details</p>
                <EmployeeInfo title="email" value={data?.email === null ? 'Not Determined' : data?.email} />
                <EmployeeInfo title="gender" value={data?.gender === null ? 'Not Determined' : data?.gender} />
                <EmployeeInfo title="phone number" value={data?.phone_number === null ? 'Not Determined' : data?.phone_number} />
                <EmployeeInfo title="location" value={data?.location === null ? 'Not Determined' : data?.location} />
                <EmployeeInfo title="hired date" value={data?.hiring_date === null ? 'Not Determined' : data?.hiring_date} />
                <EmployeeInfo title="birth date" value={data?.birth_date === null ? 'Not Determined' : data?.birth_date} />
              </div>
            </div>
            <div className="w-[25%] border border-[#EFF1F4] rounded-2xl h-fit p-6">
              <p className="text-primary text-xl font-bold mb-8">Other details</p>
              <EmployeeInfo title="university" value={data?.graduation_year_from === null ? '' : `${data?.graduation_year_from} To ${data?.graduation_year_to}`} />
              <p className="text-blackGrayColor -mt-6 mb-8">{data?.school === null ? 'Not Determined' : data?.school}</p>
              <EmployeeInfo title="department" value={data?.department} />
              <EmployeeInfo title="company" value={data?.company} />
              <EmployeeInfo title="grade" value={data?.grade === null ? 'Not Determined' : data?.grade} />
              <EmployeeInfo title="nationality" value={data?.nationality === null ? 'Not Determined' : data?.nationality} />
              <EmployeeInfo title="social insurance type" value={data?.social_insurance} />
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
        </div>
      }
    </BaseLayout>
  )
}

export default ViewEmployee