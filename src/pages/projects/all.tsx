import { BiPlus } from "react-icons/bi";
import ProjectsTable from "@/components/Table/ProjectsTable";
import BaseLayout from "@/layouts/BaseLayout/BaseLayout";
import { Link } from "react-router-dom";
import { pathList } from "@/routes/routesPaths";

const Projects = () => {
  return (
  <BaseLayout>
  <div className="p-5">
    <div className="flex items-center justify-between mb-10">
      <div>
        <p className="text-[#224886] text-[25px] font-[600] ">Projects overview</p>
      </div>
      <div className="relative">
        <div className="absolute top-[50%] left-3 translate-y-[-50%] text-[#737373]">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0174 8.36541C11.6258 9.41748 11.6492 10.6746 12.4431 11.4683L13.5123 12.5373C13.7817 12.8065 13.7817 13.2431 13.5124 13.5124C13.2431 13.7817 12.8065 13.7817 12.5373 13.5123L11.4683 12.4431C10.6746 11.6492 9.41748 11.6258 8.36541 12.0174C7.67833 12.2731 6.94627 12.4063 6.20262 12.4052C2.77877 12.4052 0 9.62646 0 6.20262C0 2.77877 2.77877 0 6.20262 0C9.62646 0 12.4052 2.77877 12.4052 6.20262C12.4063 6.94627 12.2731 7.67833 12.0174 8.36541ZM9.66575 9.56237C10.5404 8.66291 11.0289 7.45722 11.0269 6.20262C11.0269 3.53756 8.86768 1.37836 6.20262 1.37836C3.53756 1.37836 1.37836 3.53756 1.37836 6.20262C1.37836 8.86768 3.53756 11.0269 6.20262 11.0269C7.45722 11.0289 8.66291 10.5404 9.56237 9.66575L9.66575 9.56237Z" fill="#9295AB"/></svg>
        </div>
        <input className="w-[520px] h-[52px] rounded-lg ps-10 outline-none" type="text" placeholder="Quick Search..." />
      </div>
      <div className="flex items-center gap-4">

        <p className="text-[#224886] flex items-center gap-2 py-3 px-4 rounded-[8px] border-[1px] border-[#224886] ">29 July 2023 <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5556 2.44434H2.44444C1.6467 2.44434 1 3.09104 1 3.88878V13.9999C1 14.7976 1.6467 15.4443 2.44444 15.4443H12.5556C13.3533 15.4443 14 14.7976 14 13.9999V3.88878C14 3.09104 13.3533 2.44434 12.5556 2.44434Z" stroke="#105090" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.3889 1V3.88889M4.61111 1V3.88889M1 6.77778H14" stroke="#105090" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> </p>
        

        <Link to={pathList.createProject} className="flex items-center gap-2 bg-[#105090] text-white py-3 px-4 rounded-[8px] ">
          <div className="bg-white text-black text-[11px] p-[2px] rounded-[4px]">
            <BiPlus />
          </div>
          Create Projects
        </Link>
      </div>
    </div>
    <div className="TableCompo">
      <ProjectsTable />
    </div>
    <button className="flex bg-[#105090] ms-auto mt-6 me-10 py-[10px] ps-4 pe-5 gap-2 rounded-[10px] text-white ">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.8243 7.5H12.4993V3.33333C12.4993 2.875 12.1243 2.5 11.666 2.5H8.33268C7.87435 2.5 7.49935 2.875 7.49935 3.33333V7.5H6.17435C5.43268 7.5 5.05768 8.4 5.58268 8.925L9.40768 12.75C9.73268 13.075 10.2577 13.075 10.5827 12.75L14.4077 8.925C14.9327 8.4 14.566 7.5 13.8243 7.5ZM4.16602 15.8333C4.16602 16.2917 4.54102 16.6667 4.99935 16.6667H14.9993C15.4577 16.6667 15.8327 16.2917 15.8327 15.8333C15.8327 15.375 15.4577 15 14.9993 15H4.99935C4.54102 15 4.16602 15.375 4.16602 15.8333Z" fill="white"/></svg>
      Export As PDF
    </button>
  </div>
  </BaseLayout>
  );
};

export default Projects;
