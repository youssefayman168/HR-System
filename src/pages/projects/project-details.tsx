import BaseLayout from "@/layouts/BaseLayout/BaseLayout";
import { pathList } from "@/routes/routesPaths";
import ArrowLeft from '../../assets/CreateProjects/ArrowLeft.svg'
import { BiChevronRight } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import plus from '../../assets/plus.svg'
import NameProjects from "@/components/NameProjects/NameProjectsInf";
import download from '../../assets/Projects/Download.svg'
import BtnCreate from "@/components/Buttons/BtnCreate";
import Phases from "@/components/NameProjects/Phases";
import { useQuery } from "@tanstack/react-query";
import getProjectDetails from "@/features/Projects/project-details/services/getProjectDetails";
import createPhases from "@/features/Projects/project-details/services/createPhases";
import Loading from "@/components/Loading/Loading";
import getPhases from "@/features/Projects/project-details/services/getPhases";

const ProjectDetails = () => {
  let { id } = useParams();

  // Get Project Details
  const { data, isLoading } = useQuery<any>({
    queryKey: ['getProjectDetails'],
    queryFn: () => getProjectDetails(id)
  })

  const phases = useQuery({
    queryKey: ['getPhases'],
    queryFn: () => getPhases(id)
  })

  return (
    <BaseLayout>
      {isLoading ?
        <Loading />
        :
        <div className="p-5">
          <div className="Header mb-6">
            <Link to={pathList.projects} className="flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold ">
              <img src={ArrowLeft} alt="ArrowLeft" />
              Projects overview
              <BiChevronRight />
              Name Projects
            </Link>
          </div>
          <div className="NameProjects bg-white px-20 py-10 rounded-[15px] h-[calc(100vh-240px)] overflow-y-auto HideScroll  ">
            <div className="border-b-[1px] border-[#9295AB] pb-3">
              <p className="mb-8 font-[600] text-[24px] ">Name Projects</p>
              <NameProjects Name="ID" Value={data?.id} />
              <NameProjects Name="Company" Value={data?.company?.name} />
              <div className='flex items-center gap-3 mb-3 '>
                <p className='text-[#9295AB] text-[21px] w-[170px] '>Status</p>
                <p
                  className='bg-[#E6EFFC] py-[6px] px-4 rounded-[6px] text-[17px] '
                  style={{
                    color:
                      data?.status === 'Hold' ? '#FF793F' :
                        data?.status === 'Completed' ? '#34E045' :
                          data?.status === 'In-Progress' ? '#0764E6' :
                            data?.status === 'Declined' ? '#AA0000' : '',

                    backgroundColor:
                      data?.status === 'Hold' ? '#FFE9E0' :
                        data?.status === 'Completed' ? '#DEFFE1' :
                          data?.status === 'In-Progress' ? '#D2E5FF' :
                            data?.status === 'Declined' ? '#FFE3E3' : '',
                  }}
                >
                  {data?.status}
                </p>
              </div>
              <NameProjects Name="Starting Date" Value={data?.start_date} />
              <NameProjects Name="Project Hours" Value={`${data?.work_hours}h`} />
              <NameProjects Name="Work Hours" Value={`${data?.worked_hours}h`} />
              <NameProjects Name="Budget" Value={data?.budget} />
              <NameProjects Name="Location" Value={data?.location} />
              <NameProjects Name="Scope" Value={data?.scope} />
              <NameProjects Name="Plan" Value={data?.plan} />
            </div>
            <div className="CreatePhases flex items-center justify-between mt-4  ">
              <p className="text-[#101828] font-[700] text-[20px] ">Project Phases</p>
              <BtnCreate icon={plus} text="Create Phases" path="" onClick={() => createPhases(id)} />
            </div>
            <div className="Phases">
              <div>
                {phases?.data?.map(({ id }: any) => {
                  return <Phases phaseNum={id} />
                })}
              </div>
            </div>
          </div>
        </div>
      }
    </BaseLayout>
  );
};

export default ProjectDetails;
