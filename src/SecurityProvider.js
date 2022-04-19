import React, { useState } from "react"
import SecurityContext from "./SecurityContext"

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <SecurityContext.Provider
      value={{
        login: (username, password) => {
          if (username === "admin" && password === "admin") {
            setLoggedIn(true)
          }
        },
        logout: () => setLoggedIn(false),
        loggedIn,
      }}
    >
      {props.children}
    </SecurityContext.Provider>
  )
}
