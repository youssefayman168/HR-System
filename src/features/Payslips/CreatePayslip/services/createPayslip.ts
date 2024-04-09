import requestHelpers from "@/lib/requestHelpers";

/*
basic_salary: data.basic_salary,
        housing_allowances: data.housing_allowances,
        transportation_allowances: data.transportation_allowances,
        other_allowances: data.other_allowances,
        social_insurance: data.social_insurance,
        taxes: data.taxes,
        medical_insurance: data.medical_insurance,
        gross_salary: data.gross_salary,
        hr_rate: HrRate,
        employee_number: data.employee_number,
      });
*/

const createPayslip = (data: any) => {
  const formData = new FormData();
  formData.append("basic_salary", data.basic_salary);
  formData.append("housing_allowances", data.housing_allowances);
  formData.append("transportation_allowances", data.transportation_allowances);
  formData.append("other_allowances", data.other_allowances);
  formData.append("social_insurance", data.social_insurance);
  formData.append("taxes", data.taxes);
  formData.append("medical_insurance", data.medical_insurance);
  formData.append("gross_salary", Number(data.gross_salary));
  formData.append("hr_rate", Number(data.hr_rate));
  formData.append("employee_number", data.employee_number);
  return requestHelpers.postData("/payslips/create/", formData, {
    showToast: true,
    success:
      "Payslip added successfully to this user, he'll be notified about it",
    error:
      "Couldn't add the payslip to this user, please check the data and make sure that user exists with this number",
  });
};

export default createPayslip;
