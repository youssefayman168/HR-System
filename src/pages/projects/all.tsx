import { BiPlus } from "react-icons/bi";
import ProjectsTable from "@/components/Table/ProjectsTable";
import BaseLayout from "@/layouts/BaseLayout/BaseLayout";
import searchIcon from '../../assets/Projects/search.svg'
import DateIcon from '../../assets/Projects/Date.svg'
import DownloadIcon from '../../assets/Projects/Download.svg'
import { Link } from "react-router-dom";
import { pathList } from "@/routes/routesPaths";
import DateInp from "@/components/DateInput/Date";

const Projects = () => {
  return (
  <BaseLayout>
  <div className="p-5">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-[#224886] text-[25px] font-[600] ">Projects overview</p>
      </div>
      <div className="relative">
        <div className="absolute top-[50%] left-3 translate-y-[-50%] text-[#737373]">
          <img src={searchIcon} alt="searchIcon" />
        </div>
        <input className="w-[520px] h-[52px] rounded-lg ps-10 outline-none" type="text" placeholder="Quick Search..." />
      </div>
      <div className="flex items-center gap-4">

        <DateInp icon={DateIcon} />

        <Link to={pathList.createProject} className="flex items-center gap-2 bg-[#105090] text-white py-3 px-4 rounded-[8px] ">
          <div className="bg-white text-black text-[11px] p-[2px] rounded-[4px]">
            <BiPlus />
          </div>
          Create Projects
        </Link>
      </div>
    </div>
    <div className="TableCompo HideScroll overflow-y-auto mt-8 h-[calc(100vh-268px)] rounded-[20px]  ">
      <ProjectsTable />
    </div>
      <button className="flex bg-[#105090] ms-auto mt-6 me-10 py-[10px] ps-4 pe-5 gap-2 rounded-[10px] text-white ">
        <img src={DownloadIcon} alt="DownloadIcon" />
        Export As PDF
      </button>
  </div>
  </BaseLayout>
  );
};

export default Projects;
