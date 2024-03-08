import BaseLayout from '@/layouts/BaseLayout/BaseLayout'
import testImg from "../../assets/testImg.jpg";
import Circle from '../../assets/Loading/circle.svg'
import EmployeeInfo from '@/features/AllEmployees/ViewEmployees/components/EmployeeInfo';
import Loading from '@/components/Loading/Loading';

const Profile = () => {
  return (
    <BaseLayout>
        <div className='p-6'>
            <div className='Header'>
                <p className='text-[#224886] font-[600] text-[22px] mb-8'>Profile</p>
                <div className='UserInfo flex items-start gap-40'>
                    <div>
                        <div className='flex items-center gap-6 mb-6'>
                            <img className='w-[50px] h-[50px] rounded-full' src={testImg} alt="UserImg" />
                            <p className='UserName text-[#0E2354] text-[18px] font-[500] '>James campion</p>
                        </div>
                        <p className='text-[#656565] border-[#656565] border-[1px] rounded-[6px] w-[200px] py-[7px] text-center  '>Sales specialist</p>
                    </div>
                    <div>
                        <EmployeeInfo title='Email:' value='invision@invisionapp.com' />
                        <EmployeeInfo title='Department' value='Designing' />
                    </div>
                    <div>
                        <EmployeeInfo title='Company' value='HR' />
                        <EmployeeInfo title='Per Hour' value='$3 per hour' />
                    </div>
                    <div>
                        <EmployeeInfo title='Mobile Number' value='937-298-2047' />
                        <EmployeeInfo title='Grade' value='Grade' />
                    </div>
                </div>
            </div>

        </div>
    </BaseLayout>
  )
}

export default Profile