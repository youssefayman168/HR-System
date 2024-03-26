import BaseLayout from "@/layouts/BaseLayout/BaseLayout";
import ViewInsightStatsBox from "../../components/ViewInsightStatsBox";
import ViewInsightGraphBox from "../../components/ViewInsightGraphBox";
import InsightsEmployeeInfo from "../../components/InsightsEmployeeInfo";
import ProjectTime from "../../components/ProjectTime";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getInsights from "../services/getInsights";
import { format, subDays } from "date-fns";

const ViewInsightsPage = () => {
  const { userID } = useParams();
  const insights = useQuery({
    queryKey: ["user-insights", userID],
    queryFn: () => {
      return getInsights(Number(userID!));
    },
  });
  console.log(insights.data?.data);
  return (
    <BaseLayout>
      <div className='p-6'>
        <h1 className='text-primary font-bold text-2xl'>Reports</h1>
        <div className='mt-6 rounded-2xl w-full h-[calc(100vh-180px)] bg-white p-6 overflow-y-auto HideScroll'>
          <div className='flex items-stretch gap-4'>
            <div className='flex-1'>
              <div className='flex items-stretch gap-4'>
                <ViewInsightStatsBox
                  title='Total Projects'
                  value={insights.data?.data.total_projects_month}
                  link='View All Projects'
                  statMessage={`${insights.data?.data.project_increase_rate}% vs Last month`}
                  status={
                    insights.data?.data.project_increase_rate > 0
                      ? "increase"
                      : "decreause"
                  }
                />
                <ViewInsightStatsBox
                  title='Total Tasks'
                  link='View All Projects'
                  value={insights.data?.data.total_tasks_month}
                  statMessage={`${insights.data?.data.tasks_increase_rate}% vs Last month`}
                  status={
                    insights.data?.data.tasks_increase_rate > 0
                      ? "increase"
                      : "decreause"
                  }
                />
                <ViewInsightStatsBox
                  title='Total Sub Tasks'
                  link='View All Projects'
                  value={insights.data?.data.total_subtasks_month}
                  statMessage={`${insights.data?.data.subtasks_increase_rate}% vs Last month`}
                  status={
                    insights.data?.data.subtasks_increase_rate > 0
                      ? "increase"
                      : "decreause"
                  }
                />
              </div>
              <div className='h-[225px] w-full mt-4 rounded-[10px] flex items-center gap-4'>
                <ViewInsightGraphBox
                  title='Total Worked Hours'
                  value={insights.data?.data.total_hours_month}
                  message={`${
                    insights.data?.data.hours_increase_rate > 0 ? "+" : "-"
                  }${insights.data?.data.hours_increase_rate}% Past month`}
                  status={`${
                    insights.data?.data.hours_increase_rate > 0
                      ? "increase"
                      : "decrease"
                  }`}
                />
                <ViewInsightGraphBox
                  title='Total Pay Per Hour'
                  value={insights.data?.data.user_info.hr_rate}
                />
              </div>
            </div>
            <div className='border border-[#E0E0E0] rounded-[10px] w-[42%] flex items-center p-6'>
              <InsightsEmployeeInfo userInfo={insights.data?.data.user_info} />
            </div>
          </div>
          <div className='mt-4 border border-[#E0E0E0] rounded-[10px] w-full h-[calc(100vh-680px)] p-5 overflow-y-auto HideScroll'>
            <p className='font-semibold text-primary text-xl mb-10'>Projects</p>
            {insights.data?.data.projects.map((project: any) => (
              <ProjectTime
                title={project.project_name}
                time={format(subDays(new Date(project.created_at), 1), "dd")}
              />
            ))}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default ViewInsightsPage;
