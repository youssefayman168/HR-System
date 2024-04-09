import { useMutation, useQueryClient } from "@tanstack/react-query";
import DeleteIcon from "../../../assets/Projects/Delete.svg";
import EditIcon from "../../../assets/Projects/Edit.svg";
import deleteSubtask from "@/features/Tasks/TaskDetails/services/deleteSubtask";
import { Link, useNavigate } from "react-router-dom";

type ElementArchitectural = {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  styleStaus: string;
  taskID: number;
  subtaskID: number;
};

const ArchitecturalElement = ({
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  styleStaus,
  subtaskID,
  taskID,
}: ElementArchitectural) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const removeSubtask = useMutation({
    mutationFn: () => {
      return deleteSubtask(taskID, subtaskID);
    },
    onSuccess: () => {
      queryClient
        .invalidateQueries({
          queryKey: [`taskDetails-${taskID}`],
        })
        .then(() => navigate(`/tasks/details/${taskID}`));
    },
  });
  return (
    <Link
      to={`/tasks/viewSubTask/${subtaskID}`}
      className='border-b-[2px] border-[#a0aaca80] font-[600] py-7 flex items-center gap-[10px] '
    >
      <p className='w-[15%] text-[#105090] '>{text1}</p>
      <p className='w-[12%] '>{text2}</p>
      <p className='w-[12%] '>{text3}</p>
      <p className='w-[12%] '>{text4}</p>
      <p className='w-[12%] '>{text5}</p>
      <div className='w-[12%] '>
        <p
          style={{
            background:
              styleStaus === "progress"
                ? "#E6EFFC"
                : styleStaus === "canceled"
                ? "#FFE3E3"
                : styleStaus === "planning"
                ? "#FFE9E0"
                : styleStaus === "done"
                ? "#DEFFE1"
                : "",
            color:
              styleStaus === "progress"
                ? "#0764E6"
                : styleStaus === "canceled"
                ? "#A00"
                : styleStaus === "planning"
                ? "#FF793F"
                : styleStaus === "done"
                ? "#34E045"
                : "",
          }}
          className='w-[120px] py-[7px] px-[12px] text-center rounded-[6px]'
        >
          {text6}
        </p>
      </div>
      <div className=' flex-1 flex items-center gap-[15px] '>
        <p className='w-fit'>{text7}</p>
        <div className='flex items-center gap-4 ms-auto'>
          <img
            className='bg-[#DEFFE1] cursor-pointer py-[10px] px-[10px] rounded-full '
            src={EditIcon}
            alt='EditIcon'
            onClick={() =>
              navigate(`/tasks/subtask/edit/${taskID}/${subtaskID}`)
            }
          />
          <img
            className='cursor-pointer'
            src={DeleteIcon}
            alt='DeleteIcon'
            onClick={() => removeSubtask.mutate()}
          />
        </div>
      </div>
    </Link>
  );
};

export default ArchitecturalElement;
