import BaseLayout from "../../layouts/BaseLayout/BaseLayout";

import DownloadIcon from "../../assets/Projects/Download.svg";
import TasksTable from "@/components/Table/TasksTable/TasksTable";
import BtnCreate from "@/components/Buttons/BtnCreate";
import TasksHeader from "@/features/Tasks/components/TasksHeader";
import { useQuery } from "@tanstack/react-query";
import getAllProjects from "@/features/Projects/all/services/getAllProjects";

const Tasks = () => {
  const projects = useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjects,
  });
  console.log(projects.data);
  return (
    <BaseLayout>
      <div className='p-5'>
        <div className='HideScroll h-[calc(100vh-185px)] overflow-y-auto rounded-[15px] '>
          <TasksHeader />
          {projects.data?.map((project: any) => (
            <TasksTable
              projectName={project?.project_name}
              tasksCount={project?.tasks.length}
              tasks={project?.tasks}
              key={project.id}
              projectID={project.id}
            />
          ))}
        </div>
        <div className='w-fit ms-auto mt-5'>
          <BtnCreate icon={DownloadIcon} text='Export As PDF' path='' />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Tasks;
