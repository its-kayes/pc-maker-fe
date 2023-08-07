import Button from '@/components/Button/Button'
import React from 'react'
import { AiFillGithub, AiOutlineArrowRight } from 'react-icons/ai'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { signIn } from 'next-auth/react'

const validationSchema = yup.object().shape({
    email: yup.string().required('Email is required').email('Invalid email'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
});

const Login: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validationSchema) });

    const handleLogin = (data: any) => {
        // login(data);
        console.log(data);
    };

    return (
        <div className='container'>
            <div className="relative cursor-default h-[calc(100vh-200px)] flex flex-col items-center justify-center w-2/4 mx-auto">
                <div className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
                    <div className="shadow p-4 rounded-lg bg-white">

                        <div>
                            <h2 className="text-2xl font-semibold text-center border-b pb-2">Login</h2>

                            <div className='mt-4 f-center gap-5 border-b pb-3.5'>
                                {/* <button type='button' className='text-[40px]'><FcGoogle /></button> */}
                                <button type='button' className='text-[40px]' onClick={() => {
                                    signIn("github");
                                }}><AiFillGithub /></button>
                            </div>

                            <form onSubmit={handleSubmit(handleLogin)} className="mt-4 opacity-50 cursor-not-allowed">
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        {...register('email')}
                                        className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                                        disabled
                                    />
                                    {errors.email && <p className="mt-1 text-red-500">{errors.email.message}</p>}
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="password" className="block text-gray-700">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        {...register('password')}
                                        className="w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                                        disabled
                                    />
                                    {errors.password && <p className="mt-1 text-red-500">{errors.password.message}</p>}
                                </div>

                                <Button
                                    text={<div className='flex items-center justify-center !font-medium gap-2'
                                    >
                                        Login
                                        <AiOutlineArrowRight className='relative top-[1px]' />
                                    </div>}
                                    classes='w-full py-3'
                                    type='submit'
                                    disabled
                                />

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login