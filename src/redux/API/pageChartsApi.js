import { api } from "./API";

export const pageChartsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPageConfig: builder.query({
      query: (pageName) => ({
        url: `/charts/get-page-config/${pageName}`,
      }),
    }),
  }),
});

export const { useGetPageConfigQuery } = pageChartsApi;
