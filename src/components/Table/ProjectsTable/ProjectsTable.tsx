import Element from './Element'
import getAllProjects from '@/features/Projects/all/services/getAllProjects'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import handleDeleteProject from '@/features/Projects/create-projets/services/deleteSingleProject'
import Loading from '@/components/Loading/Loading'
import deleteIcon from '@/assets/deletionPopup.svg'
import { useState } from 'react'
import SecondaryBorderBtn from '@/components/Buttons/SecondaryBorderBtn'
import BaseBtn from '@/components/Buttons/BaseBtn'

const ProjectsTable = () => {

  const [showPopup, setShowPopup] = useState(false)
  const closePopup = () => setShowPopup(false)

  const [globalId, setGlobalId] = useState()

  // Delete Single Project
  const client = useQueryClient()

  const deleteProjectMutation = useMutation({
    mutationFn: (variables) => {
      return handleDeleteProject(variables)
    },
    onSuccess: () => {
      return client.invalidateQueries({
        queryKey: ['projectElement']
      }).then(() => closePopup())
    }
  })

  // Get All Projects
  const { data, isLoading } = useQuery({
    queryKey: ['projectElement'],
    queryFn: getAllProjects
  })

  return (
    <>
      {isLoading ?
        <Loading />
        :
        <div className='bg-white px-10 rounded-[20px] '>
          <div className='Table text-center'>
            <div className='Theade text-[#9295AB] font-[800] flex items-center gap-2 py-7 border-b-[2px] border-[#a0aaca80] '>
              <p className='w-[5%]  '>ID</p>
              <p className='w-[20%]  '>Projects</p>
              <p className='w-[18%]  text-center '>Company</p>
              <p className='w-[10%]  '>Starting date</p>
              <p className='w-[10%] '>Status</p>
              <p className='w-[13%] '>Worked Hours</p>
              <p className='w-[9%]'>Work Hours</p>
            </div>
            <div className='Tbody HideScroll h-[calc(100vh-350px)] overflow-y-auto '>
              {data?.map(({ id, project_name, company, start_date, status, work_hours, worked_hours }: any) => {
                return <Element
                  key={id}
                  text1={id}
                  id={id}
                  text2={project_name}
                  text3={company?.name}
                  text4={start_date}
                  text6={status}
                  text7={`${worked_hours}h`}
                  text8={`${work_hours}h`}
                  styleStaus={status}
                  deleteAction={() => {
                    setGlobalId(id)
                    setShowPopup(true)
                  }}
                />
              }
              )}
            </div>
          </div>
        </div>
      }
      {/* Delete Modal */}
      <div className={`top-0 left-0 right-0 bottom-0 bg-[#000000CC] ${showPopup ? 'absolute' : 'hidden'}`}>
        <div className='w-[600px] h-[400px] absolute top-[28.5%] left-[33%] rounded-[6px] bg-white flex flex-col justify-center items-center'>
          <div className='flex items-between justify-between h-full flex-col p-10'>
            <img src={deleteIcon} alt="deletion" className="w-[100px] h-[100px] mx-auto" />
            <h4 className='font-medium text-[#000] text-[24px] text-center'>Do you want to confirm deleting this employee ?</h4>
            <div className="flex gap-8 items-center justify-center">
              <BaseBtn
                name="Delete"
                styles={{ fontSize: 16, fontWeight: 500, width: 100, textAlign: 'center' }}
                onClick={() => deleteProjectMutation.mutate(globalId)} />
              <SecondaryBorderBtn text="Cancel" style={{ width: 100, justifyContent: 'center' }} onClick={closePopup} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsTable