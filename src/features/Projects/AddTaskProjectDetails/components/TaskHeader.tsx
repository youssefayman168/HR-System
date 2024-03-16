import { pathList } from "@/routes/routesPaths";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import ArrowLeft from "@/assets/CreateProjects/ArrowLeft.svg";

const TaskHeader = () => {
  return (
    <div className='header'>
      <Link
        to={pathList.projectDetails}
        className='flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold '
      >
        <img src={ArrowLeft} alt='ArrowLeft' />
        Projects overview
        <BiChevronRight />
        Name Projects
        <BiChevronRight />
        Add Task
      </Link>
    </div>
  );
};

export default React.memo(TaskHeader);
