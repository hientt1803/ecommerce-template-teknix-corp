"use client";

import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getValidAuthTokens } from "@/lib/cookies";
import { RootState } from "@/stores/store";
import { useGetAuthDataQuery } from "@/stores/services/auth-api";
import { useEffect } from "react";
import { logout } from "@/stores/feature/auth-slice";

type Props = {
  children?: React.ReactNode;
};

export const AuthWrapper = ({ children }: Props) => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const { userEmail } = useSelector((state: RootState) => state.auth);

  const { token } = getValidAuthTokens();

  const { error, isLoading } = useGetAuthDataQuery(
    { token: token || "" },
    {
      skip: !!userEmail || !token,
    }
  );

  useEffect(() => {
    if (!token) {
      push("/login");
      dispatch(logout());
    }
  }, [token, push, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return children;
};
