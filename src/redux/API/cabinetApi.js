import { api } from "./API";

export const cabinetApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserMsg: builder.query({
      query: () => ({
        url: "/profile/messages/get-messages",
      }),
    }),
  }),
});

export const { useGetUserMsgQuery } = cabinetApi;
