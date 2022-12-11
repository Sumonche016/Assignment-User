import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


import Home from './Components/Home/Home';
import { AuthContext } from './Components/Hooks/AuthContext';
import Login from './Components/Login/Login';
import Header from './Components/Shared/Header';



const App = () => {

  const [user, setUser] = useState(false)

  useEffect(() => {
    // check auth
    const token = localStorage.getItem("isLogged");
    if (token === 'login') {
      setUser(true)
    } else {
      setUser(false)
    }
  }, []);



  return (
    <div className='bg-[#E0E5F8]'>

      <AuthContext.Provider value={{ user, setUser }}>
        <Header></Header>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>

      </AuthContext.Provider>
      <ToastContainer></ToastContainer>

    </div>
  );
};

export default App;