import BoxStats from "./BoxStats";
import employeesIcon from "@/assets/home/employees.svg";
import projectsIcon from "@/assets/home/projectsIcon.svg";
import timeIcon from "@/assets/home/timeIcon.svg";
import dollarIcon from "@/assets/home/dollarIcon.svg";
import { useQuery } from "@tanstack/react-query";
import getEmployeesAnalytics from "@/features/Home/services/getEmployeesAnalytics";
import getProjectsAnalytics from "../services/getProjectsAnalytics";
import getWorkingHours from "../services/getWorkingHours";
import getProjectBudgets from "../services/getProjectBudgets";
import formatMoney from "@/utils/formatMoney";
import formatTime from "@/utils/formatTime";

const BaseAnalytics = () => {
  const employees = useQuery({
    queryKey: ["employeesAnalytics"],
    queryFn: getEmployeesAnalytics,
  });
  const projects = useQuery({
    queryKey: ["projectsAnalytics"],
    queryFn: getProjectsAnalytics,
  });
  const workingHrs = useQuery({
    queryKey: ["workingHrs"],
    queryFn: getWorkingHours,
  });
  const projectsBudgets = useQuery({
    queryKey: ["projectsBudgets"],
    queryFn: getProjectBudgets,
  });

  const formattedMoney = formatMoney(projectsBudgets?.data?.data?.total_budget_today)
  console.log(formatTime(workingHrs.data?.data.total_wh_today))
  return (
    <div className='flex items-stretch justify-between gap-6'>
      {!employees.isPending && (
        <BoxStats
          titleName='Total Employees'
          employeesNumber={`${employees.data?.data.new_employees_count} new employees added!`}
          mainNumber={Number(employees.data?.data.employees_count)}
          mainIcon={<img src={employeesIcon} />}
          messageIcon={"new"}
        />
      )}
      {!projects.isPending && (
        <BoxStats
          titleName='Total Projects'
          employeesNumber={`${projects.data?.data.increase_rate}% higher than yesterday`}
          mainNumber={projects.data?.data.total_projects_today}
          mainIcon={<img src={projectsIcon} />}
          messageIcon={
            projects.data?.data.increase_rate > 0 ? "increase" : "decrease"
          }
        />
      )}
      {!workingHrs.isPending && (
        <BoxStats
          titleName='Working Hours'
          employeesNumber={`${workingHrs.data?.data.increase_rate}% less than yesterday`}
          mainNumber={formatTime(workingHrs.data?.data.total_wh_today)}
          mainIcon={<img src={timeIcon} />}
          messageIcon={
            workingHrs.data?.data.increase_rate > 0 ? "increase" : "decrease"
          }
          unit
        />
      )}
      {!projectsBudgets.isPending && (
        <BoxStats
          titleName='Budget Projects'
          employeesNumber={`${projectsBudgets.data.data.increase_rate}% higher than yesterday`}
          mainNumber={formattedMoney}
          mainIcon={<img src={dollarIcon} />}
          messageIcon={
            projectsBudgets.data?.data.increase_rate > 0
              ? "increase"
              : "decrease"
          }
          unit
        />
      )}
    </div>
  );
};

export default BaseAnalytics;
