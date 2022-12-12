import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import SingleContacts from './SingleContacts';

const Home = () => {
    const navigate = useNavigate()

    const [contacts, setContacts] = useState([])
    const [singleData, setSingleData] = useState([])
    const [firstData, setFirstData] = useState(0)
    const [lastData, setlastData] = useState(10)


    useEffect(() => {
        // check auth
        const token = localStorage.getItem("isLogged");
        if (token !== 'login') {
            navigate('/login');
        }

        let getUsers = async () => {
            let response = await axios.get('https://randomuser.me/api/?results=500')
            setContacts(response.data.results)
            setSingleData(contacts.slice(firstData, lastData))
        }


        getUsers()

    }, []);




    const fetchMoreData = () => {


        let getUsers = async () => {

            await setSingleData(singleData.concat(contacts.slice(firstData + 10, lastData + 10)))

            setFirstData(firstData + 10)
            setlastData(lastData + 10)
        }


        setTimeout(() => {
            getUsers()
        }, 1000);
    };

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

                <InfiniteScroll
                    dataLength={singleData.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >


                    {
                        singleData.map((c, index) => <SingleContacts key={index} contacts={c}></SingleContacts>)
                    }
                </InfiniteScroll>
            </div>

        </div>
    );
};

export default Home;