import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
