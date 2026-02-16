/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/utils/tw-merge.util";
import React, { FC } from "react";
import { LuAsterisk } from "react-icons/lu";

type IProps = {
  label: string;
  register: any;
  error?: string;
  id: string;
  name: string;
  type?: "text" | "email" | "number" | "password";
  placeholder?: string;
  required?:boolean
};

const Input: FC<IProps> = ({
  id,
  label,
  name,
  register,
  error,
  type = "text", //! default prop value
  placeholder = "start typing",
  required = false
}) => {
  return (
    <div className="flex flex-col gap-1">
      {/* label and icon */}
      <div className="flex">
        <label className="text-[16px] font-semibold" htmlFor={id}>
          {label}
        </label>
        {required && <LuAsterisk className="text-red-500" />}
      </div>
      <input
        {...register(name)}
        className={cn(
          'border  rounded-sm px-2 py-3',
          error ? "focus:outline-red-500 border-red-500" : "focus:outline-blue-400 border-gray-400",
        )}
        
        id={id}
        type={type}
        placeholder={placeholder}
      />
      <p className="text-xs text-red-500 h-1">{error ? error : ""}</p>
    </div>
  );
};

export default Input;
