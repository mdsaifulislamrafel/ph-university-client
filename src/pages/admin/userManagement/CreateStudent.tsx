import { FieldValues, SubmitHandler } from "react-hook-form";
import PhFrom from "../../../components/from/PhFrom";
import PHInput from "../../../components/from/PHInput";
import { Button } from "antd";

const studentDummyData = {
  password: "student",
  student: {
    name: {
      firstName: "Emma",
      middleName: "Grace",
      lastName: "Johnson",
    },
    gender: "female",
    dateOfBirth: "1998-03-25",
    email: "refelra@gmail.com",
    contactNo: "9876543210",
    emergencyContactNo: "8765432109",
    bloodGroup: "B+",
    presentAddress: "10 Downing Street, London",
    permanentAddress: "22 Baker Street, London",
    guardian: {
      fatherName: "Michael Johnson",
      fatherOccupation: "Architect",
      fatherContactNo: "1234567890",
      motherName: "Sophia Johnson",
      motherOccupation: "Lawyer",
      motherContactNo: "0987654321",
    },
    localGuardian: {
      name: "Oliver Brown",
      occupation: "Teacher",
      contactNo: "1122334455",
      address: "50 Queen's Road, London",
    },
    admissionSemester: "6758936d180022b59293ed9e",
    academicDepartment: "6759c288318986a9f435830c",
  },
};

const CreateStudent = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    console.log(Object.fromEntries(formData));
    // console.log(Object.fromEntries(formData));  *** just checking fromData for development ***
  };
  return (
    <PhFrom onSubmit={onSubmit}>
      <PHInput type="text" name="name" label="Name" />
      <Button htmlType="submit">Submit</Button>
    </PhFrom>
  );
};

export default CreateStudent;
