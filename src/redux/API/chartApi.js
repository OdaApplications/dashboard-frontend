import { api } from "./API";

export const chartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getChartData: builder.query({
      query: (chartID) => ({
        url: `/charts/get-chart-data/${chartID}`,
      }),
    }),
  }),
});

export const { useGetPageConfigQuery } = chartApi;
