
import React, { useRef, useState } from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import './Signin.css'
import { auth } from '../../firebase/config'
import { useNavigate } from 'react-router-dom'


function Signin() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  let Navigate = useNavigate()

  const handleSignup = (e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
      const user = userCredential.user
      alert("You have signed up successfully")
    }).catch((err)=>{
      console.log(err.message);
    })
  }

  const handleSignin = (e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value).then((userCredential)=>{
      console.log(userCredential);
      const user = userCredential.user
      Navigate('/homepage')
    }).catch((err)=>{
      alert(err.message);
    })
  }

  return (
    <div className='signin'>
      <form>
          <h1>Sign In</h1>
          <input type="email" ref={emailRef} onChange={(e)=>setEmail(e.target.value)} placeholder='Email or phone number' />
          <input type="password" ref={passwordRef} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
          <button type='submit' onClick={handleSignin}>Sign In</button> 
          <h4>
              <span className='signin-gray'>New to Netflix? </span>
             <span className='signup-link' onClick={handleSignup}>Sign up now.</span>
          </h4>
          <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='link'> Learn more.</span></p> 
      </form> 
    </div>
  )
}

export default Signin
