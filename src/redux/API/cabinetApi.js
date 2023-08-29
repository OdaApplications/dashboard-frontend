import { api } from "./API";

export const cabinetApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserMsg: builder.query({
      query: ({ page, limit }) => ({
        url: `/profile/messages/get-messages?page=${page}&limit=${limit}`,
      }),
    }),
  }),
});

export const { useGetUserMsgQuery } = cabinetApi;
