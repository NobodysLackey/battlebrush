import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div className='NavBar'>
      <div className="logo">
        <a href="/">
          <img className="navlogo" src="../logo192.png" alt="logo"></img>
        </a>
      </div>
      <div className="links">
        <Link to='/' className='NavBar-link'>Home</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/paintlist' className='NavBar-link'>Paints</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/addpaint' className='NavBar-link'>Add</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/profile' className='NavBar-link'>Profile</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='' className='NavBar-link' onClick={props.handleLogout}>Logout</Link>
      </div>
    </div>
    :
    <div className='NavBar'>
      <div className="logo">
        <img src="./logo192.png" alt="logo"></img>
      </div>
      <div className="links">
        <Link to='/login' className='NavBar-link'>Login</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup' className='NavBar-link'>Sign up</Link>
      </div>;
    </div>
  return (
    <div className="nav-container">
      {nav}
    </div>
  );
};

export default NavBar;
