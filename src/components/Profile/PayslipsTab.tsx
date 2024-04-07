import { useQuery } from "@tanstack/react-query";
import PayslipsTabElm from "./PayslipsTabElm";
import getProfilePayslips from "@/features/profile/services/getProfilePayslips";
import Loading from "../Loading/Loading";
import formatTime from "@/utils/formatTime";
import formatMoney from "@/utils/formatMoney";
import requestHelpers from "@/lib/requestHelpers";
import { format } from "date-fns";
import { useState } from "react";

const PayslipsTab = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getProfilePayslips"],
    queryFn: getProfilePayslips,
  });
  const [selectedPayslip, setSelectedPayslip] = useState<any>(null);
  console.log(data);
  const { data: myPayslips } = useQuery({
    queryKey: ["myPayslips"],
    queryFn: () => {
      return requestHelpers.getData("/payslips/me/");
    },
  });
  console.log(myPayslips);
  console.log(selectedPayslip);
  return (
    <>
      {selectedPayslip ? (
        <div className='mt-5'>
          <div className='flex items-start justify-between mb-8'>
            <PayslipsTabElm
              title='Basic Salary'
              text={
                selectedPayslip?.basic_salary
                  ? selectedPayslip?.basic_salary
                  : "Not Determined"
              }
            />
            <PayslipsTabElm
              title='Transportation Allowances'
              text={
                selectedPayslip?.transportation_allowances
                  ? selectedPayslip?.transportation_allowances
                  : "Not Determined"
              }
            />
          </div>
          <div className='flex items-start justify-between mb-8'>
            <PayslipsTabElm
              title='Housing Allowances'
              text={
                selectedPayslip?.housing_allowances
                  ? `${formatMoney(selectedPayslip?.housing_allowances)}$`
                  : "Not Determined"
              }
            />
            <PayslipsTabElm
              title='Other Allowances'
              text={
                selectedPayslip?.other_allowances
                  ? `${formatMoney(selectedPayslip?.other_allowances)}$`
                  : "Not Determined"
              }
            />
          </div>
          <div className='flex items-start justify-between mb-8'>
            <PayslipsTabElm
              title='Social Insurance'
              text={
                selectedPayslip?.social_insurance
                  ? `${formatMoney(selectedPayslip?.social_insurance)}$`
                  : "Not Determined"
              }
            />
            <PayslipsTabElm
              title='Medical Insurance'
              text={
                selectedPayslip?.medical_insurance
                  ? formatMoney(selectedPayslip?.medical_insurance)
                  : "Not Determined"
              }
            />
          </div>
          <div className='flex items-start justify-between mb-8'>
            <PayslipsTabElm
              title='Taxes'
              text={
                selectedPayslip?.taxes
                  ? formatMoney(selectedPayslip?.taxes)
                  : "Not Determined"
              }
            />
            <PayslipsTabElm
              title='Gross Salary'
              text={
                selectedPayslip?.gross_salary
                  ? selectedPayslip?.gross_salary
                  : "Not Determined"
              }
            />
          </div>
          <div className='flex items-start justify-between mb-8'>
            <PayslipsTabElm
              title='hr_rate'
              text={
                selectedPayslip?.hr_rate
                  ? selectedPayslip?.hr_rate
                  : "Not Determined"
              }
            />
          </div>
        </div>
      ) : (
        <>
          {isLoading ? null : (
            <div className='mt-5'>
              <div className='flex items-start justify-between mb-8'>
                <PayslipsTabElm
                  title='Basic Salary'
                  text={
                    data?.basic_salary ? data?.basic_salary : "Not Determined"
                  }
                />
                <PayslipsTabElm
                  title='Transportation Allowances'
                  text={
                    data?.transportation_allowances
                      ? data?.transportation_allowances
                      : "Not Determined"
                  }
                />
              </div>
              <div className='flex items-start justify-between mb-8'>
                <PayslipsTabElm
                  title='Housing Allowances'
                  text={
                    data?.housing_allowances
                      ? `${formatMoney(data?.housing_allowances)}$`
                      : "Not Determined"
                  }
                />
                <PayslipsTabElm
                  title='Other Allowances'
                  text={
                    data?.other_allowances
                      ? `${formatMoney(data?.other_allowances)}$`
                      : "Not Determined"
                  }
                />
              </div>
              <div className='flex items-start justify-between mb-8'>
                <PayslipsTabElm
                  title='Social Insurance'
                  text={
                    data?.social_insurance
                      ? `${formatMoney(data?.social_insurance)}$`
                      : "Not Determined"
                  }
                />
                <PayslipsTabElm
                  title='Medical Insurance'
                  text={
                    data?.medical_insurance
                      ? formatMoney(data?.medical_insurance)
                      : "Not Determined"
                  }
                />
              </div>
              <div className='flex items-start justify-between mb-8'>
                <PayslipsTabElm
                  title='Taxes'
                  text={
                    data?.taxes ? formatMoney(data?.taxes) : "Not Determined"
                  }
                />
                <PayslipsTabElm
                  title='Gross Salary'
                  text={
                    data?.gross_salary ? data?.gross_salary : "Not Determined"
                  }
                />
              </div>
              <div className='flex items-start justify-between mb-8'>
                <PayslipsTabElm
                  title='hr_rate'
                  text={data?.hr_rate ? data?.hr_rate : "Not Determined"}
                />
              </div>
            </div>
          )}
        </>
      )}
      <div className='border-[1px] border-[#E0E0E0] border-solid rounded-[12px] px-[22px] mt-[135px] mb-[20px]'>
        <h5 className='pt-[27px] mb-5 text-[#161E54] text-[20px] font-[500]'>
          Payslips
        </h5>
        <div className='flex bg-[#FAFAFA] py-[12px] px-[16px]'>
          <p className='w-[37%] text-[18px] font-[500] text-[#303030] '>
            Payslip Date
          </p>
          <p className='w-[32%] text-[18px] font-[500] text-[#303030]'>
            Salary
          </p>
        </div>
        {myPayslips?.data?.map((payslip: any) => (
          <div key={payslip.id}>
            <div className='flex bg-[#FAFAFA] rounded-[6px] border-[0.5px] border-solid border-[#E0E0E0] py-[12px] px-[16px] my-[13px]'>
              <p className='w-[37%] text-[18px] font-[500] text-[#303030]'>
                {format(new Date(payslip.created_at), "MMM yyyy")}
              </p>
              <p className='w-[32%] text-[18px] font-[500] text-[#303030]'>
                {payslip.gross_salary}
              </p>
              <button
                onClick={() => {
                  setSelectedPayslip(payslip);
                  window.screenTop = 0;
                }}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PayslipsTab;
