import React, { useState } from "react"
import useSecurity from "./useSecurity"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { login } = useSecurity()

  return (
    <>
      <h1>Login</h1>

      <label htmlFor='username'>Username:</label>
      <input
        id='username'
        name='username'
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor='password'>Password:</label>
      <input
        id='password'
        name='password'
        type='text'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button onClick={() => login(username, password)}>Login</button>
    </>
  )
}

export default Login
