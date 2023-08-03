import { api } from "./API";

export const cabinetApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserMsg: builder.query({
      query: () => ({
        url: "/cabinet/user-messages-join",
      }),
    }),
  }),
});

export const { useGetUserMsgQuery } = cabinetApi;
