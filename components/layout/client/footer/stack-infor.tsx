import React, { Children } from "react";

export const StackInfor = ({
  title,
  items,
  children,
  isNested,
}: {
  title: string;
  items?: string[];
  children?: React.ReactNode;
  isNested?: boolean;
}) => {
  return (
    <div className="flex flex-col items-start">
      <div className="font-bold text-xl mb-4 uppercase">{title}</div>
      {!isNested && (
        <ul className="grid gap-1 text-neutral-400 dark:text-neutral-500">
          {items?.map((item, index) => (
            <li key={index} className="hover:text-neutral-50">
              {item}
            </li>
          ))}
        </ul>
      )}
      {children}
    </div>
  );
};
