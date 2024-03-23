type IProps = {
  id: number;
  allProjects: string;
  companyName: string;
  projectBudget: string;
  workHours: string;
};

const ProjectCostElement = ({
  id,
  allProjects,
  companyName,
  projectBudget,
  workHours,
}: IProps) => {
  console.log(id);
  return (
    <div className=' py-7 px-6 gap-6 flex items-center w-full border-b border-b-[#D9D9DB]'>
      <p className='w-[20%]'>{id}</p>
      <p className='w-[20%]'>{allProjects}</p>
      <p className='w-[20%]'>{companyName}</p>
      <p className='w-[20%]'>{projectBudget}$</p>
      <p className='w-[20%]'>{workHours}h</p>
    </div>
  );
};

export default ProjectCostElement;
