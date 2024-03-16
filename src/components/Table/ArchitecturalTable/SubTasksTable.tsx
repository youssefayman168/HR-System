import { useState } from "react";
import DropIcon from "../../../assets/Projects/DropDown.svg";
import ArchitecturalElement from "./ArchitecturalElement";
import DropDown from "@/components/DropDown/DropDown";
import { format } from "date-fns";

const SubTasksTable = ({
  subtasks,
  projectName,
  taskName,
}: {
  subtasks: any;
  projectName: string;
  taskName: string;
}) => {
  console.log(subtasks);
  const [openList, setOpenList] = useState<boolean>(false);
  return (
    <div>
      <div className='bg-white duration-300 rounded-[15px] px-10'>
        <div className='w-full text-start '>
          <div className='text-[#9295AB]'>
            <div className='border-b-[2px] font-[600] border-[#a0aaca80] py-7 flex items-center gap-[10px] '>
              <p className='w-[15%]  '>Projects</p>
              <p className='w-[12%]  '>Task</p>
              <p className='w-[12%]  '>SubTask</p>
              <p className='w-[12%]  '>Starting date</p>
              <p className='w-[12%]  '>Suspended</p>
              <div className='relative w-[12%]   cursor-pointer '>
                <div
                  className='flex items-center justify-start gap-2'
                  onClick={() => setOpenList(!openList)}
                >
                  Status
                  <img src={DropIcon} alt='DropIcon' />
                </div>
                <DropDown
                  style={{
                    height: openList ? "254px" : "0",
                    opacity: openList ? "1" : "0",
                    visibility: openList ? "visible" : "hidden",
                  }}
                  text1='All'
                  text2='Planning'
                  text3='In progress'
                  text4='Done'
                  text5='Canceled'
                />
              </div>
              <p className='w-[12%]  '>Task Hours</p>
            </div>
            <div className='Body HideScroll h-[calc(100vh-405px)] overflow-y-auto '>
              {subtasks?.map((subTask: any) => (
                <ArchitecturalElement
                  text1={projectName}
                  text2={taskName}
                  text3={subTask.name}
                  text4={format(new Date(subTask.created_at), "dd MMM yyyy")}
                  text5={subTask.suspended ? "Yes" : "No"}
                  text6={subTask.approved ? "Approved" : "Pending"}
                  text7={subTask.hours}
                  styleStaus={subTask.approved ? "done" : "progress"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubTasksTable;
