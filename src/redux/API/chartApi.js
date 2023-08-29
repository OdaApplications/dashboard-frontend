import { api } from "./API";

export const chartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getChartData: builder.query({
      query: ({ chartID, filter }) => ({
        url: `/charts/get-chart-data/${chartID}${
          filter ? "?filter=" + filter : ""
        }`,
      }),
    }),
    getFilterValues: builder.query({
      query: ({ table, target, filter }) => ({
        url: `/charts/get-filter-value/${table}/${target}${
          filter ? "?filter=" + filter : ""
        }`,
      }),
    }),
  }),
});

export const { useGetChartDataQuery, useGetFilterValuesQuery } = chartApi;
