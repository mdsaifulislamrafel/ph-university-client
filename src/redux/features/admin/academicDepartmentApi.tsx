import { baseApi } from "../../api/baseApi";

const academicDepartmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDepartments: builder.query({
      query: () => ({
        url: "/academic-departments",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllDepartmentsQuery } = academicDepartmentApi;