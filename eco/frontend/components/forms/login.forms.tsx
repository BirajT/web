"use Client"
import React from 'react'

const LoginForms = () => {
  return (
    <div>
    <form action="">

      {/* email inputs */}
      <div>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' placeholder='johndoe@gmail.com'/>
      </div>

      {/* password input */}
      <div>
        <label htmlFor="password">Password</label>
        <input id='password' type='password' placeholder='password'/>
      </div>

      <button>Login</button>
    </form>

    </div>
  )
}

export default LoginForms
