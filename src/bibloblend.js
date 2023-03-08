import * as React from "react";
import "./style.css";
import Line from "./Line.png";
import Logo from"./Logo.png";
import {Link} from "react-router-dom";
const App = () => {
  return (
    <div className="All">
     <span className="Title">BIBLOBLEND</span>
     <a><Link to='/home'><img className="Logo" src={Logo}/></Link></a>
      <div className="container">
        <span>Just Do Books</span>
       <img className="Line" src={Line}/>
      </div>
    </div>
  );
};
export default App;
