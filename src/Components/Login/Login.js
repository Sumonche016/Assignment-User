import React from 'react';
import { useForm } from 'react-hook-form';
import imagere from '../Images/15-min_prev_ui.png';
import './Login.css'

const Login = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div>
            <div className=' conatiner mx-auto min-h-[100vh] mt-28'>

                <div className='w-[80%] mx-auto bg-white md:h-[37rem] h-[35rem] deep-shadow flex'>

                    {/* input section  */}
                    <div className='md:w-[50%] w-full  h-full flex justify-center items-center px-6 md:px-12'>
                        <div className='w-full'>

                            <div className='mb-5'>
                                <span className='text-[#737791] text-[12px] tracking-[1px]'>START FOR FREE</span>
                                <h1 className='text-[#05004E] text-[20px] font-medium'>Log In Here</h1>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                {/* email */}

                                <div className="form-control mt-3">
                                    <label className="label">
                                        <span className="label-text text-[.875rem] font-medium">Username*</span>
                                    </label>
                                    <input type='text' placeholder='your username' className='input-customize' {...register('username', {
                                        required: {
                                            value: true,
                                            message: 'username reQuired'
                                        }

                                    }
                                    )} />

                                </div>

                                {/* password  */}
                                <div className="form-control mt-3">
                                    <label className="label">
                                        <span className="label-text text-[.875rem] font-medium">Password*</span>
                                    </label>
                                    <input type='password' placeholder='your password' className='input-customize' {...register('password', {
                                        required: {
                                            value: true,
                                            message: 'password is  reQuired'
                                        }

                                    }
                                    )} />

                                </div>


                                <button type="submit" className='w-full mt-4 rounded-[4px] bg-[#5d5fef] h-[40px] text-[#fff]'>Login</button>
                            </form>

                        </div>
                    </div>

                    {/* animation section    */}
                    <div className='w-[50%]   h-full hidden md:flex justify-center items-center'>
                        <div className='w-fit mx-auto'>
                            <img src={imagere} alt="" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;