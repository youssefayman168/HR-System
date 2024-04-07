import requestHelpers from "@/lib/requestHelpers";
import { IEmployeeData } from "@/pages/NewEmployee";

const createEmployee = (data: IEmployeeData) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("phone_number", data.phone_number);
  formData.append("gender", data.gender);
  formData.append("nationality", data.nationality);
  formData.append("location", data.location);
  formData.append("birth_date", data.birth_date);
  formData.append("medical_insurance_type", data.medical_insurance_type);
  formData.append("social_insurance_type", data.social_insurance_type);
  formData.append("image", data.image);
  formData.append("position", data.position);
  formData.append("department", data.department);
  formData.append("grade", data.grade);
  formData.append("company", data.company);
  formData.append("college_name", data.college);
  formData.append("graduation_date_from", data.graduation_year_from);
  formData.append("graduation_date_to", data.graduation_year_to);
  formData.append("hiring_date", data.hiring_date);
  formData.append("cv", data.cv);
  formData.append("passport_copy", data.passport_copy);
  formData.append("scanned_paper", data.scanned_paper);
  formData.append("id_photo", data.id_photo);
  formData.append("birth_certificate", data.birth_certificate);
  formData.append("military_certificate", data.military_certificate);
  formData.append("graduation_certificate", data.graduation_certificate);
  formData.append("social_insurance", data.social_insurance);
  formData.append("role", data.role);
  formData.append("password", "admin");
  return requestHelpers.postData("/user/create/", formData, {
    showToast: true,
    success: "Employee Created Successfully",
    error: "Employee Couldn't Be Created",
  });
};

export default createEmployee;
