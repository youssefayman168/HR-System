import React from "react";
import HomeTable from "./HomeTable";
import EmployeeInfo from "./EmployeeInfo";
import testImage from "@/assets/home/testImg.svg";
import { useQuery } from "@tanstack/react-query";
import getEmployees from "../services/getEmployees";

const Employees = () => {
  const employees = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
  });
  console.log(employees.data?.data);
  return (
    <div className='flex-1 bg-white rounded-2xl h-full overflow-hidden'>
      <HomeTable>
        {!employees.isPending &&
          employees.data?.data.map((employee: any) => (
            <EmployeeInfo
              image={`https://sec-system-apis.up.railway.app${employee?.image}`}
              employeeName={employee.name}
              profession={employee.position}
              projects={employee.total_projects_worked_on}
              subTask={employee.total_subtasks}
              hours={employee.total_work_hours}
              key={employee.id}
            />
          ))}
      </HomeTable>
    </div>
  );
};

export default React.memo(Employees);
