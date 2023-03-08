import React from 'react';
import './post.css';
import './delete';
import './input';
import './puts';
import {Link} from "react-router-dom";
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
    <a href="#"><img src="https://www.writersdigest.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTcxMDY1ODEzNjY3MzU3OTU3/image-placeholder-title.jpg"width="150" height="200"></img></a>
    
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
    <a><Link to='/input'><button onclick>Add To Library</button></Link></a>
    </div>
    <br></br>
    <div className='click'>
    <a><Link to='/puts'><button onclick>Update Library</button></Link></a>
    </div>
    <br></br>
    <div className='click'>
    <a><Link to='/delete'><button onclick>Remove From Library</button></Link></a>
    </div>
  </div>
  );
}

export default Navbar;

