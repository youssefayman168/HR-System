import ViewInsightStatsBox from "@/features/Reports/components/ViewInsightStatsBox"
import ProjectsElm from "./ProjectsElm"
import getTotalTasks from "@/features/profile/services/getTotalTasks"
import { useQuery } from "@tanstack/react-query"
import Loading from "../Loading/Loading"
import { useEffect, useState } from "react"
import formatMoney from "@/utils/formatMoney"
import formatTime from "@/utils/formatTime"

const WorkedProjectsTab = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['totalTasks'],
    queryFn: getTotalTasks
  })

  const [totalBudget, setTotalBudget] = useState(0);

  // Calculate Total Budget
  useEffect(() => {
    const total = data?.data?.projects?.reduce((acc: any, { budget }: any) => acc + budget, 0);
    setTotalBudget(Number(total));
  }, [data]);

  return (
    <>
      {isLoading ?
        <Loading />
        :
        <div>
          <div className='flex gap-5 mt-5 '>
            <ViewInsightStatsBox
              title="Total Projects"
              value={data?.data?.total_projects_month}
              statMessage={`${data?.data?.project_increase_rate}% vs Last Month`}
              status={
                data?.data?.project_increase_rate < 0 ?
                  "decrease"
                  :
                  data?.data?.project_increase_rate > 0 ?
                    "increase"
                    :
                    ''}
            />
            <ViewInsightStatsBox
              title="Total Tasks"
              value={data?.data?.total_tasks_month}
              statMessage={`${data?.data?.tasks_increase_rate}% vs Last month`}
              status={
                data?.data?.tasks_increase_rate < 0 ?
                  "decrease"
                  :
                  data?.data?.tasks_increase_rate > 0 ?
                    "increase"
                    :
                    ''
              }
            />
            <ViewInsightStatsBox
              title="Total Budget Projects"
              value={formatMoney(totalBudget)}
              statMessage={``}
              status={''} />
          </div>
          <div className='flex gap-5 mt-5 '>
            <ViewInsightStatsBox
              title="Total Sub Tasks"
              value={data?.data?.total_subtasks_month}
              statMessage={`${data?.data?.subtasks_increase_rate}% vs Last Month`}
              status={
                data?.data?.subtasks_increase_rate < 0 ?
                  "decrease"
                  :
                  data?.data?.subtasks_increase_rate > 0 ?
                    "increase"
                    :
                    ''
              }
            />
            <ViewInsightStatsBox
              title="Total Worked Hours"
              value={formatTime(data?.data?.total_hours_month)}
              statMessage={`${data?.data?.hours_increase_rate}% vs Last Month`}
              status={
                data?.data?.hours_increase_rate < 0 ?
                  "decrease"
                  :
                  data?.data?.hours_increase_rate > 0 ?
                    "increase"
                    :
                    ''
              } />
          </div>
          <div className="my-5">
            {data?.data?.projects?.map(({ project_name, created_at }: any) => {
              return <ProjectsElm text={project_name} time={created_at} />
            })}
          </div>
        </div>
      }
    </>
  )
}

export default WorkedProjectsTab