import { api } from "./API";

export const cabinetApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserMsg: builder.query({
      query: ({ page, limit }) => ({
        url: `/profile/messages/get-messages?page=${page}&limit=${limit}`,
      }),
    }),
    sendAnswer: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: `/profile/messages/answer-message`,
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useGetUserMsgQuery, useSendAnswerMutation } = cabinetApi;
