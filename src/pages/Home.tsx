import BoxStats from "@/features/Home/components/BoxStats";
import BaseLayout from "../layouts/BaseLayout/BaseLayout"
import employeesIcon from '@/assets/home/employees.svg'
import projectsIcon from '@/assets/home/projectsIcon.svg'
import timeIcon from '@/assets/home/timeIcon.svg'
import dollarIcon from '@/assets/home/dollarIcon.svg'

const Home = () => {

    return (
        <BaseLayout>
            <main className="m-6 h-[calc(100%-48px)] w-[calc(100%-48px)]">
                <div className="flex items-stretch justify-between gap-6">
                    <BoxStats titleName="Total Employees" employeesNumber="2 new employees added!" mainNumber={452} mainIcon={<img src={employeesIcon} />} messageIcon={'new'} />
                    <BoxStats titleName="Total Projects" employeesNumber="10% higher than yesterday" mainNumber={300} mainIcon={<img src={projectsIcon} />} messageIcon={'increase'} />
                    <BoxStats titleName="Working Hours" employeesNumber="-10% less than yesterday" mainNumber={600} mainIcon={<img src={timeIcon} />} messageIcon={'decrease'} unit="hours" />
                    <BoxStats titleName="Budget Projects" employeesNumber="10% higher than yesterday" mainNumber={1500} mainIcon={<img src={dollarIcon} />} messageIcon={'increase'} unit="dollar" />
                </div>
                <div className="bg-white w-full h-[calc(100vh-295px)] mt-6">
                    <div className="bg-black h-1/2"></div>
                    <div className="bg-blue-500 h-1/2"></div>
                </div>
            </main>
        </BaseLayout>
    );
};

export default Home;
