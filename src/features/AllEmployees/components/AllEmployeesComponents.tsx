import { CSSProperties } from "react";

type IProps = {
  employeeImg: any;
  employeeName: string;
  companyName: string;
  departmentName: string;
  positionName: string;
  onViewClick?: any;
  onEditClick?: any;
  onDeleteClick?: any;
  styleDeleteBtn?: CSSProperties;
};

const AllEmployeesComponents = ({
  employeeImg,
  employeeName,
  companyName,
  departmentName,
  positionName,
  onViewClick,
  onEditClick,
  onDeleteClick,
  styleDeleteBtn,
}: IProps) => {
  return (
    <div className=' py-[27px] px-6 gap-6 flex items-center w-full border-b border-b-[#D9D9DB]'>
      <div className='w-[26%] flex items-center gap-2'>
        <img
          src={employeeImg}
          alt='Employee Image'
          className='w-[32px] h-[32px] rounded-full'
        />
        <p className='font-bold'>{employeeName}</p>
      </div>
      <p className='w-[18%]'>{companyName}</p>
      <p className='w-[18%]'>{departmentName}</p>
      <p className='w-[18%]'>{positionName}</p>
      <div className='w-[30%] flex items-center gap-2'>
        <button
          className='py-2 px-6 bg-[#CCE2FF] text-primary rounded-md capitalize font-semibold'
          onClick={onViewClick}
        >view
        </button>
        <button
          className='py-2 px-6 bg-[#CCE2FF] text-primary rounded-md capitalize font-semibold'
          onClick={onEditClick}
        >
          edit
        </button>
        <button
          style={styleDeleteBtn}
          className='py-2 px-6 bg-[#F6DADA] text-[#c71025] rounded-md capitalize font-semibold'
          onClick={onDeleteClick}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default AllEmployeesComponents;
