import React from "react";
import DateInp from "@/components/DateInput/Date";
import searchIcon from "@/assets/Projects/search.svg";
import DateIcon from "@/assets/Projects/Date.svg";
import plus from "@/assets/plus.svg";
import BtnCreate from "@/components/Buttons/BtnCreate";
import { pathList } from "@/routes/routesPaths";
const TasksHeader = ({
  onSearch,
  onSelectDate,
}: {
  onSearch?: (text: string) => any;
  onSelectDate?: (date: string) => any;
}) => {
  return (
    <div className='flex items-center justify-between'>
      <div>
        <p className='text-[#224886] text-[25px] font-[600] '>Tasks</p>
      </div>
      <div className='relative'>
        <div className='absolute top-[50%] left-3 translate-y-[-50%] text-[#737373]'>
          <img src={searchIcon} alt='searchIcon' />
        </div>
        <input
          className='w-[520px] h-[52px] rounded-lg ps-10 outline-none'
          type='text'
          placeholder='Quick Search...'
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </div>
      <div className='flex items-center gap-4'>
        <DateInp
          icon={DateIcon}
          styles={{ flexDirection: "row-reverse" }}
          stylesInp={{ display: "flex", flexDirection: "row-reverse" }}
          onSelectDate={(date) => onSelectDate?.(date)}
        />

        <BtnCreate
          text='Create Task'
          icon={plus}
          path={pathList.projectDetailsAddTask}
        />
      </div>
    </div>
  );
};

export default React.memo(TasksHeader);
