'use client'
import React from 'react'
import Input from '../common/ui/inputs/input'
import { useForm } from 'react-hook-form'
import Button from '../common/ui/buttons/button'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '@/schemas/auth.schema'
import { IRegister } from '@/types/auth.types'
import { useMutation } from '@tanstack/react-query'
import { registerUser } from '@/api/auth.api'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { GENDER } from '@/types/global.types'


const RegisterForm = () => {

    const router = useRouter()

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirm_password: '',
            phone: '',
            gender: GENDER.MALE,

        },
        resolver: yupResolver(registerSchema)
    })


    // mutation
    const { mutate, isPending } = useMutation({
        mutationFn: registerUser,
        onSuccess: (response) => {
            toast.success(response.message || 'Account Created');
            router.replace('/auth/login');
            reset()
        },
        onError: (error) => {
            toast.error(error.message || 'Something went wrong')
        }

    })


    const onSubmit = (data: IRegister) => {
        // console.log(data)
        mutate(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 '>

                <Input
                    id='first_name'
                    name={'first_name'}
                    label='First Name'
                    placeholder='Jhon'
                    register={register}
                    required={true}
                    error={errors?.first_name?.message}
                />
                {/* last name input */}
                <Input
                    id='last_name'
                    name={'last_name'}
                    label='Last Name'
                    placeholder='Doe'
                    register={register}
                    required
                    error={errors?.last_name?.message}
                />
                {/* email input */}

                <Input
                    id='email'
                    name={'email'}
                    label='Email'
                    required
                    placeholder='johndoe@gmail.com'
                    register={register}
                    error={errors?.email?.message}
                />

                {/* password  */}
                <Input
                    required
                    id='password'
                    name={'password'}
                    label='Password'
                    type='password'
                    placeholder='Enter password'
                    register={register}
                    error={errors?.password?.message}
                />


                {/* confirm password  */}
                <Input
                    required
                    type='password'
                    id='confirm_password'
                    name={'confirm_password'}
                    label='Confirm Password'
                    placeholder='Retype your password'
                    register={register}
                    error={errors?.confirm_password?.message}
                />

                {/* gender input */}

                <div className='flex flex-col gap-1'>
                    <label className='text-[16px] font-semibold' htmlFor={'gender'}>Gender</label>
                    <select {...register('gender')} id='gender' className='border border-gray-400 rounded-sm px-2 py-3 focus:outline-blue-400'>
                        {
                            Object.entries(GENDER).map(([key, value]) => {
                                return (
                                    <option key={key} value={value}>{value}</option>
                                )
                            })
                        }
                    </select>
                </div>
                {/* phone */}
                <Input
                    id='phone'
                    name={'phone'}
                    label='Phone Number'
                    placeholder='9876545656'
                    register={register}
                    error={errors?.phone?.message}
                />
                <div>
                    <Button
                        disabled={isPending}
                        label={isPending ? 'Signing Up...' : 'Sign Up'}
                        type='submit'
                    />
                </div>

            </form>
            <div>
            </div>
        </div>
    )
}

export default RegisterForm