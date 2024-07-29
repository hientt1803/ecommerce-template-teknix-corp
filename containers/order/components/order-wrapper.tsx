import { PageBreadcrumb } from "@/components/breadcumb";
import { Card } from "@/components/ui/card";
import React from "react";
import { OrderTablHeader } from "./order-table-header";
import { Separator } from "@/components/ui/separator";
import { OrderTableBody } from "./order-table-body";

export const OrderWrapper = () => {
  return (
    <div className="container">
      <PageBreadcrumb page="order-history" />

      <div>
        <div className="text-2xl font-bold">Order History</div>
        <p className="leading-7">
          Check the status of recent orders, manage returns, and discover
          simular products
        </p>
      </div>

      <Card className="shadow-md w-full h-fit rounded-lg p-6 mt-10">
        <OrderTablHeader />
        <Separator />
        <OrderTableBody />
      </Card>
    </div>
  );
};
