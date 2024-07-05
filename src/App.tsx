import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import TEST1 from './Pages/TEST1';
import TEST2 from './Pages/TEST2';
import TEST3 from './Pages/TEST3';
import Login from './Pages/login/Login';

function App() {
  return (
    <div className="App">
      <div className='font-red'></div>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/Pages/TEST1' element={<TEST1 />}></Route>
          <Route path='/Pages/TEST2' element={<TEST2 />}></Route>
          <Route path='/Pages/TEST3' element={<TEST3 />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
