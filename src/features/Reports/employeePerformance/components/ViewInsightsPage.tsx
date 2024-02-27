import BaseLayout from "@/layouts/BaseLayout/BaseLayout"
import ViewInsightStatsBox from "../../components/ViewInsightStatsBox"

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
                            <div className="bg-blue-500 h-[225px] w-full mt-4 rounded-[10px]"></div>
                        </div>
                        <div className=" bg-red-500 w-[40%] "></div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}

export default ViewInsightsPage