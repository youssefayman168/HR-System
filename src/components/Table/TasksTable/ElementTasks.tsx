import { CSSProperties } from "react";
import DeleteIcon from "../../../assets/Projects/Delete.svg";
import EditIcon from "../../../assets/Projects/Edit.svg";
import { Link } from "react-router-dom";
import { pathList } from "@/routes/routesPaths";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteTask from "@/features/Tasks/services/deleteTask";

type ElementTask = {
  text1: string;
  text2: string;
  text5: string;
  text6: string;
  text7: string;
  styleStaus: string;
  styleActionBtn?: CSSProperties;
  elementID: number;
  projectID: number;
};

const ElementTasks = ({
  text1,
  text2,
  text5,
  text6,
  text7,
  styleActionBtn,
  styleStaus,
  elementID,
  projectID,
}: ElementTask) => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: () => {
      return deleteTask(elementID, projectID);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },
  });
  return (
    <>
      <p className='w-[15%] text-[#105090] '>{text1}</p>
      <p className='w-[12%] '>{text2}</p>
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
          {text5}
        </p>
      </div>
      <p className='w-[36%] max-xxl:w-[36%] '>{text6}</p>
      <div className=' flex-1 flex items-center gap-[15px] '>
        <Link
          to={"/tasks/architecturalDrawing/addSubTasks"}
          style={styleActionBtn}
          className='w-fit rounded-[6px] '
        >
          {text7}
        </Link>
        <div className='flex items-center gap-4 ms-auto'>
          <Link to={`/tasks/editTasks/${elementID}`}>
            <img
              className='bg-[#DEFFE1] cursor-pointer py-[10px] px-[10px] rounded-full '
              src={EditIcon}
              alt='EditIcon'
            />
          </Link>
          <img
            className='cursor-pointer'
            src={DeleteIcon}
            alt='DeleteIcon'
            onClick={() => deleteMutation.mutate()}
          />
        </div>
      </div>
    </>
  );
};

export default ElementTasks;
