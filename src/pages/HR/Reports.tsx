import EmployeePerformance from "@/features/Reports/employeePerformance/components/EmployeePerformance";
import BaseLayout from "@/layouts/BaseLayout/BaseLayout";
import React from "react";

const HrReports = () => {
  return (
    <BaseLayout>
      <div className='p-6'>
        <EmployeePerformance className='h-[calc(100vh-264px)]' />
      </div>
    </BaseLayout>
  );
};

export default HrReports;
