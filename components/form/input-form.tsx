import React from "react";
import { FormControl, FormField, FormLabel } from "../ui/form";
import { Input } from "../ui/input";

interface IInputFormProp {
  label?: string;
  isShowLabel?: boolean;
  name: string;
  type: string;
  form: any;
  placeholder?: string;
}

export const InputForm = (props: IInputFormProp) => {
  const {
    name,
    type,
    form,
    label = "",
    isShowLabel = false,
    placeholder = "",
  } = props;
  return (
    <FormField
      control={form}
      name={name}
      render={({ field }) => (
        <>
          {isShowLabel && <FormLabel className="font-bold mb-2">{label}</FormLabel>}
          <FormControl>
            <Input
              value={field.value}
              onChange={field.onChange}
              type={type}
              placeholder={placeholder}
            />
          </FormControl>
        </>
      )}
    />
  );
};
