import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Mainpage from '../pages/Mainpage';
import Nav from './Nav';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Nav />
        <div>
          <Routes>
            <Route
              path='/login'
              element={<Login />}
            ></Route>
            <Route
              path='/'
              element={<Mainpage />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
