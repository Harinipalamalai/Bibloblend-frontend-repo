import React from 'react'
import './Login.css'
import './homepage'
import {Link} from "react-router-dom";
function Login() {
  return (
    <div className='body1'>
        <div className="img"><img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80" width="750px" height="755px" alt="img"/>
        </div>
        <div className='box1a'>
      <div className="carda">
        <form>
        <h1>SIGN IN</h1>
<h4>User Name :
<input type="text" className="username" placeholder='Enter User name' height="50">
</input>
</h4>
<h4>Password :
<input type="password" className="username" placeholder="Enter password" >
</input>
</h4>  
<br></br>
 <div className="centera">
 <a><Link to='/homepage'><button className="btna">LOGIN</button></Link></a>
          </div>
         </form>
      </div> 
      </div>
</div>
  );
}

export default Login;
