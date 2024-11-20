import React from 'react'
import './CSS/LoginRegister.css'

const LoginRegister = () => {
  return (
    <div className="loginregister">
      <div className="loginregister-container">
        <h1>Sign Up</h1>
        <div className="loginregister-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginregister-login'>Already have an account? <span>Login here</span></p>
        <div className="loginregister-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginRegister;