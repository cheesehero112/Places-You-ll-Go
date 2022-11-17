import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <div className='container'>
        <Link to='/'>
          <h1 className='nav-title'>Places You'll Go</h1>
        </Link>
      </div>
    </header>
  );
};

export default Nav;
