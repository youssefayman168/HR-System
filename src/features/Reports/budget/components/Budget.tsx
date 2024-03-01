import BtnCreate from "@/components/Buttons/BtnCreate"
import ViewInsightGraphBox from "../../components/ViewInsightGraphBox"
import ViewInsightStatsBox from "../../components/ViewInsightStatsBox"
import DownloadIcon from '@/assets/Projects/Download.svg'

const Budget = () => {
    return (
        <>
            <div className="mt-6 rounded-2xl w-full h-[calc(100vh-180px)] bg-white overflow-y-auto HideScroll">
                <div className="flex items-stretch gap-4">
                    <div className="flex-1">
                        <div className="flex items-stretch gap-4">
                            <ViewInsightStatsBox title="Total Projects" value={645} link="View All Projects" statMessage="1% vs Last month" status="increase" />
                            <ViewInsightStatsBox title="Total Tasks" value={645} link="View All Projects" statMessage="1% vs Last month" status="increase" />
                            <ViewInsightStatsBox title="Total Sub Tasks" value={645} link="View All Projects" statMessage="1% vs Last month" status="increase" />
                        </div>
                        <div className="h-[225px] w-full mt-4 rounded-[10px] flex items-center gap-4">
                            <ViewInsightGraphBox title="Total Worked Hours" value="545" message="+2% Past month" status="increase" />
                            <ViewInsightGraphBox title="Total Worked salaries" value="$6978" message="+2% Past month" status="decrease" />
                            <ViewInsightGraphBox title="Total Budget Projects" value="$5676" message="+2% Past month" status="increase" />
                        </div>
                        <ViewInsightGraphBox title="Total Profits" value="$5676" message="+2% Past month" status="increase" style="w-full h-[290px] mt-5" />
                    </div>
                </div>
            </div>
            <div className="w-fit mt-6 ms-auto">
                <BtnCreate icon={DownloadIcon} text='Export As PDF' path='' />
            </div>
        </>
    )
}

export default Budget

