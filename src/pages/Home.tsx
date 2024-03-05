import BoxStats from "@/features/Home/components/BoxStats";
import BaseLayout from "../layouts/BaseLayout/BaseLayout";

import NavColors from "@/features/Home/components/NavColors";
import PercentageLine from "@/features/Home/components/PercentageLine";
import HomeTable from "@/features/Home/components/HomeTable";
import EmployeeInfo from "@/features/Home/components/EmployeeInfo";
import testImage from "@/assets/home/testImg.svg";
import ManagerInfo from "@/features/Home/components/ManagerInfo";
import BaseAnalytics from "@/features/Home/components/BaseAnalytics";
import ProjectsAnalytics from "@/features/Home/components/ProjectsAnalytics";
import Employees from "@/features/Home/components/Employees";
import Manager from "@/features/Home/components/Manager";

const Home = () => {
  return (
    <BaseLayout>
      <main className='m-6 h-[calc(100%-48px)] w-[calc(100%-48px)] overflow-y-auto HideScroll'>
        <BaseAnalytics />
        <div className='w-full mt-6'>
          <ProjectsAnalytics />
          <div className='h-[400px] rounded-2xl flex items-center gap-6'>
            <Employees />
            <Manager />
          </div>
        </div>
      </main>
    </BaseLayout>
  );
};

export default Home;
