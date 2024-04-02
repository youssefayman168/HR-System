import BaseLayout from "@/layouts/BaseLayout/BaseLayout";
import { pathList } from "@/routes/routesPaths";
import ArrowLeft from "../../assets/CreateProjects/ArrowLeft.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import BaseInput from "@/components/BaseInput";
import DateInpCreate from "@/components/DateInput/DateInpCreate";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import createPayslip from "@/features/Payslips/CreatePayslip/services/createPayslip";
import getPayslip from "@/features/Payslips/EditPayslip/getPayslip";
import editPayslip from "@/features/Payslips/EditPayslip/editPayslip";

const EditPayslip = () => {
  const { payslipID } = useParams();
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
  const payslip = useQuery({
    queryKey: [`payslip-${payslipID}`],
    queryFn: () => {
      return getPayslip(Number(payslipID!));
    },
  });
  console.log(payslip.data?.data);
  const updatePayslip = useMutation({
    mutationFn: () => {
      return editPayslip(
        {
          category: data.category ? data.category : payslip.data?.data.category,
          employee_number: data.employee_number
            ? data.employee_number
            : payslip.data?.data.employee.employee_number,
          experience: data.experience
            ? data.experience
            : payslip.data?.data.experience,
          hiring_date: data.hiring_date
            ? data.hiring_date
            : payslip.data?.data.hiring_date,
          grade: data.grade ? data.grade : payslip.data?.data.grade,
          net_salary: data.net_salary
            ? data.net_salary
            : payslip.data?.data.net_salary,
          actual_working_days: data.actual_working_days
            ? data.actual_working_days
            : payslip.data?.data.actual_working_days,
          overtime_hours: data.overtime_hours
            ? data.overtime_hours
            : payslip.data?.data.overtime_hours,
          working_days_wage: data.working_days_wage
            ? data.working_days_wage
            : payslip.data?.data.working_days_wage,
          daily_overtime_cost: data.daily_overtime_cost
            ? data.daily_overtime_cost
            : payslip.data?.data.daily_overtime_cost,
          transfer_allowance: data.transfer_allowance
            ? data.transfer_allowance
            : payslip.data?.data.transfer_allowance,
          total_wage: data.total_wage
            ? data.total_wage
            : payslip.data?.data.total_wage,
          penalties: data.penalties
            ? data.penalties
            : payslip.data?.data.penalties,
          loans: data.loans ? data.loans : payslip.data?.data.loans,
          total_salary: data.total_salary
            ? data.total_salary
            : payslip.data?.data.total_salary,
        },
        Number(payslipID!)
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["payslips"],
      });
      queryClient
        .invalidateQueries({
          queryKey: [`payslip-${payslipID}`],
        })
        .then(() => navigate("/payslips"));
    },
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updatePayslip.mutateAsync();
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
                  defaultValue={payslip.data?.data.employee.employee_number}
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
                  defaultValue={payslip.data?.data.experience}
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
                  defaultValue={payslip.data?.data.hiring_date}
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
                  defaultValue={payslip.data?.data.actual_working_days}
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
                  defaultValue={payslip.data?.data.working_days_wage}
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
                  defaultValue={payslip.data?.data.transfer_allowance}
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
                  defaultValue={payslip.data?.data.penalties}
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
                  defaultValue={payslip.data?.data.total_salary}
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
                  defaultValue={payslip.data?.data.category}
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
                  defaultValue={payslip.data?.data.grade}
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
                  defaultValue={payslip.data?.data.net_salary}
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
                  defaultValue={payslip.data?.data.overtime_hours}
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
                  defaultValue={payslip.data?.data.daily_overtime_cost}
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
                  defaultValue={payslip.data?.data.total_wage}
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
                  defaultValue={payslip.data?.data.loans}
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

export default EditPayslip;
