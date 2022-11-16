import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <div className='countainer'>
        <Link to='/'>
          <h1>Places You'll Go</h1>
        </Link>
      </div>
    </header>
  );
};

export default Nav;
