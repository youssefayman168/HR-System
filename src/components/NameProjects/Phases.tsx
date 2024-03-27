import { useState } from "react";
import bold from "../../assets/NameProjects/Bold.svg";
import bTM from "../../assets/NameProjects/ArrowBTM.svg";
import Groupe from "../../assets/NameProjects/Groupe.svg";
import Calendar from "../../assets/NameProjects/Calendar.svg";
import ArrowBottom from "../../assets/NameProjects/PhaseArrowBTM.svg";
import icons from "../../assets/NameProjects/GroupeImg.svg";
import addPlus from "../../assets/NameProjects/addPlus.svg";
import ElementPhase from "./ElementPhase";
import { Link } from "react-router-dom";
import DropDown from "../DropDown/DropDown";
import { format } from "date-fns";
import { colorConditionSwitcher } from "@/features/Home/components/ProjectsAnalytics";
type phaseNum = {
  phaseNum: string;
  projectID: number;
  tasks: any;
};
const Phases = ({ phaseNum, projectID, tasks }: phaseNum) => {
  console.log(tasks);
  const [phaseList, setPhaseList] = useState(false);
  const [openList, setOpenList] = useState(false);

  return (
    <div className='Phases mb-10'>
      <div
        onClick={() => {
          setPhaseList(!phaseList);
        }}
        className='flex cursor-pointer items-center gap-3 text-[#101828] font-[600] text-[19px] mt-2 w-fit '
      >
        <img
          className={`${phaseList ? "rotate-[-90deg]" : ""} duration-300 `}
          src={ArrowBottom}
          alt='ArrowBottom'
        />
        Phase {phaseNum}
      </div>
      <div
        className={` ${
          phaseList ? "h-0 overflow-hidden opacity-0 hidden " : ""
        } duration-200`}
      >
        <div className='header flex items-center border-b-[1px] border-[#DFE2E5] text-[#9295AB] font-[800] pb-4 mt-4 '>
          <p className='w-[15%]'>A Task name</p>
          <div
            onClick={() => setOpenList(!openList)}
            className='w-[15%] cursor-pointer relative flex items-center gap-2'
          >
            <img src={bold} alt='bold' />
            Status
            <img src={bTM} alt='arrowBTM' />
            <DropDown
              text1='All'
              text2='Planning'
              text3='In progress'
              text4='Done'
              text5='Canceled'
              style={{
                height: openList ? "254px" : "0",
                opacity: openList ? "1" : "0",
                visibility: openList ? "visible" : "hidden",
              }}
            />
          </div>
          <div className='w-[15%] flex items-center gap-2'>
            <img src={Calendar} alt='Calendar' />
            Creation Date
          </div>
          <div className='w-[15%] flex items-center gap-2'>
            <img src={Calendar} alt='Calendar' />
            Task Hours
          </div>
        </div>
        {tasks.map((task: any) => (
          <ElementPhase
            taskName={task.title}
            status={task.status}
            icons={icons}
            startDate={format(new Date(task.created_at), "dd MMM yyyy")}
            ExpiryDate={task.hours}
            styleStaus={colorConditionSwitcher(task.status)!}
            contributors={task.contributors}
          />
        ))}
        <Link
          to={`/projects/${projectID}/addTask/${phaseNum}`}
          className='addTask flex items-center gap-2 mt-3 text-[#101828] text-[18px] font-[600] '
        >
          <img src={addPlus} alt='addPlus' />
          Add Task
        </Link>
      </div>
    </div>
  );
};

export default Phases;
