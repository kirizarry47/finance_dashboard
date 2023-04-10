// using endpints to make API call to base url to save into kpi tag

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions"],
  endpoints: (build) => ({
    getKpis: build.query<void, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
   
    }),
  }),
});

export const { useGetKpisQuery } =
  api;