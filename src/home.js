import React from 'react'
import './home.css'
import {Link} from "react-router-dom";
import './login';
function App() {
  return (
    <div className='body'>
      <h1 className="h1">REGISTER</h1>
      <div className="card">
        <form>
<h4>User Name:</h4>
<input type="text" className="username" placeholder='Enter id'required>
</input>

<h4>Email Id:</h4>
<input type="text" className="username" placeholder='Enter branch name'required>
</input>
<h4>Create New Password:</h4> 
<input type="password" className="username" placeholder="Enter new required">
</input> 
 
          <br></br><br></br><br></br>
          <div className="center">
          <a><Link to='/login'><button className="btn">Register</button></Link></a>
          </div>
          <a><Link to='/login'><center>
            <span class="psw">Already registed?</span></center></Link></a>
        </form>
      </div>
</div> 
);
}
export default App;
