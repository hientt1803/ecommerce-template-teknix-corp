import { setCookie, deleteCookie } from "cookies-next";
import { LoginResponse } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../services/auth-api";

const setAuthCookie = (token: string, name: string) => {
  const toBase64 = Buffer.from(token).toString("base64");

  setCookie(name, toBase64, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
    // more security options here
    // sameSite: 'strict',
    // httpOnly: true,
    // secure: process.env.NODE_ENV === 'production',
  });
};

const initialState: Partial<LoginResponse> = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      deleteCookie("auth_token");
      return {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (_state, { payload }) => {
          // set the token in the cookies
          setAuthCookie(payload.token, "auth_token");

          // store the user data in the store
          // "mutation" also works
          // state = payload;
          return payload;
        }
      )
      .addMatcher(
        authApi.endpoints.getAuthData.matchFulfilled,
        (_state, { payload }) => {
          // in case we receive a new token when refetching the details
          setAuthCookie(payload.token, "auth_token");
          return payload;
        }
      );
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
