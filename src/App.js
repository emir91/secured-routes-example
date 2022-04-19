import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./Home"
import Private1 from "./Private1"
import Private2 from "./Private2"
import Public from "./Public"
import SecurityProvider from "./SecurityProvider"
import SecureRoute from "./SecureRoute"

const App = () => {
  return (
    <BrowserRouter>
      <SecurityProvider>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <SecureRoute path='/private1'>
            <Private1 />
          </SecureRoute>
          <SecureRoute path='/private2'>
            <Private2 />
          </SecureRoute>
          <Route path='/public'>
            <Public />
          </Route>
        </Switch>
      </SecurityProvider>
    </BrowserRouter>
  )
}

export default App
