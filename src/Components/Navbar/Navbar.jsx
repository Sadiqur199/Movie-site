import React from 'react';
import  './Navbar.css'
const Navbar = () => {
  return (
    <div className='header'>
        <div className='d-flex'>
        <img className='rounded' src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW92aWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <p className='text-white ms-3 mt-2 fs-5'>Movie Site</p>
        </div>
      <div>
        <a href="/">Home</a>
        <a href="/order">Blog</a>
        <a href="/inventory">About</a>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Navbar;