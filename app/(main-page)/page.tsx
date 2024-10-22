"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/shop");
  }, [router]);

  return <></>;
};

export default HomePage;
