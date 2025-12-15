"use client";
import React from 'react'
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const LoginForm = () => {

    const {register,handleSubmit,reset,formState:{errors},}=useForm({
        defaultValues:{
            email:"",
            password:''
        }
    })

    const onSubmit=(data)=>{
        console.log('submit',data)
        reset()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 '>
                {/* email input */}
                <div className='flex flex-col gap-1'>
                    <label className='text-[16px] font-semibold' htmlFor={'email'}>Email</label>

                    <input {...register('email')}  className='border border-gray-400 rounded-sm px-2 py-3 focus:outline-blue-400' id={'email'} type={'text'} placeholder={'johndoe@gmail.com'} />

                </div>
                {/* password  */}
                <div className='flex flex-col gap-1'>
                    <label className='text-[16px] font-semibold' htmlFor={'password'}>Password</label>
                    <input {...register('password')} 
                     className='border border-gray-400 rounded-sm px-2 py-3
                      focus:outline-blue-400' id={'password'} type={'password'} placeholder={'passsword'} />
                </div>

                <button className='bg-blue-500 p-3 text-white font-bold text-lg rounded mt-10 cursor-pointer'>Login</button>
            </form>
            <div>
             <p className='text-blue-500 mt-1 cursor-pointer text-center text-[14px]'>Forgot password?</p>
              </div>
                <div className="text-center text-[14px]">

                <span >Don't have an account?  </span>

                 <Link href="/register"className="text-blue-500 cursor-pointer font-semibold hover:underline">Register
                </Link>

                </div>
              </div>
    )
}

export default LoginForm