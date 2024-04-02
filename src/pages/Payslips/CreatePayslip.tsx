import BaseLayout from "@/layouts/BaseLayout/BaseLayout";
import { pathList } from "@/routes/routesPaths";
import ArrowLeft from "../../assets/CreateProjects/ArrowLeft.svg";
import { Link, useNavigate } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import BaseInput from "@/components/BaseInput";
import DateInpCreate from "@/components/DateInput/DateInpCreate";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import createPayslip from "@/features/Payslips/CreatePayslip/services/createPayslip";

const CreatePayslip = () => {
  const [data, setData] = useState({
    category: "",
    employee_number: "",
    experience: "",
    hiring_date: "",
    grade: "",
    net_salary: 0,
    actual_working_days: 0,
    overtime_hours: 0,
    working_days_wage: 0,
    daily_overtime_cost: 0,
    transfer_allowance: 0,
    total_wage: 0,
    penalties: 0,
    loans: "",
    total_salary: 0,
  });
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const addPayslip = useMutation({
    mutationFn: () => {
      return createPayslip(data);
    },
    onSuccess: () => {
      queryClient
        .invalidateQueries({
          queryKey: ["payslips"],
        })
        .then(() => navigate("/payslips"));
    },
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addPayslip.mutateAsync();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <BaseLayout>
      <div className='p-6 pb-[15px]'>
        <Link
          to={pathList.payslips}
          className='flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold '
        >
          <img src={ArrowLeft} alt='ArrowLeft' />
          Payslips
          <BiChevronRight />
          Create Payslip
        </Link>
        <form onSubmit={onSubmit}>
          <div className='bg-white py-6 px-12 mt-8 rounded-[15px] h-[calc(100vh-240px)] overflow-y-auto HideScroll '>
            <div className='flex items-center justify-between mb-10'>
              <p className='text-[#101828] text-[24px] font-[600] '>
                Create New Payslip
              </p>
              <button
                type='button'
                className='bg-[#105090] py-2 px-8 rounded-[10px] text-white '
              >
                Import Excel Sheet
              </button>
            </div>
            <div className='inputs flex gap-8 items-start mb-3'>
              <div className='w-full'>
                <BaseInput
                  type='number'
                  placeholder='Please enter employee number'
                  label='Employee number'
                  styles={{ width: "100%" }}
                  onChange={(text) =>
                    setData((prev) => {
                      return {
                        ...prev,
                        employee_number: text,
                      };
                    })
                  }
                />
                <BaseInput
                  type='number'
                  placeholder='Please Enter The Employee experience'
                  label='Experience'
                  styles={{ width: "100%" }}
                  onChange={(text) =>
                    setData((prev) => {
                      return {
                        ...prev,
                        experience: text,
                      };
                    })
                  }
                />
                <DateInpCreate
                  when='Hiring Date'
                  styleLabel={{ display: "block" }}
                  label='Hiring date'
                  onChange={(e: any) =>
                    setData((prev) => {
                      return {
                        ...prev,
                        hiring_date: e.target.value,
                      };
                    })
                  }
                />
                <BaseInput
                  type='number'
                  placeholder='Please Enter the number of working days'
                  label='Actual working days'
                  styles={{ width: "100%" }}
                  onChange={(text) =>
                    setData((prev) => {
                      return {
                        ...prev,
                        actual_working_days: text,
                      };
                    })
                  }
                />
                <BaseInput
                  type='number'
                  placeholder='Please Enter working days wage'
                  label='Working days wage'
                  styles={{ width: "100%" }}
                  onChange={(text) =>
                    setData((prev) => {
                      return {
                        ...prev,
                        working_days_wage: text,
                      };
                    })
                  }
                />
                <BaseInput
                  type='number'
                  placeholder='Please Enter the allowance'
                  label='Transfer allowance'
                  styles={{ width: "100%" }}
                  onChange={(text) =>
                    setData((prev) => {
                      return {
                        ...prev,
                        transfer_allowance: text,
                      };
                    })
                  }
                />
                <BaseInput
                  type='number'
                  placeholder='Please Enter penalties'
                  label='Penalties'
                  styles={{ width: "100%" }}
                  onChange={(text) =>
                    setData((prev) => {
                      return {
                        ...prev,
                        penalties: text,
                      };
                    })
                  }
                />
                <BaseInput
                  type='number'
                  placeholder='Please Enter the total salary'
                  label='Total Salary'
                  styles={{ width: "100%" }}
                  onChange={(text) =>
                    setData((prev) => {
                      return {
                        ...prev,
                        total_salary: text,
                      };
                    })
                  }
                />
              </div>

              <div className=' w-full'>
                <BaseInput
                  type='text'
                  placeholder='Please Enter categories Name'
                  label='Category'
                  styles={{ width: "100%" }}
                  onChange={(text) =>
                    setData((prev) => {
                      return {
                        ...prev,
                        category: text,
                      };
                    })
                  }
                />
                <BaseInput
                  type='text'
                  placeholder='Please Choose The Grade'
                  label='Grade'
                  styles={{ width: "100%" }}
                  onChange={(text) =>
                    setData((prev) => {
                      return {
                        ...prev,
                        grade: text,
                      };
                    })
                  }
                />
                <BaseInput
                  type='number'
                  placeholder='Please Enter The Budget'
                  label='Net Salary'
                  styles={{ width: "100%" }}
                  onChange={(text) =>
                    setData((prev) => {
                      return {
                        ...prev,
                        net_salary: text,
                      };
                    })
                  }
                />
                <BaseInput
                  type='number'
                  placeholder='Please Enter the number of overtime hours'
                  label='Overtime hours'
                  styles={{ width: "100%" }}
                  onChange={(text) =>
                    setData((prev) => {
                      return {
                        ...prev,
                        overtime_hours: text,
                      };
                    })
                  }
                />
                <BaseInput
                  type='number'
                  placeholder='Please Enter Your overtime coast'
                  label='Daily overtime cost'
                  styles={{ width: "100%" }}
                  onChange={(text) =>
                    setData((prev) => {
                      return {
                        ...prev,
                        daily_overtime_cost: text,
                      };
                    })
                  }
                />
                <BaseInput
                  type='number'
                  placeholder='Please Enter the total wage'
                  label='Total wage'
                  styles={{ width: "100%" }}
                  onChange={(text) =>
                    setData((prev) => {
                      return {
                        ...prev,
                        total_wage: text,
                      };
                    })
                  }
                />
                <BaseInput
                  type='text'
                  placeholder='Please Enter Your Loans'
                  label='Loans'
                  styles={{ width: "100%" }}
                  onChange={(text) =>
                    setData((prev) => {
                      return {
                        ...prev,
                        loans: text,
                      };
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center gap-5 mt-4'>
            <button
              type='button'
              className='text-[#224886] border-[1px] border-[#224886] py-[8px] px-9 rounded-[6px]'
              onClick={() => navigate(pathList.payslips)}
            >
              Cancel
            </button>
            <button
              type='submit'
              className='bg-[#224886] text-white py-[8px] px-10 rounded-[6px]'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </BaseLayout>
  );
};

export default CreatePayslip;
