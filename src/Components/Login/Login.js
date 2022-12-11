import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Hooks/AuthContext';
import imagere from '../Images/15-min_prev_ui.png';
import './Login.css'

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate()
    const { setUser } = useContext(AuthContext)
    const onSubmit = data => {
        const { username, password } = data
        for (let key in data) {

            if (!data[key]) {
                toast.error('fill all the field')
                return
            }
        }

        if (username === 'foo' && password === 'bar') {
            setUser(true)
            window.localStorage.setItem('isLogged', 'login');
            navigate('/')


        } else {
            toast.error('wrong username or password')

        }

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
                                    <input type='text' placeholder='your username' className='input-customize' {...register('username'
                                    )} />

                                </div>

                                {/* password  */}
                                <div className="form-control mt-3">
                                    <label className="label">
                                        <span className="label-text text-[.875rem] font-medium">Password*</span>
                                    </label>
                                    <input type='password' placeholder='your password' className='input-customize' {...register('password'
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