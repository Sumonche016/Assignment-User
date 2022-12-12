import React, { useContext, useState } from 'react';
import hamburger from '../Images/menu.png'
import logo from '../Images/Autocomm logo.svg';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Header.css'

import { FaTimes } from 'react-icons/fa'
import { AuthContext } from '../Hooks/AuthContext';
import { useEffect } from 'react';


const Header = () => {
    const [isopen, setIsopen] = useState(false)

    const { user, setUser } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleHamburger = () => {
        setIsopen(!isopen)
    }





    const logout = () => {
        localStorage.removeItem("isLogged");
        navigate('/login')
        setUser(false)
    }


    return (
        <div>
            <div className=' bg-[#ffffff]   header-shadow py-4'>
                <div className='flex justify-between items-center w-[90%] mx-auto'>
                    <div className='flex items-center justify-center'>
                        <img src={logo} className='ml-2 h-[3rem] w-[3rem]' alt="logo of auto-commm" />
                        <h1 className='text-[20px] md:text-[25px] font-semibold ml-[12px]'>User-Scroll</h1>
                    </div>



                    <div>
                        <img onClick={handleHamburger} src={hamburger} className='w-[40px] mr-[10px] md:m-0 cursor-pointer lg:hidden' alt="" />
                        <div className=''>
                            <ul className={`absolute p-8 ${isopen ? 'open' : 'close'}  sidebar top-[5rem] md:hidden bg-[#ffffff]`}>
                                <FaTimes onClick={() => setIsopen(false)} className='cursor-pointer absolute top-[1rem] right-[.8rem]' />



                                {

                                    user && <div>
                                        <li onClick={() => setIsopen(false)} className='  mb-[10px]'>
                                            <div onClick={logout} className='mr-5 header-a-typography cursor-pointer' >
                                                Logout
                                            </div>
                                        </li>
                                    </div>
                                }



                            </ul>
                        </div>
                    </div>



                    <div className=' text-xl hidden lg:flex w-[50%] justify-end'>
                        <ul className='lg:flex'>



                            {
                                user ? <li onClick={logout}><Link to='/login'>Logout</Link></li> :
                                    <>
                                        <li><Link to='/login'>Login</Link></li>
                                        <li className='mr-5'><Link to='/'>Home</Link></li>
                                    </>
                            }



                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;