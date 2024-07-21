"use client"

import { useRouter } from "next/navigation";
import React from "react";

const HomePage = () => {
  const router = useRouter();
  router.push("/shop");
  return <></>;
};

export default HomePage;
