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

    <ProjectsTable />

  </div>
  </BaseLayout>
  );
};

export default Projects;
