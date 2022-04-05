import React, { useState } from 'react'
import Signin from '../Signin/Signin'
import './Login.css'


function Login() {
  const [signIn,setSignIn] = useState(false)
  return (
    <div className='login'>
      <div className="logo">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
      </div>
      <div className="btn">
       <button onClick={()=>setSignIn(true)}>Sign In</button>
       </div>
        <div className="login-gradient"/>
        <div className="login-body">
     { signIn ? ( <Signin/> ) : 
     (
       <>
        <h1>Unlimited movies, TV shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

     <div className="login-input">
       <form>
         <input type="email" placeholder='Email address' />
         <button className='login-btn' onClick={()=>setSignIn(true)}>Get Started</button>
       </form>
     </div>
     </>)}
        
       </div>
    </div>
  )
}

export default Login

