import React from "react";
import NavColors from "./NavColors";
import PercentageLine from "./PercentageLine";
import { useQuery } from "@tanstack/react-query";
import getProjects from "@/features/Home/services/getProjects";

export const colorConditionSwitcher = (status: string) => {
  switch (status) {
    case "Completed":
      return "done";
    case "Hold":
      return "planning";
    case "Declined":
      return "canceled";
    case "In-Progress":
      return "progress";
  }
};

const ProjectsAnalytics = () => {
  const projects = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });
  console.log(projects.data);
  return (
    <div className='bg-white rounded-2xl mb-6 p-7 h-[400px] overflow-hidden'>
      <h3 className='text-grayColor'>Statistics</h3>
      <div className='flex items-center gap-12 pb-7 border-b border-b-[#E5E5EF]'>
        <h4 className='text-primary font-bold text-[22px]'>Projects</h4>
        <div className='flex items-center gap-5'>
          <NavColors text='Planning' bgColor='#FF793F' />
          <NavColors text='In progress' bgColor='#0764E6' />
          <NavColors text='Canceled' bgColor='#E03434' />
          <NavColors text='Done' bgColor='#34E045' />
        </div>
      </div>
      <div className='mt-7 overflow-y-auto HideScroll h-full pb-4'>
        {projects.data?.map((project: any) => (
          <PercentageLine
            title={project.project_name}
            colorCondition={colorConditionSwitcher(project.status)!}
            lineWidth={
              project.worked_hours == 0
                ? 0
                : (project.worked_hours / project.work_hours) * 100
            }
            value={
              project.worked_hours <= 0
                ? "0%"
                : project.worked_hours >= 100
                ? "100%"
                : String(
                    ((project.worked_hours / project.work_hours) * 100).toFixed(
                      0
                    )
                  ) + "%"
            }
            key={project.id}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(ProjectsAnalytics);
