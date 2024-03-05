import ManagerStatNumber from "./ManagerStatNumber";
import testImg2 from "@/assets/home/testImg2.svg";

const ManagerInfo = ({
  projects,
  subTasks,
  hours,
  username,
}: {
  projects: number;
  subTasks: number;
  hours: number;
  username: string;
}) => {
  return (
    <div className='text-center'>
      <div className='bg-[#F4F7FE] rounded-full w-[130px] h-[130px] flex items-center justify-center mx-auto'>
        <img
          src={testImg2}
          alt=''
          className='w-[100px] h-[100px] rounded-full'
        />
      </div>
      <p className='mt-8 text-primary font-bold text-2xl'>{username}</p>
      <div className='flex items-center gap-10 mt-8'>
        <ManagerStatNumber uint='projects' value={projects} />
        <ManagerStatNumber uint='Sub Tasks' value={subTasks} />
        <ManagerStatNumber uint='Hours' value={hours} />
      </div>
    </div>
  );
};

export default ManagerInfo;
