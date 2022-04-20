import React from "react"
import { Link } from "react-router-dom"

const Public = () => {
  return (
    <div className='wrapper'>
      <h1>Public page</h1>

      <p>Anyone have access here.</p>

      <Link to='/'>Back to Home</Link>
    </div>
  )
}

export default Public
