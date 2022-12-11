import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()


    useEffect(() => {
        // check auth
        const token = localStorage.getItem("isLogged");
        if (token !== 'login') {
            navigate('/login');
        }
    }, []);




    return (
        <div>
            <h1>This is from home</h1>
        </div>
    );
};

export default Home;