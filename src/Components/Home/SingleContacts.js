import React from 'react';
import Skeleton from 'react-loading-skeleton'

const SingleContacts = ({ contacts }) => {

    console.log(contacts)
    const { name: { first, last }, picture: { thumbnail }, location: { city, country, postcode }, phone, gender, email } = contacts

    return (

        <div className='flex justify-between bg-white my-4 text-center px-2 py-5 rounded-[5px] shadow-bg'>
            <div className='flex w-[30%] items-center leading-[20px]'>
                <div className='flex items-center'>
                    <img className='rounded-full w-[45px] h-[45px] hidden md:inline-block' src={thumbnail} alt="" />
                </div>
                <div className='ml-2'>

                    <h1 className=' text-start text-[13px] md:text-[17px] font-semibold text-black'>{`${first}  ${last}`}</h1>
                    <span className='lowercase text-[15px] text-start display-inherit text-[#6c757d] '>@{last}</span>

                </div>
            </div>
            <div className='flex w-[40%] justify-between'>
                <h1 className='text-center md:inline-block hidden'>{city}</h1>
                <h1 className='text-center'>{country}</h1>
                <h1 className='text-center md:inline-block hidden'>{postcode}</h1>
            </div>
            <h1 className='w-[30%]'>{gender}</h1>


        </div>

    );
};

export default SingleContacts;