import React from "react";
import "./signin.css";
import { Link } from 'react-router-dom';
const Login = () =>{
    return(
 <>
 <div class="container">
 <div class="wrapper">
 <div class="title">
 Login Form</div>
 <form action="#">
   <div class="field">
     <input type="text" required></input>
     <label>Email Address</label>
   </div>
 <div class="field">
     <input type="password" required></input>
     <label>Password</label>
   </div>
 <div class="content">
     <div class="checkbox">
       <input type="checkbox" id="remember-me"></input>
       <label for="remember-me">Remember me</label>
     </div>
 <div class="pass-link">
   <Link to='pass'>
   <a herf="">Forgot Password?</a>
 </Link>
 </div>
 </div>
 <div class="field">
 <Link to='Dashboard'>
     <input type="submit" value="Login"></input>
     </Link>
   </div>
 <div class="signup-link">
 Not a member?
 <Link to='Register'> 
 <a href="">Signup now</a>
 </Link>
 </div>
 </form>
 
 </div>
 </div>
     
       </>
    )
 }
 export default Login