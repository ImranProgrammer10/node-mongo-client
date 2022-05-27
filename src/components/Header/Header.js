import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div class="header">
 
  <div class="header-right">
  <NavLink to="/home"> <a >Home</a></NavLink>
  <NavLink to="/addUser"> <a>AddUser</a></NavLink>
  <NavLink to="/deleteUser"> <a>DeleteUser</a></NavLink>


    
  </div>
</div>
    );
};

export default Header;