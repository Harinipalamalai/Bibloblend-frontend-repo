import React from 'react';
import './posts.css';
function Navbar() {
  return (
    <div>
   <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Libraries</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <div className='imgs'>
    <img src="https://miblart.com/wp-content/uploads/2020/01/crime-and-mystery-cover-scaled-1.jpeg"width="160" height="220"></img>
    <div className='text1'>
    <div className='text'>
      <p>
      Harry has been burdened with a dark, dangerous and seemingly impossible task: that of locating and destroying Voldemort's remaining Horcruxes.<br></br> Never has Harry felt so alone, or faced a future so full of shadows. <br></br>But Harry must somehow find within himself the strength to complete the task he has been given. He must leave the warmth, safety and companionship of The Burrow and follow without fear or hesitation the inexorable path laid out for him...

In this final, seventh installment of the Harry Potter series, J.K. <br></br>Rowling unveils in spectacular fashion the answers to the many questions that have been so eagerly awaited.
      </p>
    </div>
    </div>
    </div>
    <div className='click'>
    <button onclick>Add To Library</button>
    </div>
    <br></br>
    <div className='click'>
    <button onclick>Shop Now</button>
    </div>
  </div>
  );
}

export default Navbar;

