import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SingleContacts from './SingleContacts';

const Home = () => {
    const navigate = useNavigate()

    const [contacts, setContacts] = useState([])



    useEffect(() => {
        // check auth
        const token = localStorage.getItem("isLogged");
        if (token !== 'login') {
            navigate('/login');
        }


        const getUsers = async () => {
            let response = await axios.get('https://randomuser.me/api/?results=500')
            setContacts(response.data.results)
        }


        getUsers()

    }, []);




    return (
        <div className='h-[100vh] flex justify-center pt-20'>
            <div className='md:w-[70%] w-full mx-auto'>




                <div className='flex justify-between mb-6'>
                    <h1 className='w-[30%] font-semibold  text-[17px]'>User</h1>
                    <div className='flex w-[40%] justify-between'>
                        <h1 className='font-semibold text-[17px] md:inline-block hidden'>Location</h1>
                        <h1 className='font-semibold text-[17px] '>Country</h1>
                        <h1 className='font-semibold text-[17px] md:inline-block hidden'>Post Code</h1>
                    </div>
                    <h1 className='w-[30%] text-center font-semibold text-[17px]'>Gender</h1>
                </div>


                {
                    contacts.slice(0, 5).map(c => <SingleContacts contacts={c}></SingleContacts>)
                }

            </div>

        </div>
    );
};

export default Home;