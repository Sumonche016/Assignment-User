import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Shared/Header';



const App = () => {
  return (
    <div className='bg-[#E0E5F8]'>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;