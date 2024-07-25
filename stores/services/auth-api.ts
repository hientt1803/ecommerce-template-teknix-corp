import { LoginResponse } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      typeof window === "undefined"
        ? "http://localhost:3000"
        : window.location.origin,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<
      LoginResponse,
      { userName: string; password: string }
    >({
      query: ({ userName, password }) => ({
        url: "/api/login",
        method: "POST",
        body: {
          userName,
          password,
        },
      }),
    }),
    getAuthData: builder.query<LoginResponse, { token: string }>({
      query: ({ token }) => ({
        url: "api/auth-details",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useGetAuthDataQuery } = authApi;
