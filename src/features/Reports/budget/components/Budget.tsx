import BtnCreate from "@/components/Buttons/BtnCreate";
import ViewInsightGraphBox from "../../components/ViewInsightGraphBox";
import ViewInsightStatsBox from "../../components/ViewInsightStatsBox";
import DownloadIcon from "@/assets/Projects/Download.svg";
import { useQuery } from "@tanstack/react-query";
import getBudgetAnalytics from "../services/getBudgetAnalytics";

const Budget = () => {
  const budgetAnalytics = useQuery({
    queryKey: ["budgetAnalytics"],
    queryFn: getBudgetAnalytics,
  });
  console.log(budgetAnalytics.data);
  return (
    <>
      <div className='mt-6 rounded-2xl w-full h-[calc(100vh-180px)] bg-white overflow-y-auto HideScroll'>
        <div className='flex items-stretch gap-4'>
          {budgetAnalytics.data && (
            <div className='flex-1'>
              <div className='flex items-stretch gap-4'>
                <ViewInsightStatsBox
                  title='Total Projects'
                  value={budgetAnalytics.data.projects.total}
                  link='View All Projects'
                  statMessage={`${budgetAnalytics.data.projects.monthly.rate}% vs Last month`}
                  status={budgetAnalytics.data.projects.monthly.status}
                />
                <ViewInsightStatsBox
                  title='Total Tasks'
                  value={budgetAnalytics.data.tasks.total}
                  link='View All Projects'
                  statMessage={`${budgetAnalytics.data.tasks.monthly.rate}% vs Last month`}
                  status={budgetAnalytics.data.tasks.monthly.status}
                />
                <ViewInsightStatsBox
                  title='Total Sub Tasks'
                  value={budgetAnalytics.data.subtasks.total}
                  link='View All Projects'
                  statMessage={`${budgetAnalytics.data.subtasks.monthly.rate}% vs Last month`}
                  status={budgetAnalytics.data.subtasks.monthly.status}
                />
              </div>
              <div className='h-[225px] w-full mt-4 rounded-[10px] flex items-center gap-4'>
                <ViewInsightGraphBox
                  title='Total Worked Hours'
                  value={budgetAnalytics.data.worked_hours.total}
                  message={`${
                    budgetAnalytics.data.worked_hours.monthly.status ==
                    "increase"
                      ? "+"
                      : "-"
                  }${
                    budgetAnalytics.data.worked_hours.monthly.rate
                  }% Past month`}
                  status={budgetAnalytics.data.worked_hours.monthly.status}
                />
                <ViewInsightGraphBox
                  title='Total Worked salaries'
                  value={budgetAnalytics.data.worked_salaries.total}
                  message={`${
                    budgetAnalytics.data.worked_salaries.monthly.status ==
                    "increase"
                      ? "+"
                      : "-"
                  }${
                    budgetAnalytics.data.worked_salaries.monthly.rate
                  }% Past month`}
                  status={budgetAnalytics.data.worked_salaries.monthly.status}
                />
                <ViewInsightGraphBox
                  title='Total Budget Projects'
                  value={budgetAnalytics.data.projects_budgets.total}
                  message={`${
                    budgetAnalytics.data.projects_budgets.monthly.status ==
                    "increase"
                      ? "+"
                      : "-"
                  }${
                    budgetAnalytics.data.projects_budgets.monthly.rate
                  }% Past month`}
                  status={budgetAnalytics.data.projects_budgets.monthly.status}
                />
              </div>
              <ViewInsightGraphBox
                title='Total Profits'
                value={budgetAnalytics.data.total_profits}
                // message='+2% Past month'
                // status='increase'
                style='w-full h-[290px] mt-5'
              />
            </div>
          )}
        </div>
      </div>
      <div className='w-fit mt-6 ms-auto'>
        <BtnCreate icon={DownloadIcon} text='Export As PDF' path='' />
      </div>
    </>
  );
};

export default Budget;
