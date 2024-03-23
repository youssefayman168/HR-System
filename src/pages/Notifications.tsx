import BaseLayout from '../layouts/BaseLayout/BaseLayout'
import NotificationIcons from '../assets/Notification/Filter.svg'
import NotificationCompo from '@/components/Notification/NotificationCompo';
import { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import getNotifications from '@/features/notifications/services/getNotifications';
import { format } from 'date-fns';
import deleteNotification from '@/features/notifications/services/deleteNotification';
import Loading from '@/components/Loading/Loading';

const Notifications = () => {
  const [showList, setShowList] = useState(false)
  const ulElement = useRef<HTMLUListElement>(null)
  const [dateValue, setDateValue] = useState('')
  const [projectType, setProjectType] = useState('')

  // Get All Notifications && Filtered Notifications
  const { data, isLoading } = useQuery({
    queryKey: ['notifications', dateValue, projectType],
    queryFn: () => getNotifications(projectType, dateValue)
  })

  // Close Dropdown Menu After Clicking Outside The List
  useEffect(() => {
    function handleClickOutsideFilter(event: MouseEvent) {
      if (
        ulElement.current &&
        !ulElement.current.contains(event.target as Node)
      ) {
        setShowList(false);
      }
    }

    document.addEventListener("mousedown", (e) => {
      handleClickOutsideFilter(e);
    });

    return () => {
      document.removeEventListener("mousedown", (e: MouseEvent) => {
        handleClickOutsideFilter(e);
      });
    };
  }, []);

  // Delete Notification
  const client = useQueryClient()
  const deleteNotificationMutate = useMutation({
    mutationFn: (variables) => {
      return deleteNotification(variables)
    },
    onSuccess: () => {
      return client.invalidateQueries({
        queryKey: ['notifications']
      })
    }
  })

  return (
    <BaseLayout>
      {isLoading ?
        <Loading />
        :
        <div className='p-5'>
          <div className='NavNotify flex items-center justify-between '>
            <p className='text-[#224886] text-[26px] font-[600] '>Notifications</p>
            <div className='flex items-center gap-3'>
              <div className='relative'>
                <button onClick={() => setShowList(true)} className={`Filter flex items-center gap-2 border-[1px] border-[#224886] py-[10px] px-6 rounded-[6px]`}>
                  <img src={NotificationIcons} alt="Notification Icon" />
                  Filter
                </button>
                <ul ref={ulElement} className={` ${showList ? 'h-full act' : 'h-0'} ulFilter bg-white duration-300 text-center absolute overflow-hidden  w-[250px] top-[calc(100%+10px)] rounded-lg shadow-lg z-[2222] right-0`}>
                  <li className='py-[10px] border-b cursor-pointer' onClick={() => setProjectType('')}>All</li>
                  <li className='py-[10px] border-b cursor-pointer' onClick={() => setProjectType('project')}>Projects</li>
                  <li className='py-[10px] border-b cursor-pointer' onClick={() => setProjectType('task')}>Task</li>
                  <li className='py-[10px] border-b cursor-pointer' onClick={() => setProjectType('subtask')}> Sub Task</li>
                  <li className='py-[10px] border-b cursor-pointer' onClick={() => setProjectType('employee')}>Employee</li>
                  <li className='py-[10px] border-b cursor-pointer' onClick={() => setProjectType('request')}>Requests</li>
                  <li className='py-[10px] border-b cursor-pointer' onClick={() => setProjectType('report')}>Reports</li>
                </ul>
              </div>
              <input
                onChange={(e: any) => setDateValue(e.target.value)}
                className='rounded-[6px] border border-[#224886] text-[#224886] focus:outline-none px-3 py-2 bg-transparent'
                type='date'
                value={dateValue}
                id='dateInput'
                name='dateInput'
              />
            </div>
          </div>

          <div className='Notifications mt-8 h-[calc(100vh-200px)] overflow-y-auto pr-3'>
            {data?.map(({ content, id, type, action, sent_at }: any) => {
              return <NotificationCompo
                key={id}
                content={content}
                date={format(new Date(sent_at), 'dd/MM/yyyy')}
                status={`${type} (${action})`}
                type={action}
                deleteAction={() => deleteNotificationMutate.mutate(id)}
              />
            })}

          </div>
        </div>}
    </BaseLayout>
  )
}

export default Notifications