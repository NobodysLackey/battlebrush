import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
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
    :
    <div>
      <Link to='/login' className='NavBar-link'>Login</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>Sign up</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;
