import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div className='NavBar'>
      <div>
        <a href="/">
          <img className="navlogo" src="../logo192.png" alt="logo"></img>
        </a>
      </div>
      <div className="links">
        <Link to='/paintlist' className='NavBar-link'>PAINTS</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/addpaint' className='NavBar-link'>ADD</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/profile' className='NavBar-link'>PROFILE</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOGOUT</Link>
      </div>
    </div>
    :
    <div className='NavBar'>
      <div>
        <a href="/">
          <img className="navlogo" src="../logo192.png" alt="logo"></img>
        </a>
      </div>
      <div className="links">
        <Link to='/login' className='NavBar-link'>SIGN IN</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
      </div>
    </div>
  return (
    <div className="nav-container">
      {nav}
    </div>
  )
}

export default NavBar;
