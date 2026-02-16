"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../common/ui/inputs/input";
import { loginSchema } from "@/schemas/auth.schema";
import { ILogin } from "@/types/auth.types";
import Button from "../common/ui/buttons/button";
import { login } from '../../api/auth.api';
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";



const LoginForm = () => {

  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
    mode: "all",
  });


  // ! React query mutation
  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      //? toast message
      toast.success(response.message || 'Login Success')

      //? redirect to landing page
      router.replace('/')
      //? reset from
      reset()
    },
    onError: (error) => {
      //? toast error message
      toast.error(error.message || 'Login Failed')

    }
  })

  //! on form submit 
  const onSubmit = async (data: ILogin) => {
   // mutate(data)
   //const res=await login(data)
  };

  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 ">
        {/* email input */}
        <Input
          id="email"
          label="Email"
          name="email"
          register={register}
          placeholder="johndoe@gmail.com"
          error={errors?.email?.message}
        />

        {/* password  */}
        <Input
          id="password"
          label="Password"
          name="password"
          register={register}
          placeholder="Enter password"
          error={errors?.password?.message}
          type="password"


        />

        <Button
          disabled={isPending}
          label={isPending ? 'Loggin In' : "Login"}
          type="submit"
        />
      </form>
      <div></div>
    </div>
  );
};

export default LoginForm;
