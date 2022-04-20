import React from "react"
import useSecurity from "./useSecurity"

const Logout = () => {
  const { logout } = useSecurity()
  return (
    <button className='btn' onClick={logout}>
      Logout
    </button>
  )
}

export default Logout
