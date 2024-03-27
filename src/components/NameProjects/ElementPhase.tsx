import React, { CSSProperties } from "react";
import DeleteIcon from "../../assets/Projects/Delete.svg";
import EditIcon from "../../assets/Projects/Edit.svg";

type elementPhase = {
  taskName: string;
  status: string;
  icons: string;
  startDate: string;
  ExpiryDate: string;
  styleStaus: string;
  contributors: any;
};

const ElementPhase = ({
  taskName,
  status,
  icons,
  startDate,
  ExpiryDate,
  styleStaus,
  contributors,
}: elementPhase) => {
  console.log(
    contributors?.map((contributor: any) => console.log(contributor))
  );
  return (
    <div className='Body text-[#9295AB] font-[600] flex items-center mt-5 pb-5 border-b-[1px] border-[#DFE2E5]'>
      <p className='w-[15%] text-[#105090]'>{taskName}</p>
      <div className='w-[15%]'>
        <p
          style={{
            background:
              styleStaus === "progress"
                ? "#E6EFFC"
                : styleStaus === "canceled"
                ? "#FFE3E3"
                : styleStaus === "planning"
                ? "#FFE9E0"
                : styleStaus === "done"
                ? "#DEFFE1"
                : "",
            color:
              styleStaus === "progress"
                ? "#0764E6"
                : styleStaus === "canceled"
                ? "#A00"
                : styleStaus === "planning"
                ? "#FF793F"
                : styleStaus === "done"
                ? "#34E045"
                : "",
          }}
          className='w-[116px] text-center py-[6px] px-4 rounded-[6px] text-[17px] '
        >
          {status}
        </p>
      </div>
      <p className='w-[15%]'>{startDate}</p>
      <p className='w-[15%]'>{ExpiryDate}</p>
      <div className='flex items-center gap-4 ms-auto'>
        <img
          className='bg-[#DEFFE1] cursor-pointer py-[10px] px-[10px] rounded-full flex-1 '
          src={EditIcon}
          alt='EditIcon'
        />
        <img
          className='cursor-pointer flex-1'
          src={DeleteIcon}
          alt='DeleteIcon'
        />
      </div>
    </div>
  );
};

export default ElementPhase;
