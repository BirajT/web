import RegisterForm from '@/components/forms/register.form'
import { Metadata } from 'next';
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: "Ecommerce | Register",
  description: "User Register Page ",
};

const Page = () => {
  return (
    <main className=' h-full w-full flex justify-center items-center'>
      <div className='border border-blue-500 p-5 min-w-150 min-h-100 rounded-lg shadow'>
         <h1 className='text-2xl font-bold text-gray-800 text-center mb-4'>Create Account</h1>
        <RegisterForm />
        <p className='text-center mt-2'>Already have an accoount<Link href={'/auth/login'}> <span className='text-blue-500'>Sign In</span></Link></p>
        
     </div>
    </main>
  )
}

export default Page