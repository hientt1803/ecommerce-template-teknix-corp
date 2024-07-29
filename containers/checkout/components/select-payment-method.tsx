"use client";

import { Card } from "@/components/ui/card";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { InputForm } from "@/components/form/input-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toastSuccess } from "@/utils";
import Image from "next/image";
import React from "react";

const FormSchema = z.object({
  //   type: z.enum(["appota"], {
  //     required_error: "You need to select paymentType.",
  //   }),
  type: z.enum(["appota", "point"]),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  address: z.string(),
  phone: z.number(),
});

export const SelectPaymentMethod = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toastSuccess("You submitted the following values");
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <>
              <Card className="p-6 shadow-sm min-w-full rounded-sm">
                <FormItem className="space-y-3">
                  <FormLabel className="font-bold text-center">
                    Choose your payment method
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="appota" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          <Image
                            src="/images/appota-image.jpg"
                            alt="appota-image"
                            width={130}
                            height={130}
                          />
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="point" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Payment with point
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </Card>
            </>
          )}
        />

        <div className="flex items-center justify-between w-full">
          <hr className="h-1 w-full" />
          <span className="uppercase w-fit text-center min-w-[400px]">
            OR CONTINUE BELOW TO PAY WITH YOUR CREDIT
          </span>
          <hr className="h-1 w-full" />
        </div>

        <InputForm
          name="email"
          form={form.control}
          type="email"
          isShowLabel
          label="Contact Information"
          placeholder="Email"
        />

        <div className="flex items-center justify-between w-full mt-10 font-bold">
          Shipping Address
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputForm
            name="firstName"
            form={form.control}
            type="text"
            placeholder="First Name"
          />
          <InputForm
            name="lastName"
            form={form.control}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <InputForm
          name="address"
          form={form.control}
          type="text"
          placeholder="Address"
        />
        <InputForm
          name="phone"
          form={form.control}
          type="number"
          placeholder="Contact Number"
        />
        <div className="flex justify-end">
          <Button className="w-[250px] h-10 mt-4" type="submit">
            Checkout
          </Button>
        </div>
      </form>
    </Form>
  );
};
