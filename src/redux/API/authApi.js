import { api } from "./API";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "GET",
      }),
    }),
    currentUser: builder.query({
      query: () => "/auth/current-user",
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useCurrentUserQuery } =
  authApi;
