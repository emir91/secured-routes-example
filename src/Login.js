import React, { useState } from "react"
import useSecurity from "./useSecurity"
import "./assets/styles/login.css"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { login } = useSecurity()

  return (
    <div className='wrapper'>
      <div className='form-wrapper'>
        <h1 className='text-center'>Login</h1>
        <form>
          <div className='form-control'>
            <label htmlFor='username'>Username:</label>
            <input
              id='username'
              name='username'
              className='form-field'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='password'>Password:</label>
            <input
              id='password'
              className='form-field'
              name='password'
              type='text'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='form-control text-center'>
            <button className='btn' onClick={() => login(username, password)}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
