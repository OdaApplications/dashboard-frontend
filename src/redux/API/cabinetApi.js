import { api } from "./API";

export const cabinetApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserMsg: builder.query({
      query: () => ({
        url: "/cabinet/messages/get-messages",
      }),
    }),
  }),
});

export const { useGetUserMsgQuery } = cabinetApi;
