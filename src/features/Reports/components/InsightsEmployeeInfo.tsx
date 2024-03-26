import testImg from "@/assets/testImg.jpg";
import EmployeeInfo from "@/features/AllEmployees/ViewEmployees/components/EmployeeInfo";

const InsightsEmployeeInfo = ({ userInfo }: { userInfo: any }) => {
  return (
    <div className=' flex items-start justify-between w-full'>
      <div className='flex items-start gap-3'>
        <img
          src={`https://sec-system-apis.up.railway.app${userInfo?.image}`}
          alt='pic'
          className='size-[50px] rounded-full'
        />
        <div className=''>
          <p className='mt-2 text-primary font-semibold'>{userInfo?.name}</p>
          <div className='mt-10'>
            <EmployeeInfo
              title='email'
              value={userInfo?.email}
              valueStyle='text-sm'
            />
            <EmployeeInfo
              title='hours worked'
              value={userInfo?.total_work_hours}
              valueStyle='text-sm'
            />
            <EmployeeInfo
              title='per hour'
              value={userInfo?.hr_rate}
              valueStyle='text-sm'
            />
          </div>
        </div>
      </div>
      <div className=''>
        <button className='p-[10px] rounded-md border border-[#E6E7EC] text-primary flex items-stretch gap-[10px] mb-8'>
          {userInfo?.position}
        </button>
        <EmployeeInfo
          title='department'
          value={userInfo?.department}
          valueStyle='text-sm'
        />
        <EmployeeInfo
          title='company'
          value={userInfo?.company}
          valueStyle='text-sm'
        />
        <EmployeeInfo
          title='grade'
          value={userInfo?.grade}
          valueStyle='text-sm'
        />
      </div>
    </div>
  );
};

export default InsightsEmployeeInfo;
