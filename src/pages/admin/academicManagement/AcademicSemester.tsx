import { useGetAllSemestersQuery } from "../../../redux/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
    const {data} = useGetAllSemestersQuery(undefined);
    console.log(data);
    return (
        <div>
           h 
        </div>
    );
};

export default AcademicSemester;