import React from 'react';
import './header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className='header'>
          <img src={logo} alt="" />
          <div>
          <a href="/order">order</a>
          <a href="/review">review</a>
          <a href="/inventory">Manage inventory</a>
          <a href="/login">login</a>
          </div>
        </div>
    );
};

export default Header;