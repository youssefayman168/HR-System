import BaseLayout from "@/layouts/BaseLayout/BaseLayout";
import searchIcon from '../../assets/Projects/search.svg'
import DateIcon from '../../assets/Projects/Date.svg'
import DownloadIcon from '../../assets/Projects/Download.svg'
import plus from '../../assets/plus.svg'
import { pathList } from "@/routes/routesPaths";
import DateInp from "@/components/DateInput/Date";
import ProjectsTable from "@/components/Table/ProjectsTable/ProjectsTable";
import BtnCreate from "@/components/Buttons/BtnCreate";
import { useRef } from "react";
import { useReactToPrint } from 'react-to-print'

const Projects = () => {

  // To print the table in PDF
  const componentRef = useRef<any>();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Projects Overview',
  });

  return (
    <BaseLayout>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#224886] text-[25px] font-[600]">Projects overview</p>
          </div>
          <div className="relative">
            <div className="absolute top-[50%] left-3 translate-y-[-50%] text-[#737373]">
              <img src={searchIcon} alt="searchIcon" />
            </div>
            <input className="w-[520px] h-[52px] rounded-lg ps-10 outline-none" type="text" placeholder="Quick Search..." />
          </div>
          <div className="flex items-center gap-4">

            <DateInp icon={DateIcon} />

            <BtnCreate text="Create Projects" icon={plus} path={pathList.createProject} />
          </div>
        </div>
        <div className="TableCompo HideScroll overflow-y-auto mt-8 h-[calc(100vh-268px)] rounded-[20px]" ref={componentRef}>
          <ProjectsTable />
        </div>
        <div className="w-fit ms-auto mt-5">
          <BtnCreate icon={DownloadIcon} text="Export As PDF" path="" onClick={handlePrint} />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Projects;
