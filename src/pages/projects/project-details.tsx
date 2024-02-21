import BaseLayout from "@/layouts/BaseLayout/BaseLayout";
import { pathList } from "@/routes/routesPaths";
import ArrowLeft from '../../assets/CreateProjects/ArrowLeft.svg'
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import plus from '../../assets/plus.svg'
import NameProjects from "@/components/NameProjects/NameProjectsInf";
import download from '../../assets/Projects/Download.svg'
import BtnCreate from "@/components/BtnCreate/BtnCreate";
import Phases from "@/components/NameProjects/Phases";

const ProjectDetails = () => {
  return (
    <BaseLayout>
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
              <NameProjects Name="ID" Value="2341421" />
              <NameProjects Name="Company" Value="Smart Engineering Consultancy" />
              <div className='flex items-center gap-3 mb-3 '>
                  <p className='text-[#9295AB] text-[21px] w-[170px] '>Status</p>
                  <p className='text-[#0764E6] bg-[#E6EFFC] py-[6px] px-4 rounded-[6px] text-[17px] '>In progress</p>
              </div>
              <NameProjects Name="Starting Date" Value="29 July 2023" />
              <NameProjects Name="Expiry Date" Value="29 July 2023" />
              <NameProjects Name="Project Hours" Value="200h" />
              <NameProjects Name="Work Hours" Value="10h 2m" />
          </div>
          <div className="CreatePhases flex items-center justify-between mt-4  ">
              <p className="text-[#101828] font-[700] text-[20px] ">Project Phases</p>
              <BtnCreate icon={plus} text="Create Phases" path="" />
          </div>
          <div className="Phases">
            <div>
              <Phases phaseNum="1" />
              <Phases phaseNum="2" />
              <Phases phaseNum="3" />
              <Phases phaseNum="4" />
              <Phases phaseNum="5" />
            </div>
          </div>
        </div>
        <div className="w-fit ms-auto mt-4 ">
          <BtnCreate icon={download} text="Export As PDF" path="" />
        </div>
      </div>
    </BaseLayout>
);
};

export default ProjectDetails;
