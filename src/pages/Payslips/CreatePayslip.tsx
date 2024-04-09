import BaseLayout from "@/layouts/BaseLayout/BaseLayout";
import { pathList } from "@/routes/routesPaths";
import ArrowLeft from "../../assets/CreateProjects/ArrowLeft.svg";
import { Link, useNavigate } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import BaseInput from "@/components/BaseInput";
import DateInpCreate from "@/components/DateInput/DateInpCreate";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import createPayslip from "@/features/Payslips/CreatePayslip/services/createPayslip";

const CreatePayslip = () => {
  const [data, setData] = useState({
    basic_salary: 0,
    transportation_allowances: 0,
    housing_allowances: 0,
    other_allowances: 0,
    social_insurance: 0,
    taxes: 0,
    medical_insurance: 0,
    gross_salary: 0,
    hr_rate: 0,
    employee_number: "",
  });
  const grossSalary =
    Number(data.basic_salary) +
    Number(data.housing_allowances) +
    Number(data.other_allowances) +
    Number(data.social_insurance) +
    Number(data.medical_insurance) +
    Number(data.taxes) +
    Number(data.transportation_allowances);
  console.log(grossSalary);
  const HrRate = ((grossSalary * 12) / 365).toFixed(2);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const addPayslip = useMutation({
    mutationFn: () => {
      return createPayslip({
        basic_salary: data.basic_salary,
        housing_allowances: data.housing_allowances,
        transportation_allowances: data.transportation_allowances,
        other_allowances: data.other_allowances,
        social_insurance: data.social_insurance,
        taxes: data.taxes,
        medical_insurance: data.medical_insurance,
        gross_salary: grossSalary,
        hr_rate: HrRate,
        employee_number: data.employee_number,
      });
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

  useEffect(() => {
    setData((prev: any) => {
      return {
        ...prev,
        gross_salary: String(grossSalary),
        hr_rate: HrRate,
      };
    });
  }, [grossSalary, HrRate]);
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
                  placeholder='Please Enter The Employee Basic Salary'
                  label='Basic Salary'
                  styles={{ width: "100%" }}
                  onChange={(text) =>
                    setData((prev) => {
                      return {
                        ...prev,
                        basic_salary: text,
                      };
                    })
                  }
                />
                <BaseInput
                  type='number'
                  placeholder='Please Enter the Transportation Allowances'
                  label='Transportation Allowances'
                  styles={{ width: "100%" }}
                  onChange={(text) =>
                    setData((prev) => {
                      return {
                        ...prev,
                        transportation_allowances: text,
                      };
                    })
                  }
                />
                <BaseInput
                  type='number'
                  placeholder='Please Enter Housing Allowances'
                  label='Housing Allowances'
                  styles={{ width: "100%" }}
                  onChange={(text) =>
                    setData((prev) => {
                      return {
                        ...prev,
                        housing_allowances: text,
                      };
                    })
                  }
                />
                <BaseInput
                  type='number'
                  placeholder='Please Enter The Other Allowances'
                  label='Transfer allowance'
                  styles={{ width: "100%" }}
                  onChange={(text) =>
                    setData((prev) => {
                      return {
                        ...prev,
                        other_allowances: text,
                      };
                    })
                  }
                />
                <BaseInput
                  type='number'
                  placeholder='Please Enter Social Insurance'
                  label='Social Insurance'
                  styles={{ width: "100%" }}
                  onChange={(text) =>
                    setData((prev) => {
                      return {
                        ...prev,
                        social_insurance: text,
                      };
                    })
                  }
                />
                <BaseInput
                  type='number'
                  placeholder='Please Enter Taxes'
                  label='Taxes'
                  styles={{ width: "100%" }}
                  onChange={(text) =>
                    setData((prev) => {
                      return {
                        ...prev,
                        taxes: text,
                      };
                    })
                  }
                />
              </div>

              <div className=' w-full'>
                <BaseInput
                  type='text'
                  placeholder='Please Enter Medical Insurance'
                  label='Medical Insurance'
                  styles={{ width: "100%" }}
                  onChange={(text) =>
                    setData((prev) => {
                      return {
                        ...prev,
                        medical_insurance: text,
                      };
                    })
                  }
                />
                <BaseInput
                  type='text'
                  label='Gross Salary'
                  styles={{ width: "100%" }}
                  // onChange={(text) =>
                  //   setData((prev) => {
                  //     return {
                  //       ...prev,
                  //       gross_salary: text,
                  //     };
                  //   })
                  // }
                  defaultValue={grossSalary}
                />
                <BaseInput
                  type='number'
                  label='HR Rate'
                  styles={{ width: "100%" }}
                  defaultValue={HrRate}
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
