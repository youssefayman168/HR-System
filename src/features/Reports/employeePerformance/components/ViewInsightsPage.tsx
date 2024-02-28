import BaseLayout from "@/layouts/BaseLayout/BaseLayout"
import ViewInsightStatsBox from "../../components/ViewInsightStatsBox"
import ViewInsightGraphBox from "../../components/ViewInsightGraphBox"
import InsightsEmployeeInfo from "../../components/InsightsEmployeeInfo"
import ProjectTime from "../../components/ProjectTime"

const ViewInsightsPage = () => {
    return (
        <BaseLayout>
            <div className="p-6">
                <h1 className='text-primary font-bold text-2xl'>
                    Reports
                </h1>
                <div className="mt-6 rounded-2xl w-full h-[calc(100vh-180px)] bg-white p-6 overflow-y-auto HideScroll">
                    <div className="flex items-stretch gap-4">
                        <div className="flex-1">
                            <div className="flex items-stretch gap-4">
                                <ViewInsightStatsBox title="Total Projects" value={24} link="View All Projects" statMessage="1% vs Last month" status="increase" />
                                <ViewInsightStatsBox title="Total Tasks" value={24} link="View All Projects" statMessage="1% vs Last month" status="increase" />
                                <ViewInsightStatsBox title="Total Sub Tasks" value={24} link="View All Projects" statMessage="1% vs Last month" status="increase" />
                            </div>
                            <div className="h-[225px] w-full mt-4 rounded-[10px] flex items-center gap-4">
                                <ViewInsightGraphBox title="Total Worked Hours" value="545" message="+2% Past month" status="increase" />
                                <ViewInsightGraphBox title="Total Pay Per Hour this month" value="$6978" message="+2% Past month" status="decrease" />
                            </div>
                        </div>
                        <div className="border border-[#E0E0E0] rounded-[10px] w-[42%] flex items-center p-6">
                            <InsightsEmployeeInfo />
                        </div>
                    </div>
                    <div className="mt-4 border border-[#E0E0E0] rounded-[10px] w-full h-[calc(100vh-680px)] p-5 overflow-y-auto HideScroll">
                        <p className="font-semibold text-primary text-xl mb-10">Projects</p>
                        <ProjectTime title="Meeting HR Department" time="Yesterday, 12:30 PM" />
                        <ProjectTime title="Meeting HR Department" time="Yesterday, 12:30 PM" />
                        <ProjectTime title="Meeting HR Department" time="Yesterday, 12:30 PM" />
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}

export default ViewInsightsPage