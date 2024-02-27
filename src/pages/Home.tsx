import BoxStats from "@/features/Home/components/BoxStats";
import BaseLayout from "../layouts/BaseLayout/BaseLayout";
import employeesIcon from "@/assets/home/employees.svg";
import projectsIcon from "@/assets/home/projectsIcon.svg";
import timeIcon from "@/assets/home/timeIcon.svg";
import dollarIcon from "@/assets/home/dollarIcon.svg";
import NavColors from "@/features/Home/components/NavColors";
import PercentageLine from "@/features/Home/components/PercentageLine";
import HomeTable from "@/features/Home/components/HomeTable";
import EmployeeInfo from "@/features/Home/components/EmployeeInfo";
import testImage from "@/assets/home/testImg.svg";
import ManagerInfo from "@/features/Home/components/ManagerInfo";

const Home = () => {
  return (
    <BaseLayout>
      <main className='m-6 h-[calc(100%-48px)] w-[calc(100%-48px)] overflow-y-auto HideScroll'>
        <div className='flex items-stretch justify-between gap-6'>
          <BoxStats
            titleName='Total Employees'
            employeesNumber='2 new employees added!'
            mainNumber={452}
            mainIcon={<img src={employeesIcon} />}
            messageIcon={"new"}
          />
          <BoxStats
            titleName='Total Projects'
            employeesNumber='10% higher than yesterday'
            mainNumber={300}
            mainIcon={<img src={projectsIcon} />}
            messageIcon={"increase"}
          />
          <BoxStats
            titleName='Working Hours'
            employeesNumber='-10% less than yesterday'
            mainNumber={600}
            mainIcon={<img src={timeIcon} />}
            messageIcon={"decrease"}
            unit='hours'
          />
          <BoxStats
            titleName='Budget Projects'
            employeesNumber='10% higher than yesterday'
            mainNumber={1500}
            mainIcon={<img src={dollarIcon} />}
            messageIcon={"increase"}
            unit='dollar'
          />
        </div>
        <div className='w-full mt-6'>
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
              <PercentageLine
                title='Dubai Capital Project'
                colorCondition='done'
                lineWidth={100}
                value='100%'
              />
              <PercentageLine
                title='Administrative capital'
                colorCondition='progress'
                lineWidth={55}
                value='55%'
              />
              <PercentageLine
                title='Dubai hotel'
                colorCondition='canceled'
                lineWidth={90}
                value='90%'
              />
              <PercentageLine
                title='Administrative capital'
                colorCondition='progress'
                lineWidth={55}
                value='55%'
              />
              <PercentageLine
                title='Riyadh Compound'
                colorCondition='planning'
                lineWidth={98}
                value='98%'
              />
              <PercentageLine
                title='Dubai hotel'
                colorCondition='canceled'
                lineWidth={90}
                value='90%'
              />
              <PercentageLine
                title='Riyadh Compound'
                colorCondition='planning'
                lineWidth={98}
                value='98%'
              />
            </div>
          </div>
          <div className='h-[400px] rounded-2xl flex items-center gap-6'>
            <div className='flex-1 bg-white rounded-2xl h-full overflow-hidden'>
              <HomeTable>
                <EmployeeInfo
                  image={testImage}
                  employeeName='Abdelrahman Mustafa'
                  profession='front-end developer'
                  projects={75}
                  subTask={57}
                  hours={523}
                />
                <EmployeeInfo
                  image={testImage}
                  employeeName='Yousef Ayman'
                  profession='back-end developer'
                  projects={75}
                  subTask={57}
                  hours={523}
                />
                <EmployeeInfo
                  image={testImage}
                  employeeName='Abdelrahman Mustafa'
                  profession='front-end developer'
                  projects={75}
                  subTask={57}
                  hours={523}
                />
                <EmployeeInfo
                  image={testImage}
                  employeeName='Yousef Ayman'
                  profession='back-end developer'
                  projects={75}
                  subTask={57}
                  hours={523}
                />
                <EmployeeInfo
                  image={testImage}
                  employeeName='Abdelrahman Mustafa'
                  profession='front-end developer'
                  projects={75}
                  subTask={57}
                  hours={523}
                />
                <EmployeeInfo
                  image={testImage}
                  employeeName='Yousef Ayman'
                  profession='back-end developer'
                  projects={75}
                  subTask={57}
                  hours={523}
                />
              </HomeTable>
            </div>
            <div className='w-[40%] bg-white rounded-2xl h-full flex items-center justify-center'>
              <ManagerInfo />
            </div>
          </div>
        </div>
      </main>
    </BaseLayout>
  );
};

export default Home;
