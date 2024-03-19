import ManagerInfo from "./ManagerInfo";
import { useQuery } from "@tanstack/react-query";
import globalServices from "@/utils/globals.services";

const Manager = () => {
  const managerData = useQuery({
    queryKey: ["myProfile"],
    queryFn: globalServices.getPersonalInfo,
  });
  console.log(managerData.data);
  return (
    <div className='w-[40%] bg-white rounded-2xl h-full flex items-center justify-center'>
      <ManagerInfo
        projects={managerData?.data?.total_projects_worked_on}
        subTasks={managerData?.data?.total_subtasks}
        hours={managerData?.data?.total_work_hours}
        username={managerData?.data?.name}
      />
    </div>
  );
};

export default Manager;
