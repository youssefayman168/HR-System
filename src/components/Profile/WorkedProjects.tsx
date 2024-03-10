import ViewInsightGraphBox from "@/features/Reports/components/ViewInsightGraphBox"
import ViewInsightStatsBox from "@/features/Reports/components/ViewInsightStatsBox"
import DateInp from "../DateInput/Date"
import Calendar from '../../assets/Analysis/Calendar.svg'
import DownLoad from '../../assets/Projects/Download.svg'
import ProjectsElm from "./ProjectsElm"
import BtnCreate from "../Buttons/BtnCreate"

const WorkedProjects = () => {
  return (
    <>
    <div className='flex gap-5 mt-5 '>
        <ViewInsightStatsBox title="Total Projects" value={24} link="View All Projects" statMessage="10% vs Last Month" status="decrease" />
        <ViewInsightStatsBox title="Total Tasks" value={10} link="View All Projects" statMessage="10% vs Last month" status="increase" />
        <ViewInsightStatsBox title="Total Sub Tasks" value={24} link="View All Projects" statMessage="1% vs Last Month" status="decrease" />
    </div>
    <div className='flex gap-5 mt-5 '>
        <ViewInsightGraphBox title="Total Budget Projects" value="$5676" message="+2% Past month" status="increase" style='h-[230px]' />
        <ViewInsightGraphBox title="Total Worked salaries" value="$6978" message="+2% Past month" status="decrease" style='h-[230px]' />
    </div>
    <div className='w-fit ms-auto my-5'>
        <DateInp icon={Calendar} styles={{ color: "black", border: "1px solid #00000033", flexDirection: "row-reverse" }} stylesInp={{ display: "flex", flexDirection: "row-reverse" }} />
    </div>
    <div>
        <ProjectsElm text='Outing schedule for every departement' time='5 Minutes ago' />
        <ProjectsElm text='Outing schedule for every departement' time='5 Minutes ago' />
        <ProjectsElm text='Outing schedule for every departement' time='5 Minutes ago' />
        <ProjectsElm text='Outing schedule for every departement' time='5 Minutes ago' />
    </div>
    <div className='w-fit ms-auto mt-6'>
        <BtnCreate text='Export As PDF' icon={DownLoad} path='' />
    </div>
    </>
  )
}

export default WorkedProjects